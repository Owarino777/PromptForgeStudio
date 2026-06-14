import { defaultVisualWorld, visualWorlds } from '../data/visualWorlds';
import type { GeneratedBlueprint, StudioInput } from './blueprint';
import {
  createAgentsRules,
  createCodexPrompt,
  createPolishPrompt,
  createReviewPrompt,
} from './promptTemplates';

export const defaultStudioInput: StudioInput = {
  projectName: 'PromptForge Studio',
  buildType: 'premium landing page',
  audience: 'founders and builders using AI to ship websites',
  offer: 'a Premium Design Blueprint for Codex',
  mood: 'cinematic, technical, high contrast and conversion-oriented',
  forbiddenStyle: 'generic SaaS cards, basic hero sections and cheap glassmorphism',
  visualWorldId: defaultVisualWorld.id,
  language: 'English',
  ctaLabel: 'Get the Blueprint',
};

export function generateBlueprint(input: StudioInput): GeneratedBlueprint {
  const selectedVisualWorld =
    visualWorlds.find((world) => world.id === input.visualWorldId) ?? defaultVisualWorld;

  const headline = `Stop prompting for pages. Start generating ${selectedVisualWorld.title.toLowerCase()} worlds.`;
  const subheadline = `${input.projectName || 'This project'} turns ${input.buildType || 'a rough idea'} into a ${selectedVisualWorld.category.toLowerCase()} experience for ${input.audience || 'a focused audience'}.`;

  const blueprint: GeneratedBlueprint = {
    headline,
    subheadline,
    ctaLabel: input.ctaLabel || 'Start now',
    selectedVisualWorld,
    artDirectionSummary: `${selectedVisualWorld.summary} The experience should feel ${input.mood}, while avoiding ${input.forbiddenStyle}.`,
    benefits: [
      `Clarifies the offer: ${input.offer || 'premium product promise'}.`,
      `Turns visual taste into executable frontend constraints.`,
      `Prevents generic AI output with anti-patterns and review prompts.`,
    ],
    sections: [
      {
        title: 'Hero',
        purpose: 'Establish the visual world and conversion promise.',
        content: `Open with a cinematic ${selectedVisualWorld.title} hero for ${input.audience}.`,
      },
      {
        title: 'Blueprint Engine',
        purpose: 'Explain the product mechanism.',
        content: 'Show diagnosis, visual worlds, selected direction, Codex prompt and review system.',
      },
      {
        title: 'Offer',
        purpose: 'Make the package concrete.',
        content: `Present ${input.offer} with deliverables, price and CTA: ${input.ctaLabel}.`,
      },
    ],
    artifacts: [],
  };

  blueprint.artifacts = [
    {
      id: 'codex',
      label: 'Codex Prompt',
      content: createCodexPrompt(input, selectedVisualWorld),
    },
    {
      id: 'agents',
      label: 'AGENTS.md',
      content: createAgentsRules(input, selectedVisualWorld),
    },
    {
      id: 'review',
      label: 'Review Prompt',
      content: createReviewPrompt(selectedVisualWorld),
    },
    {
      id: 'polish',
      label: 'Polish Prompt',
      content: createPolishPrompt(blueprint),
    },
  ];

  return blueprint;
}
