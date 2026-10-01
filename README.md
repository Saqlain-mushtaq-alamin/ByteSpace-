<div align="center">

# 🚀 ByteSpace

### High-Fidelity Online Learning & Creator Education Platform

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v6.26.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <b>A pixel-perfect, production-grade educational web application built from precision Figma specifications.</b><br />
  Featuring immersive 3D glossy geometric visuals, Persian Blue and Electric Lime design tokens, interactive course players, multi-faceted catalog filtering, and split-screen authentication experiences.
</p>

[Explore Pages](#-pages--routes-directory) • [Quick Start](#-quick-start) • [Design System](#-design-system--brand-tokens) • [Documentation Hub](#-documentation-index)

</div>

---

## 🌟 Overview

**ByteSpace** is a comprehensive educational platform UI designed for digital creators, instructors, and learners. The codebase is engineered with modern frontend practices:

- **100% Type-Safe Architecture**: Clean TypeScript contracts for components, props, design tokens, and catalog models.
- **Tailwind CSS v4 Native `@theme`**: Powered by the newest Tailwind engine with CSS-native variable scales, zero legacy config files, and sub-second builds.
- **Figma Design Fidelity**: Exact 1440px desktop grid alignment, 120px margins, 40px gutters, and custom typography scales (Satoshi, Poppins, Clash Display).
- **Rich Motion & 3D Visuals**: Floating glossy geometric shapes (cones, cylinders, rings, squiggles), glowing radial gradients, and interactive hover effects.
- **Responsive Layouts**: Fully responsive layouts optimized for desktop, tablet, and mobile breakpoints.

---

## 🗺️ Pages & Routes Directory

| Route | Page | Description |
| :--- | :--- | :--- |
| [`/`](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/HomePage.tsx) | **Landing / Home** | Hero with 3D shapes, Partner showcase, Category grid, Featured courses, Student growth section, Testimonials, Creator CTA, and Newsletter footer. |
| [`/login`](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/LoginPage.tsx) | **Sign In** | Split-screen authentication with brand marketing showcase, OAuth buttons (Google, Facebook), form validation, and "Remember me" state. |
| [`/register`](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/RegisterPage.tsx) | **Create Account** | User onboarding with name, email, password fields, terms acceptance, social signup, and instant login toggling. |
| [`/search`](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/SearchPage.tsx) | **Course Catalog** | Faceted filtering (Category, Level, Rating, Price, Duration), live search query, sort dropdown, active chip removal, and responsive pagination. |
| [`/course/:slug`](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/CourseDetailsPage.tsx) | **Course Details** | Tabbed overview (About, Lessons, Reviews), syllabus breakdown, key takeaways, sneak peek image preview gallery, and sticky enrollment card. |
| [`/course/:slug/lessons`](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/CourseLessonsPage.tsx) | **Lesson Player** | Video learning experience with collapsible chapter accordion, interactive progress checkboxes, resource notes, and next/previous controls. |
| [`/course/:slug/reviews`](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/CourseReviewsPage.tsx) | **Course Reviews** | Aggregate star rating score, 5-star distribution visualizer, rating filter pills, verified student reviews, and review submission trigger. |
| [`/creator/:slug`](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/CreatorProfilePage.tsx) | **Creator Profile** | Instructor showcase with verified badge, stat counters (students, courses, rating), biography, social links, and published course grid. |
| `*` | **404 Fallback** | Friendly error recovery screen with direct links back to Home and Search. |

---

## 🎨 Design System & Brand Tokens

The design system is managed inside [src/index.css](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/index.css) using Tailwind CSS v4's native `@theme` layer:

### Color Palette

| Token Ramp | Core Color | Role |
| :--- | :--- | :--- |
| **Persian Blue** (`--color-brand`) | `#003be2` | Primary brand color, primary CTA buttons, active tab underlines, focal icons |
| **Electric Lime** (`--color-lime`) | `#d4fb20` | High-energy secondary accent, badge highlights, 3D floating hero shapes |
| **Slate Charcoal** (`--color-gray-950` to `50`) | `#242528` | Crisp typography, surface cards, dividers, and background contrast |

### Typography Stack

```css
--font-satoshi: "Satoshi", ui-sans-serif, system-ui, sans-serif;
--font-poppins: "Poppins", ui-sans-serif, system-ui, sans-serif;
--font-clash:   "Clash Display", ui-sans-serif, system-ui, sans-serif;
```

- **Poppins (Display Headings)**: `.text-heading-l` (72px), `.text-heading-m` (44px), `.text-heading-s` (36px), `.text-heading-xs` (20px)
- **Satoshi (Body & UI)**: `.text-body-l` (18px), `.text-body-m` (16px), `.text-body-s` (14px), `.text-body-xs` (12px)
- **Satoshi (Labels)**: `.text-label-l` (18px), `.text-label-m` (16px), `.text-label-s` (14px), `.text-label-xs` (12px)

### Grid System

- **Desktop Width**: `1440px` canvas with `max-w-[1440px] mx-auto`
- **Side Margins**: `120px` (`px-6 md:px-12 lg:px-[120px]`)
- **Column Gutters**: `40px` (`gap-6 md:gap-8 lg:gap-[40px]`)
- **Blue Grid Overlay**: Built-in `@utility bg-grid` (120px cells with subtle translucency)

---

## ⚡ Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.x` or `>= 20.x` recommended)
- `npm` (version `9.x` or higher)

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/Saqlain-mushtaq-alamin/ByteSpace-.git

# Navigate to the project root
cd bytespace-auth

# Install dependencies
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Visit the local development server at:
- **Home**: `http://localhost:5173/`
- **Login**: `http://localhost:5173/login`
- **Register**: `http://localhost:5173/register`
- **Search Catalog**: `http://localhost:5173/search`
- **Course Details**: `http://localhost:5173/course/build-digital-assets`
- **Course Lessons**: `http://localhost:5173/course/build-digital-assets/lessons`
- **Course Reviews**: `http://localhost:5173/course/build-digital-assets/reviews`
- **Creator Profile**: `http://localhost:5173/creator/purepearl-studio`

### 3. Production Build & Validation

```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture & Structure

```
bytespace-auth/
├── docs/                       # Comprehensive Technical Documentation
│   ├── ARCHITECTURE.md         # Technical architecture & engineering decisions
│   ├── DESIGN_SYSTEM.md        # Tokens, typography ramps, colors, and grid
│   ├── PAGES_AND_ROUTES.md     # Route descriptions, parameters, and flows
│   ├── COMPONENTS.md           # Reusable component API manual
│   └── ASSETS_GUIDE.md         # 3D assets, icons, avatars, and media pipeline
├── public/                     # Public static web assets
├── src/
│   ├── assets/                 # SVGs, icons, and 3D geometric shapes
│   │   ├── icons/              # Functional glyphs, brand marks, and social logos
│   │   └── images/             # Covers, characters, avatars, and 3D decorations
│   ├── components/             # Reusable UI component modules
│   │   ├── course/             # Master course layout and lesson containers
│   │   ├── home/               # Hero, partners, categories, growth, and testimonials
│   │   ├── layout/             # AuthLayout, Navigation Header, and Footers
│   │   ├── marketing/          # Course cards, hero showcases, and avatar stacks
│   │   ├── shared/             # Accordion, Tabs, Pagination, RatingStars, FilterSidebar
│   │   └── ui/                 # Button, Input, Divider, SocialButton primitives
│   ├── lib/                    # Shared utility functions (e.g. cn.ts)
│   ├── pages/                  # Route view components
│   ├── App.tsx                 # Route mapping table
│   ├── index.css               # Global styles, fonts, and Tailwind @theme
│   └── main.tsx                # React DOM entry point
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite bundler configuration & @ alias
```

---

## 📚 Documentation Index

For in-depth guides, visit the documentation directory:

- 🏛️ **[Technical Architecture & Engineering Guide](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/docs/ARCHITECTURE.md)**: Deep dive into the tech stack, component layering, alias paths, and performance optimizations.
- 🎨 **[Design System & Brand Tokens](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/docs/DESIGN_SYSTEM.md)**: Complete color tables, typography ramps, spacing rules, and elevation shadows.
- 🚦 **[Pages & Routing Guide](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/docs/PAGES_AND_ROUTES.md)**: Page-by-page walkthrough of features, props, query parameters, and interactive states.
- 🧩 **[Component Reference Manual](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/docs/COMPONENTS.md)**: API catalog for UI primitives, marketing elements, shared widgets, and layouts.
- 🖼️ **[Assets & Media Pipeline Guide](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/docs/ASSETS_GUIDE.md)**: Catalog of 3D geometric shapes, character cutouts, student avatars, and optimization tips.

---

## 🛠️ Scripts & Tooling

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with hot module replacement (HMR). |
| `npm run build` | Runs TypeScript project compiler (`tsc -b`) and bundles production assets with Rollup. |
| `npm run preview` | Spins up a local web server to preview the production `dist/` bundle. |

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Verify type checking and build passes: `npm run build`.
4. Commit your changes: `git commit -m 'feat: add amazing feature'`.
5. Push to your branch: `git push origin feature/amazing-feature`.
6. Open a Pull Request.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
