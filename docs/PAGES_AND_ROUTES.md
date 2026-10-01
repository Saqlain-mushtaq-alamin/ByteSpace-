# ByteSpace Pages & Routing Guide

This document provides a breakdown of all views, routes, interactive behaviors, and data requirements across the ByteSpace platform.

---

## Route Overview Table

| Route | Page Component | Key Modules & Sections | Purpose |
| :--- | :--- | :--- | :--- |
| `/` | `HomePage.tsx` | Hero, Partners, Categories, Featured, Growth, Testimonials, CTA, Footer | Main marketing entry point & discovery engine |
| `/login` | `LoginPage.tsx` | Split screen, OAuth buttons, Email/password form, HeroShowcase | Member sign-in with visual branding |
| `/register` | `RegisterPage.tsx` | Split screen, Full name, Email/password, Terms checkbox, HeroShowcase | New student account onboarding |
| `/search` | `SearchPage.tsx` | Search bar, Filter sidebar, Sort dropdown, Active tags, Course grid, Pagination | Full catalog exploration and filtering |
| `/course/:slug` | `CourseDetailsPage.tsx` | CourseLayout, Overview tabs, Sneak peek previews, Key takeaways, Sticky pricing sidebar | In-depth course syllabus and enrollment conversion |
| `/course/:slug/lessons`| `CourseLessonsPage.tsx` | CourseLayout, Video player, Chapter accordion, Lesson completion toggles, Resource notes | Interactive course playback and progress tracking |
| `/course/:slug/reviews`| `CourseReviewsPage.tsx` | CourseLayout, Rating score breakdown, Star distribution bars, Student review cards | Social proof, verified ratings, and feedback |
| `/reviews` | `CourseReviewsPage.tsx` | (Alias) Generic/default course review browser | Direct review browsing route |
| `/creator/:slug` | `CreatorProfilePage.tsx` | Creator banner, Avatar, Verified badge, Stats counter, Bio, Social links, Published courses | Instructor portfolio and catalog |
| `*` | `NotFoundPage.tsx` | Error illustration, Explanatory copy, Quick navigation recovery buttons | 404 error fallback |

---

## Detailed Page Specifications

### 1. Home Page (`/`)
- **Route**: `/`
- **File**: [src/pages/HomePage.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/HomePage.tsx)
- **Sections**:
  1. `HomeHeader`: Sticky navigation header with logo, navigation links (`Home`, `Courses`, `Creators`), search quick-action, and `Sign In` / `Join Us` buttons.
  2. `HeroSection`: Persian Blue gradient background with grid lines, 3D floating shapes (`shape-cone-lime`, `shape-ring-white`, `shape-cylinder-lime`, `shape-squiggle-lime`), interactive search input, and real-time student counter.
  3. `LogoPartners`: Monochromatic partner logos (Slack, Google, Netflix, Spotify, Amazon).
  4. `CategoriesGrid`: 12+ creative and tech discipline cards with active hover states and course counts.
  5. `FeaturedCoursesSection`: Curated high-rated course cards with category chips, lesson counts, ratings, and pricing badges.
  6. `GrowthSection`: High-contrast dual-panel layout illustrating community growth metrics, live mentor support, and structured roadmaps.
  7. `TestimonialsSection`: Student testimonials featuring verified avatars, star ratings, and student reviews.
  8. `CtaSection`: High-energy creator acquisition banner inviting instructors to build digital products.
  9. `NewsletterFooter`: Newsletter opt-in, comprehensive site map links, social profiles, and copyright notice.

---

### 2. Login Page (`/login`)
- **Route**: `/login`
- **File**: [src/pages/LoginPage.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/LoginPage.tsx)
- **Layout**: Uses [src/components/layout/AuthLayout.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/layout/AuthLayout.tsx)
- **Features**:
  - Split 50/50 responsive desktop view.
  - Left panel: High-converting marketing hero showcase with floating 3D preview cards and 2,000+ happy student counters.
  - Right panel: Social authentication buttons for Google and Facebook with brand iconography.
  - Standard email and password fields with validation focus states and error handling.
  - "Remember me" checkbox and "Forgot password?" link.
  - One-click navigation to Register page.

---

### 3. Register Page (`/register`)
- **Route**: `/register`
- **File**: [src/pages/RegisterPage.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/RegisterPage.tsx)
- **Layout**: Uses [src/components/layout/AuthLayout.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/layout/AuthLayout.tsx)
- **Features**:
  - Full Name, Email Address, and Password inputs.
  - Terms of Service and Privacy Policy agreement checkbox.
  - Synchronized social sign-up actions with Google and Facebook.
  - Instant toggle link directing existing members back to `/login`.

