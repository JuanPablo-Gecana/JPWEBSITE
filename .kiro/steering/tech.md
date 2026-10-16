# Tech Stack

## Languages and Runtime
- HTML5
- CSS3 (vanilla; no preprocessor)
- JavaScript (vanilla ES6+; no framework)
- Static browser runtime only; there is no backend in this repository.

## Build and Dependencies
- No package manager, bundler, build step, test runner, or application framework is configured.
- Open `main/portfolio.html` directly in a browser to view the site.
- Google Fonts is the only external runtime dependency. `portfolio.html` loads Aldrich, Chakra Petch, and VT323 with `<link>` elements.
- Icons are authored as inline SVG. There is no icon library.

## Source Conventions
- Page markup and all sections live in `main/portfolio.html`.
- All styles live in `main/style.css`, including reset rules, layout, responsive rules, transitions, and keyframes.
- All behavior lives in `main/script.js`.
- Theme and typography tokens are in an initial `:root`; a second `:root` near the end of `style.css` defines `--section-edge-space`.
- Several visible colors are still raw CSS values rather than variables, including the checkerboard tiles, glass surfaces, muted text, shadows, and overlays. Changing only `:root` color variables will not update every color.
- Responsive breakpoints are `900px`, `768px`, and `480px`.
- Continuous visual motion uses CSS (`@keyframes blink`); typewriter timing uses recursive `setTimeout` calls. Do not introduce `requestAnimationFrame` unless the animation architecture is intentionally changed.

## Current JavaScript Behavior
- **Typewriter**: Cycles `BUILDING` and `DEPLOYING`; types at 80ms per character, pauses for 1800ms, deletes at 40ms per character, and waits 400ms before the next word.
- **Back to top**: Adds `.visible` after `window.scrollY > 400` and scrolls smoothly to the top when clicked.
- **Mobile navigation mismatch**: The script queries `.nav-toggle` and immediately calls `addEventListener` on it, but the current HTML contains no `.nav-toggle` or `.nav-links`. This throws a runtime `TypeError`.
- **Smooth-scroll consequence**: The custom anchor smooth-scroll listeners appear after that exception and are not registered. CSS `scroll-behavior: smooth` still handles the existing `jepe.exe` link to `#home`.
- **Tech hover**: Implemented with CSS `:hover`. The `.hovered` selector exists, but JavaScript does not apply that class.

## Asset Behavior
- `../assets/about-photo.jpg` is referenced and exists.
- `../assets/project-1.jpg`, `project-2.jpg`, and `project-3.jpg` are referenced but do not exist.
- `hero-photo.jpg` and the five `tech-*.png` files exist but are not referenced; current technology icons are inline SVG.

## Common Tasks
| Task | Current approach |
|---|---|
| View the site | Open `main/portfolio.html` in a browser |
| Add a project | Add a `.project-card` with `.project-front` and `.project-back`; add its referenced image to `assets/` |
| Add a technology | Add a `.tech-item` containing `.tech-icon-box` with an inline SVG and a text `<span>` to the appropriate `.tech-column` |
| Add a technology category | Add a `.tech-column` and `.tech-column-heading` inside `.tech-grid` |
| Change typewriter words | Edit the `words` array in `main/script.js` |
| Change all theme colors | Update both CSS variables and remaining raw color values in `main/style.css` |
