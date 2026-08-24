# Ellipsonic — Product Catalogue

<div align="center">
  <img src="public/Ellipsonic.png" alt="Ellipsonic Logo" width="180" />
  <p><strong>A focused suite of thoughtful digital products for meaningful enterprise work.</strong></p>
  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react" alt="React 19" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" /></a>
  </p>
</div>

---

## 📖 Overview

**Ellipsonic Product Catalogue** is an interactive, modern web portal showcasing Ellipsonic's enterprise suite of ten mission-critical software products. Built with an editorial design philosophy, it features live simulated product mockups, interactive domain filters, responsive demo modals, and seamless navigation across all vertical solutions.

---

## ✨ Features

- **Interactive Product Filter**: Filter products dynamically across 10 industry domains (Finance, Trading, Security, Health, Education, Commerce, Workforce, Operations, CRM, and Legal).
- **Simulated Product Dashboards**: Custom interactive mockups for each product demonstrating real-time UI components, telemetry metrics, audit streams, and governance engines.
- **Direct Product Access**: Integrated direct links to active product deployments.
- **Lead Capture & Demo Scheduling**: Built-in interactive demo request modal.
- **Editorial Typography & Aesthetics**: Styled with Google Fonts (`Instrument Serif` & `DM Sans`), smooth micro-interactions, responsive grids, and subtle color accents.

---

## 🚀 Product Suite

| # | Product | Category | Key Highlights | Live URL |
|---|---|---|---|---|
| **01** | **NextWave** | Enterprise Finance & GST | Unified multi-branch ledger, automated GST posting, append-only audit trail | [nextwave.ellipsonic.com](https://nextwave.ellipsonic.com/) |
| **02** | **Algo Trade** | Algorithmic Trading Infrastructure | REST/WebSocket APIs, real-time Greeks & PnL, strategy versioning | Internal |
| **03** | **SecureGate** | Community Access Control | Mobile resident sign-in, time-bound visitor passes, manager dashboard | [screening.ellipsonic.com](http://screening.ellipsonic.com/) |
| **04** | **Ayushman** | Practice Operations | Verified onboarding, intelligent scheduling, HIPAA-grade audit trails | [ayushmaan.ellipsonic.com](http://ayushmaan.ellipsonic.com/) |
| **05** | **Chalk AI** | Real-time AI Tutoring | Multimodal voice & whiteboard, synchronized visuals, live equation solver | Internal |
| **06** | **Core Cart** | Headless Commerce Engine | Modular TypeScript headless core, merchant dashboards, extensible AI tools | Internal |
| **07** | **Smart Teams** | Enterprise HR & Payroll | Biometric liveness detection, WebAuthn passkeys, GPS geofence, statutory payroll | [smarteam.ellipsonic.com](http://smarteam.ellipsonic.com/) |
| **08** | **Elipdesk** | Ticketing & SLA Management | Logical multi-tenant isolation, business-hours SLA engine, immutable audit logs | [ticketing.ellipsonic.com](http://ticketing.ellipsonic.com/) |
| **09** | **BondGrid CRM** | Relationship-First CRM | Influence web mapping, immutable interaction timelines, deal pipelines | Internal |
| **10** | **LexDraft** | Legal Document Automation | Firm-approved clause library, multi-tier partner sign-offs, redline version history | Internal |

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Design System
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)
- **Component Primitives**: [@base-ui/react](https://base-ui.com/), [shadcn/ui](https://ui.shadcn.com/)

---

## 📁 Project Structure

```text
Ellipsonic_Products_catalogue/
├── app/
│   ├── globals.css        # Core typography, mockup styling, and design tokens
│   ├── layout.tsx         # Root layout with fonts, metadata, and analytics
│   └── page.tsx           # Product catalogue showcase, filters, and mockups
├── components/
│   └── ui/                # Reusable UI component primitives
├── lib/
│   └── utils.ts           # Utility functions (clsx + tailwind-merge)
├── public/                # Static assets (brand logos, icons, placeholders)
├── next.config.mjs        # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration with Tailwind CSS v4
├── tsconfig.json          # TypeScript compiler configuration
├── package.json           # Project dependencies and npm scripts
└── README.md              # Project documentation
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher (Recommended: `v20.x` or `v22.x`)
- **npm**: `v9.x` or higher (or `pnpm` / `yarn` / `bun`)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Ellipsonic_Products_catalogue
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Build & Deployment

To create an optimized production build:

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

To run lint checks:
```bash
npm run lint
```

---

## 📄 License

This project is proprietary and confidential to **Ellipsonic**. All rights reserved.
