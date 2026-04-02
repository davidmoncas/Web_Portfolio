import { useI18n } from '../../i18n/I18nContext';
import { characters } from '../../data/characters';
import type { CharacterId } from '../../types';
import type { Translations } from '../../i18n/translations/en';

type SkillCategoryKey = keyof Translations['skillCategories'];

interface CharacterInfoPanelProps {
  selectedId: CharacterId | null;
}

interface SkillBarProps {
  name: string;
  level: number;
  /** Global index across all skill categories — used for staggered animation timing */
  globalIndex: number;
}

function SkillBar({ name, level, globalIndex }: SkillBarProps) {
  // Each bar gets a slightly different duration (500ms + 60ms per bar)
  // and a small staggered delay, creating a waterfall fill effect.
  const duration = `${500 + globalIndex * 60}ms`;
  const delay    = `${globalIndex * 40}ms`;

  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={
            {
              width: `${level}%`,
              '--bar-duration': duration,
              '--bar-delay':    delay,
            } as React.CSSProperties
          }
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

export function CharacterInfoPanel({ selectedId }: CharacterInfoPanelProps) {
  const { t } = useI18n();
  const character = characters.find((c) => c.id === selectedId) ?? null;

  if (!character) {
    return (
      <div className="info-panel info-panel--empty">
        <p>{t.infoPanel.selectCharacter}</p>
      </div>
    );
  }

  // Compute a flat global index across all categories so stagger is continuous
  let globalSkillIndex = 0;

  return (
    <div
      className="info-panel"
      style={{ '--char-color': character.color } as React.CSSProperties}
    >
      <div className="info-panel__header">
        <h2 className="info-panel__title">{t.infoPanel.skillsTitle}</h2>
        <p className="info-panel__desc">{t.characters[character.id].description}</p>
      </div>

      {/* key=selectedId forces React to remount all skill bars when the character
          changes, so the clip-path animation always starts from 0 */}
      <div key={selectedId} className="info-panel__categories">
        {character.skillCategories.map((cat) => {
          const key   = cat.labelKey.split('.')[1] as SkillCategoryKey;
          const label = t.skillCategories[key] ?? cat.labelKey;
          return (
            <div key={cat.labelKey} className="info-panel__category">
              <h3 className="info-panel__category-title">{label}</h3>
              <div className="info-panel__skills">
                {cat.skills.map((skill) => {
                  const idx = globalSkillIndex++;
                  return (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      globalIndex={idx}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
