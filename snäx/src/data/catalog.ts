import type { ImageMetadata } from 'astro';

import alnaturaMuesliriegel from '../assets/catalog/alnatura-muesliriegel-ahorn-dattel.webp';
import barebellsCaramelChoco from '../assets/catalog/barebells-caramel-choco.webp';
import chiefsCrispyCookie from '../assets/catalog/chiefs-crispy-cookie.webp';
import coopReisMaiswaffelnPaprika from '../assets/catalog/coop-reis-maiswaffeln-paprika.webp';
import cocaColaZero from '../assets/catalog/coca-cola-zero.webp';
import darvidaDinkel from '../assets/catalog/darvida-dinkel.webp';
import darvidaNature from '../assets/catalog/darvida-nature.webp';
import ericsPeanutButterPouch from '../assets/catalog/erics-peanut-butter-pouch.webp';
import farmerNutsSeeds from '../assets/catalog/farmer-nuts-seeds.webp';
import focuswaterShine from '../assets/catalog/focuswater-shine.webp';
import kaegiChiefsProteinWafer from '../assets/catalog/kaegi-chiefs-protein-wafer.webp';
import migrosBioAlpenkraeuterTee from '../assets/catalog/migros-bio-alpenkraeuter-tee-transparent.webp';
import migrosGalaApple from '../assets/catalog/migros-gala-apple.webp';
import naturaplanNutMix from '../assets/catalog/naturaplan-nut-mix.webp';
import nutriAthleticPlantProteinDrink from '../assets/catalog/nutri-athletic-plant-protein-drink.webp';
import powerbarProtein52 from '../assets/catalog/powerbar-protein-52.webp';
import quixPicNic from '../assets/catalog/quix-pic-nic.webp';
import quixUnsalted from '../assets/catalog/quix-unsalted-transparent.webp';
import rivellaBlau from '../assets/catalog/rivella-blau.webp';
import snackFunBeanBites from '../assets/catalog/snack-fun-bean-bites.webp';
import valserPrickelnd from '../assets/catalog/valser-prickelnd.webp';
import valserStill from '../assets/catalog/valser-still.webp';
import vitaminWellZeroPineapple from '../assets/products/vitamin-well-zero-pineapple.webp';
import type { ProductCategory } from './products';

export const requiredProductExamples = {
  protein: ['Proteinriegel', 'Hülsenfrucht-Snacks', 'Proteinshakes'],
  snack: ['Frische Früchte', 'Trockenfrüchte', 'Reis- und Maiswaffeln', 'Vollkorncracker', 'Natürliche Müsliriegel'],
  'low-carb': ['Nüsse & Nussmischungen', 'Samen und Kerne', 'Nussmus'],
  getraenk: ['Wasser', 'Mineralwasser', 'Zuckerfreie Getränke', 'Ungesüsster Tee'],
} as const satisfies Record<ProductCategory, readonly string[]>;

type ProductExample = (typeof requiredProductExamples)[ProductCategory][number];

export interface CatalogProduct {
  name: string;
  unit: string;
  category: ProductCategory;
  image: ImageMetadata;
  imageAlt: string;
  examples?: ProductExample[];
}

