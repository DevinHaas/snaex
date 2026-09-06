import { describe, expect, test } from 'bun:test';

import {
  getPublicationErrors,
  productCategories,
  publishedProducts,
} from './products';

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
