---
name: SecureGate
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434656'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#585e6f'
  on-secondary: '#ffffff'
  secondary-container: '#dadff3'
  on-secondary-container: '#5d6273'
  tertiary: '#3f4f65'
  on-tertiary: '#ffffff'
  tertiary-container: '#57677e'
  on-tertiary-container: '#d6e6ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#dde2f6'
  secondary-fixed-dim: '#c1c6d9'
  on-secondary-fixed: '#151b29'
  on-secondary-fixed-variant: '#414756'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  button-text:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  container-max: 1200px
  gutter: 16px
---

## Brand & Style

The brand personality is defined by precision, reliability, and modern enterprise security. The design system targets apartment residents and community managers who require a friction-less yet authoritative access control experience. 

The design style is **Corporate Modern with a hint of Glassmorphism**. It utilizes a systematic approach to depth to signify security layers. High-quality whitespace and a restricted color palette ensure the interface feels professional and "high-end." The emotional response should be one of complete trust—the UI acts as a digital sentinel that is always responsive and never ambiguous.

## Colors

The palette is engineered to communicate "Safety" and "Technology."

- **Primary (Safety Blue):** `#0052FF` is used for primary actions, active states, and brand-critical touchpoints. It represents the "Go" signal and digital connectivity.
- **Secondary (Deep Charcoal):** `#121826` serves as the foundation for text and high-contrast surfaces, providing an anchor of stability and authority.
- **Tertiary (Slate):** `#64748B` is used for secondary information and iconography, maintaining legibility without competing with primary actions.
- **Neutral (Cool Gray):** `#F8FAFC` provides a clean, architectural backdrop that keeps the interface feeling light and modern.

The system uses a "Light" default mode to maintain an approachable, clean aesthetic, utilizing deep charcoal for critical "Dark" surface variants (like navigation bars or headers) to reinforce a premium enterprise feel.

## Typography

This design system utilizes **Inter** exclusively for its systematic, utilitarian, and highly legible characteristics. 

- **Headlines:** Use tight letter spacing and heavy weights to command attention and imply structural integrity.
- **Body:** Standardized on a 16px base for maximum readability in mobile environments.
- **Labels:** Use uppercase styling for metadata and overlines to distinguish system-generated info from user content.
- **Hierarchy:** Maintain clear vertical rhythm by strictly adhering to the defined line heights, ensuring the "Precision" brand pillar is maintained.

## Layout & Spacing

The layout philosophy is **Mobile-First and Fluid**. 

- **Grid:** A 12-column grid is used for desktop (breakpoint > 1024px), a 6-column grid for tablet (768px - 1023px), and a 4-column grid for mobile (< 767px).
- **Rhythm:** An 8px (2-unit) linear scale governs all spacing. 
- **Margins:** Mobile views should maintain a minimum 16px horizontal safe area. Large desktop views should center content within a 1200px max-width container.
- **Alignment:** Elements should be strictly aligned to the left in most cases to facilitate quick scanning, with the exception of primary action buttons which may be full-width on mobile.

## Elevation & Depth

Visual hierarchy in the design system is achieved through **Tonal Layers and Soft Ambient Shadows**. 

1.  **Base Layer:** The Neutral background (`#F8FAFC`).
2.  **Surface Layer (Cards/Containers):** Pure white (`#FFFFFF`) with a very subtle, diffused shadow: `0px 4px 12px rgba(0, 0, 0, 0.05)`.
3.  **Active/Elevated Layer (Modals/Popovers):** White with a deeper shadow to signify interaction priority: `0px 12px 32px rgba(0, 0, 0, 0.12)`.
4.  **Security Glass:** For persistent navigation or overlays, use a subtle backdrop blur (12px) with a semi-transparent white fill (80% opacity) to maintain context of the background.

Avoid heavy borders; use 1px subtle outlines in `#E2E8F0` to define boundaries when shadows are not appropriate.

## Shapes

The shape language reflects the "Rounded" level (0.5rem base radius). This choice balances the professional rigidity of enterprise software with the friendliness required for a residential consumer app.

- **Standard Elements (Inputs, Buttons):** 0.5rem (8px) radius.
- **Large Containers (Cards):** 1rem (16px) radius for a soft, modern feel.
- **Action Pills (Chips/Status):** Fully rounded (Pill) for distinct visual categorization.

## Components

- **Buttons:** Primary buttons use Safety Blue with white text. Secondary buttons use a light gray ghost style. Buttons must have a minimum height of 48px on mobile for touch accessibility.
- **Input Fields:** Use a solid 1px border in Slate-200. On focus, the border transitions to Safety Blue with a 2px outer glow. Labels should be floating or positioned consistently above the field.
- **Status Chips:** Use specific semantic colors: Green for "Access Granted/Open," Red for "Secure/Locked," and Amber for "Guest Pending." These should always be pill-shaped.
- **Access Cards:** These are the centerpiece. Use high-contrast headers, clear typography for names/permissions, and large, recognizable icons for "Unlock" actions.
- **Lists:** Use clean, divided rows with 16px padding. Every list item should have a 24px icon or avatar to the left to aid in rapid identification of access logs.
- **Keypad Component:** For PIN entry, buttons should be large (min 64px), circular or highly rounded, with clear haptic-style feedback on tap.