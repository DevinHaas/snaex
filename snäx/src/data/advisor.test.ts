import { describe, expect, test } from 'bun:test';

import { recommendSnacks, type AdvisorProfile } from './advisor';

const profile: AdvisorProfile = {
  ageInScope: true,
  allergies: ['none'],
  diet: 'omnivore',
  goal: 'balanced',
  occasion: 'everyday',
  taste: 'savoury',
  drink: 'either',
};

describe('snack advisor', () => {
  test('returns the strongest matches first', () => {
    const result = recommendSnacks(profile);
    expect(result.state).toBe('ranked');
    expect(result.recommendations.map(({ slug }) => slug)).toEqual([
      'darvida-nature',
      'alpahirt-bergsalsiz',
      'kaegi-chiefs-protein-wafer',
      'vitamin-well-zero-pineapple',
    ]);
    expect(result.recommendations.map(({ score }) => score).toSorted((a, b) => b - a)).toEqual(
      result.recommendations.map(({ score }) => score),
    );
    expect(result.recommendations.every(({ score }) => score >= 20 && score <= 96)).toBe(true);
  });

  test('filters incompatible products without suppressing the remaining matches', () => {
    const result = recommendSnacks({ ...profile, diet: 'vegan' });
    expect(result.recommendations.map(({ slug }) => slug)).toEqual(['darvida-nature']);
  });
});
