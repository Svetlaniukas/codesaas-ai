"use client";

import {
  Code2,
  Shield,
  Rocket,
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  FileSearch,
  Scale,
  BadgeCheck,
  BookOpen,
  BarChart3,
  Lock,
} from "lucide-react";

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/15 blur-[120px]" />

      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-950/30 px-4 py-1.5 text-sm text-amber-300">
        <Shield size={14} />
        Technical Due Diligence Platform
      </span>

      <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl">
        We prepare your code for{" "}
        <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
          investor review
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
        Certified technical audit by a Full Stack Architect (UCD Dublin, Merit).
        We verify architecture, security, scalability, and code quality — so your
        investors don&apos;t have to trust. They verify.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#pricing"
          className="group inline-flex items-center gap-2 rounded-lg bg-amber-500 px-7 py-3.5 font-semibold text-black transition hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
        >
          <Scale size={18} />
          Request Quote for Due Diligence
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </a>
      </div>

      {/* credentials bar */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
        <span className="inline-flex items-center gap-2">
          <BadgeCheck size={16} className="text-amber-400" />
          UCD Dublin Certified
        </span>
        <span className="inline-flex items-center gap-2">
          <BookOpen size={16} className="text-amber-400" />
          700+ hours verified expertise
        </span>
        <span className="inline-flex items-center gap-2">
          <Lock size={16} className="text-amber-400" />
          NDA-ready process
        </span>
      </div>

      {/* report preview */}
      <div className="mt-16 w-full max-w-3xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-amber-500/5">
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs font-medium text-amber-400/60">CODESAAS DUE DILIGENCE REPORT</span>
        </div>
        <div className="p-6 text-left font-mono text-sm leading-relaxed text-zinc-300">
          <p className="text-amber-400 font-semibold">Executive Summary — Series A Readiness</p>
          <p className="mt-3 text-zinc-500">Client: [REDACTED] &mdash; FinTech SaaS, 140k LOC</p>
          <div className="mt-4 space-y-1.5">
            <p><span className="text-red-400">CRITICAL</span> &nbsp;Authentication bypass in /api/auth &mdash; JWT not validated</p>
            <p><span className="text-red-400">CRITICAL</span> &nbsp;SQL injection in search endpoint &mdash; raw query interpolation</p>
            <p><span className="text-yellow-400">WARNING&nbsp;</span> &nbsp;No rate limiting on public API &mdash; DDoS exposure</p>
            <p><span className="text-yellow-400">WARNING&nbsp;</span> &nbsp;Database migrations not versioned &mdash; rollback impossible</p>
            <p><span className="text-emerald-400">PASS&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp;CI/CD pipeline &mdash; GitHub Actions, automated tests</p>
            <p><span className="text-emerald-400">PASS&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp;Infrastructure &mdash; containerized, horizontally scalable</p>
          </div>
          <div className="mt-4 border-t border-zinc-800 pt-4">
            <p className="text-amber-400">Verdict: 4 blockers must be resolved before closing round</p>
            <p className="text-zinc-500">Full report: 28 pages &mdash; architecture, security, scalability, team assessment</p>
          </div>
        </div>
      </div>

      {/* trust */}
      <p className="mt-14 text-sm text-zinc-600">
        Verified{" "}
        <span className="text-zinc-400">700+ hours</span> of software &amp; data engineering expertise &mdash;{" "}
        <span className="text-zinc-400">University College Dublin</span>
      </p>
    </section>
  );
}

