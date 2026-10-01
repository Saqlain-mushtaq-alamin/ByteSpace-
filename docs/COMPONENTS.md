# ByteSpace Component Reference Manual

This catalog documents the reusable components in ByteSpace, detailing their directory location, prop contracts, variants, and usage guidelines.

---

## 1. UI Primitives (`src/components/ui/`)

### `Button`
- **File**: [src/components/ui/Button.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/ui/Button.tsx)
- **Description**: Highly configurable button primitive supporting multiple visual variants and sizes.
- **Props**:
  ```ts
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "lime";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    children: React.ReactNode;
  }
  ```
- **Variants**:
  - `primary`: Solid Persian Blue (`bg-brand hover:bg-brand-900 text-white`)
  - `secondary`: Neutral dark charcoal (`bg-gray-950 text-white hover:bg-gray-800`)
  - `outline`: Border stroke (`border border-gray-200 text-gray-950 hover:bg-gray-50`)
  - `ghost`: Transparent background (`hover:bg-gray-100 text-gray-700`)
  - `lime`: Electric Lime action button (`bg-lime text-gray-950 hover:bg-lime-500 font-semibold`)

---

### `Input`
- **File**: [src/components/ui/Input.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/ui/Input.tsx)
- **Description**: Text field component with label, helper text, error handling, and left/right icon slots.
- **Props**:
  ```ts
  interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    icon?: React.ReactNode;
    rightElement?: React.ReactNode;
  }
  ```

---

### `SocialButton`
- **File**: [src/components/ui/SocialButton.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/ui/SocialButton.tsx)
- **Description**: Full-width social authentication button for OAuth integrations (Google, Facebook).
- **Props**:
  ```ts
  interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    provider: "google" | "facebook";
    children: React.ReactNode;
  }
  ```

---

### `Divider`
- **File**: [src/components/ui/Divider.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/ui/Divider.tsx)
- **Description**: Visual horizontal separator with optional center-aligned label (e.g. "Or continue with").
- **Props**:
  ```ts
  interface DividerProps {
    label?: string;
    className?: string;
  }
  ```

---

## 2. Marketing Components (`src/components/marketing/`)

### `CourseCard`
- **File**: [src/components/marketing/CourseCard.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/marketing/CourseCard.tsx)
- **Description**: Primary course presentation card rendered throughout the homepage, search catalog, and creator profiles.
- **Key Features**:
  - Image cover thumbnail with responsive aspect ratio
  - Category pill badge (e.g. "UI/UX Design", "Web Development")
  - Course title and creator name with link to `/creator/:slug`
  - Lesson count, duration, and comments count with custom icon glyphs
  - Interactive rating star indicator with numerical score
  - Pricing tag (e.g. `$25/lifetime`) and difficulty tag (`Beginner`, `Intermediate`)
- **Props**:
  ```ts
  interface CourseCardProps {
    id?: string;
    title: string;
    slug?: string;
    instructor: string;
    instructorSlug?: string;
    image: string;
    category?: string;
    lessonsCount?: number | string;
    duration?: string;
    commentsCount?: number | string;
    rating?: number;
    price?: string;
    level?: string;
    featured?: boolean;
  }
  ```

---

### `HeroShowcase`
- **File**: [src/components/marketing/HeroShowcase.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/marketing/HeroShowcase.tsx)
- **Description**: Visual brand showcase utilized in split-screen authentication layouts (`/login`, `/register`). Contains floating 3D cards, student satisfaction pills, and high-energy decorative graphics.

---

### `AvatarStack` & `HappyStudentsCard`
- **Files**: [src/components/marketing/AvatarStack.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/marketing/AvatarStack.tsx), [src/components/marketing/HappyStudentsCard.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/marketing/HappyStudentsCard.tsx)
- **Description**: Overlapping avatar presentation displaying verified student photos, aggregate ratings (`4.5 (240)`), and community counters (`2K+ enrolled`).

---

## 3. Course Components (`src/components/course/`)

### `CourseLayout`
- **File**: [src/components/course/CourseLayout.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/course/CourseLayout.tsx)
- **Description**: Master layout wrapper for all `/course/:slug/*` routes.
- **Key Features**:
  - Sticky breadcrumb header with course title
  - Integrated navigation tabs (`About`, `Lessons`, `Reviews`) with active underline indicators
  - Right-column sticky summary enrollment card with video cover preview and pricing CTA
  - Mobile responsive drawer collapse for smaller screens

---

## 4. Shared Components (`src/components/shared/`)

| Component | File Path | Description |
| :--- | :--- | :--- |
| `Accordion` | [src/components/shared/Accordion.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/shared/Accordion.tsx) | Collapsible syllabus modules and FAQ sections |
| `Breadcrumb` | [src/components/shared/Breadcrumb.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/shared/Breadcrumb.tsx) | Hierarchical breadcrumb navigation trails |
| `CourseIcons` | [src/components/shared/CourseIcons.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/shared/CourseIcons.tsx) | Reusable SVG icons (Clock, BookOpen, MessageSquare, Star, Play, CheckCircle, Award) |
| `DesignAssets` | [src/components/shared/DesignAssets.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/shared/DesignAssets.tsx) | Centralized asset export registry for 3D shapes, avatars, frames, and vectors |
| `FilterSidebar` | [src/components/shared/FilterSidebar.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/shared/FilterSidebar.tsx) | Faceted catalog search filters |
| `NewsletterFooter` | [src/components/shared/NewsletterFooter.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/shared/NewsletterFooter.tsx) | Full-width marketing newsletter subscription block with multi-column links |
| `Pagination` | [src/components/shared/Pagination.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/shared/Pagination.tsx) | Page number navigation with next/previous controls |
| `RatingStars` | [src/components/shared/RatingStars.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/shared/RatingStars.tsx) | Fractional star rendering with numeric rating displays |
| `Tabs` | [src/components/shared/Tabs.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/shared/Tabs.tsx) | Accessible tab switcher with keyboard navigation |

---

## 5. Layout Components (`src/components/layout/`)

### `AuthLayout`
- **File**: [src/components/layout/AuthLayout.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/layout/AuthLayout.tsx)
- **Description**: Dual-column container separating the marketing hero showcase from interactive authentication forms. Ensures symmetric padding, responsive collapsing on mobile, and brand logo placement.

### `Header`
- **File**: [src/components/layout/Header.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/layout/Header.tsx)
- **Description**: Compact navigation bar used across subpages, course players, and error states.
