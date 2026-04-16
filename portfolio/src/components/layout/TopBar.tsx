import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nContext';
import type { Language, TabId } from '../../types';

const LANGUAGES: Language[] = ['en', 'es', 'de'];
const TABS: TabId[] = ['characters', 'inventory', 'contact'];

export function TopBar() {
  const { t, language, setLanguage } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <span className="topbar__name">{t.topBar.name}</span>

      {/* Desktop: language buttons */}
      <nav className="topbar__lang" aria-label={t.language.label}>
        {LANGUAGES.map((lang) => (
          <button
            key={lang}
            className={`topbar__lang-btn${language === lang ? ' topbar__lang-btn--active' : ''}`}
            onClick={() => setLanguage(lang)}
            aria-pressed={language === lang}
          >
            {t.language[lang]}
          </button>
        ))}
      </nav>

      {/* Mobile: burger button (replaces language area) */}
      <button
        className="topbar__burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile: combined dropdown — page tabs + language switcher */}
      {menuOpen && (
        <div className="topbar__mobile-menu">
          <nav className="topbar__mobile-nav">
            {TABS.map((tab) => (
              <NavLink
                key={tab}
                to={`/${tab}`}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `topbar__mobile-tab${isActive ? ' topbar__mobile-tab--active' : ''}`
                }
              >
                {t.nav[tab]}
              </NavLink>
            ))}
          </nav>
          <div className="topbar__mobile-lang">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                className={`topbar__lang-btn${language === lang ? ' topbar__lang-btn--active' : ''}`}
                onClick={() => { setLanguage(lang); setMenuOpen(false); }}
                aria-pressed={language === lang}
              >
                {t.language[lang]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
