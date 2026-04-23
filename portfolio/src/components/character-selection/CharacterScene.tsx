import { useState, useEffect } from 'react';
import { useI18n } from '../../i18n/I18nContext';
import { PlayerProfile } from './PlayerProfile';
import type { Character, SceneObject } from '../../types';

// ── Character image map ────────────────────────────────────────────────────

import basicImg      from '../../images/avatars/basic.png';
import programmerImg  from '../../images/avatars/programmer.png';
import creatorImg     from '../../images/avatars/creator.png';
import studentImg     from '../../images/avatars/student.png';
import lockedImg      from '../../images/avatars/locked.png';

const CHARACTER_IMAGES: Record<string, string> = {
  basic:     basicImg,
  developer: programmerImg,
  engineer:  studentImg,
  hobbyist:  creatorImg,
  future:    lockedImg,
};

// ── Scene info panel (HTML overlay, top-right) ─────────────────────────────

interface SceneInfoPanelProps {
  sceneObject: SceneObject;
  tooltipText: string;
  onClose: () => void;
}

function SceneInfoPanel({ sceneObject, tooltipText, onClose }: SceneInfoPanelProps) {
  return (
    <div className="scene-info-panel">
      <div className="scene-info-panel__header">
        <span className="scene-info-panel__title">
          {sceneObject.id.replace(/_/g, ' ')}
        </span>
        <button className="scene-info-panel__close" onClick={onClose} aria-label="Close">
          ×
        </button>
      </div>
      <div className="scene-info-panel__body">
        <p className="scene-info-panel__text">{tooltipText}</p>
        {sceneObject.imageUrl && (
          <img src={sceneObject.imageUrl} alt="" className="scene-info-panel__image" />
        )}
      </div>
    </div>
  );
}

// ── Scene export ───────────────────────────────────────────────────────────

export function CharacterScene({ character }: { character: Character }) {
  const { t } = useI18n();
  const [activeObjectId, setActiveObjectId] = useState<string | null>(null);

  // Close info panel when switching characters
  useEffect(() => { setActiveObjectId(null); }, [character.id]);

  const activeObject  = character.sceneObjects.find((o) => o.id === activeObjectId) ?? null;
  const activeTooltip = activeObject
    ? (t.sceneTooltips[activeObject.tooltipKey] ?? activeObject.tooltipKey)
    : '';

  const imageSrc = CHARACTER_IMAGES[character.id];

  return (
    <div className="char-scene">
      {/* Flat character image — swap this block for a <Canvas> when 3D models are ready */}
      <img
        src={imageSrc}
        alt={character.id}
        className="char-scene__profile-image"
      />

      {activeObject && (
        <SceneInfoPanel
          sceneObject={activeObject}
          tooltipText={activeTooltip}
          onClose={() => setActiveObjectId(null)}
        />
      )}

      <PlayerProfile />
    </div>
  );
}
