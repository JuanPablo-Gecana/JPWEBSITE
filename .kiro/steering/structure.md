# Project Structure

```
Portfolio-Website-ni-Jepe/
├── assets/                  # Images (hero photo, about photo, project screenshots, tech logos)
├── main/
│   ├── portfolio.html       # Single-page HTML (all sections in one file)
│   ├── style.css            # All styles (reset, layout, components, responsive)
│   └── script.js            # All interactivity (typewriter, back-to-top, mobile nav, smooth scroll)
├── .gitignore
└── .kiro/                   # Kiro configuration (steering, hooks, etc.)
```

## Architecture Notes
- **Single-page app**: The entire site is one HTML file with anchor-linked sections.
- **Flat structure**: All source files live in `main/`; assets are one level up in `assets/`.
- **Asset references**: HTML references images via relative paths like `../assets/filename.ext`.
- **No routing**: Navigation is handled by in-page anchor links (`#home`, `#about`, `#projects`, `#contact`).
- **No component system**: Sections are inline HTML blocks — there is no templating or partials.