export const catalogProducts: CatalogProduct[] = [
  { name: 'Chiefs Protein Bar Crispy Cookie', unit: '55 g', category: 'protein', image: chiefsCrispyCookie, imageAlt: 'Packung Chiefs Protein Bar Crispy Cookie', examples: ['Proteinriegel'] },
  { name: 'Barebells Caramel Choco', unit: '55 g', category: 'protein', image: barebellsCaramelChoco, imageAlt: 'Packung Barebells Caramel Choco Proteinriegel' },
  { name: 'PowerBar Protein+ 52% Chocolate Nut', unit: '50 g', category: 'protein', image: powerbarProtein52, imageAlt: 'Packung PowerBar Protein+ 52% Chocolate Nut' },
  { name: 'Kägi × Chiefs Protein Wafer Classic Choco', unit: '50 g', category: 'protein', image: kaegiChiefsProteinWafer, imageAlt: 'Packungen Kägi × Chiefs Protein Wafer Classic Choco' },
  { name: 'SNACK FUN Bean Bites Meersalz', unit: '80 g', category: 'protein', image: snackFunBeanBites, imageAlt: 'Packung SNACK FUN Bean Bites Meersalz', examples: ['Hülsenfrucht-Snacks'] },
  { name: 'NUTRIATHLETIC Plant Protein Drink Swiss Chocolate', unit: '330 ml Flasche', category: 'protein', image: nutriAthleticPlantProteinDrink, imageAlt: 'Flasche NUTRIATHLETIC Plant Protein Drink Swiss Chocolate', examples: ['Proteinshakes'] },
  { name: 'Valser Still', unit: '500 ml PET-Flasche', category: 'getraenk', image: valserStill, imageAlt: 'Flasche Valser Still Mineralwasser', examples: ['Wasser'] },
  { name: 'Coca-Cola Zero', unit: '500 ml PET-Flasche', category: 'getraenk', image: cocaColaZero, imageAlt: 'Flasche Coca-Cola Zero Zucker', examples: ['Zuckerfreie Getränke'] },
  { name: 'Vitamin Well Zero Pineapple', unit: '500 ml PET-Flasche', category: 'getraenk', image: vitaminWellZeroPineapple, imageAlt: 'Flasche Vitamin Well Zero Pineapple' },
  { name: 'Rivella Blau / Zero', unit: '500 ml PET-Flasche', category: 'getraenk', image: rivellaBlau, imageAlt: 'Flasche Rivella Blau' },
  { name: 'Migros Bio Eistee Schweizer Alpenkräuter', unit: '500 ml PET-Flasche', category: 'getraenk', image: migrosBioAlpenkraeuterTee, imageAlt: 'Flasche Migros Bio Eistee Schweizer Alpenkräuter ohne Zucker', examples: ['Ungesüsster Tee'] },
  { name: 'Valser Prickelnd', unit: '500 ml PET-Flasche', category: 'getraenk', image: valserPrickelnd, imageAlt: 'Flasche Valser Prickelnd Mineralwasser', examples: ['Mineralwasser'] },
  { name: 'FOCUSWATER Shine', unit: '500 ml PET-Flasche', category: 'getraenk', image: focuswaterShine, imageAlt: 'Flasche FOCUSWATER Shine' },
  { name: 'Farmer Nuts & Seeds Kerne, Dattel & Mandel', unit: '30 g Riegel', category: 'low-carb', image: farmerNutsSeeds, imageAlt: 'Packung Farmer Nuts & Seeds Kerne, Dattel und Mandel', examples: ['Samen und Kerne'] },
  { name: 'Coop Naturaplan FSI roasted salted nut mix', unit: '50 g', category: 'low-carb', image: naturaplanNutMix, imageAlt: 'Packung Coop Naturaplan FSI geröstete gesalzene Nussmischung', examples: ['Nüsse & Nussmischungen'] },
  { name: 'Eric’s Squeeze & Eat Peanut Butter', unit: '45 g Beutel', category: 'low-carb', image: ericsPeanutButterPouch, imageAlt: 'Beutel Eric’s Squeeze & Eat Peanut Butter', examples: ['Nussmus'] },
  { name: 'Nectaflor QUIX Nussmischung ungesalzen', unit: '50 g', category: 'low-carb', image: quixUnsalted, imageAlt: 'Packung Nectaflor QUIX Nussmischung ungesalzen' },
  { name: 'DAR-VIDA Nature', unit: '41,6 g Portion', category: 'snack', image: darvidaNature, imageAlt: 'Packung DAR-VIDA Nature', examples: ['Vollkorncracker'] },
  { name: 'Schweizer Gala Apfel', unit: '1 Stück', category: 'snack', image: migrosGalaApple, imageAlt: 'Frischer Schweizer Gala Apfel', examples: ['Frische Früchte'] },
  { name: 'Nectaflor QUIX Pic Nic', unit: '50 g', category: 'snack', image: quixPicNic, imageAlt: 'Packung Nectaflor QUIX Pic Nic mit Trockenfrüchten und Nüssen', examples: ['Trockenfrüchte'] },
  { name: 'DAR-VIDA Dinkel', unit: '41,5 g Portion', category: 'snack', image: darvidaDinkel, imageAlt: 'Packung DAR-VIDA Dinkel Vollkorncracker' },
  { name: 'Coop Reis-Maiswaffeln Paprika', unit: '80 g', category: 'snack', image: coopReisMaiswaffelnPaprika, imageAlt: 'Packung Coop Reis-Maiswaffeln Paprika', examples: ['Reis- und Maiswaffeln'] },
  { name: 'Alnatura Bio Müsliriegel Ahorn-Dattel', unit: '25 g Riegel', category: 'snack', image: alnaturaMuesliriegel, imageAlt: 'Packung Alnatura Bio Müsliriegel Ahorn-Dattel', examples: ['Natürliche Müsliriegel'] },
];
