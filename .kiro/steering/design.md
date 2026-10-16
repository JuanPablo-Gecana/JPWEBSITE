# Design Rules

## Current Visual Direction
- Dark, terminal-inspired portfolio with a black checkerboard background, white copy, and light-green accents.
- The interface uses restrained glass panels, inline outline icons, large type, and scale/slide hover motion.
- Keep additions consistent with the current dark palette, typography, spacing, radii, and glass surfaces.

## Color System
Defined in the first `:root` in `main/style.css`:
- `--black: #000000`
- `--light-green: #7ed687`
- `--light-green-hover: #5cbf6a`
- `--white: #ffffff`
- `--placeholder: #0a150e`

A second `:root` defines `--section-edge-space: 30px`.

Not every current color is tokenized. Existing raw values include:
- `#0d0d0d` for checkerboard tiles
- `#6a6a6a` for the muted hero introduction
- `rgba(20, 20, 20, 0.55)` for glass panels
- `rgba(15, 15, 15, 0.7)` for project overlays
- `rgba(255, 255, 255, 0.1)` for glass borders
- `rgba(255, 255, 255, 0.6)` for footer text
- Raw black values for body, navbar, and footer backgrounds

Prefer existing variables and established raw surface recipes when matching the current UI. If colors are refactored, consolidate all recurring values into `:root` rather than assuming every color is already tokenized.

## Background and Surfaces
- `body` uses four layered 45°/-45° linear gradients over black, with 40px square tiles and 20px offsets.
- Tech columns and affiliation/experience panels use the glass recipe: `rgba(20,20,20,0.55)`, `blur(8px)`, a 1px translucent white border, 12px radius, and 30px padding.
- Project backs use `rgba(15,15,15,0.7)` with `blur(10px)`.
- The navbar is the only element with a box shadow.

## Typography
- Body/UI: `--font-body` (`Chakra Petch`, Arial, sans-serif).
- Headings: `--font-heading` (`Aldrich`, Arial, sans-serif).
- Navbar logo only: `VT323`, monospace.
- Base line-height is 1.6; hero supporting copy is 1.7; About body copy is 1.8.
- Key desktop sizes: logo 2rem, typewriter 4.5rem, hero tagline 3rem, section/tech headings 2.5rem, About name 3.2rem, project title 1.6rem.
- Only selected text scales responsively. Typewriter and section headings shrink at defined breakpoints, while the logo, About name/copy, tech labels, and project copy currently retain fixed sizes.

## Layout and Spacing
- Content widths: 1200px for navbar/tech, 1100px for About/Experiences/Affiliations/Projects/Contact, and 900px for Hero.
- Horizontal section padding is generally 30px.
- Navbar height is `--nav-height` (70px), fixed at the top with `z-index: 1000`.
- Hero uses `min-height: 100vh`, top padding `calc(var(--nav-height) + 80px)`, 80px bottom padding, and a centered column layout.
- The hero supporting paragraph currently has `margin-bottom: 40%`.
- Final post-Hero spacing is determined by late cascade rules:
  - About: 60px top and 30px bottom.
  - Experiences, Affiliations, Projects, Contact: 30px top and bottom.
  - Technologies: no top margin and 30px top/bottom padding.
- Major desktop gaps: 60px for About/Affiliations/Contact; 30px for tech and project grids; 14px inside/between tech items; 40px below major headings.

## Border Radii
- 12px: About image, project cards, glass panels.
- 8px: buttons, tech items/icon boxes, social icons, contact icons.
- 10px: back-to-top button.
- Reuse these established values rather than adding arbitrary radii.

## Projects
- Desktop grid: two equal columns with a 30px gap.
- An unmatched final odd card spans both columns.
- Cards are 425px high on desktop and use responsive `clamp()` heights below 900px.
- `.project-back` starts at `opacity: 0` and `translateY(100%)`, then reaches full opacity and `translateY(0)` over 0.45s on hover.
- The three current project image paths are missing, so only the `--placeholder` front surface is reliably displayed.

## Icons and Images
- Current UI icons are inline SVG; no icon library is used.
- Tech: 30×30 SVG in a 40×40 box.
- Social: 20×20 SVG in a 42×42 bordered box.
- Contact: 20×20 SVG in a 40×40 green box.
- Back to top: 22×22 SVG in a 46×46 button.
- About and project images use `object-fit: cover`; About uses a 4:5 aspect ratio.
- Image parents provide `--placeholder` fallback surfaces. Global `img { color: transparent; }` hides fallback alt text, and the attempted `img::before` fallback is not reliable on replaced elements.

## Interactions
- Most color/transform transitions use `0.2s ease`.
- Hover scales: logo 1.05, social/back-to-top 1.1, tech icon 1.2.
- Project panels slide upward over 0.45s.
- Back-to-top opacity/visibility changes over 0.3s.
- Cursor blink uses a 0.7s infinite CSS keyframe.
- Current hover effects scale rather than lift elements. The only translateY motion is the project overlay moving from 100% to 0.

## Responsive Breakpoints
- **900px**: About and Affiliations stack; tech columns stack; projects remain two columns with `clamp(300px, 48vw, 425px)` heights; contact stays side by side with a smaller gap. Hero remains the column layout it already uses at desktop.
- **768px**: Typewriter becomes 3.2rem; section headings become 2rem; projects become one column; project and contact dimensions shrink. Mobile navigation CSS exists, but its required markup does not.
- **480px**: Typewriter becomes 2.5rem; hero supporting copy, projects, and contact details shrink further. Rules for `.hero-name` and `.btn` currently have no visible effect because those classes are absent from HTML.

## Accessibility and Current Caveats
- Preserve the existing `aria-label`s on social links and the back-to-top button, and keep `rel="noopener noreferrer"` on external links.
- White-on-black and black-on-green combinations provide the intended primary contrast.
- Current project alt text is generic and points to missing images; global transparent image text also suppresses useful broken-image fallback text.
- The project reveal depends on hover and has no equivalent focus rule in the current CSS.
- `background-color: none` on `.tech-icon-box` is invalid and is ignored by the browser.
