'use client'

import { useState } from 'react'

type Product = {
  id: string
  number: string
  name: string
  category: string
  color: string
  domains: string[]
  eyebrow: string
  title: string
  description: string
  features: string[]
  audience: string[]
  url?: string
}

const domainOptions = [
  { id: 'all', label: 'All domains' },
  { id: 'crm', label: 'CRM & Networks' },
  { id: 'legal', label: 'Legal & Governance' },
  { id: 'workforce', label: 'Workforce & HR' },
  { id: 'operations', label: 'Support & SLAs' },
  { id: 'finance', label: 'Finance & GST' },
  { id: 'trading', label: 'Trading & fintech' },
  { id: 'security', label: 'Security & access' },
  { id: 'health', label: 'Health & wellbeing' },
  { id: 'education', label: 'Education & learning' },
  { id: 'commerce', label: 'Commerce & retail' },
] as const

const products: Product[] = [
  {
    id: 'nextwave',
    number: '01',
    name: 'NextWave',
    category: 'Enterprise finance & GST',
    color: 'navy',
    domains: ['finance'],
    eyebrow: 'For multi-branch Indian businesses and finance teams',
    title: 'Close faster. Stay audit-ready.',
    description:
      'NextWave unifies multi-branch ledgers, automates India-first GST workflows, and preserves every financial decision in an immutable audit trail.',
    features: ['Unified GSTIN ledger', 'Automated GST posting', 'Double-entry controls', 'Append-only audit trails', 'Branch-level permissions'],
    audience: ['Multi-branch enterprises', 'Finance and controllership teams', 'Indian corporate groups'],
    url: 'https://nextwave.ellipsonic.com/',
  },
  {
    id: 'optionalgo',
    number: '02',
    name: 'Algo Trade',
    category: 'Algorithmic trading infrastructure',
    color: 'teal',
    domains: ['trading'],
    eyebrow: 'For quant teams, brokerages and institutional partners',
    title: 'From strategy idea to execution.',
    description:
      'Option-Algo centralizes option strategy workflows with secure APIs, live analytics, and the infrastructure teams need to backtest, paper trade, and go live.',
    features: ['REST and WebSocket APIs', 'Strategy versioning', 'Real-time Greeks and PnL', 'JWT access controls', 'Brokerage integrations'],
    audience: ['Quant trading teams', 'Institutional brokers', 'Fintech infrastructure groups'],
  },
  {
    id: 'securegate',
    number: '03',
    name: 'SecureGate',
    category: 'Community access control',
    color: 'blue',
    domains: ['security'],
    eyebrow: 'For property managers & gated communities',
    title: 'A faster, more visible way through the gate.',
    description:
      'SecureGate replaces phone calls and paper passes with resident sign-in, time-bound visitor access, and a manager portal built for clear, auditable control.',
    features: ['Mobile resident sign-in', 'Temporary visitor passes', 'Manager dashboard', 'Shared token-based auth', 'Containerized deployments'],
    audience: ['Property management firms', 'Multi-site apartment operators', 'Condominium boards'],
    url: 'http://screening.ellipsonic.com/',
  },
  {
    id: 'ayushman',
    number: '04',
    name: 'Ayushman',
    category: 'Practice operations',
    color: 'violet',
    domains: ['health'],
    eyebrow: 'For clinics, coaching networks & EAP providers',
    title: 'The operating system for trusted advisory.',
    description:
      'Ayushman brings verified practitioners, intelligent scheduling, secure consultations, and enterprise governance into one calm, accountable workspace.',
    features: ['Verified onboarding', 'Intelligent scheduling', 'Tenant-aware governance', 'Immutable session logs', 'Workflow automation'],
    audience: ['Mental health clinics', 'Executive coaching networks', 'Employee assistance programs'],
    url: 'http://ayushmaan.ellipsonic.com/',
  },
  {
    id: 'chalk',
    number: '05',
    name: 'Chalk AI',
    category: 'Real-time AI tutoring',
    color: 'orange',
    domains: ['education'],
    eyebrow: 'For EdTech, tutors, publishers & content teams',
    title: 'Speak. See. Understand.',
    description:
      'Chalk AI turns a spoken question into a live explanation: a multimodal tutor that talks, draws, captions, and responds naturally in the same moment.',
    features: ['Real-time voice', 'Live programmatic whiteboard', 'Synchronized visuals', 'Barge-in & tagging', 'Post-session summaries'],
    audience: ['EdTech platforms', 'Tutoring marketplaces', 'Corporate learning teams'],
  },
  {
    id: 'corecart',
    number: '06',
    name: 'Core Cart',
    category: 'Headless commerce engine',
    color: 'commerce',
    domains: ['commerce'],
    eyebrow: 'For mid-market D2C brands and commerce agencies',
    title: 'Launch commerce faster. Own the experience.',
    description:
      'Core Cart is a modular, TypeScript headless commerce core with a storefront, merchant dashboard, and admin tools ready to customize, deploy, and scale.',
    features: ['Catalog and inventory', 'Orders and notifications', 'Storefront foundation', 'Merchant dashboards', 'Extensible AI tooling'],
    audience: ['D2C commerce brands', 'Commerce agencies', 'Teams building new business models'],
  },
  {
    id: 'smartteams',
    number: '07',
    name: 'Smart Teams',
    category: 'Enterprise HR & Payroll',
    color: 'smartteams',
    domains: ['workforce', 'security'],
    eyebrow: 'For enterprise operations, HR leaders & multi-shift workforces',
    title: 'Zero-trust attendance. Compliant payroll.',
    description:
      'Smart Teams delivers a scholarly approach to workforce automation, replacing manual vulnerabilities with biometric liveness detection, automated leave routing, and India-first statutory payroll.',
    features: ['Biometric liveness detection', 'WebAuthn passkeys & GPS geofencing', 'Automated leave routing', 'Statutory payroll engine', 'Real-time audit dashboards'],
    audience: ['Multi-branch enterprises', 'Multi-shift manufacturing & retail', 'HR & payroll compliance teams'],
    url: 'http://smarteam.ellipsonic.com/',
  },
  {
    id: 'elipdesk',
    number: '08',
    name: 'Elipdesk',
    category: 'Tenant-aware ticketing & SLAs',
    color: 'elipdesk',
    domains: ['operations', 'security'],
    eyebrow: 'For MSPs, software vendors & enterprise support teams',
    title: 'Deliver on SLAs. Delight your clients.',
    description:
      'Elipdesk is a multi-tenant ticketing and SLA management platform that centralizes client requests, enforces business-hours SLA automation, and preserves immutable audit trails.',
    features: ['Logical multi-tenant isolation', 'Business-hours SLA calculation', 'Full ticket lifecycle automation', 'Immutable audit logs & history', 'Role-based access & S3 storage'],
    audience: ['MSPs and digital agencies', 'Enterprise software vendors', 'IT & customer operations teams'],
    url: 'http://ticketing.ellipsonic.com/',
  },
  {
    id: 'bondgrid',
    number: '09',
    name: 'BondGrid CRM',
    category: 'Relationship-first CRM',
    color: 'bondgrid',
    domains: ['crm', 'finance'],
    eyebrow: 'For professional services, wealth management & B2B enterprise sales',
    title: 'Turn contacts into revenue networks.',
    description:
      'BondGrid is a relationship-first CRM that moves beyond static contact lists to map influence webs, log auditable communications, and deliver developer-ready relationship intelligence.',
    features: ['Relationship intelligence & mapping', 'Auditable activity & immutable timeline', 'Account hierarchies & stakeholder webs', 'Deal pipeline tracking & automation', 'Role-based access & API integrations'],
    audience: ['Professional services firms', 'Wealth management & advisory', 'B2B enterprise sales teams'],
  },
  {
    id: 'lexdraft',
    number: '10',
    name: 'LexDraft',
    category: 'Legal document automation & workflows',
    color: 'lexdraft',
    domains: ['legal', 'operations'],
    eyebrow: 'For law firms, corporate legal & partner review teams',
    title: 'Governed drafting. Partner-approved.',
    description:
      'LexDraft bridges the gap between static templates and rigorous partner review cycles, turning firm-approved clauses into client-ready, auditable documents faster.',
    features: ['Firm-approved clause repository', 'Multi-tier partner review & sign-off', 'Task Kanban & drafting stages', 'Immutable redline version history', 'Simulated AI & audit activity logs'],
    audience: ['Mid-to-large law firms', 'Corporate legal departments', 'M&A and transactional legal teams'],
  },
]

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function ProductMockup({ product }: { product: (typeof products)[number] }) {
  if (product.id === 'lexdraft') {
    return (
      <div className="mockup lexdraft-mockup" aria-label="LexDraft product preview">
        <div className="mock-top">
          <span className="mock-brand lexdraft-mark"><i>§</i> LexDraft</span>
          <span className="live-pill"><i /> GOVERNANCE ENGINE ACTIVE</span>
        </div>
        <div className="lexdraft-content">
          <div className="lexdraft-side">
            <b>Legal OS</b>
            <span>Clause Library</span>
            <span>Review Queue</span>
            <span>Draft Kanban</span>
            <span>Audit Trail</span>
          </div>
          <div className="lexdraft-main">
            <div className="lexdraft-heading">
              <div>
                <small>DOCUMENT WORKFLOW · M&amp;A MASTER AGREEMENT</small>
                <strong>4 / 4 Sign-offs <span className="lexdraft-sub">Partner Approved</span></strong>
              </div>
              <span className="lexdraft-badge">● Ready for Client</span>
            </div>
            <div className="lexdraft-stats">
              <div>
                <small>DRAFTING TIME</small>
                <b className="stat-green">70% Faster</b>
                <span>Pre-approved clauses</span>
              </div>
              <div>
                <small>REVIEW STATUS</small>
                <b>Signed-off</b>
                <span>Mandate cleared</span>
              </div>
              <div>
                <small>CLAUSE INTEGRITY</small>
                <b>100%</b>
                <span>Zero rogue clauses</span>
              </div>
            </div>
            <div className="lexdraft-stream">
              <div>
                <b>Live approval audit trail</b>
                <span>Review Hierarchy →</span>
              </div>
              <p><i className="dot green" /> Managing Partner David S. approved redlines <small>Cross-Indemnity Clause v4 · 12m ago</small></p>
              <p><i className="dot blue-dot" /> Version 3.2 locked &amp; hash-verified <small>M&amp;A Share Purchase Agreement · Audit signed</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (product.id === 'bondgrid') {
    return (
      <div className="mockup bondgrid-mockup" aria-label="BondGrid CRM product preview">
        <div className="mock-top">
          <span className="mock-brand bondgrid-mark"><i>☍</i> BondGrid CRM</span>
          <span className="live-pill"><i /> RELATIONSHIP OS ACTIVE</span>
        </div>
        <div className="bondgrid-content">
          <div className="bondgrid-side">
            <b>Network OS</b>
            <span>Relationship Web</span>
            <span>Account Tree</span>
            <span>Auditable Log</span>
            <span>Deal Pipeline</span>
          </div>
          <div className="bondgrid-main">
            <div className="bondgrid-heading">
              <div>
                <small>RELATIONSHIP INTELLIGENCE · STRATEGIC ACCOUNTS</small>
                <strong>342 <span className="bondgrid-sub">Influencer Nodes Mapped</span></strong>
              </div>
              <span className="bondgrid-badge">● 94% Warm Path Reach</span>
            </div>
            <div className="bondgrid-stats">
              <div>
                <small>PIPELINE VELOCITY</small>
                <b className="stat-green">+38%</b>
                <span>Via warm paths</span>
              </div>
              <div>
                <small>AUDIT TRAIL</small>
                <b>100%</b>
                <span>Immutable history</span>
              </div>
              <div>
                <small>ENTERPRISE WEBS</small>
                <b>86</b>
                <span>Hierarchies mapped</span>
              </div>
            </div>
            <div className="bondgrid-stream">
              <div>
                <b>Live relationship intelligence</b>
                <span>Graph Explorer →</span>
              </div>
              <p><i className="dot green" /> Warm introduction path identified <small>Partner Alex M. → CIO Sarah K. · 2nd degree match</small></p>
              <p><i className="dot blue-dot" /> Executive mandate logged &amp; audited <small>Acme Capital · Q3 Mandate review · Signed note</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (product.id === 'elipdesk') {
    return (
      <div className="mockup elipdesk-mockup" aria-label="Elipdesk product preview">
        <div className="mock-top">
          <span className="mock-brand elipdesk-mark"><i>◈</i> Elipdesk</span>
          <span className="live-pill"><i /> SLA ENGINE ACTIVE</span>
        </div>
        <div className="elipdesk-content">
          <div className="elipdesk-side">
            <b>Service Desk</b>
            <span>Ticket Queue</span>
            <span>SLA Policies</span>
            <span>Tenant Directory</span>
            <span>Audit History</span>
          </div>
          <div className="elipdesk-main">
            <div className="elipdesk-heading">
              <div>
                <small>CLIENT SERVICE LEVEL · ACME ENTERPRISE</small>
                <strong>99.8% <span className="elipdesk-sub">SLA Adherence</span></strong>
              </div>
              <span className="elipdesk-badge">● Business Hours Active</span>
            </div>
            <div className="elipdesk-stats">
              <div>
                <small>AVG RESPONSE</small>
                <b className="stat-green">12m</b>
                <span>Target &lt; 30m</span>
              </div>
              <div>
                <small>BREACH RISK</small>
                <b>0%</b>
                <span>Zero penalties</span>
              </div>
              <div>
                <small>ACTIVE TENANTS</small>
                <b>38</b>
                <span>Logical isolation</span>
              </div>
            </div>
            <div className="elipdesk-stream">
              <div>
                <b>Live SLA enforcement</b>
                <span>Automated Routing →</span>
              </div>
              <p><i className="dot green" /> Priority 1 Ticket #1084 resolved <small>Acme Enterprise · 18m before SLA limit</small></p>
              <p><i className="dot green-dot" /> Regional SLA policy triggered <small>APAC Holiday calendar active · Tier-1 routing</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (product.id === 'smartteams') {
    return (
      <div className="mockup smartteams-mockup" aria-label="Smart Teams product preview">
        <div className="mock-top">
          <span className="mock-brand smartteams-mark"><i>◆</i> Smart Teams</span>
          <span className="live-pill"><i /> ZERO-TRUST ACTIVE</span>
        </div>
        <div className="smartteams-content">
          <div className="smartteams-side">
            <b>Workforce OS</b>
            <span>Live Attendance</span>
            <span>Automated Leave</span>
            <span>Statutory Payroll</span>
            <span>Audit Trail</span>
          </div>
          <div className="smartteams-main">
            <div className="smartteams-heading">
              <div>
                <small>ENTERPRISE ATTENDANCE · ALL SITES</small>
                <strong>2,940 <span className="smartteams-sub">/ 3,000 Present</span></strong>
              </div>
              <span className="smartteams-badge">● 98.3% Biometric Verified</span>
            </div>
            <div className="smartteams-stats">
              <div>
                <small>ON-TIME RATE</small>
                <b className="stat-green">97.8%</b>
                <span>Shift A &amp; B</span>
              </div>
              <div>
                <small>BUDDY PUNCHES</small>
                <b>0</b>
                <span>Liveness verified</span>
              </div>
              <div>
                <small>YEAR 1 SAVINGS</small>
                <b>₹ 3.1 Cr</b>
                <span>Projected preserved</span>
              </div>
            </div>
            <div className="smartteams-stream">
              <div>
                <b>Live cryptographic audit trail</b>
                <span>India Compliant →</span>
              </div>
              <p><i className="dot green" /> Biometric liveness verified <small>Shift A · Plant 02 North Gate · 10s ago</small></p>
              <p><i className="dot blue-dot" /> WebAuthn Passkey + GPS Geofence punch <small>HQ Operations · Unit 4B · 1m ago</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (product.id === 'chalk') {
    return (
      <div className="mockup chalk-mockup" aria-label="Chalk AI product preview">
        <div className="mock-top"><span className="mock-brand chalk-mark">Chalk <span>AI</span></span><span className="live-pill"><i /> LIVE SESSION</span></div>
        <div className="chalk-content"><div className="voice-panel"><div className="avatar-ring">🎙</div><strong>Multimodal<br />Tutor</strong><div className="wave">〜〜〜</div><small>AI voice synthesized</small></div><div className="board"><span className="board-label">SHARED CANVAS</span><div className="axis">y</div><div className="graph-line" /><div className="equation">f(x) = x² - 4x + 7</div><div className="graph-x">x</div></div></div>
      </div>
    )
  }
  if (product.id === 'nextwave') {
    return (
      <div className="mockup nextwave-mockup" aria-label="NextWave product preview">
        <div className="mock-top"><span className="mock-brand nextwave-mark">NextWave</span><span className="secure-badge">● AUDIT READY</span></div>
        <div className="finance-content"><div className="finance-nav"><b>Multi-Branch Ledger</b><span>State GSTINs (7)</span><span>Bank Feeds</span><span>Audit Trails</span><span>Compliance Lock</span></div><div className="finance-main"><div className="finance-heading"><div><small>CONSOLIDATED GST RECONCILIATION</small><strong>₹ 14.82 Cr</strong></div><span>● GSTR-2B Matched</span></div><div className="finance-bars"><i style={{ width: '64%' }} /><i style={{ width: '22%' }} /><i style={{ width: '14%' }} /></div><div className="finance-rows"><span><b>MH-GSTIN-27AAACN0124P</b><strong>₹ 6.40 Cr</strong></span><span><b>KA-GSTIN-29AAACN0124P</b><strong>₹ 5.12 Cr</strong></span><span><b>DL-GSTIN-07AAACN0124P</b><strong>₹ 3.30 Cr</strong></span></div></div></div>
      </div>
    )
  }
  if (product.id === 'optionalgo') {
    return (
      <div className="mockup algo-mockup" aria-label="Algo Trade product preview">
        <div className="mock-top"><span className="mock-brand optionalgo-mark">Algo<span>Trade</span></span><span className="live-pill"><i /> LIVE ENGINE</span></div>
        <div className="algo-content"><div className="algo-side"><b>Strategy OS</b><span>Iron Condor v3</span><span>Straddle Auto-Roll</span><span>NIFTY Gamma Scalp</span><span>Risk Controls</span></div><div className="algo-main"><small>PORTFOLIO DELTA / REAL-TIME P&amp;L</small><strong>+ ₹ 4,28,400</strong><div className="algo-chart"><span /><span /><span /><span /><span /><span /></div><div className="algo-metrics"><div><small>SHARPE</small><b>2.41</b></div><div><small>MAX DD</small><b>-4.2%</b></div><div><small>WIN RATE</small><b>68.4%</b></div></div></div></div>
      </div>
    )
  }
  if (product.id === 'corecart') {
    return (
      <div className="mockup commerce-mockup" aria-label="Core Cart product preview">
        <div className="mock-top"><span className="mock-brand corecart-mark"><i /> Core Cart</span><span className="beta-badge">HEADLESS READY</span></div>
        <div className="commerce-content"><div className="commerce-nav"><b>Merchant Hub</b><span>Product Catalog</span><span>Order Routing</span><span>Checkout APIs</span><span>Storefront Sync</span></div><div className="commerce-main"><div className="commerce-heading"><div><small>GLOBAL GMV · 30 DAYS</small><strong>$ 1.84M</strong></div><span>● 99.98% Uptime</span></div><div className="commerce-chart"><i /><i /><i /><i /><i /><i /><i /></div><div className="commerce-metrics"><div><small>CONVERSION</small><b>4.2%</b></div><div><small>API LATENCY</small><b>42ms</b></div><div><small>ACTIVE SKUS</small><b>18.4K</b></div></div></div></div>
      </div>
    )
  }
  if (product.id === 'securegate') {
    return (
      <div className="mockup secure-mockup" aria-label="SecureGate product preview">
        <div className="mock-top"><span className="mock-brand secure-mark"><i /> SecureGate</span><span className="secure-user">Manager portal　⌄</span></div>
        <div className="secure-content"><div className="secure-side"><b>Overview</b><span>Residents</span><span>Visitor passes</span><span>Event log</span></div><div className="secure-main"><div className="secure-heading"><div><small>MONDAY, OCTOBER 14</small><strong>Good morning, Maya</strong></div><button>+ New pass</button></div><div className="secure-stats"><div><small>ACTIVE RESIDENTS</small><b>482</b><span>↑ 8.4% this month</span></div><div><small>VISITOR PASSES</small><b>36</b><span>12 arriving today</span></div><div><small>GATE EVENTS</small><b>1,248</b><span>All systems normal</span></div></div><div className="event-card"><div><b>Recent gate activity</b><span>View all →</span></div><p><i className="dot green" /> Visitor pass approved <small>Unit 4B · 2 min ago</small></p><p><i className="dot orange" /> Resident sign-in <small>Unit 8A · 11 min ago</small></p></div></div></div>
      </div>
    )
  }
  return (
    <div className="mockup ayushman-mockup" aria-label="Ayushman product preview">
      <div className="mock-top"><span className="mock-brand ayushman-mark"><i /> Ayushman</span><span className="secure-badge">HIPAA COMPLIANT</span></div>
      <div className="ayushman-content"><div className="ayushman-side"><b>Governance</b><span>Practitioners</span><span>Appointments</span><span>Session Logs</span><span>Billing</span></div><div className="ayushman-main"><div className="ayushman-heading"><div><small>ACTIVE NETWORK</small><strong>128 Verified Doctors</strong></div><div className="round-avatar">DR</div></div><div className="dash-cards"><div><small>TODAY</small><b>42</b><span className="up">↑ 12% vs avg</span></div><div><small>COMPLIANCE</small><b>100%</b><span>Immutable audit</span></div><div><small>RATING</small><b>4.9<span>/5</span></b><span>Patient trust</span></div></div><div className="schedule-card"><div><b>Live Consultation Queue</b><span>4 active now</span></div><p><span className="dot violet-dot" /> Dr. Ananya Sharma · Tele-Consult <small>Started 6m ago · Encrypted session</small></p></div></div></div>
    </div>
  )
}

export default function Page() {
  const [demoProduct, setDemoProduct] = useState<string | null>(null)
  const [activeDomain, setActiveDomain] = useState('all')
  const selected = products.find((p) => p.id === demoProduct)
  const visibleProducts = activeDomain === 'all' ? products : products.filter((product) => product.domains.includes(activeDomain))
  return (
    <main>
      <header className="site-header"><a className="logo" href="#top" aria-label="Ellipsonic home"><img src="/Ellipsonic.png" alt="Ellipsonic" className="logo-img" /><span>Ellipsonic</span></a><nav><a href="#suite">Product suite</a><a href="#why">Why Ellipsonic</a><a href="#contact">Contact</a></nav><a className="header-cta" href="#suite">Explore suite <ArrowIcon /></a></header>
      <section className="hero" id="top"><div className="hero-grid" /><div className="hero-copy"><p className="kicker"><span /> PRODUCT CATALOGUE · 2024</p><h1>Software that makes<br /><em>complex work</em> feel clear.</h1><p className="hero-lede">Ellipsonic builds focused digital products for the moments where trust, intelligence, and better systems make the biggest difference.</p><div className="hero-actions"><a className="button button-dark" href="#suite">Explore the suite <ArrowIcon /></a><a className="text-link" href="#contact">Talk to our team <ArrowIcon /></a></div></div><div className="hero-note"><span className="note-line" /><p>Ten products.<br />One thoughtful<br /><strong>approach to software.</strong></p></div></section>
      <section className="intro" id="why"><div className="section-label">01 / THE ELLIPSONIC APPROACH</div><div className="intro-content"><h2>Built around the<br /><span>human outcome.</span></h2><div><p>Our products are not designed to add another layer of complexity. They are designed to make important work more understandable, more accountable, and easier to move forward.</p><a className="text-link" href="#suite">See what we make <ArrowIcon /></a></div></div></section>
      <section className="suite" id="suite"><div className="section-heading"><div><p className="kicker"><span /> THE PRODUCT SUITE</p><h2>Ten products.<br /><em>Ten clear advantages.</em></h2></div><p>Explore the products below to understand what they do, who they are for, and where they can take your organization.</p></div><div className="domain-filter" aria-label="Filter products by domain"><span className="filter-label">FILTER BY DOMAIN</span><div className="filter-options">{domainOptions.map((domain) => <button key={domain.id} className={`filter-chip ${activeDomain === domain.id ? 'is-active' : ''}`} aria-pressed={activeDomain === domain.id} onClick={() => setActiveDomain(domain.id)}>{domain.label}</button>)}</div><span className="filter-count">Showing {visibleProducts.length} of {products.length}</span></div><div className="product-list">{visibleProducts.map((product) => <article className={`product product-${product.color}`} key={product.id}><div className="product-top"><div className="product-index">{product.number} <span>/ 10</span></div><div className="product-category">{product.category}</div></div><div className="product-grid"><div className="product-info"><p className="product-eyebrow">{product.eyebrow}</p><h3>{product.title}</h3><p className="product-description">{product.description}</p><div className="feature-list">{product.features.map((feature) => <span key={feature}><i>✓</i>{feature}</span>)}</div><div className="audience"><small>BEST FOR</small><div>{product.audience.map((a) => <span key={a}>{a}</span>)}</div></div><div className="product-actions"><a className="button button-dark" href={product.url ?? `#${product.id}-link`} target={product.url ? '_blank' : undefined} rel={product.url ? 'noopener noreferrer' : undefined}>View product <ArrowIcon /></a><button className="button button-light" onClick={() => setDemoProduct(product.id)}>Book a demo <ArrowIcon /></button></div></div><ProductMockup product={product} /></div></article>)}</div></section>
      <section className="contact" id="contact"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><p className="kicker"><span /> LET&apos;S MAKE IT CLEAR</p><h2>Have a complex problem?<br /><em>Let&apos;s talk about it.</em></h2><p>Tell us what you are building, and we&apos;ll show you where a more thoughtful system can help.</p><button className="button button-bright" onClick={() => setDemoProduct('Ellipsonic')}>Start a conversation <ArrowIcon /></button></section>
      <footer><a className="logo" href="#top" aria-label="Ellipsonic home"><img src="/Ellipsonic.png" alt="Ellipsonic" className="logo-img" /><span>Ellipsonic</span></a><span>Product catalogue · 2024</span><span>Made for meaningful work.</span></footer>
      {demoProduct && <div className="modal-backdrop" role="presentation" onClick={() => setDemoProduct(null)}><div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" onClick={(e) => e.stopPropagation()}><button className="modal-close" aria-label="Close demo form" onClick={() => setDemoProduct(null)}>×</button><p className="kicker"><span /> REQUEST A DEMO</p><h2 id="demo-title">Let&apos;s show you<br /><em>{selected?.name ?? 'Ellipsonic'} in action.</em></h2><p>Use this placeholder form for now. Connect it to your preferred booking flow when you are ready.</p><label>Your work email<input type="email" placeholder="you@company.com" /></label><button className="button button-dark" onClick={() => setDemoProduct(null)}>Request demo <ArrowIcon /></button></div></div>}
    </main>
  )
}
