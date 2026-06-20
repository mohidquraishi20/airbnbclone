# Airbnb Homepage Clone

A fully responsive Airbnb-inspired homepage built with React, Vite, Tailwind CSS, and reusable UI components. The project was created for the internship task shown in the brief: build a polished Airbnb homepage clone, add creative improvements, and document the work.

## Features

- Responsive header with navigation, account menu, and destination search.
- Horizontal category filter bar.
- Listing grid rendered from reusable data.
- Image-led hero section and curated experience cards.
- Creative host promotion section beyond the basic Airbnb layout.
- Mobile-first Tailwind CSS styling.
- Accessible buttons, labels, alt text, and semantic sections.
- Documentation for setup, architecture, deployment, and presentation.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React icons
- ESLint

## Getting Started

Install Node.js 18 or newer, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
npm run preview
```

The optimized static files are generated in `dist/`.

## Project Structure

```text
airbnb-homepage-clone/
  docs/
    DEPLOYMENT.md
    DOCUMENTATION.md
    PRESENTATION.md
  src/
    components/
      CategoryBar.jsx
      Experiences.jsx
      Footer.jsx
      Header.jsx
      Hero.jsx
      HostCTA.jsx
      ListingCard.jsx
      ListingGrid.jsx
    data/
      listings.js
    App.jsx
    index.css
    main.jsx
  index.html
  package.json
  tailwind.config.js
```

## Useful Scripts

```bash
npm run dev       # Start local development server
npm run build     # Create production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Notes

This is an educational clone and is not affiliated with Airbnb. Images are loaded from Unsplash URLs for demonstration purposes.
