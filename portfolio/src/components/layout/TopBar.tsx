import { useI18n } from '../../i18n/I18nContext';
import type { Language } from '../../types';

const LANGUAGES: Language[] = ['en', 'es', 'de'];

export function TopBar() {
  const { t, language, setLanguage } = useI18n();

  return (
    <header className="topbar">
      <span className="topbar__name">{t.topBar.name}</span>
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
    </header>
  );
}
