import { useI18n } from '../../i18n/I18nContext';
import { characters } from '../../data/characters';
import type { CharacterId, SkillCard, ItemEntry } from '../../types';
import type { Translations } from '../../i18n/translations/en';

type SkillCategoryKey = keyof Translations['skillCategories'];

// ── Skill bar ──────────────────────────────────────────────────────────────

// Maps a skill level (0–100) to a green shade: darker = lower, lighter+saturated = higher
function levelToGreen(level: number): string {
  if (level >= 85) return '#16a34a'; // green-600 — high
  if (level >= 70) return '#15803d'; // green-700
  if (level >= 55) return '#166534'; // green-800
  return '#14532d';                  // green-900 — low/dark
}

function SkillBar({ name, level, globalIndex }: { name: string; level: number; globalIndex: number }) {
  const duration = `${500 + globalIndex * 60}ms`;
  const delay    = `${globalIndex * 40}ms`;
  const barColor = levelToGreen(level);
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            width: `${level}%`,
            '--bar-duration': duration,
            '--bar-delay':    delay,
            '--bar-color':    barColor,
          } as React.CSSProperties}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

// ── Skill card ─────────────────────────────────────────────────────────────

function SkillCardItem({ card }: { card: SkillCard }) {
  return (
    <div className="skill-card">
      <div className="skill-card__icon">{card.icon}</div>
      <div className="skill-card__body">
        <span className="skill-card__title">{card.title}</span>
        <p className="skill-card__desc">{card.description}</p>
      </div>
    </div>
  );
}

// ── Equipment item ─────────────────────────────────────────────────────────

function EquipmentItem({ item }: { item: ItemEntry }) {
  return (
    <div className="equip-item">
      <span className="equip-item__icon">{item.icon}</span>
      <div className="equip-item__body">
        <span className="equip-item__name">{item.name}</span>
        <span className="equip-item__desc">{item.description}</span>
      </div>
    </div>
  );
}

// ── Main panel ─────────────────────────────────────────────────────────────

export function CharacterInfoPanel({ selectedId }: { selectedId: CharacterId | null }) {
  const { t } = useI18n();
  const character = characters.find((c) => c.id === selectedId) ?? null;

  if (!character) {
    return (
      <div className="info-panel info-panel--empty">
        <p>{t.infoPanel.selectCharacter}</p>
      </div>
    );
  }

  let globalSkillIndex = 0;

  return (
    <div
      className="info-panel"
      style={{ '--char-color': character.color } as React.CSSProperties}
    >
      {/* ── Profile header ── */}
      <div className="info-panel__profile">
        <span className="info-panel__class-label">{character.id.toUpperCase()}</span>
        <h1 className="info-panel__char-name">{t.characters[character.id].name}</h1>
        <p className="info-panel__subtitle">{t.characters[character.id].subtitle}</p>
      </div>

      {/* ── Skill bars ── */}
      {/* key=selectedId remounts bars so clip-path animation restarts */}
      <div key={selectedId} className="info-panel__section">
        <h3 className="info-panel__section-title">{t.infoPanel.skillsTitle}</h3>
        <div className="info-panel__skill-bars">
          {character.skillCategories.map((cat) => {
            const key   = cat.labelKey.split('.')[1] as SkillCategoryKey;
            const label = t.skillCategories[key] ?? cat.labelKey;
            return (
              <div key={cat.labelKey} className="info-panel__category">
                <h4 className="info-panel__category-title">{label}</h4>
                <div className="info-panel__skills">
                  {cat.skills.map((skill) => {
                    const idx = globalSkillIndex++;
                    return (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} globalIndex={idx} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Skill cards ── */}
      {character.skillCards.length > 0 && (
        <div className="info-panel__section">
          <h3 className="info-panel__section-title">Expertise</h3>
          <div className="info-panel__skill-cards">
            {character.skillCards.map((card) => (
              <SkillCardItem key={card.id} card={card} />
            ))}
          </div>
        </div>
      )}

      {/* ── Equipment / tools list ── */}
      {character.items.length > 0 && (
        <div className="info-panel__section">
          <h3 className="info-panel__section-title">Equipment</h3>
          <div className="info-panel__equip-list">
            {character.items.map((item) => (
              <EquipmentItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
