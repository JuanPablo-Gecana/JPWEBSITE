# Project Structure

```text
Portfolio-Website-ni-Jepe/
├── .kiro/
│   ├── hooks/                       # Currently empty
│   └── steering/
│       ├── design.md
│       ├── product.md
│       ├── structure.md
│       └── tech.md
├── assets/
│   ├── about-photo.jpg              # Referenced by About and present
│   ├── hero-photo.jpg               # Present but currently unreferenced
│   ├── tech-cpp.png                 # Present but currently unreferenced
│   ├── tech-css.png                 # Present but currently unreferenced
│   ├── tech-expressjs.png           # Present but currently unreferenced
│   ├── tech-html.png                # Present but currently unreferenced
│   └── tech-javascript.png          # Present but currently unreferenced
├── main/
│   ├── portfolio.html               # Entire single-page website
│   ├── style.css                    # Reset, design, layout, responsive rules
│   └── script.js                    # Typewriter, back-to-top, and stale nav handlers
├── .gitignore
├── changelog.txt
└── todo.txt
```

## Missing Referenced Assets
`portfolio.html` references the following files, but they are not currently present in `assets/`:
- `project-1.jpg`
- `project-2.jpg`
- `project-3.jpg`

## Page Architecture
- The website is a single static HTML page with no router, templates, partials, or component framework.
- The only current in-page navigation link is the `jepe.exe` logo pointing to `#home`.
- IDs also exist for `#about`, `#projects`, and `#contact`, but no current navbar links target them.
- Images are referenced from HTML with paths relative to `main/`, such as `../assets/about-photo.jpg`.
- Section order: Navbar → Hero → About → Experiences → Affiliations & Awards → Technologies → Projects → Contact → Footer → Back-to-top button.
- Technologies is a direct `<div class="tech-section">`, not a semantic `<section>`, and has no ID.
- Experiences and Affiliations/Awards have no IDs.

## Main Markup Hierarchy
- **Navbar**: `.navbar > .nav-container > a.nav-logo`
- **Hero**: `.hero-section > .hero-container > .hero-left`; `h1.hero-tagline` currently contains `.typewriter-container`, followed by `.hero-left-lower`.
- **About**: `.about-section > .about-container`, split into `.about-image-wrapper` and `.about-text`.
- **Experiences**: `.experiences-section > .experiences-container`, containing `.section-heading` and `.affiliations-content`.
- **Affiliations/Awards**: `.affiliations-section > .affiliations-container > .affiliations-column`; each column contains `.section-heading` and `.affiliations-content`.
- **Technologies**: `.tech-section > .tech-heading + .tech-grid > .tech-column`; each item is `.tech-item > .tech-icon-box + span`.
- **Projects**: `.projects-section > .projects-container > .project-card`; each card contains `.project-front` and `.project-back`.
- **Contact**: `.contact-section > .contact-container`, split into `.contact-info-row` and `.contact-socials`.

## Known Structural Mismatches
- `.typewriter-container` is a `<div>` nested inside an `<h1>`, which is invalid heading content structure.
- `script.js` still expects `.nav-toggle` and `.nav-links`, but neither exists in the current HTML.
- CSS still contains rules for absent elements/classes, including `.nav-toggle`, `.nav-links`, `.hamburger`, `.hero-name`, `.hero-buttons`, `.btn`, `.social-icons`, and `.page-decor`.
