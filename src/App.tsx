import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Layers3,
  Menu,
  MousePointer2,
  Sparkles,
  Wand2,
  X,
} from 'lucide-react';

type FloatingCard = {
  label: string;
  title: string;
  text: string;
  className: string;
};

type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

type IncludedItem = {
  title: string;
  text: string;
};

const floatingCards: FloatingCard[] = [
  {
    label: 'Generic Input',
    title: 'Build me a landing page',
    text: 'Navbar. Hero. CTA. Cards. Footer. Same template again.',
    className: 'left-[4%] top-[22%] rotate-[-8deg]',
  },
  {
    label: 'Art Direction',
    title: 'Dark cinematic AI lab',
    text: 'Motion system, typography, visual metaphor, depth and interaction.',
    className: 'right-[5%] top-[18%] rotate-[7deg]',
  },
  {
    label: 'Codex Output',
    title: 'Premium-ready prompt',
    text: 'A complete build instruction that prevents generic Tailwind output.',
    className: 'bottom-[17%] left-[11%] rotate-[5deg]',
  },
  {
    label: 'Review System',
    title: 'Anti-template checklist',
    text: 'Originality, composition, motion, responsiveness and performance.',
    className: 'bottom-[12%] right-[8%] rotate-[-6deg]',
  },
];

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'You send the rough idea',
    text: 'A product, service, niche, competitor, mood, or even a messy AI prompt.',
  },
  {
    number: '02',
    title: 'We design the visual direction',
    text: 'You get premium concepts with layout, typography, motion and interaction logic.',
  },
  {
    number: '03',
    title: 'We forge the Codex prompt',
    text: 'The prompt is structured to force originality, depth, motion and clean frontend output.',
  },
  {
    number: '04',
    title: 'You generate better websites',
    text: 'Codex receives a real creative system instead of a generic component list.',
  },
];

const includedItems: IncludedItem[] = [
  {
    title: '5 visual concepts',
    text: 'Radically different creative directions before implementation.',
  },
  {
    title: '1 premium art direction',
    text: 'Typography, composition, palette, motion and depth system.',
  },
  {
    title: '1 Codex-ready prompt',
    text: 'A full implementation prompt designed to avoid generic output.',
  },
  {
    title: '1 AGENTS.md design file',
    text: 'Persistent project rules for premium UI generation.',
  },
  {
    title: 'Anti-template checklist',
    text: 'A brutal review system to detect weak AI-generated interfaces.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;

    if (!spotlight) {
      return;
    }

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const smooth = {
      x: mouse.x,
      y: mouse.y,
    };

    let rafId = 0;

    const handlePointerMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const animate = () => {
      smooth.x += (mouse.x - smooth.x) * 0.08;
      smooth.y += (mouse.y - smooth.y) * 0.08;

      spotlight.style.setProperty('--spotlight-x', `${smooth.x}px`);
      spotlight.style.setProperty('--spotlight-y', `${smooth.y}px`);

      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-0 spotlight-layer"
        aria-hidden="true"
      />

      <Navigation menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((value) => !value)} />

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <HeroSection />

      <ProblemSection />

      <TransformationSection />

      <OfferSection />

      <ProcessSection />

      <ProofSection />

      <FinalCtaSection />
    </main>
  );
}

