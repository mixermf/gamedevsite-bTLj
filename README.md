# Uniline Games portfolio

A complete English-language static portfolio. No framework, build step, npm dependencies, API keys, analytics, or backend are required.

## Preview

Open `index.html` directly in a browser. All scripts, fonts, and images are local; the site also works offline. External Google Play links and email links require the appropriate external service.

For a local HTTP preview, run `python -m http.server 8080` from this directory, then open `http://localhost:8080`.

## Deploy to your server

Upload `index.html`, `styles.css`, `script.js`, and the entire `assets/` and `policy/` directories to your document root (for example, Nginx `/var/www/gamedevsite`). Keep the relative directory structure. A subdirectory deployment also works without editing paths.

The privacy policy is served from `policy/index.html`: standard static servers make it available at `/policy` (redirecting to `/policy/`). Its original document text is preserved from https://unilinegames.github.io/site/policy_android_eng.html, with only a new “Privacy Policy” title added above it.

Set `index.html` as the default document. No URL rewrites or server-side code are needed. Serve over HTTPS. Optional: enable compression and caching for CSS, JavaScript, fonts, and WebP images. For fonts, use the `font/woff2` MIME type.

## Features

- Three featured worlds with manual switching and subtle pointer movement.
- Ten projects, genre filters, real app icons, and screenshot previews.
- Hover screenshot transitions and restrained card tilt.
- Native modal gallery with keyboard arrows, Escape, swipe gestures, and restored focus.
- Scroll-triggered reveals, a scrolling studio ribbon, and reading progress.
- Responsive layouts, visible keyboard focus, reduced-motion support, and a motion toggle.
- Game listings remain readable when JavaScript is disabled.

## Editing

- Update page text, links, metadata, and the static project cards in `index.html`.
- Update the `games` array at the beginning of `script.js` for the featured screen and gallery data. Keep its entries consistent with the HTML cards.
- Set `unavailable: false` and restore the card's Google Play link when a listing becomes available again.
- Colors, spacing, typography, and breakpoints are in `styles.css`.
- Replace screenshots with the same filenames in `assets/`, or update both HTML and JavaScript references.
- The contact email `myworkakk@gmail.com` comes from the public Google Play support listing. Change it in the HTML if a different studio contact is preferred.

## Content sources

Catalog and screenshots: [Uniline Games on Google Play](https://play.google.com/store/apps/dev?id=8556297894808618230), checked on 2026-10-07. Detailed sources are recorded in `sources.json`.

The current live listings also include Pocket Atlas. DoomDivers, Tiny Rails, and Catch or Fall returned HTTP 404 during direct checks; their screenshots were available from the indexed Google Play pages. These projects are retained in the portfolio without an install button. This does not assume that they were permanently removed or are unavailable in every region.

What If is an entertainment app and appears as an experiment, rather than being described as a game. No ratings, download counts, awards, or other unverified studio achievements are displayed.

Game artwork belongs to its respective owners. Unbounded and Manrope are redistributed under the SIL Open Font License; see `assets/licenses/`.

## Validation

Checked in Chrome at widths 320, 390, 580, 768, 1024, 1440, and 1920 px. Verified featured selection, every genre filter, preview/gallery navigation, unavailable store behavior, Escape, mobile navigation, image loading, reduced motion, no-JavaScript visibility, and direct `file://` operation.
