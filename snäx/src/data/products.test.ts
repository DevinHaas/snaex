import { describe, expect, test } from 'bun:test';

import { catalogProducts } from './catalog';
import {
  getPublicationErrors,
  productCategories,
  publishedProducts,
} from './products';

describe('full product catalog', () => {
  test('contains all 23 current products in the four assortment categories', () => {
    expect(catalogProducts).toHaveLength(23);
    expect(catalogProducts.every((product) => product.image && product.imageAlt.length > 0)).toBe(true);
    expect(Object.fromEntries(productCategories.map((category) => [
      category,
      catalogProducts.filter((product) => product.category === category).length,
    ]))).toEqual({ protein: 6, getraenk: 8, 'low-carb': 3, snack: 6 });
  });
});

describe('published product assortment', () => {
  test('passes every publication gate', () => {
    expect(getPublicationErrors()).toEqual([]);
  });

  test('covers every required category', () => {
    expect(new Set(publishedProducts.map((product) => product.category))).toEqual(
      new Set(productCategories),
    );
  });

  test('keeps evidence, imagery, and locality above the required threshold', () => {
    expect(publishedProducts.every((product) => product.swissMarketSignals.length >= 2)).toBe(true);
    expect(publishedProducts.every((product) => product.imageUsage === 'approved')).toBe(true);
    expect(
      publishedProducts.filter((product) => product.productionCountry === 'CH').length /
        publishedProducts.length,
    ).toBeGreaterThanOrEqual(0.75);
  });
});