function Navigation({
  menuOpen,
  onToggleMenu,
}: {
  menuOpen: boolean;
  onToggleMenu: () => void;
}) {
  const navItems = ['Problem', 'Blueprint', 'Offer', 'Process'];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
        <a href="#" className="flex items-center gap-3" aria-label="PromptForge Studio home">
          <span className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10">
            <Sparkles className="size-4 text-white" aria-hidden="true" />
          </span>
          <span className="text-xs font-black uppercase tracking-[0.32em] text-white">
            PromptForge
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#offer"
          className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.03] hover:bg-white/90 md:inline-flex"
        >
          Get blueprint
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={onToggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
    </nav>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const links = ['Problem', 'Blueprint', 'Offer', 'Process'];

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/95 px-6 pt-28 backdrop-blur-xl transition duration-500 md:hidden ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="flex flex-col gap-5">
        {links.map((link, index) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={onClose}
            className={`font-playfair text-5xl italic tracking-[-0.06em] text-white transition duration-500 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 80 + 120}ms` }}
          >
            {link}
          </a>
        ))}

        <a
          href="#offer"
          onClick={onClose}
          className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition duration-500 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '520ms' }}
        >
          Get blueprint
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12">
      <BackgroundSystem />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="hero-anim hero-fade-up mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            <span className="size-2 rounded-full bg-[#f5ff6b] shadow-[0_0_24px_rgba(245,255,107,0.8)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              AI design systems for Codex
            </span>
          </div>

          <h1 className="hero-anim hero-reveal max-w-5xl text-6xl font-black leading-[0.82] tracking-[-0.095em] text-white sm:text-7xl md:text-8xl xl:text-[8.8rem]">
            Your AI websites look generic.
            <span className="block font-playfair font-semibold italic leading-[0.9] text-white/70">
              We make them premium.
            </span>
          </h1>

          <p className="hero-anim hero-fade-up hero-delay-2 mt-8 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
            PromptForge Studio turns rough ideas into cinematic art directions,
            Codex-ready prompts, and frontend instructions that generate original
            landing pages instead of another Tailwind template.
          </p>

          <div className="hero-anim hero-fade-up hero-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#offer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:scale-[1.03] hover:bg-[#f5ff6b]"
            >
              Get My Premium Prompt
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#process"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              See The Process
              <ChevronRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="hero-anim hero-scale hero-delay-4 relative min-h-[520px]">
          <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/[0.03] shadow-[0_0_120px_rgba(255,255,255,0.08)] backdrop-blur-xl" />

          <div className="absolute left-8 right-8 top-8 rounded-[2rem] border border-white/10 bg-black/60 p-5 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
                Generic Prompt
              </span>
              <Code2 className="size-4 text-white/40" />
            </div>
            <p className="font-mono text-sm leading-7 text-white/60">
              Build me a modern landing page with a navbar, hero, CTA, cards and
              footer...
            </p>
          </div>

          <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-[#f5ff6b]/25 bg-[#f5ff6b]/10 p-5 shadow-[0_0_80px_rgba(245,255,107,0.16)] backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#f5ff6b]">
                Forged Output
              </span>
              <Wand2 className="size-4 text-[#f5ff6b]" />
            </div>
            <p className="font-mono text-sm leading-7 text-white/75">
              Create a cinematic 2026 hero with cursor-reactive spotlight,
              kinetic typography, layered depth, premium motion...
            </p>
          </div>

          <div className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white text-black shadow-[0_0_80px_rgba(255,255,255,0.32)]">
            <Sparkles className="size-8" />
          </div>
        </div>
      </div>

      {floatingCards.map((card) => (
        <FloatingPromptCard key={card.title} card={card} />
      ))}
    </section>
  );
}

function BackgroundSystem() {
  return (
    <>
      <div className="absolute inset-0 bg-[#030303]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,255,107,0.16),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(119,92,255,0.22),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.12),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.86)_72%)]" />
      <div className="noise-layer absolute inset-0 opacity-[0.16]" />
    </>
  );
}

