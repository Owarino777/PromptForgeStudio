import { visualWorlds } from '../data/visualWorlds';
import { SectionLabel } from '../components/ui/SectionLabel';
import { VisualWorldCard } from './VisualWorldCard';

export function VisualWorldGallery() {
  return (
    <section id="worlds" className="worlds-section">
      <div className="section-heading">
        <SectionLabel>Visual Worlds Gallery</SectionLabel>
        <h2>Twelve premium visual worlds, each with its own cinematic system.</h2>
        <p>
          PromptForge worlds act like a design marketplace for direction selection:
          distinct visual logic, composition language, and conversion rhythm before
          implementation starts.
        </p>
      </div>
      <div className="world-grid">
        {visualWorlds.map((world) => (
          <VisualWorldCard key={world.id} world={world} />
        ))}
      </div>
    </section>
  );
}
