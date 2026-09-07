'use client'

import { useState, useRef, useEffect } from 'react'
import { Copy, Check, ExternalLink } from 'lucide-react'

const SECRET = "Ellip$onic@2026"

const demoProducts = [
  {
    id: "prerana",
    name: "Prerana Smart Guru",
    color: "#e07132",
    emoji: "📚",
    credentials: [
      { role: "Super Admin", email: "admin@prerana.demo", password: "Prerana@2026" },
      { role: "School Admin", email: "school@prerana.demo", password: "School@2026" },
      { role: "Teacher", email: "teacher@prerana.demo", password: "Teacher@2026" },
      { role: "Student", email: "student@prerana.demo", password: "Student@2026" },
    ],
    url: "https://prerana.smartguru.in/",
    script: [
      "Login as Super Admin → show tenant isolation dashboard.",
      "Navigate to Content → upload a PDF or YouTube link.",
      "Switch to AI Tutor → ask a curriculum question.",
      "Go to Quizzes → launch a live quiz, share the pin.",
      "Login as Student in incognito → join quiz, submit answers.",
      "Back as Admin → open Analytics, show live participation.",
      "Open Audit Logs → demonstrate immutable event trail.",
    ],
  },
  {
    id: "nextwave",
    name: "NextWave",
    color: "#10233e",
    emoji: "📊",
    credentials: [
      { role: "Accountant", email: "accountant@nextwave.demo", password: "Nextwave@2026" },
      { role: "GST Manager", email: "gst@nextwave.demo", password: "Gst@2026" },
      { role: "Branch Manager", email: "branch@nextwave.demo", password: "Branch@2026" },
    ],
    url: "https://nextwave.ellipsonic.com/",
    script: [
      "Login as Accountant → open the Unified Ledger view.",
      "Create a new journal entry → show double-entry enforcement.",
      "Navigate to GST Posting → auto-post a transaction, verify GSTIN.",
      "Open Audit Trail → show append-only, immutable history.",
      "Switch branch → confirm tenant isolation (data stays separate).",
      "Generate a GST summary report for the current quarter.",
    ],
  },
  {
    id: "ayushman",
    name: "Ayushman",
    color: "#392e77",
    emoji: "🏥",
    credentials: [
      { role: "Platform Admin", email: "admin@ayushman.demo", password: "Ayushman@2026" },
      { role: "Practitioner", email: "doctor@ayushman.demo", password: "Doctor@2026" },
      { role: "Patient", email: "patient@ayushman.demo", password: "Patient@2026" },
    ],
    url: "http://ayushmaan.ellipsonic.com/",
    script: [
      "Login as Admin → show verified practitioner onboarding flow.",
      "Switch to Practitioner → open the appointment scheduler.",
      "Book a session as Patient → confirm scheduling workflow.",
      "Join the secure consultation room → show encrypted session.",
      "End session → open immutable session log as Admin.",
      "Show billing automation → demonstrate automated invoice generation.",
    ],
  },
  {
    id: "chalk",
    name: "Chalk AI",
    color: "#df6428",
    emoji: "🎙",
    credentials: [
      { role: "Tutor / Demo User", email: "tutor@chalk.demo", password: "Chalk@2026" },
      { role: "Student", email: "student@chalk.demo", password: "Student@2026" },
    ],
    url: "https://chalk-ai-tawny.vercel.app/",
    script: [
      "Open Chalk AI → grant microphone access.",
      "Ask a spoken question e.g. Explain parabolas.",
      "Show AI drawing live on the whiteboard canvas.",
      "Observe synchronized captions and equation graphing.",
      "Demonstrate barge-in: interrupt the AI mid-explanation.",
      "End session → show post-session synthesis summary.",
    ],
  },
  {
    id: "artivo",
    name: "Artivo",
    color: "#c94f2c",
    emoji: "🎭",
    credentials: [
      { role: "Organiser", email: "organiser@artivo.demo", password: "Artivo@2026" },
      { role: "Verified Artist", email: "artist@artivo.demo", password: "Artist@2026" },
      { role: "Admin", email: "admin@artivo.demo", password: "Admin@2026" },
    ],
    url: "https://artist-work-place-web-rouge.vercel.app/",
    script: [
      "Login as Organiser → search for a musician in Mumbai.",
      "View artist profile → check verification badge tiers.",
      "Create a booking request → enter event details and budget.",
      "Show escrow advance payment flow via Razorpay.",
      "Switch to Artist → accept the booking.",
      "Simulate a no-show → trigger guaranteed payout to organiser.",
      "Submit a two-sided review after event completion.",
    ],
  },
  {
    id: "verifycerts",
    name: "Verify Certs",
    color: "#426a9b",
    emoji: "🔐",
    credentials: [
      { role: "Issuer / Institution", email: "issuer@verify.demo", password: "Verify@2026" },
      { role: "Verifier", email: "verifier@verify.demo", password: "Verifier@2026" },
    ],
    url: "https://verifycerts.ellipsonic.com",
    script: [
      "Login as Issuer → create a new credential template.",
      "Issue a certificate to a sample recipient.",
      "Download the cryptographically signed badge.",
      "Open verifier portal → scan the QR code.",
      "Show sub-80ms verification response with hash match.",
      "Attempt a tampered certificate → show rejection.",
      "Open multi-issuer governance panel.",
    ],
  },
  {
    id: "elipdesk",
    name: "Elipdesk",
    color: "#1f7a4b",
    emoji: "🎫",
    credentials: [
      { role: "Support Agent", email: "agent@elipdesk.demo", password: "Elipdesk@2026" },
      { role: "Manager", email: "manager@elipdesk.demo", password: "Manager@2026" },
      { role: "Tenant Admin", email: "admin@elipdesk.demo", password: "Admin@2026" },
    ],
    url: "http://ticketing.ellipsonic.com/",
    script: [
      "Login as Agent → open the ticket queue.",
      "Create a new ticket → assign SLA policy.",
      "Show business-hours SLA countdown timer.",
      "Escalate ticket → show manager notification.",
      "Login as Manager → view SLA breach dashboard.",
      "Open Tenant Directory → show logical multi-tenant isolation.",
      "Open Audit History → immutable event log per ticket.",
    ],
  },
  {
    id: "smartteams",
    name: "Smart Teams",
    color: "#1a4a8a",
    emoji: "👥",
    credentials: [
      { role: "HR Admin", email: "hr@smartteams.demo", password: "Smart@2026" },
      { role: "Employee", email: "emp@smartteams.demo", password: "Employee@2026" },
      { role: "Payroll Manager", email: "payroll@smartteams.demo", password: "Payroll@2026" },
    ],
    url: "http://smarteam.ellipsonic.com/",
    script: [
      "Login as HR Admin → show employee onboarding flow.",
      "Demo biometric liveness detection for attendance.",
      "Set up GPS geofence for a branch location.",
      "Login as Employee → mark attendance via WebAuthn passkey.",
      "Switch to Payroll Manager → run monthly payroll.",
      "Show statutory compliance PF ESI PT auto-deductions.",
      "Generate payslip → download signed PDF.",
    ],
  },
  {
    id: "blizzbooks",
    name: "Blizz Books",
    color: "#2a7a50",
    emoji: "🍽",
    credentials: [
      { role: "Org Admin", email: "admin@blizz.demo", password: "Blizz@2026" },
      { role: "Branch Manager", email: "manager@blizz.demo", password: "Manager@2026" },
      { role: "Store Keeper", email: "store@blizz.demo", password: "Store@2026" },
    ],
    url: "https://blizbooks.com/",
    script: [
      "Login as Org Admin → show multi-branch hierarchy.",
      "Switch to Branch Manager → create a new GRN entry.",
      "Demo all three GRN modes: direct, invoice, barcode.",
      "Log a wastage event → show audit trail created.",
      "Open Recipe module → add a production recipe.",
      "Run an inventory report → show low-stock alerts.",
      "Show role switching: Branch Manager to Store Keeper.",
    ],
  },
  {
    id: "lexdraft",
    name: "LexDraft",
    color: "#5a4a35",
    emoji: "⚖️",
    credentials: [
      { role: "Senior Partner", email: "partner@lex.demo", password: "Lex@2026" },
      { role: "Associate", email: "associate@lex.demo", password: "Associate@2026" },
      { role: "Client", email: "client@lex.demo", password: "Client@2026" },
    ],
    url: "https://lexdraft-frontend.onrender.com",
    script: [
      "Login as Partner → open firm clause library.",
      "Create a new contract from an approved template.",
      "Show AI clause suggestion with firm-governance enforcement.",
      "Share draft with Associate for review.",
      "Associate adds comments → show redline version history.",
      "Escalate for multi-tier partner sign-off.",
      "Final approval → demonstrate immutable signed audit trail.",
    ],
  },
]

