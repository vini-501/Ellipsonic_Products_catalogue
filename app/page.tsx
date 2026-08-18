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
}

const domainOptions = [
  { id: 'all', label: 'All domains' },
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
  },
]

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function ProductMockup({ product }: { product: (typeof products)[number] }) {
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
                <small>FRAUD LEAKAGE</small>
                <b className="stat-green">₹ 0</b>
                <span>Zero proxy punches</span>
              </div>
              <div>
                <small>PAYROLL RUN</small>
                <b>8 hrs</b>
                <span>Down from 10 days</span>
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
        <div className="mock-top"><span className="mock-brand chalk-mark">CHALK<span>AI</span></span><span className="live-pill"><i /> LIVE SESSION</span></div>
        <div className="chalk-content"><div className="voice-panel"><div className="avatar-ring">✦</div><strong>Explain quadratic<br />equations</strong><span className="wave">∿ ∿ ∿ ∿ ∿</span><small>Speaking and drawing in sync</small></div><div className="board"><span className="board-label">LIVE WHITEBOARD</span><div className="axis">y</div><div className="graph-line" /><div className="equation">x = <b>−b ± √b² − 4ac</b><br />　　　 2a</div><span className="graph-x">x</span></div></div>
      </div>
    )
  }
  if (product.id === 'nextwave') {
    return (
      <div className="mockup nextwave-mockup" aria-label="NextWave product preview">
        <div className="mock-top"><span className="mock-brand nextwave-mark">NextWave</span><span className="secure-badge">● AUDIT READY</span></div>
        <div className="finance-content"><div className="finance-nav"><b>GST Overview</b><span>Unified ledger</span><span>Audit trails</span><span>Branches</span></div><div className="finance-main"><small>CONSOLIDATED LIABILITY · ALL GSTINS</small><strong>₹ 6,93,000.00</strong><div className="finance-bars"><i style={{width: '72%'}} /><i style={{width: '48%'}} /><i style={{width: '58%'}} /></div><div className="finance-rows"><span>IGST Payable <b>₹ 4,52,000</b></span><span>CGST Payable <b>₹ 1,20,500</b></span><span>SGST Payable <b>₹ 1,20,500</b></span></div></div></div>
      </div>
    )
  }
  if (product.id === 'optionalgo') {
    return (
      <div className="mockup optionalgo-mockup" aria-label="Option-Algo product preview">
        <div className="mock-top"><span className="mock-brand optionalgo-mark">Option<span>-Algo</span></span><span className="live-pill"><i /> SYSTEM ONLINE</span></div>
        <div className="algo-content"><div className="algo-side"><b>Strategy Catalog</b><span>Trade analytics</span><span>Execution logs</span><span>API access</span></div><div className="algo-main"><small>PORTFOLIO PNL · TODAY</small><strong>+₹ 2,48,640</strong><div className="algo-chart"><span /><span /><span /><span /><span /><span /></div><div className="algo-metrics"><div><small>WIN RATE</small><b>78.4%</b></div><div><small>LATENCY</small><b>&lt; 5ms</b></div><div><small>ACTIVE STRATEGIES</small><b>12</b></div></div></div></div>
      </div>
    )
  }
  if (product.id === 'corecart') {
    return (
      <div className="mockup corecart-mockup" aria-label="Core Cart product preview">
        <div className="mock-top"><span className="mock-brand corecart-mark"><i /> Core Cart</span><span className="beta-badge">NOW IN BETA</span></div>
        <div className="commerce-content"><div className="commerce-nav"><b>Commerce OS</b><span>Catalog</span><span>Orders</span><span>Analytics</span></div><div className="commerce-main"><div className="commerce-heading"><div><small>STORE PERFORMANCE</small><strong>₹ 18.42L</strong></div><span>+18.6%</span></div><div className="commerce-chart"><i /><i /><i /><i /><i /><i /><i /></div><div className="commerce-metrics"><div><small>ORDERS</small><b>1,284</b></div><div><small>CONVERSION</small><b>4.82%</b></div><div><small>ACTIVE SKUS</small><b>2,410</b></div></div></div></div>
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
      <div className="mock-top"><span className="mock-brand ayushman-mark"><i /> Ayushman</span><span className="secure-badge">● SECURE WORKSPACE</span></div>
      <div className="ayushman-content"><div className="ayushman-side"><b>Overview</b><span>Consultations</span><span>Practitioners</span><span>Organizations</span><span>Reports</span></div><div className="ayushman-main"><div className="ayushman-heading"><div><small>MONDAY, OCTOBER 14, 2024</small><strong>Good morning, Arjun.</strong></div><span className="round-avatar">AK</span></div><div className="dash-cards"><div><small>UPCOMING SESSIONS</small><b>12</b><span>Next: Dr. Mehta · 10:30</span></div><div><small>ACTIVE PRACTITIONERS</small><b>48</b><span>6 pending verification</span></div><div><small>READINESS SCORE</small><b>8.6<span>/10</span></b><span className="up">↑ 12% this quarter</span></div></div><div className="schedule-card"><div><b>Today&apos;s schedule</b><span>View calendar →</span></div><p><i className="dot violet-dot" /> Clinical consultation <small>10:30 AM · Dr. Neha Mehta</small></p><p><i className="dot violet-dot" /> Executive coaching <small>2:00 PM · Rohan Kapoor</small></p></div></div></div>
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
      <header className="site-header"><a className="logo" href="#top" aria-label="Ellipsonic home"><span className="logo-mark">e</span><span>ellipsonic</span></a><nav><a href="#suite">Product suite</a><a href="#why">Why Ellipsonic</a><a href="#contact">Contact</a></nav><a className="header-cta" href="#suite">Explore suite <ArrowIcon /></a></header>
      <section className="hero" id="top"><div className="hero-grid" /><div className="hero-copy"><p className="kicker"><span /> PRODUCT CATALOGUE · 2024</p><h1>Software that makes<br /><em>complex work</em> feel clear.</h1><p className="hero-lede">Ellipsonic builds focused digital products for the moments where trust, intelligence, and better systems make the biggest difference.</p><div className="hero-actions"><a className="button button-dark" href="#suite">Explore the suite <ArrowIcon /></a><a className="text-link" href="#contact">Talk to our team <ArrowIcon /></a></div></div><div className="hero-note"><span className="note-line" /><p>Eight products.<br />One thoughtful<br /><strong>approach to software.</strong></p></div></section>
      <section className="intro" id="why"><div className="section-label">01 / THE ELLIPSONIC APPROACH</div><div className="intro-content"><h2>Built around the<br /><span>human outcome.</span></h2><div><p>Our products are not designed to add another layer of complexity. They are designed to make important work more understandable, more accountable, and easier to move forward.</p><a className="text-link" href="#suite">See what we make <ArrowIcon /></a></div></div></section>
      <section className="suite" id="suite"><div className="section-heading"><div><p className="kicker"><span /> THE PRODUCT SUITE</p><h2>Eight products.<br /><em>Eight clear advantages.</em></h2></div><p>Explore the products below to understand what they do, who they are for, and where they can take your organization.</p></div><div className="domain-filter" aria-label="Filter products by domain"><span className="filter-label">FILTER BY DOMAIN</span><div className="filter-options">{domainOptions.map((domain) => <button key={domain.id} className={`filter-chip ${activeDomain === domain.id ? 'is-active' : ''}`} aria-pressed={activeDomain === domain.id} onClick={() => setActiveDomain(domain.id)}>{domain.label}</button>)}</div><span className="filter-count">Showing {visibleProducts.length} of {products.length}</span></div>{visibleProducts.map((product) => <article className={`product product-${product.color}`} key={product.id}><div className="product-top"><div className="product-index">{product.number} <span>/ 08</span></div><div className="product-category">{product.category}</div></div><div className="product-grid"><div className="product-info"><p className="product-eyebrow">{product.eyebrow}</p><h3>{product.title}</h3><p className="product-description">{product.description}</p><div className="feature-list">{product.features.map((feature) => <span key={feature}><i>✓</i>{feature}</span>)}</div><div className="audience"><small>BEST FOR</small><div>{product.audience.map((a) => <span key={a}>{a}</span>)}</div></div><div className="product-actions"><a className="button button-dark" href={`#${product.id}-link`}>View product <ArrowIcon /></a><button className="button button-light" onClick={() => setDemoProduct(product.id)}>Book a demo <ArrowIcon /></button></div></div><ProductMockup product={product} /></div></article>)}</section>
      <section className="contact" id="contact"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><p className="kicker"><span /> LET&apos;S MAKE IT CLEAR</p><h2>Have a complex problem?<br /><em>Let&apos;s talk about it.</em></h2><p>Tell us what you are building, and we&apos;ll show you where a more thoughtful system can help.</p><button className="button button-bright" onClick={() => setDemoProduct('Ellipsonic')}>Start a conversation <ArrowIcon /></button></section>
      <footer><a className="logo" href="#top"><span className="logo-mark">e</span><span>ellipsonic</span></a><span>Product catalogue · 2024</span><span>Made for meaningful work.</span></footer>
      {demoProduct && <div className="modal-backdrop" role="presentation" onClick={() => setDemoProduct(null)}><div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" onClick={(e) => e.stopPropagation()}><button className="modal-close" aria-label="Close demo form" onClick={() => setDemoProduct(null)}>×</button><p className="kicker"><span /> REQUEST A DEMO</p><h2 id="demo-title">Let&apos;s show you<br /><em>{selected?.name ?? 'Ellipsonic'} in action.</em></h2><p>Use this placeholder form for now. Connect it to your preferred booking flow when you are ready.</p><label>Your work email<input type="email" placeholder="you@company.com" /></label><button className="button button-dark" onClick={() => setDemoProduct(null)}>Request demo <ArrowIcon /></button></div></div>}
    </main>
  )
}


