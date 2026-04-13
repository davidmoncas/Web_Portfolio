import { useI18n } from '../../../i18n/I18nContext';
import { PanelHeader, InfoSection, SkillCardGrid } from './PanelShared';
import type { Character } from '../../../types';

interface Props {
  character: Character;
}

export function DavidPanel({ character }: Props) {
  const { t } = useI18n();
  const ch = t.characters[character.id];

  const highlightCards = character.skillCards.filter((c) => c.id !== 'explore-more');
  const ctaCard = character.skillCards.find((c) => c.id === 'explore-more');
  const translatedCta = ctaCard ? t.characterSkillCards[ctaCard.id] : null;

  return (
    <>
      <PanelHeader
        classLabel={ch.classLabel}
        name={ch.name}
        subtitle={ch.subtitle}
        bio={ch.description}
      />

      <InfoSection title={t.panels.david.highlights}>
        <SkillCardGrid cards={highlightCards} />
      </InfoSection>

      {ctaCard && translatedCta && (
        <div className="info-panel__cta-card">
          <span className="info-panel__cta-card-icon">{ctaCard.icon}</span>
          <div className="info-panel__cta-card-body">
            <span className="info-panel__cta-card-title">{translatedCta.title}</span>
            <p className="info-panel__cta-card-desc">{translatedCta.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
