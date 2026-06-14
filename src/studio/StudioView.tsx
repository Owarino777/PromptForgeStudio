import { useMemo, useState } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { defaultStudioInput, generateBlueprint } from '../domain/generateBlueprint';
import { ArtifactTabs } from './ArtifactTabs';
import { BlueprintPanel } from './BlueprintPanel';
import { GeneratedPreview } from './GeneratedPreview';
import { StudioForm } from './StudioForm';

export function StudioView() {
  const [input, setInput] = useState(defaultStudioInput);
  const blueprint = useMemo(() => generateBlueprint(input), [input]);

  return (
    <section id="studio" className="studio-section">
      <div className="section-heading">
        <SectionLabel>Studio Generator</SectionLabel>
        <h2>Generate the blueprint as structured data.</h2>
        <p>
          This mock generator is deterministic, frontend-only and safe. It never
          executes user code and never injects raw HTML.
        </p>
      </div>

      <div className="studio-grid">
        <StudioForm value={input} onChange={setInput} />
        <div className="studio-output">
          <GeneratedPreview blueprint={blueprint} />
          <BlueprintPanel blueprint={blueprint} />
          <ArtifactTabs artifacts={blueprint.artifacts} />
        </div>
      </div>
    </section>
  );
}
