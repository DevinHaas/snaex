import type { ImageMetadata } from 'astro';

import alpahirtBergsalsiz from '../assets/products/alpahirt-bergsalsiz.webp';
import darvidaNature from '../assets/products/darvida-nature.webp';
import kaegiChiefsProteinWafer from '../assets/products/kaegi-chiefs-protein-wafer.webp';
import vitaminWellZeroPineapple from '../assets/products/vitamin-well-zero-pineapple.webp';

export const productCategories = ['protein', 'snack', 'low-carb', 'getraenk'] as const;
export type ProductCategory = (typeof productCategories)[number];
export type ProductStatus = 'candidate' | 'approved' | 'published';

export const productCategoryLabels: Record<ProductCategory, string> = {
  protein: 'Protein',
  snack: 'Energy',
  'low-carb': 'Healthy Fats',
  getraenk: 'Hydration',
};

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  brandCountry: string;
  producerCountry: string;
  productionCountry: string;
  ingredientsSummary: string;
  factSourceUrl: string;
  originSourceUrl: string;
  nutritionClaims: Array<{ label: string; sourceUrl: string }>;
  swissMarketSignals: Array<{ label: string; sourceUrl: string }>;
  indicativePrice?: { amountChf: number; sourceUrl: string; checkedAt: string };
  image: ImageMetadata;
  imageAlt: string;
  imageSourceUrl: string;
  imageOwner: string;
  imageUsage: 'approved' | 'review-needed';
}

