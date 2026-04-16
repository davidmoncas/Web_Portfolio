import type { Project } from '../../types';
import { SlotScene3D } from './SlotScene3D';

const CATEGORY_LABEL: Record<string, string> = {
  game: 'G',
  code: 'C',
  art:  'A',
  other: 'O',
};

interface Props {
  project: Project | null;
  isSelected: boolean;
  isDimmed: boolean;
  onSelect: (id: string) => void;
}

export function InventorySlot({ project, isSelected, isDimmed, onSelect }: Props) {
  if (!project) {
    return <div className="inv-slot inv-slot--empty" aria-hidden="true" />;
  }

  return (
    <button
      className={[
        'inv-slot',
        isSelected ? 'inv-slot--selected' : '',
        isDimmed  ? 'inv-slot--dimmed'   : '',
      ].filter(Boolean).join(' ')}
      onClick={() => onSelect(project.id)}
      title={project.name}
    >
      <span className={`inv-slot__badge inv-slot__badge--${project.category}`}>
        {CATEGORY_LABEL[project.category]}
      </span>
      {project.scene3dUrl
        ? <SlotScene3D url={project.scene3dUrl} />
        : <span className="inv-slot__icon">{project.icon}</span>
      }
    </button>
  );
}
