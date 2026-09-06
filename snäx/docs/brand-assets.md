# Snäx brand assets

## Brand references

The supplied raster boards remain the visual source of truth for Phase 1:

- `public/Jan Moser - 2026-09-06 20.10.22.jpg` — primary lockup and image mark.
- `public/Jan Moser - 2026-09-06 20.10.30.jpg` — light, dark, icon, and subdued usage.
- `public/Jan Moser - 2026-09-06 20.10.16.jpg` — exact five-color palette.

The production candidates in `src/assets/brand/` are genuine SVG geometry and contain no embedded raster image. Dark and light full-lockup and mark-only variants are explicit files rather than CSS recolors. Because no original designer vector was supplied and no owner review has happened yet, these reconstructions remain **pending manual brand approval**. Replace them with original artwork if it becomes available.

The manual review must compare letterforms, umlaut placement, leaf geometry and cutouts, spacing, tagline, proportions, and the exact `#1f3d2a` / `#f5f3ec` colors at mobile and desktop sizes.

## Typography

| Role | Family | Source | License | Files used | Status |
| --- | --- | --- | --- | --- | --- |
| Display | Comfortaa Variable | Fontsource package `@fontsource-variable/comfortaa` | SIL Open Font License 1.1 | Variable WOFF2, browser-selected Latin subset | Pending visual approval |
| Body | Nunito Sans Variable | Fontsource package `@fontsource-variable/nunito-sans` | SIL Open Font License 1.1 | Variable WOFF2, browser-selected Latin subset | Pending visual approval |

Both families include German umlauts and are bundled into the static build; the page does not call a third-party font service at runtime. Comfortaa is used only for display copy and is not used to recreate the approved logo in page text. Nunito Sans handles navigation, paragraphs, labels, and controls.

The package licenses are available at `node_modules/@fontsource-variable/comfortaa/LICENSE` and `node_modules/@fontsource-variable/nunito-sans/LICENSE`. Manual approval must review the pairing with realistic German headings, body copy, numerals, and narrow layouts.

## Build-tool deviation

Phase 1 preserves the repository's established Bun setup by owner direction. `bun.lock` and the `packageManager` field remain authoritative; `package-lock.json` is intentionally not created. The outline's npm commands map directly to `bun run check`, `bun run build`, and `bun run test:e2e` without changing the intended Astro, static-output, TypeScript, or browser-verification gates.
