---
name: NextWave Precision Finance
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
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  stack-compact: 8px
  stack-loose: 24px
---

## Brand & Style
The design system is engineered for high-stakes enterprise finance and GST compliance. The brand personality is rooted in **security, precision, and authority**, ensuring users feel a sense of absolute control over complex fiscal data.

The design style follows a **Corporate / Modern** aesthetic with a **Minimalist** execution. It prioritizes clarity and density over decorative flair. To evoke "technical precision," the UI employs subtle grid-line motifs and background patterns reminiscent of ledger paper or data visualizations. Whitespace is used strategically to separate distinct financial modules, while sharp execution of typography and borders signals meticulous attention to detail.

## Colors
The palette is dominated by **Deep Navy (#0F172A)**, used for primary navigation and core brand elements to establish institutional trust. **Emerald Green (#10B981)** is the functional accent, reserved for positive financial growth indicators, GST compliance status, and primary "Success" actions.

**Slate Gray (#64748B)** provides technical precision for secondary labels, metadata, and borders. The background uses a soft **Slate-50 (#F8FAFC)** to reduce eye strain during long-form auditing tasks, creating a clear distinction between the canvas and white data containers.

## Typography
This design system utilizes **Inter** as its primary typeface due to its exceptional legibility in data-dense environments. A tall x-height and neutral character ensure that financial figures remain clear even at small sizes.

For audit trails, transaction IDs, and currency figures, **JetBrains Mono** is introduced as a secondary functional font. This monospaced choice ensures numerical alignment in tables and evokes a "system-verified" technical feel. Hierarchy is strictly enforced: bold weights for primary balances and muted weights for secondary audit metadata.

## Layout & Spacing
The design system employs a **Fixed Grid** model for desktop dashboards to ensure data layouts remain predictable and readable. A 12-column grid is used with a maximum container width of 1440px. 

Spacing follows a strict **4px baseline grid**. For financial tables, "Compact" spacing (8px) is used to maximize information density. For marketing or high-level overview dashboards, "Loose" spacing (24px) is applied. On mobile devices, the layout reflows into a single column with 16px side margins, with horizontal scrolling enabled specifically for data tables to maintain column integrity.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. This maintains a flat, modern professional look.

- **Level 0 (Canvas):** Slate-50 background.
- **Level 1 (Cards/Containers):** Pure White surface with a 1px border in Slate-200.
- **Level 2 (Dropdowns/Modals):** Pure White surface with a 1px border and a subtle, high-diffusion shadow (0px 4px 20px rgba(15, 23, 42, 0.08)) to indicate temporary overlay.
- **Interactions:** Hover states on interactive cards use a subtle "lift" effect by darkening the border color to Slate-400, rather than increasing shadow depth.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off the industrial aesthetic while remaining more serious and "engineered" than a fully rounded or pill-shaped system. 

Buttons, input fields, and checkboxes use the base 4px radius. Larger containers like financial cards or modal dialogs may use `rounded-lg` (8px) to provide a clearer visual distinction between structural elements and interactive components.

## Components

### Buttons
- **Primary:** Deep Navy (#0F172A) background with White text. High contrast for critical actions like "Submit GST Filing."
- **Success:** Emerald Green (#10B981) for revenue-positive actions or compliance approvals.
- **Secondary:** White background with a 1px Slate-300 border.

### Information Cards
Cards are the primary vehicle for financial data. They must feature a 1px Slate-200 border, a white background, and a "header" area separated by a subtle 1px horizontal line. Use JetBrains Mono for the primary "Big Number" display within cards.

### Input Fields & Controls
- **Text Inputs:** Use a 1px Slate-300 border that turns Deep Navy on focus. 
- **Checkboxes:** Square with a 2px radius, using Emerald Green when checked to signify compliance.
- **GST Badges:** Small, high-contrast chips with `label-caps` typography to denote GST-registered vs. Non-registered entities.

### Data Tables
Rows should have a subtle hover state (#F1F5F9). Column headers use `label-caps` in Slate-500. Use monospaced fonts for all numerical columns to ensure decimal points align vertically for easier scanning.