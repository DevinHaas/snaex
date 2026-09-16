# Water, sugar-free tea and healthy-fats assortment revision

Checked **16 September 2026** against live Swiss manufacturer, retailer and federal nutrition sources. Retail pages generally provide no update date; those sources therefore carry the access date rather than an inferred publication date.

## Summary

Use **VALSER** as the only water brand and keep its existing **Still 500 ml PET** and **Prickelnd 500 ml PET** entries. Remove both Appenzeller water entries. For the two vacated assortment roles, use the exact products below:

1. **Migros Bio Eistee Schweizer Alpenkräuter, ohne Zucker, 500 ml** — article **120928500000**, GTIN **7613312342695**.
2. **Nectaflor QUIX Nussmischung ungesalzen, 50 g** — GTIN **7610184017997** (current live-page article **51031**).

Both products are already represented by image files in the working tree, so implementation should reuse/refresh those assets rather than create duplicate catalog records. In particular, the Migros Bio tea is already in `src/data/catalog.ts`; it should become the single selected tea while the redundant Kult Zero tea is removed if the brief means one tea total.

## Exact assortment change

| Remove | Keep / add | Reason |
|---|---|---|
| Appenzeller Mineralwasser ohne Kohlensäure, 500 ml | VALSER Still, 500 ml | One brand covers the still-water role and the repository already has its asset. |
| Appenzeller Mineralwasser mit Kohlensäure, 500 ml | VALSER Prickelnd, 500 ml | Same brand covers the sparkling-water role and the repository already has its asset. |
| Extra sweetened/zero iced-tea variants if only one tea is intended | Migros Bio Eistee Schweizer Alpenkräuter, ohne Zucker, 500 ml | Truly unsweetened formulation: herbal infusion and citric acid, with no sugar or sweetener listed. |
| One vacated duplicate-water slot | Nectaflor QUIX Nussmischung ungesalzen, 50 g | A distinct healthy-fats option: plain unsalted almonds, cashews, pecans and hazelnuts in a vending-ready flat pouch. |

This resolves the apparent conflict in the current working catalog: it presently contains four waters across two brands and two sugar-free/unsweetened teas. The target should be **two VALSER waters, one unsweetened tea and one new unsalted nut mix**, not a second record for a product already present.

## 1. Tea recommendation

### Exact SKU

**Migros Bio Eistee Schweizer Alpenkräuter, ohne Zucker, 500 ml**
Migros article: **120928500000** · GTIN: **7613312342695** · current listed price: **CHF 1.10**

The live first-party Migros/Migipedia record lists a herbal infusion made from lemon balm, peppermint, lady's mantle, chamomile, nettles and verbena plus citric acid. It reports **0 kcal, 0 g carbohydrate and 0 g sugar per 100 ml**, identifies the bottle as pasteurised and made in Switzerland, and says refrigeration is required after opening. The same record shows the product in stock, in a 500 ml bottle, with 244 ratings when accessed.[^1] The linked Migros commerce record uses the same article number.[^2]

This is the clearest match for “tea that is sugar-free”: it contains neither sugar nor a listed non-sugar sweetener. That is a better health-positioning fit than **Kult Ice Tea Zitrone Zero**, whose “zero” status does not make it an unsweetened tea. It is also operationally simpler than the Coop Naturaplan alternative because the Migros source documents a single 500 ml retail bottle, whereas Coop currently sells its equivalent as a 6 × 50 cl multipack.[^3]

### Product image for downstream processing

- Exact first-party product image: <https://image.migros.ch/d/2017-large/dbd73144345aa42ccf8bfcef0fddfeb391c07126.png>
- Product/detail page: <https://migipedia.migros.ch/de/bio-eistee-schweizer-alpenkraeuter-ohne-zucker?community=details>

The image URL is the `Product.image` attached to SKU `120928500000` in Migros's structured product data, not a search-result thumbnail. Download the largest PNG, retain the original separately, remove only the background, and visually verify that the label, cap and bottle outline remain unchanged.

