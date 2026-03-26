"use client";

import {
  Zap,
  Code2,
  Shield,
  Rocket,
  Brain,
  GitBranch,
  Check,
  ArrowRight,
  Terminal,
  Sparkles,
  ShieldCheck,
  Clock,
  ScanSearch,
} from "lucide-react";

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-400">
        <ShieldCheck size={14} className="text-emerald-400" />
        AI Security &amp; Code Modernization
      </span>

      <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl">
        Your AI code is{" "}
        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          broken
        </span>
        .{" "}
        <br className="hidden sm:block" />
        We fix &amp; deploy it{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          in 1 hour
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
        We take your legacy or AI-generated code, clean it to production standards
        (UCD Dublin Full Stack methodology), and deploy it — before your coffee gets cold.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#pricing"
          className="group inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20"
        >
          <ScanSearch size={18} />
          Get a Free Code Audit in 5 Minutes
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </a>
      </div>

      {/* value props */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
        <span className="inline-flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-400" />
          Security-first refactoring
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock size={16} className="text-emerald-400" />
          Deployed in under 1 hour
        </span>
        <span className="inline-flex items-center gap-2">
          <Sparkles size={16} className="text-emerald-400" />
          UCD Dublin standards
        </span>
      </div>

      {/* terminal preview */}
      <div className="mt-16 w-full max-w-3xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-emerald-500/5">
        <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-zinc-500">codesaas audit</span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed text-zinc-300">
          <p>
            <span className="text-emerald-400">$</span> codesaas audit ./client-project
          </p>
          <p className="mt-2 text-red-400">
            Found 23 issues: 4 critical (XSS, SQL injection), 8 warnings, 11 style
          </p>
          <p className="text-zinc-500">Fixing critical vulnerabilities...</p>
          <p className="text-zinc-500">Refactoring to production standards...</p>
          <p className="text-zinc-500">Running test suite... 47/47 passed</p>
          <p className="mt-2 text-emerald-400">
            Clean build. Deploying to production... Live at client-app.vercel.app
          </p>
          <p className="mt-1 text-zinc-600">Total time: 52 minutes</p>
        </div>
      </div>

      {/* trust */}
      <p className="mt-14 text-sm text-zinc-600">
        Code standards certified by{" "}
        <span className="text-zinc-400">University College Dublin</span> &mdash;{" "}
        trusted by <span className="text-zinc-400">500+ developers</span> who ship with confidence
      </p>
    </section>
  );
}

/* ──────────────────────── Features ────────────────────── */
const features = [
  {
    icon: Brain,
    title: "Context-Aware AI",
    desc: "Our models understand your full codebase, not just the current file. Get suggestions that actually fit your architecture.",
  },
  {
    icon: Code2,
    title: "Production-Ready Output",
    desc: "Generated code follows best practices with proper error handling, types, and tests included by default.",
  },
  {
    icon: GitBranch,
    title: "Git-Native Workflow",
    desc: "Every generation creates a clean branch with atomic commits. Review diffs, not dumps.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "SOC 2 compliant. Your code never leaves your VPC. On-prem deployment available.",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    desc: "One-click deploy to Vercel, AWS, or any platform. CI/CD pipelines generated automatically.",
  },
  {
    icon: Terminal,
    title: "CLI & API Access",
    desc: "Integrate into your existing workflow with our CLI tool or REST API. Works with any stack.",
  },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">
          Everything you need to{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            ship faster
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          CodeSaaS.ai is not another autocomplete. It&apos;s a full-stack AI engineering platform
          that understands context, writes clean code, and deploys it for you.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-violet-500/50 hover:bg-zinc-900"
          >
            <div className="mb-4 inline-flex rounded-lg bg-violet-600/10 p-2.5 text-violet-400 transition group-hover:bg-violet-600/20">
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
const plans = [
  {
    name: "Starter",
    price: "0",
    desc: "For individual developers exploring AI-powered coding.",
    features: [
      "50 generations / month",
      "Community support",
      "Public repos only",
      "CLI access",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "29",
    desc: "For professional developers shipping daily.",
    features: [
      "Unlimited generations",
      "Priority support",
      "Private repos",
      "API access",
      "Team collaboration",
      "Custom templates",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For teams that need security, compliance & scale.",
    features: [
      "Everything in Pro",
      "SOC 2 & HIPAA",
      "On-prem deployment",
      "SSO / SAML",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">
          Simple,{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            transparent
          </span>{" "}
          pricing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Start free. Upgrade when you&apos;re ready. No hidden fees, no surprises.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-xl border p-8 transition ${
              plan.highlighted
                ? "border-violet-500 bg-violet-600/5 shadow-lg shadow-violet-500/10"
                : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-3 py-0.5 text-xs font-medium text-white">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-sm text-zinc-400">{plan.desc}</p>

            <div className="mt-6">
              {plan.price === "Custom" ? (
                <span className="text-4xl font-bold">Custom</span>
              ) : (
                <>
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-zinc-400"> /mo</span>
                </>
              )}
            </div>

            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm text-zinc-300">
                  <Check size={16} className="shrink-0 text-violet-400" />
                  {feat}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full rounded-lg py-3 font-medium transition ${
                plan.highlighted
                  ? "bg-violet-600 text-white hover:bg-violet-500"
                  : "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
              }`}
            >
              {plan.cta}
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
          <Rocket size={18} className="text-violet-400" />
          CodeSaaS.ai
        </div>
        <p>&copy; {new Date().getFullYear()} CodeSaaS.ai. All rights reserved.</p>
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
