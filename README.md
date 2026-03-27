# Upendra Publicity – Corporate Website

A high-performance, premium marketing website for Upendra Publicity, Maharashtra's leading outdoor advertising agency. Built with Next.js, featuring advanced animations, smooth scrolling, and a modern dark design system.

## Project Overview

Upendra Publicity is a B2B marketing website showcasing 60+ years of outdoor advertising expertise across Maharashtra. The site provides potential clients and partners with comprehensive information about advertising services (hoardings, railway, mall, airport, highway, and city advertising), company history, project portfolio, and contact options.

The website prioritizes visual impact and user experience through sophisticated scroll-linked animations, custom interaction elements, and a premium glassmorphic design language. It targets high-value corporate clients and brand managers seeking outdoor advertising solutions.

## Implemented Features

- **Shared Data Layer** — Centralized all static data in `/lib/data.ts` and types in `/types/index.ts` for a single source of truth.
- **Backend API Routes** — Implemented `/api/contact` with server-side validation, rate limiting, and sanitization. Added `/api/health` for uptime monitoring.
- **Environment Variable Support** — Configurable via `.env` (WhatsApp number, contact info, etc.) for easier deployment across environments.
- **Error Handling & Resilience** — Integrated `ErrorBoundary` components and try-catch blocks for critical async operations (Lenis, video).
- **Smooth scroll experience** — Lenis scroll hijacking for pixel-perfect scroll control.
- **Autoplay Hero Video** — Background video autoplays in a seamless loop (no longer scroll-synced for smoother performance).
- **Custom animated cursor** — Dot + ring cursor with hover states; scales on interactive elements.
- **WhatsApp integration** — Floating action button backed by environment variables.
- **Media gallery** — Categorized photo galleries with lightbox modal using typed data sources.
- **Responsive design** — Mobile, tablet, desktop optimization via Tailwind CSS and improved typography for readability.
- **Security & Headers** — Robust security headers (HSTS, X-Frame-Options, etc.) and `Cache-Control` for static assets.

## Tech Stack

