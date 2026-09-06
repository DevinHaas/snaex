import { expect, test } from '@playwright/test';

test('navigation works by keyboard and native anchors without JavaScript', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
  await expect(page.locator('[data-no-js-marker]')).toHaveCount(1);

  const sections = [
    ['hero', 'Gute Snacks gehören näher an den Alltag.'],
    ['produkte', 'Eine Auswahl, die mehr kann als satt machen.'],
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
