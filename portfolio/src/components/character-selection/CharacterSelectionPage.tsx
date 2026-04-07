import { useState } from 'react';
import { CharacterList } from './CharacterList';
import { CharacterInfoPanel } from './CharacterInfoPanel';
import { CharacterScene } from './CharacterScene';
import { PlayerProfile } from './PlayerProfile';
import { characters } from '../../data/characters';
import type { CharacterId } from '../../types';

export function CharacterSelectionPage() {
  const [selectedId, setSelectedId] = useState<CharacterId | null>(characters[0].id);

  const selectedCharacter = characters.find((c) => c.id === selectedId) ?? null;

  return (
    <div className="char-selection">
      <div className="char-sidebar">
        <CharacterList selectedId={selectedId} onSelect={setSelectedId} />
        <PlayerProfile />
      </div>

      <div className="char-selection__scene-area">
        {selectedCharacter && (
          <CharacterScene character={selectedCharacter} />
        )}
      </div>

      <CharacterInfoPanel selectedId={selectedId} />
    </div>
  );
}
