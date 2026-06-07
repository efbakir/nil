# DESIGN.md — NIL

Target design system for the NIL site. Quiet-luxury editorial brand register.

## Type strategy

Self-hosted variable fonts (woff2), preloaded, no third-party CDN. Two faces only.

- **Display — Fraunces (variable, opsz + wght, roman + italic).** A soft old-style serif with optical sizing and idiosyncratic forms. Carries the wordmark, hero, headlines, the manifesto. Used large, at high optical size, with tight tracking. Italic for quiet emphasis.
- **Text — Hanken Grotesk (variable, wght).** A warm humanist grotesque. Body, captions, nav, labels, footer. Recedes under Fraunces.

Rationale: replaces the generic EB Garamond + Inter pairing. Fraunces gives the brand a distinctive, crafted display voice; Hanken stays quiet and warm under it. Both OFL, self-hosted from the repo `/fonts`.

Scale: dramatic contrast. Hero `clamp(56px, 9vw, 132px)`. Page titles `clamp(40px, 6vw, 88px)`. Body 17–19px, line length 60–72ch, line-height ~1.6. Step ratio ≥ 1.3.

## Colour (OKLCH, tinted neutrals, no accent)

- Ground (paper): `oklch(0.974 0.006 85)` — warm off-white, tinted toward the brand hue.
- Raised paper: `oklch(0.955 0.010 83)` — parchment for quiet fields.
- Ink: `oklch(0.205 0.006 75)` — near-black, warm-tinted, never pure black.
- Ink-soft: `oklch(0.50 0.006 75)` — secondary text.
- Rule: `oklch(0.88 0.006 83)` — hairlines.

No accent colour. Emphasis comes from scale, weight, and Fraunces italic.

## Layout

- Editorial asymmetry, not centered-everything. A real baseline grid.
- Varied spacing for rhythm; never uniform padding.
- No identical card grids. Products are an editorial index, not repeated cards.
- Generous negative space is a feature, not emptiness to fill.
- Body content capped at a readable measure even on wide screens.

## Motion

- Quiet scroll-reveal: opacity 0→1 plus small translateY, staggered, ease-out-expo, slow (600–900ms).
- No motion on layout properties. Transform and opacity only.
- Honour `prefers-reduced-motion: reduce` — reveal everything immediately, no transform.

## Performance

- Self-hosted woff2, `font-display: swap`, preload the two primary faces with `crossorigin`.
- No framework, no build step. Hand-written HTML + CSS.

## Bans (inherited)

No gradient text, no side-stripe borders, no glassmorphism, no hero-metric template, no identical card grids, no modals, no em dashes.
