import { useI18n } from '../../i18n/I18nContext';
import type { TabId } from '../../types';

interface TabNavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const TABS: TabId[] = ['characters', 'inventory', 'contact'];

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const { t } = useI18n();

  return (
    <nav className="tab-nav" role="tablist">
      {TABS.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={activeTab === tab}
          className={`tab-nav__tab${activeTab === tab ? ' tab-nav__tab--active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {t.nav[tab]}
        </button>
      ))}
    </nav>
  );
}
