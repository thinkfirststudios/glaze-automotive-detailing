# Glaze Automotive Detailing — spec mockup

**STATUS: LEAD — not signed. FIRST WEBSITE** — they have none, and no domain. Spec mockup only. Not deployed. All photography is stock placeholder. `noindex, nofollow` on every page.

Built 2026-10-12 from `PROMPT.md`. Plain static HTML/CSS/JS, no build step. Open `index.html`.

## The pitch, built in

- **Homepage H1 is their buried sentence:** "WE BRING OUR OWN WATER AND ELECTRICITY." It is also repeated in the utility strip, the advantage band, the 3-step strip and the quote form helper.
- **Service Areas is a top-level nav item.** The radius map doubles as navigation for the location-page system.

## Pages (23)

| File | What it is |
|---|---|
| `index.html` | Includes:<br>• hero (GLAZE wordmark over a natural stock photo)<br>• advantage band<br>• 3 steps<br>• 10 service cards (four considered purchases shown first, larger)<br>• before/after slider and 4 pairs (each "before" is a client-supply panel)<br>• packages (the one light panel)<br>• the high-ticket four<br>• radius map and 20 area chips<br>• licence claim and payments<br>• about<br>• review slots<br>• quote form |
| 10 service pages | `interior-detailing` · `exterior-detailing` · `ceramic-coating` · `paint-correction` · `headlight-restoration` · `ozone-odour-treatment` · `clay-bar-polish` · `pet-hair-removal` · `vinyl-wrap-removal` · `ppf-removal`. Each covers its process, with every unknown flagged |
| `mobile-detailing-tampa` · `-wesley-chapel` · `-clearwater` | **Three worked example location pages.** Area prose is a visible client-supply flag. FAQs and nearby links differ per area (by real geography) |
| `mobile-detailing-tampa-bay.html` | The hub, linking all twenty |
| `service-areas.html` | The radius map plus all twenty areas with their URLs. The 16 not built are marked as scoped |
| `services` · `packages` · `about` · `contact` · `faq` · `privacy` · `terms` | Legal pages are DRAFT-bannered |

**Location pages:** the 16 areas not built are a phased content deliverable, not templated stubs. Eight strong pages beat twenty thin ones.

## Design: REFLECTION

- **Palette:** lacquer `#06120E`, panels `#102A22` / `#17382E`, specular `#F4F9F6` (the hero), and jade `#1FA37A` at about 5% (CTAs, active nav, focus, the radius field). There is one light surface, the packages panel. No blue, cyan, amber or red.
- **Type:** Darker Grotesque (display), Hubot Sans (body), Fragment Mono (labels only, never prices).
- **Specular rake:** one hard band at a fixed 105°. It fires once, on reveal, on the GLAZE wordmark, the advantage band, the package row and the radius map. It never loops.
- **Reflection pools:** soft elliptical pools under cards (static).
- **Wet-edge transitions:** a 1px specular line with a 4px soft bloom. It draws in left to right.
- **Before/after (v2):** the "before" side of the slider and of every pair is a labelled client-supply panel, not a regraded copy of the stock photo.
- **Not used:** chrome fills, icon grids, droplets, suds and count-ups.
- **Photos (v2, 2026-10-13):** every image is plain stock with a light natural grade. The earlier cut-out occlusion hero and green LUT were removed at Alex's request because they read as generated. The hero has a separate phone crop.

## Required checks (run on all built HTML, CSS and JS)

- **Prices:** no `$` figure anywhere. Every price is `[PRICE — NOT PUBLISHED, CLIENT TO SUPPLY]`, and there's no `priceRange`.
- **Ozone and health claims:** none of the banned strings appears in any copy, alt text, meta, JSON-LD or code comment. Ozone ships as a name, one neutral sentence and the substantiation flag.
- **Coating, correction and film:** no durability or hardness figure, no "permanent", no removal guarantee, no damage-free promise. Each carries its flag.
- **Environment and hours:** no environmental claim. No 24/7 claim and no `openingHours`; availability is `[BOOKING AVAILABILITY — CONFIRM]`, and "Closed Sunday" is stated.
- **Reviews:** no `aggregateRating`, no street address, no review text.
- **Marques:** none in any copy or alt text, and the legible wheel marks are blurred.
- **Colours:** none outside the neutral and green family.

## Before/after

The slots are built and labelled. They need a real before/after pair of the same vehicle from Glaze. Stock is never shown as a result.

## Not built (notes for Alex)

- No membership or wash club, since none is published.
- Comet Mobile Detailing was checked as the brief asked: cyan `#2FAEE0` and amber on navy. No collision.

## ⚠️ Pre-launch blockers (PROMPT.md, these block launch)

- **L1 domain:** check availability today.
- L2 real prices and size tiers
- L3 coating substantiation
- L4 what "licensed" means
- L5 water reclamation and stormwater
- L6 ozone substantiation
- L7 film-removal wording
- L8 booking availability
- L9 email and SMS
- L10 durations
- L11 core and outer radius, plus travel fee
- L12 owner and team
- **L13 the twenty location pages are a content job**
- L14 real photography (the water and power rig above all)
- L15 logo
- L16 replace all stock before/after
- L17 tie the Google Business Profile to the site
- L18 and L19 Terms and Privacy

No DNS exists yet. When it does: web records only, **never MX**.
