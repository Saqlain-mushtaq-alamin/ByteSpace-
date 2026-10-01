# ByteSpace Assets & Media Pipeline Guide

This document catalogs all visual assets, 3D geometric illustrations, icons, avatars, and photography in the ByteSpace project, along with recommendations for maintenance and optimization.

---

## Centralized Asset Registry

All static assets are cleanly re-exported with TypeScript typings through [src/components/shared/DesignAssets.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/shared/DesignAssets.tsx). This avoids brittle relative path references across deep component folders.

```tsx
import { 
  HeroShapes, 
  HeroCharacters, 
  StudentAvatars, 
  CourseThumbnails, 
  BrandIcons 
} from "@/components/shared/DesignAssets";
```

---

## 1. 3D Geometric Assets (`src/assets/images/hero/`)

The hero section and marketing showcases feature custom 3D glossy geometric shapes that give the platform its playful, modern aesthetic.

| Asset File | Name / Shape | Color / Texture | Usage |
| :--- | :--- | :--- | :--- |
| `shape-cone-lime.png` | Cone (Solid) | Electric Lime Gloss | Floating hero element, top-right accent |
| `shape-cone-line.png` | Cone (Wireframe) | Lime / White Outline | Technical depth decoration |
| `shape-cone-white.png` | Cone (Solid) | White Matte Gloss | Secondary hero accent |
| `shape-cylinder-lime.png` | Cylinder | Electric Lime | Floating hero element, mid-left |
| `shape-cylinder-white.png` | Cylinder | Clean White | Mid-ground depth element |
| `shape-ring-lime.png` | Torus / Ring | Electric Lime | Floating foreground ring |
| `shape-ring-white.png` | Torus / Ring | White Gloss | Right-column depth element |
| `shape-squiggle-lime.png` | Squiggle / Wave | Electric Lime Spiral | Dynamic trajectory highlight |
| `shape-squiggle-white.png` | Squiggle / Wave | Large White Spiral | Hero right backdrop |
| `shape-squiggle-white-small.png` | Squiggle / Wave | Compact White Spiral | Compact card accent |
| `Ellipse.png` ... `Ellipse-6.png` | Glowing Halos | Translucent Radial Gradients | Ambient glow behind 3D objects |
| `Frame.png` | Framed Geometric Art | 3D Composite | Feature highlight card |

---

## 2. Character & Portrait Photography

High-resolution transparent PNG portraits that establish human connection and learning outcomes:

| Asset File | Dimensions | Usage | Description |
| :--- | :--- | :--- | :--- |
| `src/assets/images/hero/hero-man.png` | High-res cutout | Homepage Hero Section | Enthusiastic student holding tablet/laptop |
| `src/assets/images/hero/growth-woman.png` | High-res cutout | Student Growth Section | Professional creator / learner collaborating |
| `src/assets/images/creator-image.png` | High-res portrait | Creator Profile (`/creator/:slug`) | Professional headshot for course author |

---

## 3. Learner Avatars (`src/assets/images/avatars/`)

Circular learner portraits utilized in `AvatarStack`, `HappyStudentsCard`, and testimonials:

- `Ellipse-0.png`
- `Ellipse-1.png`
- `Ellipse-2.png`
- `Ellipse-3.png`
- `Ellipse-4.png`

---

## 4. Course Artwork & Gallery Previews (`src/assets/images/`)

| Asset File | Usage |
| :--- | :--- |
| `course-figma.png` | Main featured course artwork (Figma Masterclass) |
| `course-video-cover.png` | Video player thumbnail for course lessons and details |
| `Rectangle.png`, `Rectangle-1.png` | "Sneak Peak" curriculum preview images on Course Details |
| `Rectangle-2.png`, `Rectangle-3.png` | Additional course syllabus preview thumbnails |
| `Frame.png`, `Frame-1.png`, `Frame-2.png`, `Frame-3.png`, `Frame-4.png` | Framed topic artworks for course categories |

---

## 5. Icons & Branding (`src/assets/icons/`)

| Asset | Format | Purpose |
| :--- | :--- | :--- |
| `logo-mark.svg` | SVG | Official ByteSpace geometric chevron brand logo |
| `google.png` | PNG | Google Identity OAuth button icon |
| `facebook.png` | PNG | Facebook OAuth button icon |
| `Vector.png`, `Vector-1.png`, `Vector-2.png`, `Vector-3.png`, `Vector-5.png` | PNG / SVG | Brand glyphs, checkmarks, and UI accents |

---

## Optimization & Production Checklist

1. **Format Upgrades**: All raster PNGs can be converted to WebP or AVIF for an additional ~30-50% file size reduction in production.
2. **Responsive srcset**: For mobile devices, deliver downscaled hero cutouts (`hero-man@1x.webp` vs `hero-man@2x.webp`).
3. **Lazy Loading**: Non-critical thumbnails (such as testimonials and sneak peek rectangles) utilize `loading="lazy"` to speed up the First Contentful Paint (FCP).
