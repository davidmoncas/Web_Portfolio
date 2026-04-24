import { PlayerProfile } from './PlayerProfile';
import type { Character } from '../../types';

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

export function CharacterScene({ character }: { character: Character }) {
  const imageSrc = CHARACTER_IMAGES[character.id];

  return (
    <div className="char-scene">
      {/* Flat character image — swap this block for a <Canvas> when 3D models are ready */}
      <img
        key={character.id}
        src={imageSrc}
        alt={character.id}
        className="char-scene__profile-image"
      />
      <PlayerProfile />
    </div>
  );
}
