# Snäx product assortment

## Publication gate

Phase 2 uses a four-product editorial shortlist with one product in each required category. All four are recorded as Swiss-produced, each has two Swiss-market signals, and every displayed claim links to its source. Prices are intentionally not published because vending prices have not been approved.

The `published` status and `approved` image usage value mean that a record passes the deterministic implementation gate in `src/data/products.ts`. Commercial publication still requires the owner review listed in the structure outline. If that review rejects a product, claim, or image permission, change its status before launch.

| Category | Product | Brand / producer / production | Displayed facts | Swiss-market signals | Decision |
| --- | --- | --- | --- | --- | --- |
| Protein | Kägi x Chiefs Protein Wafer | CH / CH / CH | 13 g protein per pack; no added sugar ([Chiefs](https://chiefs.food/de/collections/protein-wafer)) | Chiefs Switzerland assortment; [Swiss Made Direct listing](https://swissmade.direct/shop/swiss-food-and-drink/biscuits/chiefs-protein-wafer-classic-choco-3x50g-kaegi/) | Published; owner sign-off pending |
| Beverage | Rivella Rot | CH / CH / CH | Carbonated table drink with 35% milk serum ([Migros](https://www.migros.ch/de/product/120223000000)) | [Swiss original since 1952](https://rivella.ch/de/sortiment/rot/); Migros listing with customer reviews | Published; owner sign-off pending |
| Low carb | Alpahirt Bergsalsiz | CH / CH / CH | 0 g carbohydrate and 41 g protein per 100 g ([Alpahirt](https://alpahirt.ch/products/bergsalsiz)) | Direct Graubünden offer; 58 product reviews | Published; owner sign-off pending |
| Snack | DAR-VIDA Nature | CH / CH / CH | Vegan, whole grain, 13 g fibre per 100 g ([DAR-VIDA](https://darvida.ch/de/produkte/dar-vida-nature/)) | [Coop listing](https://www.coop.ch/de/search/?text=darvida); [Brack listing](https://www.brack.ch/hug#dar-vida) | Published; owner sign-off pending |

Published Swiss-production share: **4 / 4 (100%)**. Producer location and production origin are recorded separately in code; no generic `local` flag is used.

## Image provenance

Packshots were retrieved on 2026-09-07 from official brand or producer pages, converted losslessly to transparent WebP where the source alpha channel permitted, and stored only as reviewed web derivatives under `src/assets/products/`. The original downloads are not part of the repository.

| Product | Source | Owner | Derivative | Usage status |
| --- | --- | --- | --- | --- |
| Kägi x Chiefs Protein Wafer | [Official Chiefs PNG](https://chiefs.food/cdn/shop/files/Wafer_Packshots_Webshop_Trio_Wafer.png?v=1785497497&width=1200) | Chiefs / Kägi | `src/assets/products/kaegi-chiefs-protein-wafer.webp` | Approved for Phase 2 implementation; owner permission review pending |
| Rivella Rot | [Official Rivella PNG](https://rivella.ch/wp-content/uploads/2025/02/rivella-rot-1.png) | Rivella AG | `src/assets/products/rivella-rot.webp` | Approved for Phase 2 implementation; owner permission review pending |
| Alpahirt Bergsalsiz | [Official Alpahirt PNG](https://alpahirt.ch/cdn/shop/files/Alpahirtklein_1800x1800.png?v=1745914553) | Alpahirt AG | `src/assets/products/alpahirt-bergsalsiz.webp` | Approved for Phase 2 implementation; owner permission review pending |
| DAR-VIDA Nature | [Official DAR-VIDA PNG](https://darvida.ch/app/uploads/2022/12/DARVIDA_nature.png) | HUG AG / DAR-VIDA | `src/assets/products/darvida-nature.webp` | Approved for Phase 2 implementation; owner permission review pending |

No label, ingredient statement, certification mark, package quantity, or nutrition value was generated or altered. The manual Phase 2 review must confirm permission and inspect these derivatives at 1x and 2x on every brand surface.
