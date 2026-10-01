# ByteSpace Architecture & Engineering Guide

This document outlines the architecture, structural decisions, and engineering patterns used in **ByteSpace**, a modern, high-fidelity online learning and creator education platform.

---

## 1. System Overview

ByteSpace is built as a single-page application (SPA) focused on clean design tokens, responsive typography, and modular component isolation.

```
┌─────────────────────────────────────────────────────────────┐
│                       ByteSpace Client                      │
│                                                             │
│  ┌─────────────────────────┐   ┌──────────────────────────┐ │
│  │   React 18 SPA Engine   │   │     React Router v6      │ │
│  │   (Vite + TypeScript)   │   │   (Declarative Routes)   │ │
│  └────────────┬────────────┘   └─────────────┬────────────┘ │
│               │                              │              │
│  ┌────────────▼──────────────────────────────▼───────────┐  │
│  │                     Pages Layer                       │  │
│  │  Home | Login | Register | Search | Course | Creator  │  │
│  └──────────────────────────┬────────────────────────────┘  │
│                             │                               │
│  ┌──────────────────────────▼────────────────────────────┐  │
│  │                   Components Layer                    │  │
│  │   Layout  │  Course  │  Marketing  │  Shared  │  UI   │  │
│  └──────────────────────────┬────────────────────────────┘  │
│                             │                               │
│  ┌──────────────────────────▼────────────────────────────┐  │
│  │           Styling & Design Tokens Engine              │  │
│  │    Tailwind CSS v4 (@theme) + Brand Tokens Ramp       │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack & Key Choices

| Technology | Version | Purpose & Rationale |
| :--- | :--- | :--- |
| **React** | `^18.3.1` | Component-based UI library with Concurrent rendering features and declarative state updates. |
| **TypeScript** | `^5.5.3` | Strong static typing for component props, design tokens, data models, and UI contracts. |
| **Vite** | `^5.4.0` | Ultra-fast ESM-based development server and Rollup production bundler. |
| **Tailwind CSS** | `^4.0.0` | Next-generation utility-first styling with native `@theme` configuration, zero-config build speed, and CSS variables. |
| **React Router** | `^6.26.0` | Client-side routing with nested layout support, parameterized paths, and dynamic query handling. |

---

## 3. Directory Structure

```
bytespace-auth/
├── docs/                       # Technical and design system documentation
│   ├── ARCHITECTURE.md         # Architecture and structural engineering guide
│   ├── DESIGN_SYSTEM.md        # Tokens, typography ramps, color palettes, and grid
│   ├── PAGES_AND_ROUTES.md     # Route descriptions, parameters, and user flows
│   ├── COMPONENTS.md           # Component reference and API documentation
│   └── ASSETS_GUIDE.md         # Asset pipeline, 3D shapes, avatars, and icons
├── planning/                   # Design specifications, TeleportHQ exports, and references
├── public/                     # Static root files and browser icons
├── src/
│   ├── assets/                 # Vector icons, SVG logo marks, and raster artwork
│   │   ├── icons/              # Functional interface icons and OAuth logos
│   │   └── images/             # Product photography, course covers, and 3D shapes
│   │       ├── avatars/        # Student and creator avatar images
│   │       └── hero/           # 3D geometric shapes, cones, rings, and cylinders
│   ├── components/             # Reusable UI component layer
│   │   ├── course/             # Course layout and learning interface modules
│   │   ├── home/               # Homepage hero, categories, stats, and testimonials
│   │   ├── layout/             # Application shell, navigation headers, and auth wrapper
│   │   ├── marketing/          # Value propositions, hero showcase, and course cards
│   │   ├── shared/             # General-purpose components (Accordion, Tabs, Breadcrumbs)
│   │   └── ui/                 # Primitives (Button, Input, Divider, SocialButton)
│   ├── lib/                    # Core utilities and helper functions
│   │   └── cn.ts               # Class name merging utility
│   ├── pages/                  # Route view components
│   │   ├── CourseDetailsPage.tsx
│   │   ├── CourseLessonsPage.tsx
│   │   ├── CourseReviewsPage.tsx
│   │   ├── CreatorProfilePage.tsx
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── SearchPage.tsx
│   ├── App.tsx                 # Top-level route configuration
│   ├── index.css               # Global CSS, font imports, and Tailwind @theme tokens
│   ├── main.tsx                # React DOM root entry point
│   └── vite-env.d.ts           # Vite TypeScript ambient declarations
├── index.html                  # HTML5 entry with Google Fonts preconnect
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite plugins and alias resolution (@ -> /src)
```

---

## 4. Path Alias Resolution

The build configuration establishes `@` as an alias pointing to the `src` directory:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

This ensures clean, portable import statements across the entire project:
```tsx
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/marketing/CourseCard";
import { CourseLayout } from "@/components/course/CourseLayout";
```

---

## 5. Design Token Integration (Tailwind v4)

Tailwind CSS v4 replaces legacy JavaScript config files (`tailwind.config.js`) with native CSS `@theme` directives configured in [src/index.css](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/index.css).

```css
@import "tailwindcss";

