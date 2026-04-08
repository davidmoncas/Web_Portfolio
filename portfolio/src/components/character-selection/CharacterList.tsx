import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useI18n } from '../../i18n/I18nContext';
import { characters } from '../../data/characters';
import type { CharacterId, Character } from '../../types';

interface CharacterListProps {
  selectedId: CharacterId | null;
  onSelect: (id: CharacterId) => void;
}

// Icon placeholders per character — swap for <img> tags when you have assets
const ICONS: Record<string, string> = {
  basic:     '👤',
  developer: '💻',
  engineer:  '📐',
  hobbyist:  '🎲',
};

function CharacterCard({ character, selected, onSelect }: {
  character: Character;
  selected: boolean;
  onSelect: () => void;
}) {
  const { t } = useI18n();
  const name = t.characters[character.id].name;
  const cardRef = useRef<HTMLButtonElement>(null);
  const prevSelected = useRef(selected);

  useEffect(() => {
    if (selected && !prevSelected.current && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.96, rotation: -1 },
        { scale: 1, rotation: 0, duration: 0.35, ease: 'back.out(2.5)' },
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
    >
      {/* Icon — solid bordered square, swap inner content for <img> when ready */}
      <div className="char-card__icon">
        <span className="char-card__icon-placeholder">{ICONS[character.id] ?? '?'}</span>
      </div>

      <div className="char-card__body">
        <span className="char-card__name">{name}</span>
        <span className="char-card__role">{character.id.toUpperCase()}</span>
      </div>

      <span className="char-card__chevron" aria-hidden="true">›</span>
    </button>
  );
}

export function CharacterList({ selectedId, onSelect }: CharacterListProps) {
  const { t } = useI18n();
  return (
    <aside className="char-list">
      <p className="char-list__heading">{t.charList.heading}</p>
      {characters.map((char) => (
        <CharacterCard
          key={char.id}
          character={char}
          selected={selectedId === char.id}
          onSelect={() => onSelect(char.id)}
        />
      ))}
    </aside>
  );
}
