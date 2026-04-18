import { useI18n } from '../../i18n/I18nContext';
import type { ProjectCategory } from '../../types';

type FilterCategory = ProjectCategory | 'all';

const CATEGORY_IDS: FilterCategory[] = ['all', 'game', 'code', 'art'];

interface Props {
  active: FilterCategory;
  onChange: (cat: FilterCategory) => void;
}

export function CategoryFilter({ active, onChange }: Props) {
  const { t } = useI18n();

  return (
    <div className="cat-filter">
      {CATEGORY_IDS.map((id) => (
        <button
          key={id}
          className={[
            'cat-filter__btn',
            `cat-filter__btn--${id}`,
            active === id ? 'cat-filter__btn--active' : '',
          ].filter(Boolean).join(' ')}
          onClick={() => onChange(id)}
        >
          {t.inventory.filters[id]}
        </button>
      ))}
    </div>
  );
}
