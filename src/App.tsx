import { type CSSProperties, useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Menu,
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

type BlueprintStep = {
  label: string;
  title: string;
  text: string;
  fragment: string;
};

type VisualWorld = {
  title: string;
  category: string;
  traits: string;
  scene: string;
};

type Deliverable = {
  title: string;
  text: string;
};

const floatingCards: FloatingCard[] = [
  {
    label: 'Weak prompt',
    title: 'Build me a page',
    text: 'One sentence, no taste system, no visual memory.',
    className: 'left-[3%] top-[34%]',
    rotate: '-8deg',
    depth: '0.85',
  },
  {
    label: 'Visual world',
    title: 'Cinematic AI Lab',
    text: 'Metaphor, palette, depth, type, interaction and motion rules.',
    className: 'right-[5%] top-[24%]',
    rotate: '7deg',
    depth: '1.15',
  },
  {
    label: 'Codex system',
    title: 'Implementation prompt',
    text: 'File-level guidance, constraints, anti-patterns and QA criteria.',
    className: 'bottom-[17%] left-[11%]',
    rotate: '5deg',
    depth: '1',
  },
  {
    label: 'Review layer',
    title: 'Anti-template prompt',
    text: 'A second pass that catches generic layouts and weak mobile polish.',
    className: 'bottom-[12%] right-[8%]',
    rotate: '-6deg',
    depth: '0.72',
  },
];

const blueprintSteps: BlueprintStep[] = [
  {
    label: 'Input',
    title: 'Raw idea',
    text: 'Your niche, offer, audience, rough prompt or messy product note.',
    fragment: 'idea: "AI website for a premium service"',
  },
  {
    label: 'Diagnosis',
    title: 'Creative diagnosis',
    text: 'We define the audience, emotional target, premium bar and traps to avoid.',
    fragment: 'risk: generic SaaS grid / weak hero / no signature',
  },
  {
    label: 'Worlds',
    title: '5 visual worlds',
    text: 'Five distinct directions with metaphor, palette, typography, motion and depth.',
    fragment: 'worlds: lab, spatial launch, editorial, object, brutalist',
  },
  {
    label: 'Direction',
    title: 'Selected art direction',
    text: 'The strongest world becomes a concrete design system for implementation.',
    fragment: 'selected: cinematic forge with acid light and command UI',
  },
  {
    label: 'Codex',
    title: 'Codex-ready prompt',
    text: 'A structured implementation prompt with layout, motion and technical rules.',
    fragment: 'build: React + TypeScript + Tailwind + accessibility',
  },
  {
    label: 'Review',
    title: 'Anti-template review',
    text: 'A critique prompt and polish prompt to prevent template drift after generation.',
    fragment: 'review: originality, mobile, motion, performance, contrast',
  },
];

const visualWorlds: VisualWorld[] = [
  {
    title: 'Cinematic AI Lab',
    category: 'Dark lab system',
    traits: 'acid glow, command cards, magnetic depth',
    scene: 'world-lab',
  },
  {
    title: 'Spatial Product Launch',
    category: 'Orbiting hero',
    traits: 'rings, product core, launch telemetry',
    scene: 'world-spatial',
  },
  {
    title: 'Geology Cursor Reveal',
    category: 'Tactile reveal',
    traits: 'strata, cursor cuts, mineral contrast',
    scene: 'world-geology',
  },
  {
    title: 'Luxury Editorial',
    category: 'Magazine system',
    traits: 'serif drama, sparse grid, high fashion pacing',
    scene: 'world-editorial',
  },
  {
    title: 'Naturecore Portal',
    category: 'Organic interface',
    traits: 'living frame, soft light, portal layers',
    scene: 'world-nature',
  },
  {
    title: '3D Collectible Hero',
    category: 'Object theater',
    traits: 'plinth, shadow, collectible reveal',
    scene: 'world-collectible',
  },
  {
    title: 'Brutalist Portfolio',
    category: 'Raw showcase',
    traits: 'hard grid, type blocks, controlled friction',
    scene: 'world-brutalist',
  },
  {
    title: 'Holographic Dashboard',
    category: 'Data spectacle',
    traits: 'prismatic panels, beam lines, glass metrics',
    scene: 'world-holo',
  },
  {
    title: 'Dreamcore Landing',
    category: 'Soft surreal',
    traits: 'mist, floating frames, impossible space',
    scene: 'world-dream',
  },
  {
    title: 'Clean AI Object',
    category: 'Minimal product',
    traits: 'white object, black stage, quiet precision',
    scene: 'world-object',
  },
  {
    title: 'Architectural SaaS',
    category: 'Structural premium',
    traits: 'plans, columns, measured hierarchy',
    scene: 'world-architecture',
  },
  {
    title: 'Kinetic Typography',
    category: 'Motion-first type',
    traits: 'oversized words, rhythm, typographic engine',
    scene: 'world-kinetic',
  },
];

const promptLayers = [
  'Role',
  'Art direction',
  'Visual metaphor',
  'Layout system',
  'Motion system',
  'Interaction system',
  'Technical constraints',
  'Accessibility',
  'Anti-patterns',
  'Review criteria',
];

const deliverables: Deliverable[] = [
  {
    title: '5 custom visual worlds',
    text: 'Distinct premium website directions before Codex writes a line of UI.',
  },
  {
    title: '1 selected premium art direction',
    text: 'The strongest world expanded into layout, type, palette, motion and interaction rules.',
  },
  {
    title: '1 Codex-ready implementation prompt',
    text: 'A structured build instruction with files, constraints, states and responsive behavior.',
  },
  {
    title: '1 AGENTS.md creative rule file',
    text: 'Persistent project rules that keep Codex away from generic SaaS output.',
  },
  {
    title: '1 anti-template review prompt',
    text: 'A critique pass for originality, hierarchy, motion, accessibility and mobile polish.',
  },
  {
    title: '1 implementation polish prompt',
    text: 'A final refinement prompt for premium feel after the first generated version.',
  },
  {
    title: '1 responsive/performance checklist',
    text: 'A practical QA list for overflow, reduced motion, contrast and interaction quality.',
  },
];

const proofPoints = [
  'AI tools execute instructions. They do not invent taste from a vague sentence.',
  'Generic prompts create generic websites because the model optimizes for safe averages.',
  'Premium output requires art direction before code, not after the page is already weak.',
  'Constraints improve creativity by giving Codex a sharper surface to push against.',
  'Review prompts prevent template drift when the first build looks too familiar.',
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
      { threshold: 0.04, rootMargin: '0px 0px -8% 0px' },
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
      <BlueprintEngineSection />
      <VisualWorldsSection />
      <PromptAnatomySection />
      <DeliverablesSection />
      <WhyWorksSection />
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
  const navItems = [
    ['Engine', 'engine'],
    ['Worlds', 'worlds'],
    ['Anatomy', 'anatomy'],
    ['Offer', 'offer'],
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl">
        <a href="#" className="flex items-center gap-3" aria-label="PromptForge Studio home">
          <span className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10">
            <Sparkles className="size-4 text-white" aria-hidden="true" />
          </span>
          <span className="text-xs font-black uppercase tracking-[0.32em] text-white">
            PromptForge
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([item, id]) => (
            <a
              key={item}
              href={`#${id}`}
              className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#offer"
          className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.03] hover:bg-[#f5ff6b] md:inline-flex"
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
  const links = [
    ['Engine', 'engine'],
    ['Worlds', 'worlds'],
    ['Anatomy', 'anatomy'],
    ['Offer', 'offer'],
  ];

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/95 px-6 pt-28 backdrop-blur-xl transition duration-500 md:hidden ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="flex flex-col gap-5">
        {links.map(([link, id], index) => (
          <a
            key={link}
            href={`#${id}`}
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
          className={`premium-cta mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition duration-500 ${
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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] xl:gap-16">
        <div className="relative">
          <div className="hero-anim hero-fade-up mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            <span className="size-2 rounded-full bg-[#f5ff6b] shadow-[0_0_24px_rgba(245,255,107,0.8)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              Premium Design Blueprint for Codex
            </span>
          </div>

          <h1 className="hero-anim hero-reveal max-w-5xl text-5xl font-black leading-[0.9] tracking-normal text-white sm:text-7xl md:text-[5.6rem] xl:text-[6.2rem]">
            <span className="block">Stop prompting</span>
            <span className="block">for pages.</span>
            <span className="block font-playfair font-semibold italic leading-[0.92] text-white/70">
              Start prompting for worlds.
            </span>
          </h1>

          <p className="hero-anim hero-fade-up hero-delay-2 mt-8 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
            PromptForge Studio turns rough ideas into cinematic art directions,
            Codex-ready prompts, and anti-template systems that help AI generate
            original premium websites.
          </p>

          <div className="hero-anim hero-fade-up hero-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#offer"
              className="premium-cta group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.03] hover:bg-[#f5ff6b]"
            >
              Get the Blueprint
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#worlds"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              Explore worlds
              <ChevronRight className="size-4" />
            </a>
          </div>

          <div className="hero-anim hero-fade-up hero-delay-4 mt-10 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
            {['Diagnosis', 'Visual worlds', 'Codex system'].map((item) => (
              <div key={item} className="bg-black/55 px-4 py-3">
                <p className="text-[10px] font-black uppercase leading-5 tracking-[0.16em] text-white/42">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <HeroForgeEngine />
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

function HeroForgeEngine() {
  return (
    <div className="hero-anim hero-scale hero-delay-4 forge-panel hero-forge relative min-h-[560px] sm:min-h-[620px]">
      <div className="absolute inset-0 rounded-[2.25rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.015)_42%,rgba(245,255,107,0.08))] shadow-[0_0_140px_rgba(245,255,107,0.08)] backdrop-blur-xl" />
      <div className="forge-scan absolute inset-4 rounded-[1.75rem] border border-white/10" />

      <div className="weak-fragment weak-fragment-a">
        <span>Build a modern landing page</span>
      </div>
      <div className="weak-fragment weak-fragment-b">
        <span>add hero, cards, CTA</span>
      </div>
      <div className="weak-fragment weak-fragment-c">
        <span>make it premium</span>
      </div>

      <div className="forge-core">
        <div className="forge-orbit absolute inset-[-22px] rounded-full border border-[#f5ff6b]/25" />
        <Sparkles className="relative z-10 size-9" aria-hidden="true" />
      </div>

      <div className="world-output-card output-one">
        <span>Cinematic AI Lab</span>
      </div>
      <div className="world-output-card output-two">
        <span>Spatial Product Launch</span>
      </div>
      <div className="world-output-card output-three">
        <span>Luxury Editorial</span>
      </div>

      <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-[#f5ff6b]/25 bg-black/45 p-5 backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f5ff6b]">
            Forge Engine
          </p>
          <Wand2 className="size-4 text-[#f5ff6b]" aria-hidden="true" />
        </div>
        <p className="font-mono text-sm leading-7 text-white/68">
          rough idea - diagnosis - visual worlds - selected art direction -
          Codex prompt - anti-template review
        </p>
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

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-12 max-w-4xl">
      <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black leading-[0.95] tracking-normal sm:text-6xl">
        {title}
      </h2>
      {text ? <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">{text}</p> : null}
    </div>
  );
}

function BlueprintEngineSection() {
  return (
    <section id="engine" className="relative border-t border-white/10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="reveal-on-scroll mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Blueprint Engine"
          title="A command interface for turning rough ideas into visual worlds."
          text="PromptForge does not sell generic prompts. It diagnoses the idea, explores directions, selects an art system, then translates it into Codex-ready execution."
        />

        <div className="blueprint-console rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/35">
                Blueprint run
              </p>
              <p className="mt-2 font-mono text-sm text-white/58">
                input.idea - diagnosis - worlds - direction - prompt - review
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#f5ff6b]/25 bg-[#f5ff6b]/10 px-4 py-2">
              <span className="size-2 rounded-full bg-[#f5ff6b] shadow-[0_0_18px_rgba(245,255,107,0.9)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f5ff6b]">
                World synthesis active
              </span>
            </div>
          </div>

          <div className="blueprint-flow">
            {blueprintSteps.map((step, index) => (
              <article
                key={step.title}
                className={`blueprint-node ${index === 2 ? 'is-active' : ''}`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/38">
                    {step.label}
                  </p>
                  <span className="font-mono text-xs text-white/26">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-black tracking-normal text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">{step.text}</p>
                <p className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-3 font-mono text-xs leading-6 text-white/42">
                  {step.fragment}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualWorldsSection() {
  return (
    <section id="worlds" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="reveal-on-scroll mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Visual Worlds"
          title="Twelve possible worlds before one implementation prompt."
          text="Each direction is a different website language: metaphor, space, palette, motion, interaction and conversion rhythm. No fake screenshots, no stock imagery, no template grid pretending to be strategy."
        />

        <div className="world-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visualWorlds.map((world) => (
            <article key={world.title} className="world-card group">
              <div className={`world-scene ${world.scene}`} aria-hidden="true">
                <span className="scene-orb" />
                <span className="scene-line scene-line-a" />
                <span className="scene-line scene-line-b" />
                <span className="scene-chip" />
              </div>
              <div className="relative z-10 mt-5">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f5ff6b]">
                  {world.category}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight tracking-normal text-white">
                  {world.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/50">{world.traits}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromptAnatomySection() {
  return (
    <section id="anatomy" className="relative border-y border-white/10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="reveal-on-scroll mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Prompt Anatomy"
          title="The value is the structure Codex receives."
          text="A one-line prompt asks for a page. A PromptForge output gives Codex a role, visual world, technical contract, anti-patterns and review criteria."
        />

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="prompt-anatomy-card muted">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/35">
                Generic prompt
              </p>
              <Code2 className="size-4 text-white/30" aria-hidden="true" />
            </div>
            <p className="font-mono text-2xl leading-10 text-white/62">
              Build me a modern landing page.
            </p>
            <div className="mt-10 grid gap-3">
              {['No world', 'No motion logic', 'No review criteria'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm font-bold text-white/42">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="prompt-anatomy-card output">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f5ff6b]">
                PromptForge output
              </p>
              <ScanLine className="size-4 text-[#f5ff6b]" aria-hidden="true" />
            </div>
            <div className="prompt-layer-grid">
              {promptLayers.map((layer, index) => (
                <div key={layer} className="prompt-layer">
                  <span>0{index + 1}</span>
                  <p>{layer}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-[1.5rem] border border-[#f5ff6b]/20 bg-[#f5ff6b]/[0.07] p-5 font-mono text-sm leading-7 text-white/68">
              You are Codex building a premium 2026 landing page. Use the selected
              visual world, enforce the motion system, avoid named anti-patterns,
              support reduced motion, and run the review criteria before handoff.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  return (
    <section id="offer" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="reveal-on-scroll mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
            Deliverables
          </p>
          <h2 className="text-4xl font-black leading-[0.95] tracking-normal sm:text-6xl">
            Premium Design Blueprint.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/55">
            A concrete prompt-generation system for founders and builders who want
            Codex to start from taste, not from a generic component request.
          </p>
          <div className="mt-8 rounded-[2rem] border border-[#f5ff6b]/25 bg-[#f5ff6b]/10 p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f5ff6b]">
              Package
            </p>
            <div className="mt-4 flex flex-wrap items-end gap-4">
              <p className="text-5xl font-black tracking-normal text-white">79€</p>
              <p className="pb-2 text-sm font-bold uppercase tracking-[0.18em] text-white/42">
                launch price
              </p>
            </div>
          </div>
        </div>

        <div className="offer-card rounded-[3rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_120px_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-8">
          <div className="border-b border-white/10 pb-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/35">
              Includes
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-normal">
              Complete visual-world prompt system
            </h3>
          </div>

          <div className="mt-8 grid gap-4">
            {deliverables.map((item) => (
              <div key={item.title} className="deliverable-row">
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
            href="mailto:contact@promptforge.studio?subject=Premium%20Design%20Blueprint"
            className="premium-cta mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:bg-[#f5ff6b]"
          >
            Reserve my blueprint
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyWorksSection() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="reveal-on-scroll mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why this works"
          title="Better outputs start before the model writes code."
          text="No fake testimonials. Just the mechanics: a sharper creative system gives Codex better constraints, better review language and fewer chances to drift into template territory."
        />

        <div className="why-grid grid gap-4 md:grid-cols-5">
          {proofPoints.map((point, index) => (
            <article key={point} className="why-card">
              <p className="font-playfair text-5xl italic leading-none text-white/22">0{index + 1}</p>
              <p className="mt-8 text-lg font-black leading-tight tracking-normal text-white">
                {point}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative px-5 pb-24 pt-10 sm:px-8 lg:px-12">
      <div className="reveal-on-scroll mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.04] px-6 py-16 text-center backdrop-blur-xl sm:px-10">
        <p className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-[#f5ff6b]">
          Stop asking AI for another page
        </p>
        <h2 className="mx-auto max-w-5xl text-5xl font-black leading-[0.94] tracking-normal sm:text-7xl">
          Give Codex a world,
          <span className="block font-playfair italic text-white/65">
            not a vague wish.
          </span>
        </h2>

        <a
          href="#offer"
          className="premium-cta mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.03] hover:bg-[#f5ff6b]"
        >
          Start with the blueprint
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

export default App;
