/**
 * Shared building blocks for character info panels.
 *
 * Import from here to keep visual consistency across panels while letting
 * each panel compose and arrange elements freely.
 */

import type { SkillCategory, SkillCard, ItemEntry, WorkEntry, ToolEntry } from '../../../types';
import type { Translations } from '../../../i18n/translations/en';
import { useI18n } from '../../../i18n/I18nContext';

type SkillCategoryKey = keyof Translations['skillCategories'];

// ── Section wrapper ────────────────────────────────────────────────────────

interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

export function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <div className="info-panel__section">
      <h3 className="info-panel__section-title">{title}</h3>
      {children}
    </div>
  );
}

// ── Profile header ─────────────────────────────────────────────────────────

interface PanelHeaderProps {
  classLabel: string;
  name: string;
  subtitle: string;
  bio?: string;
}

export function PanelHeader({ classLabel, name, subtitle, bio }: PanelHeaderProps) {
  return (
    <div className="info-panel__profile">
      <span className="info-panel__class-label">{classLabel}</span>
      <h1 className="info-panel__char-name">{name}</h1>
      <p className="info-panel__subtitle">{subtitle}</p>
      {bio && <p className="info-panel__bio">{bio}</p>}
    </div>
  );
}

// ── Skill bar ──────────────────────────────────────────────────────────────

function levelToGreen(level: number): string {
  if (level >= 85) return '#16a34a';
  if (level >= 70) return '#15803d';
  if (level >= 55) return '#166534';
  return '#14532d';
}

interface SkillBarProps {
  name: string;
  level: number;
  globalIndex: number;
}

export function SkillBar({ name, level, globalIndex }: SkillBarProps) {
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

// ── Skill categories (multiple categories with bars) ───────────────────────

interface SkillCategoriesProps {
  categories: SkillCategory[];
  skillCategoryLabels: Translations['skillCategories'];
}

export function SkillCategories({ categories, skillCategoryLabels }: SkillCategoriesProps) {
  let globalIndex = 0;
  return (
    <div className="info-panel__skill-bars">
      {categories.map((cat) => {
        const key   = cat.labelKey.split('.')[1] as SkillCategoryKey;
        const label = skillCategoryLabels[key] ?? cat.labelKey;
        return (
          <div key={cat.labelKey} className="info-panel__category">
            <h4 className="info-panel__category-title">{label}</h4>
            <div className="info-panel__skills">
              {cat.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  globalIndex={globalIndex++}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Skill card ─────────────────────────────────────────────────────────────

export function SkillCardItem({ card }: { card: SkillCard }) {
  const { t } = useI18n();
  const translated = t.characterSkillCards[card.id];
  const label = translated?.title ?? card.title;
  return (
    <div className="skill-card">
      {card.imageUrl ? (
        <div className="skill-card__icon skill-card__icon--logo">
          <img src={card.imageUrl} alt={label} className="skill-card__logo-icon" />
        </div>
      ) : (
        <div className="skill-card__icon">{card.icon}</div>
      )}
      <div className="skill-card__body">
        <span className="skill-card__title">{label}</span>
        <p className="skill-card__desc">{translated?.description ?? card.description}</p>
      </div>
    </div>
  );
}

export function SkillCardGrid({ cards }: { cards: SkillCard[] }) {
  return (
    <div className="info-panel__skill-cards">
      {cards.map((card) => (
        <SkillCardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

// ── Equipment item ─────────────────────────────────────────────────────────

export function EquipmentItem({ item }: { item: ItemEntry }) {
  const { t } = useI18n();
  const translated = t.characterItems[item.id];
  return (
    <div className="equip-item">
      <span className="equip-item__icon">{item.icon}</span>
      <div className="equip-item__body">
        <span className="equip-item__name">{translated?.name ?? item.name}</span>
        <span className="equip-item__desc">{translated?.description ?? item.description}</span>
      </div>
    </div>
  );
}

export function EquipmentList({ items }: { items: ItemEntry[] }) {
  return (
    <div className="info-panel__equip-list">
      {items.map((item) => (
        <EquipmentItem key={item.id} item={item} />
      ))}
    </div>
  );
}

// ── Activity category list (checkboxes, grouped by category) ──────────────

const CATEGORY_ORDER = ['sports', 'creativity', 'knowledge'] as const;

const CATEGORY_LABELS: Record<string, string> = {
  sports:     'Sports',
  creativity: 'Creativity',
  knowledge:  'Knowledge',
};

export function ActivityCategoryList({ items }: { items: ItemEntry[] }) {
  const { t } = useI18n();

  const grouped = CATEGORY_ORDER.reduce<Record<string, ItemEntry[]>>((acc, cat) => {
    acc[cat] = items.filter((item) => item.category === cat);
    return acc;
  }, {});

  return (
    <div className="activity-list">
      {CATEGORY_ORDER.map((cat) => {
        const group = grouped[cat];
        if (!group || group.length === 0) return null;
        return (
          <div key={cat} className="activity-list__group">
            <h4 className="activity-list__group-title">{CATEGORY_LABELS[cat]}</h4>
            <div className="activity-list__items">
              {group.map((item) => {
                const translated = t.characterItems[item.id];
                return (
                  <div key={item.id} className="activity-item">
                    <span className="activity-item__checkbox" aria-hidden="true" />
                    <div className="activity-item__body">
                      <span className="activity-item__name">{translated?.name ?? item.name}</span>
                      <span className="activity-item__desc">{translated?.description ?? item.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Quest list ─────────────────────────────────────────────────────────────

export function QuestList({ items }: { items: ItemEntry[] }) {
  const { t } = useI18n();
  return (
    <div className="quest-list">
      {items.map((item) => {
        const translated = t.characterItems[item.id];
        const name = translated?.name ?? item.name;
        const progress = item.progress ?? 0;
        const max = item.max ?? 1;
        const isInfinite = max === 0;
        const isComplete = !isInfinite && progress >= max;
        const pct = isInfinite ? 100 : Math.min(100, (progress / max) * 100);
        const maxLabel = isInfinite ? '∞' : String(max);

        return (
          <div key={item.id} className={`quest-card${isComplete ? ' quest-card--complete' : ''}`}>
            <div className="quest-card__header">
              <div className="quest-card__left">
                <span className="quest-card__icon">{item.icon}</span>
                <span className="quest-card__name">{name}</span>
              </div>
              <span className="quest-card__amount">{progress} / {maxLabel}</span>
            </div>
            <p className="quest-card__desc">{item.description}</p>
            <div className="quest-card__bar-track">
              <div className="quest-card__bar-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Tools logo grid ────────────────────────────────────────────────────────

export function ToolsGrid({ tools }: { tools: ToolEntry[] }) {
  return (
    <div className="tools-grid">
      {tools.map((tool) => (
        <div key={tool.id} className="tools-grid__item" data-tooltip={tool.name}>
          <img src={tool.logoUrl} alt={tool.name} className="tools-grid__logo" />
        </div>
      ))}
    </div>
  );
}

// ── Work experience ────────────────────────────────────────────────────────

export type { WorkEntry } from '../../../types';

export function WorkExperienceList({ entries }: { entries: WorkEntry[] }) {
  return (
    <div className="work-exp-list">
      {entries.map((entry) => (
        <div key={entry.id} className="work-exp-item">
          <div className="work-exp-item__dot" />
          <div className="work-exp-item__body">
            <span className="work-exp-item__role">{entry.role}</span>
            <span className="work-exp-item__company">{entry.company}</span>
            <span className="work-exp-item__period">{entry.period}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
