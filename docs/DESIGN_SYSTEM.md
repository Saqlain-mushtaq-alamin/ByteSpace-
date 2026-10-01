# ByteSpace Design System & Brand Tokens

The ByteSpace design system is derived directly from the official Figma design specifications and brand manual. It utilizes a bold visual language pairing **Persian Blue** and **Electric Lime** accents with deep charcoal neutrals and typographic hierarchy.

---

## 1. Typography

The design system incorporates three distinct typefaces to convey modern professionalism and high energy:

| Font Family | Role | Weights Used | Fallback Stack |
| :--- | :--- | :--- | :--- |
| **Satoshi** | Primary Body & UI Labels | 400 (Regular), 500 (Medium), 700 (Bold) | `ui-sans-serif, system-ui, sans-serif` |
| **Poppins** | Display Headings & Section Titles | 600 (SemiBold), 700 (Bold) | `ui-sans-serif, system-ui, sans-serif` |
| **Clash Display** | Hero Eyebrows & Brand Highlights | 600 (SemiBold), 700 (Bold) | `ui-sans-serif, system-ui, sans-serif` |

### Typography Scale & Utility Classes

| Utility Class | Size | Weight | Line Height | Application |
| :--- | :--- | :--- | :--- | :--- |
| `.text-heading-l` | `72px` | 600 (Poppins) | `1.2` | Primary homepage hero headlines |
| `.text-heading-m` | `44px` | 600 (Poppins) | `1.2` | Major section titles (e.g. Growth, Testimonials) |
| `.text-heading-s` | `36px` | 600 (Poppins) | `1.2` | Feature subheadings and modal titles |
| `.text-heading-xs` | `20px` | 600 (Poppins) | `1.2` | Card headings, sidebar headers |
| `.text-body-l` | `18px` | 400 (Satoshi) | `1.6` | Hero lead paragraphs, introductory text |
| `.text-body-m` | `16px` | 400 (Satoshi) | `1.6` | Default article text, course descriptions |
| `.text-body-s` | `14px` | 400 (Satoshi) | `1.6` | Supporting descriptions, metadata rows |
| `.text-body-xs` | `12px` | 400 (Satoshi) | `1.6` | Timestamps, copyright, fine print |
| `.text-label-l` | `18px` | 500 (Satoshi) | `1.2` | Large button labels, navigation links |
| `.text-label-m` | `16px` | 500 (Satoshi) | `1.2` | Standard buttons, tabs, input labels |
| `.text-label-s` | `14px` | 500 (Satoshi) | `1.2` | Badges, chip labels, filter tags |
| `.text-label-xs` | `12px` | 500 (Satoshi) | `1.2` | Pill badges, counter tags |

---

## 2. Color Palette

### Primary: Persian Blue (`brand`)
Represents trust, mastery, and technological authority.

| Token | Hex Value | Preview / Usage |
| :--- | :--- | :--- |
| `--color-brand-50` | `#e7f6ff` | Lightest tint for active backgrounds, subtle highlights |
| `--color-brand-100` | `#d3eeff` | Soft pill backgrounds, secondary hover states |
| `--color-brand-200` | `#b0ddff` | Soft border outlines |
| `--color-brand-300` | `#81c5ff` | Interactive accent highlights |
| `--color-brand-400` | `#4f9dff` | Mid-tone focus borders |
| `--color-brand-500` | `#2872ff` | Vibrant blue for badges and links |
| `--color-brand-600` | `#0445ff` | High-contrast callouts |
| `--color-brand-700` | `#0043ff` | Darker blue accent |
| **`--color-brand`** | **`#003be2`** | **Primary brand color (buttons, active states, key icons)** |
| `--color-brand-900` | `#0b36a4` | Deep header gradients, dark active buttons |
| `--color-brand-950` | `#071e5f` | Deep navy background for dark hero sections |

### Secondary: Electric Lime (`lime`)
Delivers energy, creativity, and conversion focus.

| Token | Hex Value | Preview / Usage |
| :--- | :--- | :--- |
| `--color-lime-50` | `#fdffe4` | Softest lime tint |
| `--color-lime-100` | `#faffc5` | Tinted pill badge fills |
| `--color-lime-200` | `#f2ff92` | Light decorative highlights |
| `--color-lime-300` | `#e4ff54` | Glowing border rings |
| **`--color-lime`** | **`#d4fb20`** | **Primary accent lime (badge fills, hero shapes, highlights)** |
| `--color-lime-500` | `#cbfc01` | High-visibility action badges |
| `--color-lime-600` | `#8cb400` | Dark lime borders and icon fills |
| `--color-lime-700` | `#6a8902` | Muted lime accents |
| `--color-lime-800` | `#546b09` | High contrast text against light lime |
| `--color-lime-900` | `#465a0d` | Deep olive accent |
| `--color-lime-950` | `#243300` | Deep dark contrast background |

### Neutral Scale (`gray`)
Clean slate grays calibrated for legibility on both light and dark surfaces.

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `--color-gray-50` | `#f5f5f6` | Page canvas backgrounds, card surface tints |
| `--color-gray-100` | `#e5e6e8` | Dividers, subtle borders, input outlines |
| `--color-gray-200` | `#ced0d3` | Border tokens, inactive tab lines |
| `--color-gray-300` | `#abaeb5` | Disabled text, placeholder indicators |
| `--color-gray-400` | `#82868e` | Secondary body text, icon outlines |
| `--color-gray-500` | `#666973` | Supporting copy, metadata labels |
| `--color-gray-600` | `#585a62` | Mid-contrast secondary headings |
| `--color-gray-700` | `#4b4c53` | Dark neutral icons |
| `--color-gray-800` | `#424348` | Semi-bold subheaders |
| `--color-gray-900` | `#3a3b3f` | Dark section backgrounds |
| **`--color-gray-950`** | **`#242528`** | **Primary body text color, dark header backgrounds** |

---

## 3. Spacing & Grid System

ByteSpace adheres to a **12-column responsive layout grid** calibrated for a 1440px desktop design canvas:

- **Desktop Canvas Max Width**: `1440px` (centered via `max-w-[1440px] mx-auto`)
- **Outer Margin**: `120px` (`px-6 md:px-12 lg:px-[120px]`)
- **Column Gutter**: `40px` (`gap-6 md:gap-8 lg:gap-[40px]`)
- **Vertical Rhythm**: Multiples of 8px (e.g. 16px, 24px, 32px, 48px, 64px, 96px, 120px)

### Grid Background Pattern (`bg-grid`)
```css
@utility bg-grid {
  background-image:
    linear-gradient(to right, rgb(255 255 255 / 0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(255 255 255 / 0.12) 1px, transparent 1px);
  background-size: 120px 120px;
}
```

---

## 4. Border Radius Tokens

| Token | Value | Applied To |
| :--- | :--- | :--- |
| `--radius-input` | `12px` (`rounded-xl`) | Text inputs, dropdown selectors, search bars |
| `--radius-card` | `24px` (`rounded-3xl`) | Course cards, testimonial cards, stat blocks |
| `--radius-pill` | `9999px` (`rounded-full`) | Category chips, filter badges, avatar containers, primary buttons |

---

## 5. Shadows and Elevations

- **Card Shadow (Rest)**: `0 4px 20px -2px rgba(36, 37, 40, 0.06)`
- **Card Shadow (Hover)**: `0 12px 32px -4px rgba(36, 37, 40, 0.12)`
- **Floating Badge**: `0 8px 24px -4px rgba(0, 59, 226, 0.18)`
- **Input Focus Ring**: `0 0 0 3px rgba(0, 59, 226, 0.2)`
