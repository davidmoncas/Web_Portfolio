import { useI18n } from '../../i18n/I18nContext';

export function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="placeholder-page">
      <h1 className="placeholder-page__title">{t.pages.contact.title}</h1>
      <p className="placeholder-page__text">{t.pages.contact.comingSoon}</p>
    </div>
  );
}