---

### 4. Search & Catalog Page (`/search`)
- **Route**: `/search`
- **File**: [src/pages/SearchPage.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/SearchPage.tsx)
- **Features**:
  - Real-time search query input that filters courses by title, instructor, and keywords.
  - Multi-facet sidebar filter:
    - **Category**: UI/UX Design, Development, Marketing, Business, Photography.
    - **Difficulty Level**: All Levels, Beginner, Intermediate, Expert.
    - **Rating**: 4.5 & up, 4.0 & up, 3.5 & up.
    - **Price Range**: Free, Paid ($0–$50, $50–$100, $100+).
    - **Course Duration**: 0–2 hours, 3–6 hours, 6+ hours.
  - Active filter chips with one-click removal and "Clear All" functionality.
  - Result count display and Sort By dropdown (`Most Popular`, `Highest Rated`, `Newest`, `Price: Low to High`).
  - Responsive pagination component with active page states and navigation arrows.

---

### 5. Course Details Page (`/course/:slug`)
- **Route**: `/course/:slug`
- **File**: [src/pages/CourseDetailsPage.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/CourseDetailsPage.tsx)
- **Wrapper**: [src/components/course/CourseLayout.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/components/course/CourseLayout.tsx)
- **Features**:
  - Course hero banner with breadcrumbs (`Home > Courses > Build Digital Assets`).
  - Tab navigation switching between **About**, **Lessons**, and **Reviews**.
  - Detailed course synopsis and syllabus breakdown.
  - "Sneak Peak" visual preview thumbnail gallery.
  - Key takeaways with custom vector checkmark icons.
  - Sticky right-side enrollment card with video preview cover, pricing (`$25/lifetime`), lesson count, duration, certificate badge, and "Enroll Now" CTA.

---

### 6. Course Lessons Page (`/course/:slug/lessons`)
- **Route**: `/course/:slug/lessons`
- **File**: [src/pages/CourseLessonsPage.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/CourseLessonsPage.tsx)
- **Features**:
  - Embedded high-definition video lesson preview player with play/pause controls and duration indicators.
  - Chapter and curriculum accordion menu with lesson items.
  - Active lesson indicator with duration (`12:45`) and preview status (`Free Preview` vs `Locked`).
  - Interactive lesson completion checkboxes that update user progress.
  - Tabbed lesson notes, downloadable source assets, and community discussion feed.
  - Previous Lesson / Next Lesson navigation buttons.

---

### 7. Course Reviews Page (`/course/:slug/reviews`)
- **Route**: `/course/:slug/reviews` and `/reviews`
- **File**: [src/pages/CourseReviewsPage.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/CourseReviewsPage.tsx)
- **Features**:
  - Rating summary score (e.g. `4.8 out of 5`) based on verified enrolled students.
  - Visual star rating distribution bars (5 Star, 4 Star, 3 Star, 2 Star, 1 Star percentages).
  - Star filter buttons allowing learners to view reviews by specific ratings.
  - Student review list featuring author avatar, full name, date of review, star rating, and helpfulness counter (`Helpful (18)`).
  - "Write a Review" modal trigger button.

---

### 8. Creator Profile Page (`/creator/:slug`)
- **Route**: `/creator/:slug`
- **File**: [src/pages/CreatorProfilePage.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/CreatorProfilePage.tsx)
- **Features**:
  - Creator banner and high-resolution instructor portrait.
  - Verified creator badge and professional headline (e.g. `Lead Product Designer at Purepearl Studio`).
  - Metric counters: Total Students (`12,450+`), Courses (`8`), Average Rating (`4.9`), and Total Reviews (`1,820`).
  - Comprehensive biography and credentials section.
  - Social media outbound links (Twitter/X, LinkedIn, GitHub, YouTube, Website).
  - Course catalog grid featuring all courses published by this creator.

---

### 9. 404 Not Found Page (`*`)
- **Route**: `*`
- **File**: [src/pages/NotFoundPage.tsx](file:///d:/canvas/bytespace-auth%20(2)/bytespace-auth/src/pages/NotFoundPage.tsx)
- **Features**:
  - Clean error illustration.
  - Friendly explanation message.
  - Primary button returning to `/` (Home) and secondary button navigating to `/search` (Browse Courses).
