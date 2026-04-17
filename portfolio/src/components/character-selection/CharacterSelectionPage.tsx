import { useI18n } from '../../i18n/I18nContext';
import { CharacterList } from './CharacterList';
import { CharacterInfoPanel } from './CharacterInfoPanel';
import { CharacterScene } from './CharacterScene';
import { PlayerProfile } from './PlayerProfile';
import { characters } from '../../data/characters';
import type { CharacterId } from '../../types';

interface CharacterSelectionPageProps {
  selectedId: CharacterId | null;
  onSelect: (id: CharacterId) => void;
}

export function CharacterSelectionPage({ selectedId, onSelect }: CharacterSelectionPageProps) {
  const { t } = useI18n();

  const selectedCharacter = characters.find((c) => c.id === selectedId) ?? null;

  return (
    <div className="char-selection">
      <div className="char-sidebar">
        <CharacterList selectedId={selectedId} onSelect={onSelect} />
      </div>

      <div className="char-selection__scene-area">
        {selectedCharacter ? (
          <CharacterScene character={selectedCharacter} />
        ) : (
          <div className="char-select-prompt">
            <span className="char-select-prompt__text">{t.infoPanel.selectCharacter}</span>
          </div>
        )}
      </div>

      {selectedId && <CharacterInfoPanel selectedId={selectedId} />}

      {/* Mobile only: profile card in scroll flow, below info panel */}
      <div className="char-selection__mobile-profile">
        <PlayerProfile />
      </div>
    </div>
  );
}
