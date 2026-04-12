import { useI18n } from '../../i18n/I18nContext';

export function BottomBar() {
  const { t } = useI18n();

  return (
    <footer className="bottombar">
      <span className="bottombar__copy">
        © {new Date().getFullYear()} David Montoya Castaño. {t.footer.copyright}
      </span>
    </footer>
  );
}