### Cross-check / reserve choice

**Coop Naturaplan Organic ungesüsst Alpen Herb Ice Tea, 6 × 50 cl**, article **6086622**, independently confirms that a Swiss-made, pasteurised herbal-tea drink can provide **0 g sugar** with no added sweetener. Its ingredients are water, lemon juice and herbs; Coop lists it in the cart at CHF 8.40 and gives at least 30 days' remaining life on receipt.[^3] It is the reserve, not the first choice, because individual labelling/barcodes must be checked before bottles from a multipack are sold separately.

## 2. Healthy-fats recommendation

### Exact SKU

**Nectaflor QUIX Nussmischung ungesalzen, 50 g**
GTIN: **7610184017997** · current live-page article: **51031** · current listed price: **CHF 1.95**

The live Nectaflor/Narimpex product page identifies a natural, unsalted mix of **almonds, cashews, pecans and hazelnuts** in a 50 g flat pouch. It lists **55.38 g fat, 4.74 g saturated fat, 9.79 g fibre, 17.65 g protein, 4.56 g sugar and 0.01 g salt per 100 g**, plus a minimum shelf life of 120 days and pack dimensions of 1.5 × 6.5 × 19.5 cm.[^4] That is approximately **27.7 g total fat, 2.4 g saturated fat, 4.9 g fibre, 8.8 g protein and 2.3 g sugar per 50 g pouch**.

Galaxus independently lists the same 50 g product, manufacturer and nut composition and closely matching rounded nutrition (**55 g fat, 4.7 g saturated fat, 9.7 g fibre, 18 g protein, 4.6 g sugar, 0.01 g salt per 100 g**). It offers a 25-unit sales pack and reported more than ten units at its supplier when checked.[^5] Nectaflor's 2024 trade catalogue confirms the same GTIN, 50 g consumer unit and 25 consumer units per trade case.[^6]

The nutrition rationale is stronger than “fat content is high.” Swiss federal guidance recommends a small daily handful of **unsalted** nuts or seeds, defined as **15–30 g**, and says nuts and seeds supply valuable fatty acids, fibre and other nutrients.[^7] This exact SKU follows the unsalted/plain-food preference and contributes mostly non-saturated fat based on its label. It is therefore a better new healthy-fats slot than another salted nut mix, a sweetened nut bar, or a nut-butter pouch whose unopened storage limits remain undocumented.

### Portion caveat

The 50 g vending pouch is larger than the official 15–30 g daily reference portion and provides about **305 kcal**. Market it as an unsalted nut mix, not as a prescribed daily serving or a weight-loss food. If a verified 25–30 g unsalted version becomes available, it would align more closely with Swiss portion guidance; no equally well-documented Swiss vending SKU in that size was found in this check.

### Product image for downstream processing

- Exact first-party pack image: <https://nectaflor.ch/cdn/shop/files/51031.jpg?v=1781100185>
- Product/detail page: <https://narimpex.ch/produkt/quix-nussmischung-ungesalzen-50-g/>
- First-party trade-catalogue packshot/reference: <https://narimpex.ch/wp-content/uploads/2024/09/Produktkatalog_DE_verk_2024.pdf>

The live page's image is an official packshot suitable as the input for background removal. Keep the downloaded original and record the retrieval URL/date; online display does **not** establish commercial reuse permission.

## Data-quality and procurement checks

1. **Use GTIN, not the article number, to lock the QUIX identity.** Nectaflor's live page says article 51031, while its 2024 catalogue says article 51030; both identify GTIN 7610184017997. Confirm the current supplier article on the order acknowledgement.
2. **Verify the received labels.** Nutrition, allergens, GTIN and individual barcode must match before publication or vending.
3. **Confirm machine fit and storage.** The QUIX pouch dimensions are documented; obtain the supplier's explicit storage-temperature range. For tea, preserve the sealed bottle and printed best-before date.
4. **Image rights remain separate.** The URLs above establish provenance and identity, not a licence. Seek owner/trade-asset permission before commercial publication.

