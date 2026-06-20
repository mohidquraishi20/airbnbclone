# Project Documentation

## 1. Project Overview

This project implements a responsive Airbnb homepage clone using React and Tailwind CSS. The homepage focuses on the visual and functional patterns of a modern travel marketplace: destination search, category browsing, image-led property cards, experience promotion, and a host call-to-action.

The project is designed as an internship submission, so the code is split into small components, uses reusable mock data, and includes setup and deployment instructions.

## 2. Objectives Covered

- Component-based architecture with React.
- Responsive design with Tailwind CSS.
- Third-party icon library integration using `lucide-react`.
- Creative enhancement through the host promotion and trip-planning sections.
- Clean documentation for setup, architecture, and deployment.

## 3. Architecture

The root component is `App.jsx`. It composes the homepage from focused UI sections:

- `Header`: sticky navigation and search form.
- `Hero`: first viewport marketing/search context.
- `CategoryBar`: horizontally scrollable stay categories.
- `ListingGrid`: renders all homes from `listings.js`.
- `ListingCard`: reusable property card.
- `Experiences`: trip-planning cards.
- `HostCTA`: creative hosting promotion.
- `Footer`: supporting informational links.

Data is stored in `src/data/listings.js` so the UI can be updated without changing component logic.

## 4. Styling Approach

Tailwind CSS is used for layout, spacing, typography, states, and responsiveness. Shared utility classes are defined in `src/index.css` under `@layer components`:

- `page-shell` keeps page content aligned.
- `icon-button` standardizes round icon controls.
- `pill-button` standardizes rounded action buttons.
- `section-title` standardizes section headings.

The custom Tailwind theme adds Airbnb-inspired colors and shadows in `tailwind.config.js`.

## 5. Responsiveness

The interface is mobile-first:

- Header navigation collapses on smaller screens.
- Search form changes from stacked mobile layout to multi-column desktop layout.
- Category buttons scroll horizontally.
- Listing grid moves from one column to four columns depending on viewport width.
- Experience and host sections stack naturally on mobile.

## 6. Accessibility

Accessibility improvements include:

- Semantic `header`, `main`, `section`, `article`, and `footer` elements.
- Form labels for search fields.
- `aria-label` values for icon-only buttons.
- Descriptive image `alt` text.
- Visible focus rings on interactive controls.

## 7. Creative Additions

The project goes beyond a plain clone with:

- A host promotion section for users interested in listing their homes.
- Experience cards for work trips, local stays, and weekend escapes.
- Data-driven listing rendering to support future API integration.
- A polished visual system that resembles Airbnb while remaining original enough for a student project.

## 8. Known Limitations

- Search and filter controls are presentational only.
- Listing data is static mock data.
- Images load from remote Unsplash URLs, so an internet connection is required for images to appear.

## 9. Future Improvements

- Add live search and filtering.
- Add map preview.
- Connect listings to an API or local JSON server.
- Add favorites state with local storage.
- Add unit tests for components and interactions.
