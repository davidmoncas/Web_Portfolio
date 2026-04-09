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
        classLabel={character.id.toUpperCase()}
        name={ch.name}
        subtitle={ch.subtitle}
        bio={ch.description}
      />

      <InfoSection title="Looking For">
        <div className="future-panel__cards">
          <div className="future-panel__card">
            <span className="future-panel__card-icon">📍</span>
            <div className="future-panel__card-body">
              <span className="future-panel__card-title">Location</span>
              <p className="future-panel__card-desc">Germany (on-site or hybrid) or fully remote</p>
            </div>
          </div>
          <div className="future-panel__card">
            <span className="future-panel__card-icon">🎮</span>
            <div className="future-panel__card-body">
              <span className="future-panel__card-title">Role</span>
              <p className="future-panel__card-desc">Game Developer or Software Developer</p>
            </div>
          </div>
          <div className="future-panel__card">
            <span className="future-panel__card-icon">🌱</span>
            <div className="future-panel__card-body">
              <span className="future-panel__card-title">Mission</span>
              <p className="future-panel__card-desc">Projects with social impact in education, science, and the environment</p>
            </div>
          </div>
        </div>
      </InfoSection>

      <InfoSection title="Interested in working together?">
        <p className="future-panel__cta-text">
          If you have a project or role that fits, I'd love to hear from you.
        </p>
        <Link to="/contact" className="future-panel__contact-btn">
          Contact Me
        </Link>
      </InfoSection>
    </>
  );
}