## Key sources

- **Migros / Migipedia, live product page** — accessed **2026-09-16**; first-party exact-SKU ingredients, nutrition, GTIN, origin, stock signal and image.[^1]
- **Nectaflor / Narimpex, live product page** — accessed **2026-09-16**; first-party exact-SKU nutrition, format, GTIN, dimensions, shelf life, stock and image.[^4]
- **Galaxus Switzerland, product page** — release date **2024-04-04**, accessed **2026-09-16**; major Swiss retailer cross-check for the exact QUIX product, case quantity, availability and rounded nutrition.[^5]
- **Swiss Federal Food Safety and Veterinary Office (BLV)** — recommendations © **2024**, live page accessed **2026-09-16**; primary Swiss dietary guidance for unsalted nuts/seeds and portion size.[^7]
- **Coop Switzerland, live product page** — accessed **2026-09-16**; exact reserve unsweetened tea, ingredients, nutrition, availability and storage.[^3]

## Currency assessment and limitations

**The most recent sources found are live first-party and retailer pages accessed on 16 September 2026.** The newest dated supporting document found is the BLV/SGE scientific background appendix dated **11 September 2026**, while the applicable public food-group recommendation remains the 2024 Swiss recommendation.[^7]

Prices, stock, recipes, packaging and image URLs can change without notice. Online retail availability is evidence of current Swiss-market presence, not a wholesale supply guarantee. No supplier was contacted, no image licence was granted, and no physical bottle or pouch label was inspected. The manufacturer/retailer nutrition figures for QUIX differ only by ordinary rounding; the article-number discrepancy is material and must be resolved with the supplier using the GTIN.

[^1]: Migros / Migipedia. [Bio Eistee Schweizer Alpenkräuter, ohne Zucker](https://migipedia.migros.ch/de/bio-eistee-schweizer-alpenkraeuter-ohne-zucker?community=details). Live page accessed 2026-09-16.
[^2]: Migros. [Article 120928500000](https://www.migros.ch/de/product/120928500000?context=instore). Live commerce record accessed 2026-09-16.
[^3]: Coop. [Naturaplan Organic ungesüsst Alpen Herb Ice Tea 6 × 50 cl, article 6086622](https://www.coop.ch/de/lebensmittel/getraenke/soft-drinks/multipacks-unter-1-liter/naturaplan-organic-ungesuesst-alpen-herb-ice-tea-6x50cl/p/6086622?context=search). Live page accessed 2026-09-16.
[^4]: Nectaflor / Narimpex. [QUIX Nussmischung ungesalzen 50 g](https://narimpex.ch/produkt/quix-nussmischung-ungesalzen-50-g/). Live manufacturer/direct-shop page accessed 2026-09-16.
[^5]: Galaxus Switzerland. [Nectaflor QUIX Power Nüsse ungesalzen, 50 g](https://www.galaxus.ch/de/s7/product/nectaflor-quix-power-nuesse-ungesalzen-50-g-nuesse-kerne-44732474). Released 2024-04-04; live page accessed 2026-09-16.
[^6]: Nectaflor / Narimpex. [Produktkatalog 2024](https://narimpex.ch/wp-content/uploads/2024/09/Produktkatalog_DE_verk_2024.pdf). Published 2024; accessed 2026-09-16.
[^7]: Bundesamt für Lebensmittelsicherheit und Veterinärwesen (BLV). [Schweizer Ernährungsempfehlungen für Erwachsene](https://www.blv.admin.ch/de/ernaehrung-erwachsene) and [official 2024 short version](https://www.blv.admin.ch/dam/blv/de/dokumente/lebensmittel-und-ernaehrung/ernaehrung/merkblatt-schweizer-ernaehrungsempfehlung-kurz.pdf.download.pdf/Schweizer%20Ern%C3%A4hrungsempfehlungen_Kurzversion_DE.pdf). Recommendation © 2024; pages accessed 2026-09-16.
