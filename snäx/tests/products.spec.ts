import { expect, test } from '@playwright/test';

test('shows the category label on every catalog product', async ({ page }) => {
  await page.goto('/produkte/');

  for (const group of await page.locator('[data-catalog-group]').all()) {
    const category = (await group.getByRole('heading', { level: 2 }).textContent())?.trim() ?? '';
    const products = group.locator('[data-catalog-item]');
    const labels = products.locator('.product-category');
    const symbols = labels.locator('[data-category-symbol]');
    const productCount = await products.count();

    await expect(labels).toHaveCount(productCount);
    await expect(labels).toHaveText(Array(productCount).fill(category));
    await expect(symbols).toHaveCount(productCount);
  }
});

test('opens the full assortment and filters its four categories', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Ganzes Sortiment durchsuchen' }).click();
  await expect(page).toHaveURL(/\/produkte\/$/);
  await expect(page.getByRole('heading', { name: 'Finde deinen nächsten Snäx.' })).toBeVisible();
  await expect(page.locator('[data-catalog-group]')).toHaveCount(4);
  await expect(page.locator('[data-catalog-item]')).toHaveCount(23);
  await expect(page.locator('[data-catalog-item] .catalog-packshot')).toHaveCount(23);

  if (testInfo.project.name === 'chromium-no-js') return;

  const search = page.getByRole('searchbox', { name: 'Produkte durchsuchen' });
  const searchBox = () => search.evaluate((element) => {
    const { x, y, width, height } = element.getBoundingClientRect();
    return { x, y: y + window.scrollY, width, height };
  });
  const initialSearchBox = await searchBox();

  if ((page.viewportSize()?.width ?? 0) > 672) {
    const filterRows = await page.locator('[data-category-filter]').evaluateAll((buttons) => (
      new Set(buttons.map((button) => button.getBoundingClientRect().top)).size
    ));
    expect(filterRows).toBe(1);
  }

  await search.fill('Vitamin Well');
  await expect(page.locator('[data-catalog-item]:visible')).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'Vitamin Well Zero Pineapple' })).toBeVisible();

  await search.clear();
  await page.getByRole('button', { name: /^Energy/ }).click();
  await expect(page.locator('[data-catalog-item]:visible')).toHaveCount(6);
  await expect(page.getByRole('heading', { name: 'DAR-VIDA Nature' })).toBeVisible();

  await page.getByRole('button', { name: /^Alle/ }).click();
  await expect(page.locator('[data-catalog-item]:visible')).toHaveCount(23);
  expect(await searchBox()).toEqual(initialSearchBox);
});
