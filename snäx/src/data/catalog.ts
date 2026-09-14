import type { ImageMetadata } from 'astro';

import barebellsCaramelChoco from '../assets/catalog/barebells-caramel-choco.webp';
import blevitaSesam from '../assets/catalog/blevita-sesam.webp';
import chiefsCrispyCookie from '../assets/catalog/chiefs-crispy-cookie.webp';
import chiefsProteinChipsSourCream from '../assets/catalog/chiefs-protein-chips-sour-cream.webp';
import cocaColaZero from '../assets/catalog/coca-cola-zero.webp';
import darvidaDinkel from '../assets/catalog/darvida-dinkel.webp';
import darvidaNature from '../assets/catalog/darvida-nature.webp';
import farmerSoftApfel from '../assets/catalog/farmer-soft-apfel.webp';
import focuswaterShine from '../assets/catalog/focuswater-shine.webp';
import jackLinksBeefJerky from '../assets/catalog/jack-links-beef-jerky.webp';
import kaegiChiefsProteinWafer from '../assets/catalog/kaegi-chiefs-protein-wafer.webp';
import kaegiFretOriginal from '../assets/catalog/kaegi-fret-original.webp';
import kultIceTeaZitroneZero from '../assets/catalog/kult-ice-tea-zitrone-zero.webp';
import naturaplanNutMix from '../assets/catalog/naturaplan-nut-mix.webp';
import ovoSport from '../assets/catalog/ovo-sport.webp';
import powerbarProtein52 from '../assets/catalog/powerbar-protein-52.webp';
import quixPeanuts from '../assets/catalog/quix-peanuts.webp';
import quixUnsalted from '../assets/catalog/quix-unsalted.webp';
import rivellaBlau from '../assets/catalog/rivella-blau.webp';
import rivellaRot from '../assets/catalog/rivella-rot.webp';
import valserPrickelnd from '../assets/catalog/valser-prickelnd.webp';
import valserPrickelndMinze from '../assets/catalog/valser-prickelnd-minze.webp';
import valserStill from '../assets/catalog/valser-still.webp';
import type { ProductCategory } from './products';

export interface CatalogProduct {
  name: string;
  unit: string;
  category: ProductCategory;
  image: ImageMetadata;
  imageAlt: string;
}

export const catalogProducts: CatalogProduct[] = [
  { name: 'Chiefs Protein Bar Crispy Cookie', unit: '55 g', category: 'protein', image: chiefsCrispyCookie, imageAlt: 'Packung Chiefs Protein Bar Crispy Cookie' },
  { name: 'Barebells Caramel Choco', unit: '55 g', category: 'protein', image: barebellsCaramelChoco, imageAlt: 'Packung Barebells Caramel Choco Proteinriegel' },
  { name: 'PowerBar Protein+ 52% Chocolate Nut', unit: '50 g', category: 'protein', image: powerbarProtein52, imageAlt: 'Packung PowerBar Protein+ 52% Chocolate Nut' },
  { name: 'Kägi × Chiefs Protein Wafer Classic Choco', unit: '50 g', category: 'protein', image: kaegiChiefsProteinWafer, imageAlt: 'Packungen Kägi × Chiefs Protein Wafer Classic Choco' },
  { name: 'Chiefs Protein Chips Sour Cream', unit: '80 g', category: 'protein', image: chiefsProteinChipsSourCream, imageAlt: 'Packung Chiefs Protein Chips Sour Cream' },
  { name: 'Jack Link’s Beef Jerky Original', unit: '25 g', category: 'protein', image: jackLinksBeefJerky, imageAlt: 'Packung Jack Link’s Beef Jerky Original' },
  { name: 'Valser Still', unit: '500 ml PET-Flasche', category: 'getraenk', image: valserStill, imageAlt: 'Flasche Valser Still Mineralwasser' },
  { name: 'Coca-Cola Zero', unit: '500 ml PET-Flasche', category: 'getraenk', image: cocaColaZero, imageAlt: 'Flasche Coca-Cola Zero Zucker' },
  { name: 'Rivella Rot', unit: '500 ml PET-Flasche', category: 'getraenk', image: rivellaRot, imageAlt: 'Flasche Rivella Rot' },
  { name: 'Rivella Blau / Zero', unit: '500 ml PET-Flasche', category: 'getraenk', image: rivellaBlau, imageAlt: 'Flasche Rivella Blau' },
  { name: 'Migros Kult Ice Tea Zitrone Zero', unit: '500 ml Flasche', category: 'getraenk', image: kultIceTeaZitroneZero, imageAlt: 'Flasche Migros Kult Ice Tea Zitrone Zero' },
  { name: 'Valser Prickelnd Minze', unit: '500 ml PET-Flasche', category: 'getraenk', image: valserPrickelndMinze, imageAlt: 'Flasche Valser Prickelnd Minze' },
  { name: 'Valser Prickelnd', unit: '500 ml PET-Flasche', category: 'getraenk', image: valserPrickelnd, imageAlt: 'Flasche Valser Prickelnd Mineralwasser' },
  { name: 'FOCUSWATER Shine', unit: '500 ml PET-Flasche', category: 'getraenk', image: focuswaterShine, imageAlt: 'Flasche FOCUSWATER Shine' },
  { name: 'Nectaflor QUIX roasted salted peanuts', unit: '50 g', category: 'low-carb', image: quixPeanuts, imageAlt: 'Packung Nectaflor QUIX geröstete gesalzene Erdnüsse' },
  { name: 'Coop Naturaplan FSI roasted salted nut mix', unit: '50 g', category: 'low-carb', image: naturaplanNutMix, imageAlt: 'Packung Coop Naturaplan FSI geröstete gesalzene Nussmischung' },
  { name: 'Nectaflor QUIX Nussmischung ungesalzen', unit: '50 g', category: 'low-carb', image: quixUnsalted, imageAlt: 'Packung Nectaflor QUIX Nussmischung ungesalzen' },
  { name: 'DAR-VIDA Nature', unit: '41,6 g Portion', category: 'snack', image: darvidaNature, imageAlt: 'Packung DAR-VIDA Nature' },
  { name: 'Blévita Sesam', unit: '38 g Portion', category: 'snack', image: blevitaSesam, imageAlt: 'Packung Blévita Sesam' },
  { name: 'Farmer Soft Apfel', unit: '20 g Riegel', category: 'snack', image: farmerSoftApfel, imageAlt: 'Packung Farmer Soft Apfel' },
  { name: 'DAR-VIDA Dinkel', unit: '41,5 g Portion', category: 'snack', image: darvidaDinkel, imageAlt: 'Packung DAR-VIDA Dinkel Vollkorncracker' },
  { name: 'Kägi fret Original', unit: '50 g', category: 'snack', image: kaegiFretOriginal, imageAlt: 'Kägi fret Original Riegel vor Toggenburger Berglandschaft' },
  { name: 'Ovo Sport Original', unit: '60 g', category: 'snack', image: ovoSport, imageAlt: 'Packung Ovo Sport Original' },
];
