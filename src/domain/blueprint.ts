export type VisualWorld = {
  id: string;
  title: string;
  category: string;
  traits: string[];
  scene: string;
  summary: string;
};

export type StudioInput = {
  projectName: string;
  buildType: string;
  audience: string;
  offer: string;
  mood: string;
  forbiddenStyle: string;
  visualWorldId: string;
  language: string;
  ctaLabel: string;
};

export type GeneratedSection = {
  title: string;
  purpose: string;
  content: string;
};

export type PromptArtifact = {
  id: string;
  label: string;
  content: string;
};

export type GeneratedBlueprint = {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  selectedVisualWorld: VisualWorld;
  artDirectionSummary: string;
  benefits: string[];
  sections: GeneratedSection[];
  artifacts: PromptArtifact[];
};
