# Tech Stack

## Languages & Technologies
- HTML5
- CSS3 (vanilla, no preprocessor)
- JavaScript (vanilla ES6+, no frameworks)

## Build System
- None. This is a static site with no build step, bundler, or package manager.
- Files are served directly — open `main/portfolio.html` in a browser.

## Key Conventions
- CSS custom properties (variables) defined in `:root` for theming.
- No external CSS frameworks or JS libraries — everything is hand-written.
- SVG icons are inlined directly in HTML (no icon library).
- Responsive design via CSS media queries (breakpoints: 900px, 768px, 480px).
- CSS animations used for marquee scrolling and cursor blinking.
- JavaScript uses `setTimeout`-based recursion for the typewriter effect (no `requestAnimationFrame`).

## Common Tasks
| Task | How |
|------|-----|
| View the site | Open `main/portfolio.html` in a browser |
| Add a new project | Add a `.project-card` div in the Projects section of `portfolio.html` |
| Change theme colors | Edit CSS variables in `:root` in `style.css` |
| Add a technology to the marquee | Add a `.tech-item` div (and its duplicate) inside `.tech-marquee` |
