import { NavLink } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nContext';
import type { TabId } from '../../types';

const TABS: TabId[] = ['characters', 'inventory', 'contact'];

export function TabNavigation() {
  const { t } = useI18n();

  return (
    <nav className="tab-nav" role="tablist">
      {TABS.map((tab) => (
        <NavLink
          key={tab}
          to={`/${tab}`}
          role="tab"
          className={({ isActive }) =>
            `tab-nav__tab${isActive ? ' tab-nav__tab--active' : ''}`
          }
        >
          {t.nav[tab]}
        </NavLink>
      ))}
    </nav>
  );
}
