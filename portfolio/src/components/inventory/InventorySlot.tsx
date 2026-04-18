import type { Project } from '../../types';
import { SlotScene3D } from './SlotScene3D';
import { useI18n } from '../../i18n/I18nContext';

interface Props {
  project: Project | null;
  isSelected: boolean;
  isDimmed: boolean;
  onSelect: (id: string) => void;
}

export function InventorySlot({ project, isSelected, isDimmed, onSelect }: Props) {
  const { t } = useI18n();

  if (!project) {
    return (
      <div className="inv-slot inv-slot--empty" aria-hidden="true">
        <span className="inv-slot__empty-label">{t.inventory.emptySlot}</span>
      </div>
    );
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
        {t.inventory.categories[project.category]}
      </span>
      {project.scene3dUrl
        ? <SlotScene3D url={project.scene3dUrl} isSelected={isSelected} />
        : <span className="inv-slot__icon">{project.icon}</span>
      }
    </button>
  );
}
