import { expect, test } from '@playwright/test';

test('navigation works by keyboard and native anchors without JavaScript', async ({ page }, testInfo) => {
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
  if (testInfo.project.name === 'chromium-no-js') {
    await expect(page.locator('[data-no-js-marker]')).toHaveCount(1);
  }

  const sections = [
    ['hero', 'Der Automat, der bessere Pausen möglich macht.'],
    ['produkte', 'Was passt heute zu deiner Pause?'],
    ['kategorien', 'Vier Kategorien. Klar ausgewählt.'],
    ['philosophie', 'Einfach besser snacken.'],
    ['team', 'Persönlich ausgewählt. Persönlich betreut.'],
    ['kontakt', 'Lust auf bessere Pausen?'],
  ] as const;

  await expect(page.locator('main')).toBeVisible();
  for (const [id, heading] of sections) {
    const section = page.locator(`#${id}`);
    await expect(section).toBeVisible();
    await expect(section).toHaveCSS('visibility', 'visible');
    await expect(section).toHaveCSS('opacity', '1');
    await expect(section.getByRole('heading', { name: heading })).toBeVisible();
  }

  await page.keyboard.press('Tab');
  const skipLink = page.getByRole('link', { name: 'Zum Inhalt springen' });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();

  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#inhalt$/);
  await expect(page.locator('main')).toBeFocused();

  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Snack-Finder starten' })).toBeFocused();

  const destinations = [
    ['Produkte', 'produkte'],
    ['Kategorien', 'kategorien'],
    ['Philosophie', 'philosophie'],
    ['Unser Team', 'team'],
    ['Kontakt', 'kontakt'],
  ] as const;

  for (const [label, id] of destinations) {
    await page.goto('/');
    await page.locator('nav').getByRole('link', { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}`)).toBeVisible();
    await expect(page.locator(`#${id}`)).toBeInViewport();
  }
});

test('offer connects the hero, assortment categories, and contact section', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Sortiment entdecken' }).click();
  await expect(page).toHaveURL(/#produkte$/);

  const products = page.locator('[data-product-category]');
  await expect(products).toHaveCount(4);
  for (const category of ['protein', 'getraenk', 'low-carb', 'snack']) {
    await expect(page.locator(`[data-product-category="${category}"]`)).toHaveCount(1);
  }

  await page.getByRole('link', { name: 'Snäx anfragen' }).click();
  await expect(page).toHaveURL(/#kontakt$/);
  await expect(page.locator('#kontakt')).toBeInViewport();
});

test('enhances scrolling with Lenis', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-desktop', 'Desktop motion check only');

  await page.goto('/');
  await expect(page.locator('html')).toHaveClass(/\blenis\b/);
  await page.mouse.wheel(0, 300);
  await expect(page.locator('html')).toHaveClass(/\blenis-smooth\b/);
});

test('contact exposes the approved email without phone or legal links', async ({ page }) => {
  await page.goto('/');

  const contact = page.locator('#kontakt');
  await expect(contact).toHaveAttribute('data-contact-status', 'approved');
  await expect(contact.getByText('info@snax.you')).toBeVisible();
  await expect(contact.getByRole('link', { name: 'Schreib uns' })).toHaveAttribute(
    'href',
    'mailto:info@snax.you',
  );
  await expect(contact.getByRole('link', { name: 'info@snax.you' })).toHaveAttribute(
    'href',
    'mailto:info@snax.you',
  );
  await expect(contact.locator('a[href^="tel:"]')).toHaveCount(0);
  await expect(page.locator('.site-footer a[href^="http"]')).toHaveCount(0);
});

test('content structure exposes ordered sections, landmarks, team alternatives, and footer navigation', async ({
  page,
}) => {
  await page.goto('/');

  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.getByRole('banner')).toHaveCount(1);
  await expect(page.locator('main')).toHaveCount(1);
  await expect(page.locator('footer')).toHaveCount(1);

  const sectionHeadings = page.locator('main > section > h2, main > section header > h2, main > section div > h2');
  await expect(sectionHeadings).toHaveText([
    'Was passt heute zu deiner Pause?',
    'Vier Kategorien. Klar ausgewählt.',
    'Einfach besser snacken.',
    'Persönlich ausgewählt. Persönlich betreut.',
    'Lust auf bessere Pausen?',
  ]);

  await expect(page.getByRole('img', { name: 'Porträt von Devin Hasler' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Porträt von Jan Moser' })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Fußnavigation' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Nach oben' })).toHaveAttribute('href', '#seitenanfang');
});

test('launch layout keeps critical content and actions inside each viewport', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('body')).toBeVisible();
  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);

  for (const sectionId of ['hero', 'produkte', 'kategorien', 'philosophie', 'team', 'kontakt']) {
    await expect(page.locator(`#${sectionId}`)).toBeVisible();
  }

  const contactAction = page.getByRole('link', { name: 'Schreib uns' });
  await expect(contactAction).toBeVisible();
  await expect(contactAction).toHaveAttribute('href', 'mailto:info@snax.you');
});

test('reduced motion retains final content without loading GSAP chunks', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-reduced-motion', 'Reduced-motion project only');

  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'reduced');

  for (const sectionId of ['hero', 'produkte', 'kategorien', 'philosophie', 'team', 'kontakt']) {
    const section = page.locator(`#${sectionId}`);
    await expect(section).toBeVisible();
    await expect(section).toHaveCSS('opacity', '1');
    await expect(section).toHaveCSS('visibility', 'visible');
  }

  const loadedScripts = await page.evaluate(() =>
    performance
      .getEntriesByType('resource')
      .map((entry) => entry.name)
      .filter((name) => name.endsWith('.js')),
  );
  expect(loadedScripts).toHaveLength(1);
});

test('category guide includes the vending-machine system and hydration', async ({ page }) => {
  await page.goto('/');

  const guide = page.locator('#kategorien');
  await expect(guide.locator('[data-assortment-category]')).toHaveCount(4);
  for (const category of ['protein', 'kohlenhydrate', 'gesunde-fette', 'hydration']) {
    await expect(guide.locator(`[data-assortment-category="${category}"]`)).toBeVisible();
  }
  await expect(guide.locator('img')).toHaveCount(4);
});
