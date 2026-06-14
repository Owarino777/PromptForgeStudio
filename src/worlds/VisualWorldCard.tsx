import type { VisualWorld } from '../domain/blueprint';
import { WorldScene } from './worldScenes';

export function VisualWorldCard({ world }: { world: VisualWorld }) {
  return (
    <article className="world-card" data-scene={world.scene}>
      <button type="button" className="world-card-action" aria-label={`Explore ${world.title} direction`}>
        <WorldScene scene={world.scene} />
        <div className="world-card-body">
          <span className="world-category">{world.category}</span>
          <h3>{world.title}</h3>
          <ul className="world-traits" aria-label={`${world.title} traits`}>
            {world.traits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
          <span className="world-explore">
            Explore direction
            <span aria-hidden="true">{'->'}</span>
          </span>
        </div>
      </button>
    </article>
  );
}
