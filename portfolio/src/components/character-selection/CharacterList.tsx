import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useI18n } from '../../i18n/I18nContext';
import { characters } from '../../data/characters';
import type { CharacterId, Character } from '../../types';

interface CharacterListProps {
  selectedId: CharacterId | null;
  onSelect: (id: CharacterId) => void;
}

function avgSkillLevel(character: Character): number {
  const allSkills = character.skillCategories.flatMap((c) => c.skills);
  if (allSkills.length === 0) return 0;
  return Math.round(allSkills.reduce((sum, s) => sum + s.level, 0) / allSkills.length);
}

function CharacterCard({ character, index, selected, onSelect }: {
  character: Character;
  index: number;
  selected: boolean;
  onSelect: () => void;
}) {
  const { t } = useI18n();
  const name  = t.characters[character.id].name;
  const power = avgSkillLevel(character);

  const cardRef    = useRef<HTMLButtonElement>(null);
  const prevSelected = useRef(selected);

  // Play selection animation only when transitioning from unselected → selected
  useEffect(() => {
    if (selected && !prevSelected.current && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.94, rotation: -2 },
        { scale: 1, rotation: 0, duration: 0.4, ease: 'back.out(2.5)' },
      );
    }
    prevSelected.current = selected;
  }, [selected]);

  return (
    <button
      ref={cardRef}
      className={`char-card${selected ? ' char-card--selected' : ''}`}
      onClick={onSelect}
      aria-pressed={selected}
      style={{ '--char-color': character.color } as React.CSSProperties}
    >
      <div className="char-card__portrait">
        <div className="char-card__portrait-inner" style={{ background: character.color }} />
        <span className="char-card__index">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className="char-card__body">
        <span className="char-card__name">{name}</span>
        <span className="char-card__role">{character.id.toUpperCase()}</span>
        <div className="char-card__power">
          <span className="char-card__power-label">PWR</span>
          <div className="char-card__power-track">
            <div className="char-card__power-fill" style={{ width: `${power}%` }} />
          </div>
        </div>
      </div>

      <span className="char-card__chevron" aria-hidden="true">›</span>
    </button>
  );
}

export function CharacterList({ selectedId, onSelect }: CharacterListProps) {
  return (
    <aside className="char-list">
      {characters.map((char, i) => (
        <CharacterCard
          key={char.id}
          character={char}
          index={i}
          selected={selectedId === char.id}
          onSelect={() => onSelect(char.id)}
        />
      ))}
    </aside>
  );
}
