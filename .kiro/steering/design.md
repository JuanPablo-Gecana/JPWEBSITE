# Design Rules

## Color Palette
- All theme colors are defined as CSS custom properties in `:root` in `style.css`.
- Primary background: `--black` (`#000000`)
- Primary accent: `--light-green` (`#7ed687`) — used for headings, highlights, icons, and buttons.
- Accent hover state: `--light-green-hover` (`#5cbf6a`)
- Text color: `--white` (`#ffffff`)
- Placeholder/fallback background: `--gray-placeholder` (`#c4c4c4`)
- Never introduce new colors outside the `:root` variables. Add a new variable if a new color is genuinely needed.

## Typography
- Heading font: `--font-heading` — `'Aldrich', 'Arial', sans-serif`. Used for section headings, project titles, and the about-name.
- Body font: `--font-body` — `'Chakra Petch', 'Arial', sans-serif`. Used for all body text, taglines, and UI labels.
- Logo font: `'VT323', monospace` — used exclusively for the nav logo.
- Base line-height: `1.6` on body; `1.8` for longer paragraph text (about section).
- Font sizes scale down at each responsive breakpoint — never use fixed sizes without responsive overrides.

## Spacing & Layout
- Maximum content width: `1200px` (general), `1100px` (about and projects), `900px` (contact).
- Horizontal padding: `30px` on all section containers.
- Sections have `100px` vertical padding; the tech section uses `80px` top margin.
- Gaps between flex items: `60px` (hero, about), `30px` (project cards), `50px` (tech marquee items).
- The navbar is `70px` tall (defined as `--nav-height`) and fixed at the top.

## Border Radius
- Large containers and images: `12px`
- Buttons and icon boxes: `8px`
- Hero image wrapper: `16px`
- Tech logo containers: `10px`
- Keep radius values consistent — do not introduce arbitrary new values.

## Interactions & Transitions
- Default transition duration: `0.2s ease` for hover states (color, transform, background).
- Mobile nav slide transition: `0.3s ease`.
- Hover lift effect: `translateY(-2px)` for buttons and small elements; `translateY(-6px)` for cards.
- Back-to-top button uses `0.3s` for opacity/visibility fade.
- No `requestAnimationFrame` animations — use CSS `@keyframes` for continuous motion and `setTimeout` for JS-driven effects.

## Buttons
- Base class `.btn`: `12px 28px` padding, `1rem` font size, `font-weight: 600`, `border-radius: 8px`.
- Primary button (`.btn-cv`): green background (`--light-green`), black text, hover lifts and darkens.
- At `480px` breakpoint, reduce padding to `10px 22px` and font size to `0.9rem`.

## Icons
- All icons are inline SVGs — no icon library or font icons.
- Navigation icons: `22px × 22px`.
- Social icons: `20px × 20px` inside a `42px × 42px` bordered container with `border-radius: 8px`.
- Contact icons: `20px × 20px` inside a `40px × 40px` green-filled container.

## Images
- All images use `object-fit: cover` (portraits) or `object-fit: contain` (tech logos).
- Broken-image alt text is hidden with `color: transparent` on `img`.
- Placeholder backgrounds (`--gray-placeholder`) show while images load or are missing.

## Responsive Breakpoints
- `900px`: Stack hero and about columns vertically; projects go single-column.
- `768px`: Show mobile hamburger menu; reduce heading sizes; stack contact items.
- `480px`: Further reduce hero text and image sizes; shrink buttons.
- Always design mobile-first in spirit — content must be usable at every breakpoint.

## General Principles
- Dark-mode-first: the entire site uses a black background with light text and green accents.
- Minimal decoration: no box shadows on sections (only on navbar and hovered cards).
- Subtle motion: hover states use small lifts and color shifts — avoid flashy or distracting animations.
- Consistency: reuse existing variables, spacing values, and radius tokens rather than inventing new ones.
- Accessibility: ensure sufficient contrast between text and backgrounds (white on black, black on green).
