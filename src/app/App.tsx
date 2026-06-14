import { ArrowUpRight, Check, ChevronRight, Menu, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { BeveledButton } from '../components/ui/BeveledButton';
import { SectionLabel } from '../components/ui/SectionLabel';
import { deliverables, proofPoints } from '../data/offer';
import { StudioView } from '../studio/StudioView';
import { VisualWorldGallery } from '../worlds/VisualWorldGallery';

const navLinks = [
  { label: 'Engine', href: '#engine' },
  { label: 'Worlds', href: '#worlds' },
  { label: 'Studio', href: '#studio' },
  { label: 'Pricing', href: '#offer' },
];
const weakFragments = [
  'build me a modern landing',
  'add cards and CTA',
  'make it premium',
];
const outputWorlds = ['Cinematic AI Lab', 'Spatial Product Launch', 'Luxury Editorial'];

const journeyChapters = [
  {
    id: '01',
    title: 'Raw Idea',
    text: 'Your idea starts as a vague prompt.',
  },
  {
    id: '02',
    title: 'Diagnosis',
    text: 'The system extracts audience, emotion, offer, constraints and visual risks.',
  },
  {
    id: '03',
    title: 'World Synthesis',
    text: 'PromptForge creates multiple premium directions before code exists.',
  },
  {
    id: '04',
    title: 'Selected Direction',
    text: 'The strongest world becomes the art direction.',
  },
  {
    id: '05',
    title: 'Codex Prompt',
    text: 'The art direction becomes a structured implementation prompt.',
  },
  {
    id: '06',
    title: 'Live Preview',
    text: 'The preview becomes a premium landing page.',
  },
  {
    id: '07',
    title: 'Export',
    text: 'Copy the Codex prompt, AGENTS.md, review prompt and polish prompt.',
  },
];

const promptLayers = [
  'ROLE',
  'ART DIRECTION',
  'VISUAL METAPHOR',
  'LAYOUT',
  'MOTION',
  'INTERACTIONS',
  'ACCESSIBILITY',
  'ANTI-PATTERNS',
];

const worldNodePalette = [
  '#b8c6ff',
  '#f5ff6b',
  '#7dd9ff',
  '#ffa86a',
  '#d79cff',
  '#9effc2',
  '#ffe08e',
  '#7e8dff',
  '#ff8eb8',
  '#8be3ff',
  '#f6b8ff',
  '#b8ffd9',
];

function OfferSection() {
  return (
    <section id="offer" className="offer-section">
      <div className="section-heading">
        <SectionLabel>Premium Design Blueprint</SectionLabel>
        <h2>A complete visual-world prompt system for 79EUR.</h2>
        <p>
          The package turns a rough idea into art direction, Codex implementation
          prompt, AGENTS.md rules, review prompt, polish prompt and a practical QA
          checklist.
        </p>
      </div>

      <div className="offer-grid">
        <div className="price-panel">
          <span>Launch package</span>
          <strong>79EUR</strong>
          <p>Built for founders and builders who want Codex to start from taste.</p>
          <BeveledButton href="#studio">
            Open Studio
            <ArrowUpRight className="size-4" />
          </BeveledButton>
        </div>
        <div className="deliverables-list">
          {deliverables.map((item) => (
            <div key={item}>
              <Check className="size-4" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyWorksSection() {
  return (
    <section className="why-section">
      <div className="section-heading">
        <SectionLabel>Why this works</SectionLabel>
        <h2>Better outputs start before the model writes code.</h2>
      </div>
      <div className="why-grid">
        {proofPoints.map((point, index) => (
          <article key={point} className="why-card">
            <p>0{index + 1}</p>
            <h3>{point}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="final-cta-section">
      <SectionLabel>Ready to forge</SectionLabel>
      <h2>Give Codex a world, not a vague wish.</h2>
      <BeveledButton href="#studio">
        Open Studio
        <ArrowUpRight className="size-4" />
      </BeveledButton>
    </section>
  );
}

export default function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const journeyRef = useRef<HTMLElement | null>(null);
  const revealRafRef = useRef<number | null>(null);
  const scrollRafRef = useRef<number | null>(null);
  const revealTargetRef = useRef({ x: 0, y: 0 });
  const revealCurrentRef = useRef({ x: 0, y: 0 });
  const activeChapterRef = useRef(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [maskSupported, setMaskSupported] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const hasMaskSupport =
      typeof CSS !== 'undefined' &&
      (CSS.supports('mask-image: radial-gradient(circle, #000 0%, transparent 100%)') ||
        CSS.supports('-webkit-mask-image: radial-gradient(circle, #000 0%, transparent 100%)'));
    setMaskSupported(hasMaskSupport);
  }, []);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) {
      return;
    }

    const getCenter = () => {
      const rect = heroElement.getBoundingClientRect();
      return {
        x: rect.left + rect.width * 0.56,
        y: rect.top + rect.height * 0.44,
      };
    };

    const center = getCenter();
    revealTargetRef.current = center;
    revealCurrentRef.current = center;

    const updateReveal = () => {
      if (reducedMotion) {
        const staticCenter = getCenter();
        heroElement.style.setProperty('--reveal-x', `${staticCenter.x}px`);
        heroElement.style.setProperty('--reveal-y', `${staticCenter.y}px`);
        revealRafRef.current = null;
        return;
      }

      const current = revealCurrentRef.current;
      const target = revealTargetRef.current;

      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;

      heroElement.style.setProperty('--reveal-x', `${current.x}px`);
      heroElement.style.setProperty('--reveal-y', `${current.y}px`);
      revealRafRef.current = window.requestAnimationFrame(updateReveal);
    };

    const onPointerMove = (event: PointerEvent) => {
      revealTargetRef.current = { x: event.clientX, y: event.clientY };
    };

    const onPointerLeave = () => {
      revealTargetRef.current = getCenter();
    };

    const onResize = () => {
      const nextCenter = getCenter();
      revealTargetRef.current = nextCenter;
      if (reducedMotion) {
        revealCurrentRef.current = nextCenter;
        heroElement.style.setProperty('--reveal-x', `${nextCenter.x}px`);
        heroElement.style.setProperty('--reveal-y', `${nextCenter.y}px`);
      }
    };

    heroElement.style.setProperty('--reveal-x', `${center.x}px`);
    heroElement.style.setProperty('--reveal-y', `${center.y}px`);

    heroElement.addEventListener('pointermove', onPointerMove, { passive: true });
    heroElement.addEventListener('pointerdown', onPointerMove, { passive: true });
    heroElement.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('resize', onResize);

    revealRafRef.current = window.requestAnimationFrame(updateReveal);

    return () => {
      heroElement.removeEventListener('pointermove', onPointerMove);
      heroElement.removeEventListener('pointerdown', onPointerMove);
      heroElement.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('resize', onResize);
      if (revealRafRef.current !== null) {
        window.cancelAnimationFrame(revealRafRef.current);
      }
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const section = journeyRef.current;
    if (!section) {
      return;
    }

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const covered = Math.min(Math.max(-rect.top, 0), travel);
      const progress = covered / travel;
      const chapterExact = progress * journeyChapters.length;
      const nextChapter = Math.min(journeyChapters.length - 1, Math.floor(chapterExact));
      const chapterProgress = Math.min(1, chapterExact - nextChapter);

      section.style.setProperty('--engine-progress', progress.toFixed(4));
      section.style.setProperty('--chapter-index', `${nextChapter}`);
      section.style.setProperty('--chapter-progress', chapterProgress.toFixed(4));

      if (activeChapterRef.current !== nextChapter) {
        activeChapterRef.current = nextChapter;
        setActiveChapter(nextChapter);
      }
      scrollRafRef.current = null;
    };

    const onScroll = () => {
      if (scrollRafRef.current === null) {
        scrollRafRef.current = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, [reducedMotion]);

  return (
    <>
      <section
        ref={heroRef}
        className="pf-reveal-hero relative min-h-screen overflow-hidden bg-[#02040a] text-white"
        style={{ minHeight: '100dvh' }}
        data-mask-supported={maskSupported ? 'true' : 'false'}
        data-reduced-motion={reducedMotion ? 'true' : 'false'}
      >
        <div aria-hidden="true" className="pf-reveal-stage absolute inset-0 z-0">
          <div className="pf-generic-world">
            <span className="pf-generic-badge">GENERIC OUTPUT</span>
            <div className="pf-generic-shell">
              <div className="pf-generic-top" />
              <div className="pf-generic-hero" />
              <div className="pf-generic-cta" />
              <div className="pf-generic-cards">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="pf-generic-labels">
              <span>NO ART DIRECTION</span>
              <span>TEMPLATE RISK: HIGH</span>
              <span>PROMPT QUALITY: LOW</span>
            </div>
          </div>

          <div className="pf-premium-world">
            <div className="pf-premium-atmosphere" />
            <div className="pf-premium-core">
              <span className="pf-premium-core-inner" />
              <span className="pf-premium-ring pf-premium-ring-a" />
              <span className="pf-premium-ring pf-premium-ring-b" />
              <span className="pf-premium-ring pf-premium-ring-c" />
            </div>

            <div className="pf-premium-cards">
              {outputWorlds.map((world) => (
                <article key={world}>
                  <span>world output</span>
                  <p>{world}</p>
                </article>
              ))}
            </div>

            <div className="pf-premium-panel">
              <span>premium preview panel</span>
              <div />
              <div />
              <div />
            </div>

            <div className="pf-premium-labels">
              <span>ART DIRECTION LOCKED</span>
              <span>MOTION SYSTEM ACTIVE</span>
              <span>CODEX PROMPT READY</span>
              <span>ANTI-TEMPLATE CHECK PASSED</span>
            </div>

            <div className="pf-premium-particles">
              {Array.from({ length: 12 }).map((_, index) => (
                <span
                  key={`premium-particle-${index}`}
                  style={{
                    ['--delay' as string]: `${index * 220}ms`,
                    ['--drift' as string]: `${-68 + index * 12}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <header className="pf-reveal-nav fixed left-4 right-4 top-4 z-50 md:left-8 md:right-8 md:top-6">
          <nav aria-label="Primary navigation" className="pf-reveal-nav-shell">
            <a href="#" className="pf-brand" aria-label="PromptForge Studio home">
              <span aria-hidden="true" className="pf-brand-mark" />
              <span>PromptForge Studio</span>
            </a>

            <div className="pf-reveal-nav-links hidden lg:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a href="#studio" className="pf-cta pf-cta-primary">
                Open Studio
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <button
              type="button"
              className="pf-reveal-menu-button lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <Menu className="size-5" />
            </button>
          </nav>

          <div className={`pf-reveal-mobile-menu lg:hidden ${mobileMenuOpen ? 'is-open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#studio" className="pf-cta pf-cta-primary" onClick={() => setMobileMenuOpen(false)}>
              Open Studio
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </header>

        <main className="relative z-30 flex min-h-screen items-end px-5 pb-28 pt-36 sm:px-8 sm:pt-40 lg:px-16 lg:pb-32">
          <section className="pf-reveal-content max-w-[760px]">
            <p className="pf-kicker">
              <Sparkles className="size-4" />
              Move cursor to reveal the premium world
            </p>

            <h1 className="text-[clamp(3.4rem,8vw,8rem)] font-black leading-[0.86] tracking-[-0.06em]">
              <span className="block animate-heroReveal">Stop prompting</span>
              <span className="block animate-heroReveal [animation-delay:110ms]">for pages.</span>
              <span className="block font-playfair text-white/70 italic animate-heroReveal [animation-delay:220ms]">
                Start generating worlds.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/62 sm:text-lg animate-heroFade [animation-delay:260ms]">
              PromptForge turns rough ideas into cinematic art directions, premium landing
              previews, Codex-ready prompts, and anti-template creative systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-heroFade [animation-delay:360ms]">
              <a href="#studio" className="pf-cta pf-cta-primary">
                Open Studio
                <ArrowUpRight className="size-4" />
              </a>
              <a href="#engine" className="pf-cta pf-cta-secondary">
                Explore Engine
                <ChevronRight className="size-4" />
              </a>
            </div>
          </section>
        </main>

        <div className="pf-reveal-status-bar absolute inset-x-4 bottom-4 z-40 sm:inset-x-8 sm:bottom-6" role="status">
          <span>GENERIC PROMPT DETECTED</span>
          <span className="hidden sm:inline">REVEAL PREMIUM SYSTEM</span>
          <span>CODEX OUTPUT READY</span>
        </div>
      </section>

      <section
        id="engine"
        ref={journeyRef}
        className="pf-journey"
        style={{
          ['--engine-progress' as string]: 0,
          ['--chapter-index' as string]: 0,
          ['--chapter-progress' as string]: 0,
        }}
        data-reduced-motion={reducedMotion ? 'true' : 'false'}
        data-stage={activeChapter}
      >
        {reducedMotion ? (
          <div className="pf-journey-stacked">
            {journeyChapters.map((chapter) => (
              <article key={chapter.id} className="pf-stacked-card">
                <p>{chapter.id}</p>
                <h2>{chapter.title}</h2>
                <p>{chapter.text}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="sticky top-0 h-screen overflow-hidden">
            <div aria-hidden="true" className="pf-journey-bg" />
            <div className="pf-journey-grid">
              <div className="pf-journey-copy" aria-live="polite">
                {journeyChapters.map((chapter, index) => (
                  <article
                    key={chapter.id}
                    className={`pf-journey-chapter ${activeChapter === index ? 'is-active' : ''}`}
                  >
                    <p>{chapter.id}</p>
                    <h2>{chapter.title}</h2>
                    <p>{chapter.text}</p>
                  </article>
                ))}
              </div>

              <div className="pf-journey-core-wrap" aria-hidden="true">
                <div className="pf-journey-core">
                  <div className="pf-diagnosis-scan" />
                  <div className="pf-template-fragments">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="pf-low-confidence-labels">
                    <span>LOW CONFIDENCE</span>
                    <span>TEMPLATE PATTERN</span>
                    <span>STRUCTURE: GENERIC</span>
                  </div>

                  <div className="pf-journey-core-inner" />
                  <div className="pf-journey-orbit pf-journey-orbit-main" />
                  <div className="pf-journey-orbit pf-journey-orbit-alt" />

                  <div className="pf-selected-direction-card">
                    <span>SELECTED WORLD</span>
                    <h3>Cinematic AI Lab</h3>
                    <p>Editorial contrast, acid guidance, and conversion-first spatial framing.</p>
                  </div>

                  <div className="pf-journey-fragments">
                    {weakFragments.map((fragment) => (
                      <span key={fragment}>{fragment}</span>
                    ))}
                  </div>

                  <div className="pf-journey-diagnostics">
                    <span>AUDIENCE</span>
                    <span>OFFER</span>
                    <span>EMOTION</span>
                    <span>VISUAL RISK</span>
                    <span>CONSTRAINTS</span>
                  </div>

                  <div className="pf-world-nodes">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <span
                        key={`world-node-${index}`}
                        className={index === 3 ? 'is-selected' : ''}
                        style={{
                          ['--angle' as string]: `${index * 30}deg`,
                          ['--ring' as string]: index % 2 === 0 ? '165px' : '210px',
                          ['--delay' as string]: `${index * 180}ms`,
                          ['--node-color' as string]: worldNodePalette[index],
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <aside className="pf-output-panel" aria-label="Generated output panel">
                <div className="pf-output-layers">
                  {promptLayers.map((layer) => (
                    <div key={layer} className="pf-layer-chip">
                      {layer}
                    </div>
                  ))}
                </div>

                <div className="pf-mini-preview">
                  <div className="pf-mini-preview-head">
                    <span />
                    <span />
                  </div>
                  <div className="pf-mini-preview-hero">
                    <strong>Stop prompting for pages.</strong>
                    <p>Start generating worlds.</p>
                    <i>Open Studio</i>
                  </div>
                  <div className="pf-mini-preview-grid">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="pf-export-cards">
                  <span>Codex Prompt</span>
                  <span>AGENTS.md</span>
                  <span>Review Prompt</span>
                  <span>Polish Prompt</span>
                </div>
              </aside>
            </div>

            <div className="pf-journey-timeline" aria-hidden="true">
              <div className="pf-timeline-meta">
                <span>FORGE JOURNEY</span>
                <span>{journeyChapters[Math.min(activeChapter, journeyChapters.length - 1)].title}</span>
              </div>
              <div className="pf-timeline-track">
                <i />
              </div>
              <div className="pf-timeline-labels">
                {journeyChapters.map((chapter, index) => (
                  <span key={chapter.id} className={index === activeChapter ? 'is-active' : ''}>
                    {chapter.id} {chapter.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="pf-journey-mobile-stack">
          {journeyChapters.map((chapter) => (
            <article key={`mobile-${chapter.id}`} className="pf-mobile-step">
              <p>{chapter.id}</p>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </article>
          ))}
        </div>
      </section>

      <VisualWorldGallery />
      <StudioView />
      <OfferSection />
      <WhyWorksSection />
      <FinalCtaSection />
    </>
  );
}
