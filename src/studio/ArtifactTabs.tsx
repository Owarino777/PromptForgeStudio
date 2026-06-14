import { useState } from 'react';
import type { PromptArtifact } from '../domain/blueprint';
import { CopyButton } from '../components/ui/CopyButton';

export function ArtifactTabs({ artifacts }: { artifacts: PromptArtifact[] }) {
  const [activeId, setActiveId] = useState(artifacts[0]?.id ?? '');
  const activeArtifact = artifacts.find((artifact) => artifact.id === activeId) ?? artifacts[0];

  if (!activeArtifact) {
    return null;
  }

  return (
    <div className="artifact-tabs">
      <div className="artifact-tab-list" role="tablist" aria-label="Prompt artifacts">
        {artifacts.map((artifact) => (
          <button
            key={artifact.id}
            type="button"
            role="tab"
            aria-selected={artifact.id === activeArtifact.id}
            onClick={() => setActiveId(artifact.id)}
          >
            {artifact.label}
          </button>
        ))}
      </div>
      <div className="artifact-panel" role="tabpanel">
        <div className="artifact-panel-top">
          <span>{activeArtifact.label}</span>
          <CopyButton value={activeArtifact.content} />
        </div>
        <pre>{activeArtifact.content}</pre>
      </div>
    </div>
  );
}