// ─── Copy button ──────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className="demo-copy-btn"
      title={copied ? 'Copied!' : 'Copy'}
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      }}
    >
      {copied
        ? <Check size={13} strokeWidth={2.5} />
        : <Copy size={13} strokeWidth={2} />}
    </button>
  )
}

// ─── Detail panel ─────────────────────────────────────────────────────────────

function DetailPanel({ p }: { p: typeof demoProducts[0] | null }) {
  if (!p) {
    return (
      <div className="dp-empty">
        <div className="dp-empty-icon">🗂</div>
        <p>Select a product on the left to view its demo credentials and script.</p>
      </div>
    )
  }

  return (
    <div className="dp-content" style={{ '--accent': p.color } as React.CSSProperties}>
      {/* Header */}
      <div className="dp-header">
        <div className="dp-header-left">
          <span className="dp-emoji">{p.emoji}</span>
          <div>
            <p className="dp-label">DEMO DETAILS</p>
            <h2 className="dp-name">{p.name}</h2>
          </div>
        </div>
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="dp-live-btn">
          <ExternalLink size={14} strokeWidth={2} />
          Open Live
        </a>
      </div>

      {/* Credentials */}
      <div className="dp-section">
        <h4 className="demo-section-label">🔑 Demo Credentials</h4>
        <div className="demo-creds">
          {p.credentials.map((c) => (
            <div key={c.role} className="demo-cred-row">
              <span className="demo-cred-role">{c.role}</span>
              <div className="demo-cred-pair">
                <span className="demo-cred-field">
                  <span className="demo-cred-key">Email</span>
                  <code>{c.email}</code>
                  <CopyButton text={c.email} />
                </span>
                <span className="demo-cred-field">
                  <span className="demo-cred-key">Pass</span>
                  <code>{c.password}</code>
                  <CopyButton text={c.password} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Script */}
      <div className="dp-section">
        <h4 className="demo-section-label">🎬 Demo Script</h4>
        <ol className="demo-script-list">
          {p.script.map((step, i) => (
            <li key={i}>
              <span className="demo-step-num">{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function DemoPage() {
  const [code, setCode] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const [showPw, setShowPw] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  const selectedProduct = demoProducts.find((p) => p.id === selected) ?? null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (code === SECRET) {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 600)
      setCode("")
      inputRef.current?.focus()
    }
  }

  // ── Gate ────────────────────────────────────────────────────────────────────
  if (!unlocked) {
    return (
      <main className="demo-gate">
        <div className={`demo-gate-card${shake ? " demo-shake" : ""}`}>
          <div className="demo-gate-logo">
            <img src="/Ellipsonic.png" alt="Ellipsonic" />
          </div>
          <p className="demo-gate-eyebrow">INTERNAL ACCESS</p>
          <h1 className="demo-gate-title">Demo Portal</h1>
          <p className="demo-gate-sub">Enter the secret code to access demo credentials and guided scripts.</p>
          <form onSubmit={handleSubmit} className="demo-gate-form">
            <div className={`demo-gate-field${error ? " demo-field-error" : ""}`}>
              <input
                ref={inputRef}
                id="secret-code"
                type={showPw ? "text" : "password"}
                value={code}
                onChange={(e) => { setCode(e.target.value); setError(false) }}
                placeholder="Secret code…"
                autoComplete="off"
                spellCheck={false}
                aria-label="Secret code"
              />
              <button
                type="button"
                className="demo-gate-eye"
                onClick={() => setShowPw(!showPw)}
                aria-label={showPw ? "Hide code" : "Show code"}
              >
                {showPw ? "🙈" : "👁"}
              </button>
            </div>
            {error && (
              <p id="code-error" className="demo-gate-error" role="alert">
                Incorrect code. Please try again.
              </p>
            )}
            <button type="submit" className="demo-gate-submit">
              Unlock Portal →
            </button>
          </form>
          <p className="demo-gate-hint">For authorised Ellipsonic team members only.</p>
        </div>
      </main>
    )
  }

  // ── Unlocked – split panel ──────────────────────────────────────────────────
  return (
    <main className="demo-portal">
      <header className="demo-portal-header">
        <a href="/" className="demo-portal-back">← Catalogue</a>
        <div className="demo-portal-brand">
          <img src="/Ellipsonic.png" alt="Ellipsonic" />
          <span>Demo Portal</span>
        </div>
        <span className="demo-portal-badge">🔓 Authorised</span>
      </header>

      <div className="demo-split">
        {/* ── Left: product list ── */}
        <aside className="demo-sidebar">
          <div className="demo-sidebar-top">
            <p className="demo-portal-eyebrow">ELLIPSONIC INTERNAL</p>
            <h1 className="demo-portal-title">Demo Credentials &amp; Scripts</h1>
            <div className="demo-portal-notice">
              <span>⚠️</span>
              <span>Internal accounts only. Reset after each external session.</span>
            </div>
          </div>
          <nav className="demo-product-list" aria-label="Product list">
            {demoProducts.map((p) => (
              <button
                key={p.id}
                className={`demo-product-btn${selected === p.id ? " demo-product-btn-active" : ""}`}
                style={{ "--accent": p.color } as React.CSSProperties}
                onClick={() => setSelected(p.id)}
                aria-pressed={selected === p.id}
              >
                <span className="demo-card-emoji">{p.emoji}</span>
                <span className="demo-card-title">{p.name}</span>
                <span className="dpb-arrow">›</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* ── Right: detail panel ── */}
        <section className="demo-detail" aria-label="Product detail">
          <DetailPanel p={selectedProduct} />
        </section>
      </div>

      <footer className="demo-portal-footer">
        Ellipsonic · Internal Demo Portal · {new Date().getFullYear()}
      </footer>
    </main>
  )
}