function FloatingPromptCard({ card }: { card: FloatingCard }) {
  return (
    <article
      className={`pointer-events-none absolute z-20 hidden w-64 rounded-3xl border border-white/10 bg-black/45 p-5 shadow-[0_0_80px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:block ${card.className}`}
    >
      <p className="mb-3 text-[9px] font-black uppercase tracking-[0.28em] text-white/35">
        {card.label}
      </p>
      <h2 className="text-lg font-black tracking-[-0.04em] text-white">{card.title}</h2>
      <p className="mt-3 text-xs leading-6 text-white/48">{card.text}</p>
    </article>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className="relative border-t border-white/10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
            The problem
          </p>
          <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.075em] sm:text-6xl">
            AI can code.
            <span className="block font-playfair italic text-white/60">
              It cannot guess taste.
            </span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {['Same layout', 'Weak typography', 'No visual signature'].map((title, index) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
            >
              <span className="text-xs font-black text-white/30">0{index + 1}</span>
              <h3 className="mt-10 text-2xl font-black tracking-[-0.06em]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/50">
                Codex executes the instruction. If the instruction has no art
                direction, the output becomes another safe template.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  return (
    <section id="blueprint" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-10 lg:p-14">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
              The transformation
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.075em] sm:text-6xl">
              From vague prompt to premium creative system.
            </h2>
          </div>

          <MousePointer2 className="size-10 text-white/30" />
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <PromptPanel
            label="Before"
            title="Generic AI prompt"
            text="Build a landing page for my service. Make it modern and responsive."
            muted
          />

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex size-14 items-center justify-center rounded-full bg-white text-black">
              <ArrowUpRight className="size-5" />
            </div>
          </div>

          <PromptPanel
            label="After"
            title="Codex-ready design system"
            text="Create a cinematic landing page with dark editorial typography, animated grid, cursor spotlight, floating prompt cards, premium CTA system, visual depth, reduced motion support and anti-template review rules."
          />
        </div>
      </div>
    </section>
  );
}

function PromptPanel({
  label,
  title,
  text,
  muted = false,
}: {
  label: string;
  title: string;
  text: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`rounded-[2rem] border p-6 ${
        muted
          ? 'border-white/10 bg-black/35'
          : 'border-[#f5ff6b]/25 bg-[#f5ff6b]/10 shadow-[0_0_90px_rgba(245,255,107,0.12)]'
      }`}
    >
      <p
        className={`mb-5 text-[10px] font-black uppercase tracking-[0.28em] ${
          muted ? 'text-white/35' : 'text-[#f5ff6b]'
        }`}
      >
        {label}
      </p>
      <h3 className="text-2xl font-black tracking-[-0.06em] text-white">{title}</h3>
      <p className="mt-5 font-mono text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function OfferSection() {
  return (
    <section id="offer" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
            The offer
          </p>
          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.075em] sm:text-6xl">
            Premium Prompt Blueprint.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/55">
            A productized service for founders, developers and indie hackers who
            want their AI-generated websites to stop looking generic.
          </p>
        </div>

        <div className="rounded-[3rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_120px_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white/35">
                One clear package
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.07em]">
                Premium Prompt Blueprint
              </h3>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-5xl font-black tracking-[-0.08em]">79€</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">
                Launch price
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {includedItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f5ff6b] text-black">
                  <Check className="size-4" />
                </span>
                <div>
                  <h4 className="font-bold tracking-[-0.03em]">{item.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-white/45">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="mailto:contact@promptforge.studio?subject=Premium%20Prompt%20Blueprint"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:scale-[1.02] hover:bg-[#f5ff6b]"
          >
            Reserve my blueprint
            <ArrowUpRight className="size-4" />
          </a>

          <p className="mt-4 text-center text-xs leading-6 text-white/35">
            Payment link and form can be plugged in later. For now, this validates
            demand without building a platform.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="relative border-y border-white/10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
              Process
            </p>
            <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.075em] sm:text-6xl">
              A simple system for better AI-generated sites.
            </h2>
          </div>
          <Layers3 className="size-11 text-white/25" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <p className="text-xs font-black text-[#f5ff6b]">{step.number}</p>
              <h3 className="mt-12 text-2xl font-black leading-tight tracking-[-0.06em]">
                {step.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/45">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        <Stat value="5x" label="Creative directions per blueprint" />
        <Stat value="1" label="Codex-ready implementation prompt" />
        <Stat value="0" label="Generic Tailwind templates tolerated" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-center backdrop-blur-xl">
      <p className="text-6xl font-black tracking-[-0.08em]">{value}</p>
      <p className="mx-auto mt-4 max-w-52 text-xs font-bold uppercase leading-6 tracking-[0.22em] text-white/40">
        {label}
      </p>
    </div>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative px-5 pb-24 pt-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.04] px-6 py-16 text-center backdrop-blur-xl sm:px-10">
        <p className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
          Stop shipping average AI design
        </p>
        <h2 className="mx-auto max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.085em] sm:text-7xl">
          Give Codex a creative system,
          <span className="block font-playfair italic text-white/65">
            not a vague wish.
          </span>
        </h2>

        <a
          href="#offer"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:scale-[1.03] hover:bg-[#f5ff6b]"
        >
          Start with the blueprint
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

export default App;