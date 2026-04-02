import { useI18n } from '../../i18n/I18nContext';

export function InventoryPage() {
  const { t } = useI18n();

  return (
    <div className="placeholder-page">
      <h1 className="placeholder-page__title">{t.pages.inventory.title}</h1>
      <p className="placeholder-page__text">{t.pages.inventory.comingSoon}</p>
    </div>
  );
}
