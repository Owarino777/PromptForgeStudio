import type { GeneratedBlueprint } from '../domain/blueprint';

export function BlueprintPanel({ blueprint }: { blueprint: GeneratedBlueprint }) {
  return (
    <aside className="blueprint-panel">
      <p>Selected world</p>
      <h3>{blueprint.selectedVisualWorld.title}</h3>
      <span>{blueprint.artDirectionSummary}</span>
      <div>
        {blueprint.sections.map((section) => (
          <article key={section.title}>
            <strong>{section.title}</strong>
            <p>{section.purpose}</p>
          </article>
        ))}
      </div>
    </aside>
  );
}
