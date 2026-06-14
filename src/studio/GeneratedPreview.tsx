import type { GeneratedBlueprint } from '../domain/blueprint';

export function GeneratedPreview({ blueprint }: { blueprint: GeneratedBlueprint }) {
  return (
    <article className="generated-preview" aria-label="Generated landing preview">
      <p>{blueprint.selectedVisualWorld.category}</p>
      <h3>{blueprint.headline}</h3>
      <span>{blueprint.subheadline}</span>
      <div className="preview-benefits">
        {blueprint.benefits.map((benefit) => (
          <div key={benefit}>{benefit}</div>
        ))}
      </div>
      <button type="button">{blueprint.ctaLabel}</button>
    </article>
  );
}
