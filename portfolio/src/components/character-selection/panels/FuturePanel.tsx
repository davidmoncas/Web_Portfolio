import { Link } from 'react-router-dom';
import { useI18n } from '../../../i18n/I18nContext';
import { PanelHeader, InfoSection } from './PanelShared';
import type { Character } from '../../../types';

interface Props {
  character: Character;
}

export function FuturePanel({ character }: Props) {
  const { t } = useI18n();
  const ch = t.characters[character.id];

  return (
    <>
      <PanelHeader
        classLabel={ch.classLabel}
        name={ch.name}
        subtitle={ch.subtitle}
        bio={ch.description}
      />

      <InfoSection title={t.panels.future.lookingFor}>
        <div className="future-panel__cards">
          <div className="future-panel__card">
            <span className="future-panel__card-icon">📍</span>
            <div className="future-panel__card-body">
              <span className="future-panel__card-title">{t.panels.future.locationTitle}</span>
              <p className="future-panel__card-desc">{t.panels.future.locationDesc}</p>
            </div>
          </div>
          <div className="future-panel__card">
            <span className="future-panel__card-icon">🎮</span>
            <div className="future-panel__card-body">
              <span className="future-panel__card-title">{t.panels.future.roleTitle}</span>
              <p className="future-panel__card-desc">{t.panels.future.roleDesc}</p>
            </div>
          </div>
          <div className="future-panel__card">
            <span className="future-panel__card-icon">🌱</span>
            <div className="future-panel__card-body">
              <span className="future-panel__card-title">{t.panels.future.missionTitle}</span>
              <p className="future-panel__card-desc">{t.panels.future.missionDesc}</p>
            </div>
          </div>
        </div>
      </InfoSection>

      <InfoSection title={t.panels.future.ctaTitle}>
        <p className="future-panel__cta-text">
          {t.panels.future.ctaText}
        </p>
        <Link to="/contact" className="future-panel__contact-btn">
          {t.panels.future.contactBtn}
        </Link>
      </InfoSection>
    </>
  );
}
