export function WorldScene({ scene }: { scene: string }) {
  return (
    <div className={`world-scene ${scene}`} aria-hidden="true">
      <span className="scene-layer scene-layer-a" />
      <span className="scene-layer scene-layer-b" />
      <span className="scene-layer scene-layer-c" />
      <span className="scene-shape scene-shape-a" />
      <span className="scene-shape scene-shape-b" />
      <span className="scene-shape scene-shape-c" />
      <span className="scene-line scene-line-a" />
      <span className="scene-line scene-line-b" />
      <span className="scene-line scene-line-c" />
      <span className="scene-chip scene-chip-a" />
      <span className="scene-chip scene-chip-b" />
      <span className="scene-chip scene-chip-c" />
    </div>
  );
}