/* ──────────────────────── Features ────────────────────── */
const features = [
  {
    icon: FileSearch,
    title: "Architecture Review",
    desc: "Full-stack codebase analysis: folder structure, dependency graph, separation of concerns. We find what breaks at scale before your investors do.",
  },
  {
    icon: Shield,
    title: "Security Audit",
    desc: "OWASP Top 10 scan, authentication flows, API security, data handling. Every vulnerability documented with severity and remediation steps.",
  },
  {
    icon: Code2,
    title: "Code Quality Assessment",
    desc: "Standards-based review (UCD Dublin Full Stack methodology): type safety, error handling, test coverage, clean architecture patterns.",
  },
  {
    icon: BarChart3,
    title: "Scalability Analysis",
    desc: "Database design, query performance, caching strategy, infrastructure readiness. Can your stack handle 10x growth? We answer that.",
  },
  {
    icon: BookOpen,
    title: "28-Page Due Diligence Report",
    desc: "Investor-ready documentation: executive summary, risk matrix, technical debt map, remediation roadmap with time estimates.",
  },
  {
    icon: Lock,
    title: "NDA-Protected Process",
    desc: "Your code stays confidential. Secure review environment, no third-party access, full NDA before any engagement begins.",
  },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">
          What we{" "}
          <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
            audit
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          Technical due diligence for startups raising capital. We give investors
          the confidence to write the check — or give founders the roadmap to get there.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-amber-500/40 hover:bg-zinc-900"
          >
            <div className="mb-4 inline-flex rounded-lg bg-amber-500/10 p-2.5 text-amber-400 transition group-hover:bg-amber-500/20">
              <f.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────── Pricing ─────────────────────── */
const tiers = [
  {
    name: "Code Health Check",
    desc: "For founders who need a quick assessment before talking to investors.",
    features: [
      "Architecture overview",
      "Top 10 risk identification",
      "Security surface scan",
      "1-page executive summary",
      "30-minute debrief call",
    ],
    cta: "Request Quote",
    highlighted: false,
  },
  {
    name: "Full Due Diligence",
    desc: "For startups in active fundraising. The report investors expect to see.",
    features: [
      "Complete architecture review",
      "OWASP security audit",
      "Scalability stress analysis",
      "Technical debt quantification",
      "28-page investor-ready report",
      "Remediation roadmap",
      "2x debrief sessions",
    ],
    cta: "Request Quote for Due Diligence",
    highlighted: true,
  },
  {
    name: "Enterprise Retainer",
    desc: "For VCs and accelerators running multiple portfolio reviews.",
    features: [
      "Everything in Full DD",
      "Ongoing code monitoring",
      "Quarterly re-assessments",
      "Direct Slack channel",
      "Priority 24h turnaround",
      "Volume pricing",
    ],
    cta: "Contact for Partnership",
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">
          Engagement{" "}
          <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
            tiers
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Every engagement is scoped to your codebase. No fixed prices — because
          auditing 5k lines and 500k lines are fundamentally different jobs.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-xl border p-8 transition ${
              tier.highlighted
                ? "border-amber-500 bg-amber-500/5 shadow-lg shadow-amber-500/10"
                : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-0.5 text-xs font-semibold text-black">
                Most Requested
              </span>
            )}

            <h3 className="text-xl font-semibold">{tier.name}</h3>
            <p className="mt-2 text-sm text-zinc-400">{tier.desc}</p>

            <div className="mt-6">
              <span className="text-3xl font-bold text-zinc-300">Custom Quote</span>
            </div>

            <ul className="mt-8 flex-1 space-y-3">
              {tier.features.map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm text-zinc-300">
                  <Check size={16} className="shrink-0 text-amber-400" />
                  {feat}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full rounded-lg py-3 font-medium transition ${
                tier.highlighted
                  ? "bg-amber-500 text-black hover:bg-amber-400"
                  : "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
              }`}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ─────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 py-12 text-center text-sm text-zinc-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 font-semibold text-white">
          <Rocket size={18} className="text-amber-400" />
          CodeSaaS.ai
        </div>
        <p>
          &copy; {new Date().getFullYear()} CodeSaaS.ai &mdash; Technical Due Diligence Platform.
          Verified 700+ hours of software &amp; data engineering expertise.
        </p>
      </div>
    </footer>
  );
}

/* ──────────────────────── Page ─────────────────────────── */
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