export const products: Product[] = [
  {
    slug: 'kaegi-chiefs-protein-wafer',
    name: 'Kägi x Chiefs Protein Wafer',
    category: 'protein',
    status: 'published',
    brandCountry: 'CH',
    producerCountry: 'CH',
    productionCountry: 'CH',
    ingredientsSummary: 'Knusprige Schokoladenwaffel mit Milch- und Molkenprotein.',
    factSourceUrl: 'https://chiefs.food/de/collections/protein-wafer',
    originSourceUrl: 'https://www.kaegi.com/ch-de/ueber-uns',
    nutritionClaims: [
      {
        label: '13 g Protein pro Packung',
        sourceUrl: 'https://chiefs.food/de/collections/protein-wafer',
      },
      {
        label: 'Ohne Zuckerzusatz',
        sourceUrl: 'https://chiefs.food/de/collections/protein-wafer',
      },
    ],
    swissMarketSignals: [
      {
        label: 'Schweizer Chiefs-Onlinesortiment',
        sourceUrl: 'https://chiefs.food/de/collections/protein-wafer',
      },
      {
        label: 'Schweizer Fachhandel-Sortiment',
        sourceUrl:
          'https://swissmade.direct/shop/swiss-food-and-drink/biscuits/chiefs-protein-wafer-classic-choco-3x50g-kaegi/',
      },
    ],
    image: kaegiChiefsProteinWafer,
    imageAlt: 'Drei Packungen Kägi x Chiefs Protein Wafer Classic Choco',
    imageSourceUrl:
      'https://chiefs.food/cdn/shop/files/Wafer_Packshots_Webshop_Trio_Wafer.png?v=1785497497&width=1200',
    imageOwner: 'Chiefs / Kägi',
    imageUsage: 'approved',
  },
  {
    slug: 'vitamin-well-zero-pineapple',
    name: 'Vitamin Well Zero Pineapple',
    category: 'getraenk',
    status: 'published',
    brandCountry: 'SE',
    producerCountry: 'SE',
    productionCountry: 'SE',
    ingredientsSummary:
      'Zuckerfreies, stilles Erfrischungsgetränk mit Ananas- und Grapefruitgeschmack, Vitaminen, Mineralstoffen und Süssungsmitteln.',
    factSourceUrl:
      'https://www.coop.ch/de/lebensmittel/getraenke/soft-drinks/sport-energydrinks/sportgetraenke/vitamin-well-pineapple-zero/p/7268439',
    originSourceUrl: 'https://www.vitaminwell.com/about/',
    nutritionClaims: [
      {
        label: '0 g Zucker pro 100 ml',
        sourceUrl: 'https://www.vitaminwell.com/product/zero-pineapple/',
      },
    ],
    swissMarketSignals: [
      {
        label: 'Schweizer Produktinformationen bei Vitamin Well',
        sourceUrl: 'https://www.vitaminwell.com/product/zero-pineapple/',
      },
      {
        label: 'Coop-Sortiment mit Kundenbewertungen',
        sourceUrl:
          'https://www.coop.ch/de/lebensmittel/getraenke/soft-drinks/sport-energydrinks/sportgetraenke/vitamin-well-pineapple-zero/p/7268439',
      },
    ],
    image: vitaminWellZeroPineapple,
    imageAlt: 'Flasche Vitamin Well Zero Pineapple',
    imageSourceUrl:
      'https://media.meds.se/meds/images/image-png-2024-04-23-080955859/0/0/auto/c/7340222800044-png.png',
    imageOwner: 'Vitamin Well AB',
    imageUsage: 'approved',
  },
  {
    slug: 'alpahirt-bergsalsiz',
    name: 'Alpahirt Bergsalsiz',
    category: 'low-carb',
    status: 'published',
    brandCountry: 'CH',
    producerCountry: 'CH',
    productionCountry: 'CH',
    ingredientsSummary: 'Berg-Rindfleisch, Alpensalz und Gewürze, ohne Zusatzstoffe.',
    factSourceUrl: 'https://alpahirt.ch/products/bergsalsiz',
    originSourceUrl: 'https://alpahirt.ch/pages/wert-landwirte-regionalitat',
    nutritionClaims: [
      {
        label: '0 g Kohlenhydrate pro 100 g',
        sourceUrl: 'https://alpahirt.ch/products/bergsalsiz',
      },
      {
        label: '41 g Eiweiss pro 100 g',
        sourceUrl: 'https://alpahirt.ch/products/bergsalsiz',
      },
    ],
    swissMarketSignals: [
      {
        label: 'Direktangebot aus Graubünden',
        sourceUrl: 'https://alpahirt.ch/products/bergsalsiz',
      },
      {
        label: '58 verifizierte Produktbewertungen',
        sourceUrl: 'https://alpahirt.ch/products/bergsalsiz',
      },
    ],
    image: alpahirtBergsalsiz,
    imageAlt: 'Aufgeschnittener Alpahirt Bergsalsiz auf transparentem Hintergrund',
    imageSourceUrl:
      'https://alpahirt.ch/cdn/shop/files/Alpahirtklein_1800x1800.png?v=1745914553',
    imageOwner: 'Alpahirt AG',
    imageUsage: 'approved',
  },
  {
    slug: 'darvida-nature',
    name: 'DAR-VIDA Nature',
    category: 'snack',
    status: 'published',
    brandCountry: 'CH',
    producerCountry: 'CH',
    productionCountry: 'CH',
    ingredientsSummary: 'Vollkorncracker mit 89 % Weizenvollkornschrot und Schweizer Rapsöl.',
    factSourceUrl: 'https://darvida.ch/de/produkte/dar-vida-nature/',
    originSourceUrl: 'https://darvida.ch/de/ueber-dar-vida/wie-ein-dar-vida-entsteht/',
    nutritionClaims: [
      {
        label: 'Vegan und 100 % Vollkorn',
        sourceUrl: 'https://darvida.ch/de/produkte/dar-vida-nature/',
      },
      {
        label: '13 g Nahrungsfasern pro 100 g',
        sourceUrl: 'https://darvida.ch/de/produkte/dar-vida-nature/',
      },
    ],
    swissMarketSignals: [
      {
        label: 'Bei Coop gelistet',
        sourceUrl: 'https://www.coop.ch/de/search/?text=darvida',
      },
      {
        label: 'Bei Brack gelistet',
        sourceUrl: 'https://www.brack.ch/hug#dar-vida',
      },
    ],
    image: darvidaNature,
    imageAlt: 'Packung DAR-VIDA Nature Vollkorncracker',
    imageSourceUrl: 'https://darvida.ch/app/uploads/2022/12/DARVIDA_nature.png',
    imageOwner: 'HUG AG / DAR-VIDA',
    imageUsage: 'approved',
  },
];

export const publishedProducts = products.filter((product) => product.status === 'published');

export function getPublicationErrors(selection: Product[] = publishedProducts): string[] {
  const errors: string[] = [];
  const representedCategories = new Set(selection.map((product) => product.category));

  for (const category of productCategories) {
    if (!representedCategories.has(category)) errors.push(`Missing category: ${category}`);
  }

  for (const product of selection) {
    if (product.swissMarketSignals.length < 2) errors.push(`${product.slug}: fewer than two Swiss-market signals`);
    if (product.imageUsage !== 'approved' || !product.imageSourceUrl || !product.imageOwner) {
      errors.push(`${product.slug}: image is not approved and traceable`);
    }
    if (!product.factSourceUrl || !product.originSourceUrl || product.nutritionClaims.some((claim) => !claim.sourceUrl)) {
      errors.push(`${product.slug}: displayed claims are not fully sourced`);
    }
  }

  const swissProduced = selection.filter((product) => product.productionCountry === 'CH').length;
  if (selection.length === 0 || swissProduced / selection.length < 0.75) {
    errors.push('Fewer than 75% of published products are produced in Switzerland');
  }

  return errors;
}

const publicationErrors = getPublicationErrors();
if (publicationErrors.length > 0) {
  throw new Error(`Invalid published assortment:\n${publicationErrors.join('\n')}`);
}
