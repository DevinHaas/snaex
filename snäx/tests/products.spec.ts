import { expect, test } from '@playwright/test';

test('opens the full assortment and filters its four categories', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Ganzes Sortiment durchsuchen' }).click();
  await expect(page).toHaveURL(/\/produkte\/$/);
  await expect(page.getByRole('heading', { name: 'Finde deinen nächsten Snäx.' })).toBeVisible();
  await expect(page.locator('[data-catalog-group]')).toHaveCount(4);
  await expect(page.locator('[data-catalog-item]')).toHaveCount(23);
  await expect(page.locator('[data-catalog-item] img')).toHaveCount(23);

  if (testInfo.project.name === 'chromium-no-js') return;

  await page.getByRole('searchbox', { name: 'Produkte durchsuchen' }).fill('Rivella');
  await expect(page.locator('[data-catalog-item]:visible')).toHaveCount(2);
  await expect(page.getByRole('heading', { name: 'Rivella Rot' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Rivella Blau / Zero' })).toBeVisible();

  await page.getByRole('searchbox', { name: 'Produkte durchsuchen' }).clear();
  await page.getByRole('button', { name: /^Snack/ }).click();
  await expect(page.locator('[data-catalog-item]:visible')).toHaveCount(6);
  await expect(page.getByRole('heading', { name: 'DAR-VIDA Nature' })).toBeVisible();
});