@theme {
  --font-satoshi: "Satoshi", ui-sans-serif, system-ui, sans-serif;
  --font-poppins: "Poppins", ui-sans-serif, system-ui, sans-serif;
  --font-clash: "Clash Display", ui-sans-serif, system-ui, sans-serif;

  /* Primary Brand Scale (Persian Blue) */
  --color-brand: #003be2;
  --color-brand-50: #e7f6ff;
  --color-brand-500: #2872ff;
  --color-brand-900: #0b36a4;

  /* Secondary Accent (Electric Lime) */
  --color-lime: #d4fb20;
  --color-lime-500: #cbfc01;

  /* Radius Tokens */
  --radius-input: 12px;
  --radius-pill: 24px;
  --radius-card: 24px;

  /* 12-Column Grid Tokens */
  --grid-margin: 120px;
  --grid-gutter: 40px;
}
```

Typography utility classes are defined under `@layer components`:
- `.text-heading-l`: `72px`, SemiBold, leading 1.2
- `.text-heading-m`: `44px`, SemiBold, leading 1.2
- `.text-heading-s`: `36px`, SemiBold, leading 1.2
- `.text-heading-xs`: `20px`, SemiBold, leading 1.2
- `.text-body-l` / `.text-body-m` / `.text-body-s` / `.text-body-xs`: `18px`, `16px`, `14px`, `12px`
- `.text-label-l` / `.text-label-m` / `.text-label-s` / `.text-label-xs`: Medium weights for interactive controls and metadata

---

## 6. Routing Strategy

Routing is handled via React Router v6 in [src/App.tsx](file:///d:/canvas/bytespace-auth%20%282%29/bytespace-auth/src/App.tsx):

```tsx
<Routes>
  {/* Landing Experience */}
  <Route path="/" element={<HomePage />} />

  {/* Authentication Experiences */}
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />

  {/* Course Discovery & Catalog */}
  <Route path="/search" element={<SearchPage />} />

  {/* Course Deep Dives */}
  <Route path="/course/:slug" element={<CourseDetailsPage />} />
  <Route path="/course/:slug/lessons" element={<CourseLessonsPage />} />
  <Route path="/course/:slug/reviews" element={<CourseReviewsPage />} />
  <Route path="/reviews" element={<CourseReviewsPage />} />

  {/* Creator / Instructor Showcase */}
  <Route path="/creator/:slug" element={<CreatorProfilePage />} />

  {/* Fallback */}
  <Route path="*" element={<NotFoundPage />} />
</Routes>
```

---

## 7. Performance and Build Optimization

1. **Native ESM in Development**: Vite serves source files over native ES modules, eliminating bundling overhead during local editing.
2. **Dynamic Asset Optimization**: All course graphics and 3D geometric illustrations are placed in `src/assets/` and processed by Rollup for hashing and cache busting.
3. **Tree-Shaking**: Pure TypeScript modular exports allow Rollup to discard unused functions and CSS rules automatically.
4. **Accessible Elements**: Form controls and interactive navigation use semantic elements (`<nav>`, `<header>`, `<main>`, `<section>`, `<article>`) with accessible ARIA labels.
