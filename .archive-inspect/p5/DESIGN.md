---
name: Neon-Dark Precision
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#ffade3'
  on-secondary: '#5f004f'
  secondary-container: '#ff2dd9'
  on-secondary-container: '#530045'
  tertiary: '#efffbb'
  on-tertiary: '#283500'
  tertiary-container: '#bdec00'
  on-tertiary-container: '#516800'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd8ee'
  secondary-fixed-dim: '#ffade3'
  on-secondary-fixed: '#3a0030'
  on-secondary-fixed-variant: '#860071'
  tertiary-fixed: '#c3f400'
  tertiary-fixed-dim: '#abd600'
  on-tertiary-fixed: '#161e00'
  on-tertiary-fixed-variant: '#3c4d00'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
  cyan-glow: '#00f2ff'
  pink-laser: '#ff00d9'
  lime-toxic: '#ccff00'
  bg-deep: '#09090b'
  surface-zinc: '#141417'
  border-muted: '#27272a'
  text-high: '#ffffff'
  text-dim: '#a1a1aa'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.03em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-lg:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style

This design system is a high-performance, data-dense "Neon-Dark" evolution of a precision-focused dark theme. It targets advanced users, developers, and traders who require a UI that feels like a futuristic command center. 

The aesthetic is **Cyber-Minimalism**—combining the raw, structural integrity of developer tools with the high-octane energy of a 24/7 trading terminal. It prioritizes information density and visual hierarchy through high-saturation "light-emitting" accents against deep, void-like backgrounds. The emotional response should be one of intense focus, technical superiority, and rapid responsiveness.

## Colors

The palette is built on a "Void and Voltage" logic. The background is a true near-black to ensure absolute contrast for the neon accents. 

- **Electric Cyan (Primary):** Used for primary actions, system status, and active navigation. It represents the "standard" operating state.
- **Laser Pink (Secondary):** Used for destructive actions, high-priority alerts, and specialized data points that need to break the visual field.
- **Toxic Lime (Tertiary):** Used for positive growth, "go" signals, and secondary data highlights.
- **Neutral Scale:** Utilizes deep Zinc grays to create subtle layering without introducing warmth or brown tones. All grays must remain strictly neutral or slightly blue-tinted.

## Typography

Geist is the exclusive typeface, selected for its technical precision and readability in high-density environments. 

Headlines use aggressive negative letter-spacing to feel "locked in" and structural. For data visualization and terminal-like displays, use the `mono-data` style which leverages Geist's monospaced characteristics for alignment. Labels should frequently use uppercase with increased tracking to differentiate from body text at small scales. Primary text is pure white (#FFFFFF), while secondary text uses a dimmed zinc (#A1A1AA) to maintain focus on key content.

## Layout & Spacing

The layout follows a strict 4px grid system to ensure terminal-like alignment. Content should be data-dense, with minimal "wasted" whitespace; however, functional grouping is achieved through consistent 16px gutters.

- **Desktop:** 12-column fluid grid with 32px outer margins. Panels and sidebars are fixed-width (typically 240px or 320px) to mimic a professional workstation.
- **Mobile:** 4-column grid with 16px margins. Information density should remain high, utilizing horizontal scrolling for data tables rather than stacking.
- **Philosophy:** Components should feel tightly packed but perfectly aligned. Use thin 1px borders to separate sections instead of large gaps.

## Elevation & Depth

This system avoids traditional soft shadows in favor of **Tonal Layering and Glows**.

1.  **Z-Axis via Value:** The lowest level is the `#09090b` background. Surface containers (cards, panels) use `#141417`. Floating elements (modals, tooltips) use `#1c1c1f`.
2.  **Border Separation:** Every surface transition is defined by a `1px` solid border (`#27272a`). 
3.  **Neon Glow:** Active or focused elements do not use shadows; they use a "backlight" effect—a very tight, high-intensity outer glow of the primary or secondary color (e.g., `0px 0px 8px rgba(0, 242, 255, 0.4)`).
4.  **Glassmorphism:** Use sparingly for overlays (modals) with a high blur (20px) and a low-opacity zinc fill to maintain legibility without losing the "void" feel.

## Shapes

The shape language is "Soft-Industrial." Elements use a consistent `4px` (0.25rem) radius for standard components like buttons and inputs. This provides a hint of modern refinement while maintaining the overall sharp, geometric feel of a technical instrument.

Larger containers like cards may use `8px` (`rounded-lg`), but never more. Interactive elements should never be pill-shaped or fully rounded unless they are circular icons.

## Components

- **Buttons:** 
    - **Primary:** Solid Cyan fill with black text. On hover, add a Cyan outer glow.
    - **Secondary:** Transparent with a 1px Pink laser border and Pink text.
    - **Tertiary:** Transparent with Lime text. Hover state adds a subtle Lime background tint (10% opacity).
- **Data Cells/Chips:** Small, rectangular tags with 2px radius. Use high-saturation backgrounds with 15% opacity and matching high-saturation text (e.g., Toxic Lime background at 15% with 100% Lime text).
- **Inputs:** Darker than the surface background. 1px zinc border that transitions to Electric Cyan on focus. Monospaced font for all text entry.
- **Cards:** No shadows. `1px` solid `#27272a` border. Header sections within cards should be separated by a internal horizontal rule of the same color.
- **Status Indicators:** Small 6px circular pips. Use the neon palette: Cyan (Active), Lime (Success), Pink (Critical), Zinc (Idle).
- **Scrollbars:** Ultra-thin (4px), dark zinc tracks with Electric Cyan thumbs to ensure the "terminal" feel remains consistent even in long lists.