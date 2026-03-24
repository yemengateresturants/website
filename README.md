# Yemen Gate - Official Website

Official website for **Yemen Gate** (باب اليمن), an authentic Yemeni restaurant with two locations in Ottawa, Ontario.

## Locations

- **St Joseph Blvd** — 2871 St Joseph Blvd, Orleans, ON K1C 1G8
- **Bank Street** — 1394 Bank St, Ottawa, ON K1H 7Y3

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS
- **Internationalization:** next-intl (English, Arabic, French)
- **Email:** EmailJS
- **Hosting:** Netlify

## Features

- Multi-language support (EN / AR / FR) with RTL support for Arabic
- Online menu for both locations
- Table reservation system (St Joseph Blvd)
- Order online page
- Contact form
- Promotional slideshow
- Google Reviews / Testimonials carousel
- SEO optimized with LD+JSON structured data, Open Graph, and sitemap
- Fully responsive design

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/
├── [locale]/
│   ├── layout.tsx              # Root layout with metadata & i18n
│   ├── page.tsx                # Home page
│   ├── book-table/             # Table reservation (St Joseph)
│   ├── order-online/           # Order online
│   ├── contact-us/             # Contact page
│   └── menu/
│       ├── bank-st/            # Bank Street menu
│       └── st-joseph-blvd/     # St Joseph Blvd menu
├── components/                 # Shared components
└── styles.scss                 # Global styles
messages/
├── en.json                     # English translations
├── ar.json                     # Arabic translations
└── fr.json                     # French translations
```

## Environment

No environment variables required. EmailJS keys are client-side and bundled into the build.

## Deployment

Push to `main` branch to trigger automatic deployment on Netlify.
