import { expect, test } from '@playwright/test';

test('keeps each step in the viewport and shows scored products with images', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'chromium-no-js', 'Interactive finder requires JavaScript');
  await page.goto('/beratung');

  const actionFits = async (name: string) => {
    const box = await page.getByRole('button', { name }).boundingBox();
    expect(box).not.toBeNull();
    expect((box?.y ?? 0) + (box?.height ?? 0)).toBeLessThanOrEqual(await page.evaluate(() => innerHeight));
    expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBeLessThanOrEqual(
      await page.evaluate(() => innerHeight + 1),
    );
  };

  await page.locator('[name="age"][value="yes"]').check();
  await page.getByLabel('Alles').check();
  await actionFits('Weiter');
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.getByLabel('Etwas trinken').check();
  await actionFits('Weiter');
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.getByLabel('Jetzt, ohne Sport').check();
  await actionFits('Weiter');
  await page.getByRole('button', { name: 'Weiter' }).click();

  await page.locator('[name="taste"][value="either"]').check();
  await page.getByLabel('Still').check();
  await actionFits('Produkte anzeigen');
  await page.getByRole('button', { name: 'Produkte anzeigen' }).click();

  const cards = page.locator('[data-result-product]:visible');
  await expect(cards).toHaveCount(4);
  await expect(cards.locator('img')).toHaveCount(4);
  await expect(cards.locator('.recommendation-category')).toHaveText(['Beverage', 'Snack', 'Protein', 'Low Carb']);
  await expect(cards.locator('.fit-score')).toHaveCount(4);
});

test('uses the simpler filters to remove incompatible products', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'chromium-no-js', 'Interactive finder requires JavaScript');
  await page.goto('/beratung');

  await page.locator('[name="age"][value="yes"]').check();
  await page.getByLabel('Vegan').check();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByLabel('Ausgewogene Pause').check();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByLabel('Jetzt, ohne Sport').check();
  await page.getByRole('button', { name: 'Weiter' }).click();
  await page.getByLabel('Herzhaft').check();
  await page.locator('[name="drink"][value="either"]').check();
  await page.getByRole('button', { name: 'Produkte anzeigen' }).click();

  await expect(page.locator('[data-result-product]:visible')).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'DAR-VIDA Nature' })).toBeVisible();
});
