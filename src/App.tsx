import { type CSSProperties, useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Layers3,
  Menu,
  MousePointer2,
  ScanLine,
  Sparkles,
  Wand2,
  X,
} from 'lucide-react';

type FloatingCard = {
  label: string;
  title: string;
  text: string;
  className: string;
  rotate: string;
  depth: string;
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
    className: 'left-[3%] top-[34%]',
    rotate: '-8deg',
    depth: '0.85',
  },
  {
    label: 'Art Direction',
    title: 'Dark cinematic AI lab',
    text: 'Motion system, typography, visual metaphor, depth and interaction.',
    className: 'right-[5%] top-[24%]',
    rotate: '7deg',
    depth: '1.15',
  },
  {
    label: 'Codex Output',
    title: 'Premium-ready prompt',
    text: 'A complete build instruction that prevents generic Tailwind output.',
    className: 'bottom-[17%] left-[11%]',
    rotate: '5deg',
    depth: '1',
  },
  {
    label: 'Review System',
    title: 'Anti-template checklist',
    text: 'Originality, composition, motion, responsiveness and performance.',
    className: 'bottom-[12%] right-[8%]',
    rotate: '-6deg',
    depth: '0.72',
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

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

      if (reduceMotion) {
        spotlight.style.setProperty('--spotlight-x', `${mouse.x}px`);
        spotlight.style.setProperty('--spotlight-y', `${mouse.y}px`);
      }
    };

    const animate = () => {
      smooth.x += (mouse.x - smooth.x) * 0.08;
      smooth.y += (mouse.y - smooth.y) * 0.08;

      spotlight.style.setProperty('--spotlight-x', `${smooth.x}px`);
      spotlight.style.setProperty('--spotlight-y', `${smooth.y}px`);

      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    if (!reduceMotion) {
      rafId = window.requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));

    if (!revealItems.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
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

      <FailureSection />

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
            className={`font-playfair text-5xl italic tracking-normal text-white transition duration-500 ${
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
  const heroRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: 0, y: 0 };
    const smooth = { x: 0, y: 0 };
    let rafId = 0;

    const updateTargets = () => {
      hero.style.setProperty('--hero-depth-x', `${smooth.x * 18}px`);
      hero.style.setProperty('--hero-depth-y', `${smooth.y * 14}px`);
      hero.style.setProperty('--hero-tilt-x', `${smooth.y * -3}deg`);
      hero.style.setProperty('--hero-tilt-y', `${smooth.x * 4}deg`);

      cardRefs.current.forEach((card) => {
        if (!card) {
          return;
        }

        const depth = Number(card.dataset.depth ?? 1);
        card.style.setProperty('--card-x', `${smooth.x * depth * 28}px`);
        card.style.setProperty('--card-y', `${smooth.y * depth * 22}px`);
      });
    };

    const animate = () => {
      smooth.x += (pointer.x - smooth.x) * 0.08;
      smooth.y += (pointer.y - smooth.y) * 0.08;
      updateTargets();
      rafId = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      if (reduceMotion) {
        smooth.x = pointer.x;
        smooth.y = pointer.y;
        updateTargets();
      }
    };

    hero.addEventListener('pointermove', handlePointerMove, { passive: true });

    if (!reduceMotion) {
      rafId = window.requestAnimationFrame(animate);
    }

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);

      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-stage relative flex min-h-[100dvh] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      <BackgroundSystem />

      <div className="hero-core-glow absolute left-1/2 top-[42%] z-[1] h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] xl:gap-14">
        <div className="relative">
          <div className="hero-anim hero-fade-up mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            <span className="size-2 rounded-full bg-[#f5ff6b] shadow-[0_0_24px_rgba(245,255,107,0.8)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              AI design systems for Codex
            </span>
          </div>

          <h1 className="hero-anim hero-reveal max-w-5xl text-5xl font-black leading-[0.86] tracking-normal text-white sm:text-7xl md:text-[5.4rem] xl:text-[6rem] 2xl:text-[6.8rem]">
            <span className="block">Your AI</span>
            <span className="block">websites look</span>
            <span className="block">generic.</span>
            <span className="block font-playfair font-semibold italic leading-[0.9] text-white/70">
              We make them premium.
            </span>
          </h1>

          <p className="hero-anim hero-fade-up hero-delay-2 mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            PromptForge Studio turns rough ideas into cinematic art directions,
            Codex-ready prompts, and frontend instructions that generate original
            landing pages instead of another Tailwind template.
          </p>

          <div className="hero-anim hero-fade-up hero-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#offer"
              className="premium-cta group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:scale-[1.03] hover:bg-[#f5ff6b]"
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

          <div className="hero-anim hero-fade-up hero-delay-4 mt-10 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
            {['Art direction', 'Codex prompt', 'AGENTS rules'].map((item) => (
              <div key={item} className="bg-black/55 px-4 py-3">
                <p className="text-[10px] font-black uppercase leading-5 tracking-[0.18em] text-white/42">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ForgeEngine />
      </div>

      {floatingCards.map((card, index) => (
        <FloatingPromptCard
          key={card.title}
          card={card}
          refCallback={(node) => {
            cardRefs.current[index] = node;
          }}
        />
      ))}
    </section>
  );
}

function ForgeEngine() {
  return (
    <div className="hero-anim hero-scale hero-delay-4 forge-panel relative min-h-[520px] sm:min-h-[560px] xl:min-h-[600px]">
      <div className="absolute inset-0 rounded-[2.25rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.015)_42%,rgba(245,255,107,0.08))] shadow-[0_0_140px_rgba(245,255,107,0.08)] backdrop-blur-xl" />
      <div className="forge-scan absolute inset-4 rounded-[1.75rem] border border-white/10" />

      <div className="absolute left-5 right-5 top-5 rounded-[1.5rem] border border-white/10 bg-black/70 p-5 backdrop-blur-xl sm:left-8 sm:right-8 sm:top-8">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
            Raw prompt intake
          </span>
          <Code2 className="size-4 text-white/40" aria-hidden="true" />
        </div>
        <p className="font-mono text-sm leading-7 text-white/58">
          Build a modern AI landing page. Add navbar, hero, feature cards, pricing,
          footer. Make it beautiful.
        </p>
      </div>

      <div className="absolute left-1/2 top-[39%] z-20 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white text-black shadow-[0_0_90px_rgba(245,255,107,0.34)] sm:top-[49%] sm:size-28">
        <div className="forge-orbit absolute inset-[-12px] rounded-full border border-[#f5ff6b]/25 sm:inset-[-18px]" />
        <Sparkles className="size-5 sm:size-8" aria-hidden="true" />
      </div>

      <div className="absolute left-8 right-8 top-[43%] hidden h-px bg-gradient-to-r from-transparent via-[#f5ff6b]/60 to-transparent sm:block" />

      <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-[#f5ff6b]/30 bg-[#f5ff6b]/10 p-5 shadow-[0_0_90px_rgba(245,255,107,0.16)] backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#f5ff6b]">
            Forged creative system
          </span>
          <Wand2 className="size-4 text-[#f5ff6b]" aria-hidden="true" />
        </div>
        <div className="grid gap-3 sm:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/38">
              Visual signature
            </p>
            <p className="mt-3 text-2xl font-black leading-none tracking-normal text-white">
              cinematic prompt forge
            </p>
          </div>
          <p className="font-mono text-sm leading-7 text-white/72">
            Create an acid-on-black landing page with orbital light, editorial
            type, pointer depth, anti-template rules, premium CTA choreography.
          </p>
        </div>
      </div>

      <div className="absolute left-7 top-[35%] hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl sm:flex">
        <ScanLine className="mr-2 size-4 text-[#f5ff6b]" aria-hidden="true" />
        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/50">
          Taste filter active
        </span>
      </div>

      <div className="engine-metric absolute right-6 top-[35%] hidden rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl sm:block">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
          Generic risk
        </p>
        <div className="mt-4 h-2 w-28 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-[18%] rounded-full bg-[#f5ff6b]" />
        </div>
      </div>
    </div>
  );
}

function BackgroundSystem() {
  return (
    <>
      <div className="absolute inset-0 bg-[#030303]" />
      <div className="gradient-mesh absolute inset-0" />
      <div className="orbital-field absolute inset-[-18%]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.88)_72%)]" />
      <div className="noise-layer absolute inset-0 opacity-[0.16]" />
    </>
  );
}

function FloatingPromptCard({
  card,
  refCallback,
}: {
  card: FloatingCard;
  refCallback: (node: HTMLElement | null) => void;
}) {
  return (
    <article
      ref={refCallback}
      data-depth={card.depth}
      className={`floating-prompt-card pointer-events-none absolute z-[8] hidden w-64 rounded-3xl border border-white/10 bg-black/50 p-5 shadow-[0_0_80px_rgba(0,0,0,0.42)] backdrop-blur-xl xl:block ${card.className}`}
      style={{ '--card-rotate': card.rotate } as CSSProperties}
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[9px] font-black uppercase tracking-[0.28em] text-white/35">
          {card.label}
        </p>
        <span className="size-1.5 rounded-full bg-[#f5ff6b] shadow-[0_0_18px_rgba(245,255,107,0.9)]" />
      </div>
      <h2 className="text-lg font-black tracking-normal text-white">{card.title}</h2>
      <p className="mt-3 text-xs leading-6 text-white/50">{card.text}</p>
      <div className="mt-5 h-px bg-gradient-to-r from-[#f5ff6b]/60 via-white/10 to-transparent" />
    </article>
  );
}

function FailureSection() {
  const failures = [
    {
      title: 'The prompt asks for components',
      text: 'Navbar, hero, cards and footer are structure. They are not taste, rhythm, tension or visual memory.',
    },
    {
      title: 'The model optimizes for safe averages',
      text: 'Without constraints, it chooses familiar SaaS patterns because they are statistically easy to satisfy.',
    },
    {
      title: 'There is no review language',
      text: 'If the brief cannot name what generic looks like, the generated page has no reason to avoid it.',
    },
  ];

  return (
    <section className="relative px-5 py-20 sm:px-8 lg:px-12">
      <div className="reveal-on-scroll mx-auto grid max-w-7xl gap-10 border-y border-white/10 py-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
            Why it fails
          </p>
          <h2 className="max-w-2xl text-4xl font-black leading-[0.93] tracking-normal sm:text-6xl">
            Generic output is usually a brief problem.
          </h2>
        </div>

        <div className="grid gap-3">
          {failures.map((item, index) => (
            <article
              key={item.title}
              className="group grid gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-[#f5ff6b]/30 hover:bg-[#f5ff6b]/[0.055] sm:grid-cols-[4rem_1fr]"
            >
              <p className="font-playfair text-4xl italic leading-none text-white/24">
                0{index + 1}
              </p>
              <div>
                <h3 className="text-xl font-black tracking-normal text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/50">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className="relative border-t border-white/10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="reveal-on-scroll mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
            The problem
          </p>
          <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-normal sm:text-6xl">
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
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/[0.055]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="text-xs font-black text-white/30">0{index + 1}</span>
              <h3 className="mt-10 text-2xl font-black tracking-normal">{title}</h3>
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
      <div className="reveal-on-scroll mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-10 lg:p-14">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
              The transformation
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-normal sm:text-6xl">
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
      className={`prompt-panel rounded-[2rem] border p-6 ${
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
      <h3 className="text-2xl font-black tracking-normal text-white">{title}</h3>
      <p className="mt-5 font-mono text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function OfferSection() {
  return (
    <section id="offer" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="reveal-on-scroll mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
            The offer
          </p>
          <h2 className="text-4xl font-black leading-[0.95] tracking-normal sm:text-6xl">
            Premium Prompt Blueprint.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/55">
            A productized service for founders, developers and indie hackers who
            want their AI-generated websites to stop looking generic.
          </p>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/35">
                You buy
              </p>
              <p className="mt-3 text-lg font-black leading-tight tracking-normal">
                Taste constraints before code generation starts.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[#f5ff6b]/20 bg-[#f5ff6b]/[0.07] p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f5ff6b]">
                You avoid
              </p>
              <p className="mt-3 text-lg font-black leading-tight tracking-normal">
                Burning cycles polishing a weak first direction.
              </p>
            </div>
          </div>
        </div>

        <div className="offer-card rounded-[3rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_120px_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white/35">
                One clear package
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-normal">
                Premium Prompt Blueprint
              </h3>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-5xl font-black tracking-normal">79€</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">
                Launch price
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/32 p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f5ff6b]">
              79€ package focus
            </p>
            <p className="mt-3 text-sm leading-7 text-white/58">
              One concise creative blueprint built to give Codex taste, motion,
              hierarchy and anti-template guardrails before it writes the page.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {includedItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f5ff6b] text-black">
                  <Check className="size-4" />
                </span>
                <div>
                  <h4 className="font-bold tracking-normal">{item.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-white/45">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="mailto:contact@promptforge.studio?subject=Premium%20Prompt%20Blueprint"
            className="premium-cta mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:scale-[1.02] hover:bg-[#f5ff6b]"
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
      <div className="reveal-on-scroll mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
              Process
            </p>
            <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-normal sm:text-6xl">
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
              <h3 className="mt-12 text-2xl font-black leading-tight tracking-normal">
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
      <div className="reveal-on-scroll mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
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
      <p className="text-6xl font-black tracking-normal">{value}</p>
      <p className="mx-auto mt-4 max-w-52 text-xs font-bold uppercase leading-6 tracking-[0.22em] text-white/40">
        {label}
      </p>
    </div>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative px-5 pb-24 pt-10 sm:px-8 lg:px-12">
      <div className="reveal-on-scroll mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.04] px-6 py-16 text-center backdrop-blur-xl sm:px-10">
        <p className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
          Stop shipping average AI design
        </p>
        <h2 className="mx-auto max-w-5xl text-5xl font-black leading-[0.88] tracking-normal sm:text-7xl">
          Give Codex a creative system,
          <span className="block font-playfair italic text-white/65">
            not a vague wish.
          </span>
        </h2>

        <a
          href="#offer"
          className="premium-cta mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:scale-[1.03] hover:bg-[#f5ff6b]"
        >
          Start with the blueprint
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

export default App;
