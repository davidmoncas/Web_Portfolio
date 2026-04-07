import { InventorySlot } from './InventorySlot';
import { CategoryFilter } from './CategoryFilter';
import { useI18n } from '../../i18n/I18nContext';
import type { Project, ProjectCategory } from '../../types';

const GRID_SIZE = 20; // 4 columns × 5 rows

interface Props {
  projects: Project[];
  selectedId: string | null;
  activeCategory: ProjectCategory | 'all';
  onSelect: (id: string) => void;
  onCategoryChange: (cat: ProjectCategory | 'all') => void;
}

export function InventoryGrid({ projects, selectedId, activeCategory, onSelect, onCategoryChange }: Props) {
  const { t } = useI18n();
  const slots = Array.from({ length: GRID_SIZE }, (_, i) => projects[i] ?? null);

  return (
    <div className="inv-grid-panel">
      <div className="inv-grid-panel__header">
        <span className="inv-grid-panel__label">{t.inventory.gridLabel}</span>
        <span className="inv-grid-panel__count">{projects.length} / {GRID_SIZE}</span>
      </div>
      <CategoryFilter active={activeCategory} onChange={onCategoryChange} />
      <div className="inv-grid">
        {slots.map((project, i) => (
          <InventorySlot
            key={project?.id ?? `empty-${i}`}
            project={project}
            isSelected={project?.id === selectedId}
            isDimmed={
              project !== null &&
              activeCategory !== 'all' &&
              project.category !== activeCategory
            }
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
