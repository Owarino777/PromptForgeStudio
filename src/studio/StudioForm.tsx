import type { StudioInput } from '../domain/blueprint';
import { visualWorlds } from '../data/visualWorlds';

type StudioFormProps = {
  value: StudioInput;
  onChange: (value: StudioInput) => void;
};

const fields: Array<{
  key: keyof StudioInput;
  label: string;
  type?: 'textarea' | 'select';
}> = [
  { key: 'projectName', label: 'Project name' },
  { key: 'buildType', label: 'What are you building?' },
  { key: 'audience', label: 'Target audience' },
  { key: 'offer', label: 'Main offer' },
  { key: 'mood', label: 'Desired mood' },
  { key: 'forbiddenStyle', label: 'Forbidden style' },
  { key: 'visualWorldId', label: 'Visual world preference', type: 'select' },
  { key: 'language', label: 'Language' },
  { key: 'ctaLabel', label: 'CTA label' },
];

export function StudioForm({ value, onChange }: StudioFormProps) {
  const update = (key: keyof StudioInput, nextValue: string) => {
    onChange({ ...value, [key]: nextValue });
  };

  return (
    <form className="studio-form" aria-label="Blueprint generator controls">
      {fields.map((field) => (
        <label key={field.key}>
          <span>{field.label}</span>
          {field.type === 'select' ? (
            <select
              value={value.visualWorldId}
              onChange={(event) => update(field.key, event.target.value)}
            >
              {visualWorlds.map((world) => (
                <option key={world.id} value={world.id}>
                  {world.title}
                </option>
              ))}
            </select>
          ) : (
            <input
              value={value[field.key]}
              onChange={(event) => update(field.key, event.target.value)}
            />
          )}
        </label>
      ))}
    </form>
  );
}