**Runtime:**
- [Next.js 15.0.3](https://nextjs.org/) — React framework with App Router, TypeScript support
- [React 18.3.1](https://react.dev/) — UI library
- [TypeScript 5](https://www.typescriptlang.org/) — Static type checking

**Styling & Design:**
- [Tailwind CSS 3.4](https://tailwindcss.com/) — Utility-first CSS framework
- [PostCSS 8.4](https://postcss.org/) — CSS transformation tool

**Animations & Interactions:**
- [GSAP 3.12.5](https://gsap.com/) — Professional animation library (reserved for future use)
- [Framer Motion 11.11.11](https://www.framer.com/motion/) — React animation framework
- [Lenis 1.0.42](https://github.com/studio-freight/lenis) — Smooth scroll library with scroll hijacking

**UI Components:**
- [Lucide React 0.460](https://lucide.dev/) — Icon library (20+ icons used)

**Development:**
- Node.js & npm (v18+)
- ESLint (configured via Next.js)
- Autoprefixer + PostCSS (CSS vendor prefixing)

## Architecture & Design

### Page Structure

```
├── app/
│   ├── api/                  # Backend API routes
│   │   ├── contact/route.ts  # POST /api/contact logic
│   │   └── health/route.ts   # GET /api/health logic
│   ├── page.tsx              # Home — hero with autoplay video, grid layout
│   ├── about/page.tsx        # Company timeline, core values
│   ├── services/page.tsx     # Service offerings with feature lists
│   ├── contact/page.tsx      # Contact form (wired to API)
│   ├── media/page.tsx        # Photo gallery
│   ├── layout.tsx            # Metadata, providers, root structure
│   └── globals.css           # Global Design System
├── components/
│   ├── ErrorBoundary.tsx     # React Error Boundary fallback UI
│   ├── Navbar.tsx            # Spaced header with mobile burger
│   ├── Footer.tsx            # Optimized footer with high legibility
│   ├── ClientProviders.tsx   # Composition wrapper (Lenis, ErrorBoundary)
│   ├── LenisProvider.tsx    # Smooth scroll provider (with error handling)
│   ├── CustomCursor.tsx      # Interactive cursor
│   └── WhatsAppFloat.tsx    # Env-variable backed WhatsApp button
├── lib/                      # Production logic
│   ├── data.ts               # SINGLE SOURCE OF TRUTH for all site content
│   ├── constants.ts          # Env-backed site constants (Phone, Email, etc.)
│   ├── validation.ts         # Shared client/server validation schema
├── types/
│   └── index.ts              # TypeScript interfaces (Shared across project)
└── hooks/
    └── useScrollReveal.ts    # Intersection Observer hook for reveals
```

### Component Communication

- **Tree structure:** `ClientProviders` wraps all pages with global providers (Lenis, custom cursor, navbar/footer)
- **Client-side routing:** Next.js App Router handles navigation without full page reloads
- **Scroll state management:** Lenis provides global scroll events; individual components use Intersection Observer for local reveals
- **Form handling:** Contact form is self-contained; validation happens client-side, submission is stubbed (see Known Limitations)

### Key Implementation Details

1. **Scroll-Linked Video** — Uses `requestAnimationFrame` loop to query scroll position and update video playback time:
   ```javascript
   currentTime = (scrollProgress × videoDuration)
   ```

2. **Smooth Scroll** — Lenis hijacks native scroll and applies easing. Components must use `window.scrollY` (not `window.pageYOffset`) for Lenis compatibility.

3. **Scroll Reveals** — Intersection Observer detects when `.reveal` and `.stagger-children` elements enter viewport; `.revealed` class triggers CSS transitions.

4. **Custom Cursor** — Tracks `mousemove` events, applies transforms. Hidden via `cursor: none` on `<html>`.

5. **Form Validation** — Email regex, phone length check, honeypot field (hidden input that bots fill). No backend submission (see limitations).

## Setup & Installation

### Prerequisites

- Node.js v18+ and npm/yarn
- Git (to clone the repository)
- (Optional) Vercel CLI for deployment

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshjaveri/up.git
   cd up
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

### Environment Variables

Configure these in `.env.local` for development and in your hosting UI for production. See [.env.example](.env.example) for details.

```env
NEXT_PUBLIC_WHATSAPP_PHONE=91XXXXXXXXXX
NEXT_PUBLIC_PHONE_NUMBER=+91-XXXX-XXXXXX
NEXT_PUBLIC_EMAIL=contact@upendrapublicity.com
```

## Usage

### Navigation

- **Home (`/`)** — Hero with scroll-linked video, services overview, brand stats
- **About (`/about`)** — Company history (timeline), core values
- **Services (`/services`)** — Detailed breakdown of 7 advertising services with feature lists
- **Media (`/media`)** — Photo gallery by advertising category
- **Contact (`/contact`)** — Contact form (client-side validation; backend not implemented)

### Contact Form (Current State)

The contact form accepts:
- Name, company, phone, email, service category, message
- Client-side validation (email format, phone length, required fields)
- Honeypot spam protection
- **⚠️ Currently: Form validation & UI only. Data is not submitted anywhere.**

To enable actual submissions, implement backend endpoint (see Known Limitations).

### Scroll Interactions

- Hover over interactive elements (links, buttons) to see cursor expansion
- Scroll to trigger element reveal animations
- On home page, scroll to scrub through hero video

## Project Structure

```
up/
├── app/                          # Next.js app directory (App Router)
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services page
│   ├── contact/page.tsx         # Contact page (form stub)
│   ├── media/page.tsx           # Gallery page
│   ├── layout.tsx               # Root layout + metadata
│   └── globals.css              # Global styles, CSS variables
├── components/                   # Reusable React components
│   ├── ClientProviders.tsx      # Root context wrapper
│   ├── Navbar.tsx               # Header navigation
│   ├── Footer.tsx               # Footer
│   ├── LenisProvider.tsx        # Smooth scroll wrapper
│   ├── CustomCursor.tsx         # Custom cursor
│   └── WhatsAppFloat.tsx        # Floating WhatsApp button
├── hooks/                        # Custom React hooks
│   └── useScrollReveal.ts       # Scroll-triggered reveal hook
├── public/                       # Static assets (favicon, logo, etc.)
├── package.json                  # Dependencies & scripts
├── next.config.mjs              # Next.js configuration (security headers, CSP)
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── README.md                     # This file
```

### Key Files

- [app/page.tsx](app/page.tsx) — Home page with complex scroll interactions and video scrubbing
- [next.config.mjs](next.config.mjs) — Security headers (CSP, HSTS, X-Frame-Options)
- [app/globals.css](app/globals.css) — Design system (colors, typography, animations)
- [app/contact/page.tsx](app/contact/page.tsx) — Contact form (client-side validation; see line 84 TODO)

## Known Limitations

### Architectural

1. **No backend** — Contact form validates client-side but does not submit data. Requires API endpoint implementation (see TODO at [app/contact/page.tsx#L84](app/contact/page.tsx#L84)).

2. **No database** — All content is hardcoded in components. Adding new services, locations, or portfolio items requires code edits.

3. **Gallery uses placeholder images** — Media gallery sources photos from Pexels/Unsplash via CDN. Replace with actual project photos for production.

### Performance & UX

4. **Scroll hijacking trade-off** — Lenis smooth scroll conflicts with native browser scroll restoration on navigation. Back button may not restore scroll position correctly.

5. **No service worker/offline mode** — No progressive web app (PWA) features; site requires internet connection.

6. **Memory usage** — Scroll reveal observer adds an Intersection Observer per page. At scale (100+ elements), consider observer pooling.

### Security & Compliance

7. **CSP relaxed for inline scripts** — `script-src 'unsafe-inline' 'unsafe-eval'` allows inline JavaScript (required by Framer Motion and GSAP). For stricter CSP, refactor animations to CSS-only or external scripts.

8. **No CORS headers** — If proxying to external APIs, remember CORS/CORS preflight handling.

9. **No form backend** — Contact form is vulnerable to abuse if real submission is added without rate limiting or CAPTCHA.

### Scalability

10. **No CMS integration** — Adding/updating services, testimonials, or portfolio requires code push. Consider headless CMS (Strapi, Contentful) for content management.

11. **Video filesize** — Hero scroll-linked video preloads in memory. For large videos, consider lazy-loading or streaming.

12. **Hardcoded brand data** — Stats, services, timeline are hardcoded arrays. No dynamic content source.

## Future Improvements

### ✅ Completed (Phase 1 Remediation)

- [x] Create centralized data layer (`lib/data.ts`) and TypeScript types
- [x] Implement backend API routes (`/api/contact`, `/api/health`)
- [x] Add server-side validation, sanitization, and rate limiting
- [x] Implement environment variable management
- [x] Integrate global Error Boundary and error handling
- [x] Optimize UI readability (Footer/Navbar spacing and typography)
- [x] Fix background video loop performance

### 🟡 Phase 2: Testing & Component Decomposition

- [ ] Split `app/page.tsx` into smaller `/components/home/` sub-components
- [ ] Configure testing framework (Vitest + React Testing Library)
- [ ] Write unit tests for validation and core site components
- [ ] Implement `sitemap.ts` and `robots.txt`
- [ ] Create Privacy Policy page (Compliance)

### 🔴 Phase 3: DevOps & Live Integrations

- [ ] Integrate real email delivery service (SendGrid/Nodemailer)
- [ ] Implement database persistence (Prisma + PostgreSQL) for leads
- [ ] Create `Dockerfile` and `docker-compose.yml`
- [ ] Setup GitHub Actions CI/CD pipeline

## Deployment

### Recommended Platforms

- **Vercel** (optimal for Next.js) — Deploy via `git push`:
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify** — Configure `next export` in `next.config.mjs` for static export

- **Docker** — Build container for self-hosted deployment

### Environment Variables (if implemented)

```bash
# .env.local (development)
NEXT_PUBLIC_CONTACT_API_ENDPOINT=http://localhost:3000/api/contact

# Production
NEXT_PUBLIC_CONTACT_API_ENDPOINT=https://upendrapublicity.com/api/contact
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## Code Standards

- **TypeScript strict mode** — All components typed
- **Client-side components** — Marked with `'use client'` (Next.js 13+ convention)
- **No external design system** — Custom Tailwind + CSS variables (see [globals.css](app/globals.css))
- **Naming conventions:**
  - Components: PascalCase (`CustomCursor.tsx`)
  - Hooks: camelCase with `use` prefix (`useScrollReveal.ts`)
  - CSS utilities: kebab-case (`.glass-card`, `.gradient-text`)

## Screenshots / Demo

Currently, the site is hosted at `https://upendrapublicity.com`. To add screenshots:

1. Take high-quality PNG screenshots of key pages (home hero, services grid, contact form)
2. Place in `public/screenshots/` directory
3. Reference in README:
   ```markdown
   ![Home Hero](public/screenshots/hero.png)
   ![Services](public/screenshots/services.png)
   ```

## Contributing

This is a private project. For inquiries about features or bugs, please open an issue in the repository.

## License

Private project — Upendra Publicity. All rights reserved.

---

**Last Updated:** March 2025  
**Maintainer:** [@harshjaveri](https://github.com/harshjaveri)  
**Domain:** upendrapublicity.com
