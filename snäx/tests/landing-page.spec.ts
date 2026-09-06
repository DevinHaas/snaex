import { expect, test } from '@playwright/test';

test('navigation works by keyboard and native anchors without JavaScript', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
  await expect(page.locator('[data-no-js-marker]')).toHaveCount(1);

  const sections = [
    ['hero', 'Der Automat, der bessere Pausen möglich macht.'],
    ['produkte', 'Was passt heute zu deiner Pause?'],
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
  await expect(page.getByRole('link', { name: 'Sortiment entdecken' })).toBeFocused();

  const destinations = [
    ['Produkte', 'produkte'],
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

  await page.getByRole('link', { name: 'Snäx für deinen Standort' }).click();
  await expect(page).toHaveURL(/#kontakt$/);
  await expect(page.locator('#kontakt')).toBeInViewport();
});
