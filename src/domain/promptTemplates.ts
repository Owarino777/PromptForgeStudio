import type { GeneratedBlueprint, StudioInput, VisualWorld } from './blueprint';

export function createCodexPrompt(input: StudioInput, world: VisualWorld): string {
  return [
    `Role: You are a senior React, TypeScript, Tailwind CSS, accessibility and motion engineer.`,
    `Project: ${input.projectName || 'Premium landing page'}.`,
    `Build: ${input.buildType}.`,
    `Audience: ${input.audience}.`,
    `Offer: ${input.offer}.`,
    `Selected visual world: ${world.title} - ${world.summary}`,
    `Mood: ${input.mood}.`,
    `Forbidden style: ${input.forbiddenStyle}.`,
    `Layout system: cinematic framed interface, sticky story chapters, premium CTA and responsive sections.`,
    `Motion system: transform, opacity, filter and CSS variables only; support prefers-reduced-motion.`,
    `Interaction system: keyboard accessible navigation, form labels, visible focus states, copy actions and safe UI states.`,
    `Technical constraints: React + TypeScript + Vite + Tailwind CSS, semantic HTML, no external images, no canvas, no unsafe HTML injection.`,
    `Review criteria: no generic SaaS template, no horizontal overflow, strong mobile hierarchy, readable contrast and purposeful animation.`,
  ].join('\n');
}

export function createAgentsRules(input: StudioInput, world: VisualWorld): string {
  return [
    `# ${input.projectName || 'Project'} AGENTS.md`,
    ``,
    `Use the ${world.title} art direction.`,
    `The product must feel ${input.mood || 'premium, cinematic and original'}.`,
    `Avoid ${input.forbiddenStyle || 'generic SaaS layouts, weak cards and default Tailwind output'}.`,
    `Keep motion purposeful, accessible and reduced-motion safe.`,
    `Every section must support the offer: ${input.offer || 'a premium productized service'}.`,
  ].join('\n');
}

export function createReviewPrompt(world: VisualWorld): string {
  return [
    `Review this implementation against the ${world.title} visual world.`,
    `Score originality, composition, typography, motion, mobile layout, accessibility, performance and conversion clarity.`,
    `Find template drift, weak hierarchy, decorative motion, low contrast, overflow and missing reduced-motion support.`,
    `Return concrete fixes before approving the page.`,
  ].join('\n');
}

export function createPolishPrompt(blueprint: GeneratedBlueprint): string {
  return [
    `Polish the generated ${blueprint.selectedVisualWorld.title} landing page.`,
    `Keep the headline "${blueprint.headline}" and CTA "${blueprint.ctaLabel}".`,
    `Improve premium depth, visual rhythm, micro-interactions, responsive spacing, focus states and section transitions.`,
    `Do not add fake testimonials or unrelated features.`,
  ].join('\n');
}
