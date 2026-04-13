import { useRef, useState, useEffect, useCallback } from 'react';
import { useI18n } from '../../i18n/I18nContext';
import { characters } from '../../data/characters';
import type { Character, CharacterId } from '../../types';
import { DavidPanel }    from './panels/DavidPanel';
import { CoderPanel }    from './panels/CoderPanel';
import { ExplorerPanel } from './panels/ExplorerPanel';
import { CreatorPanel }  from './panels/CreatorPanel';
import { FuturePanel }   from './panels/FuturePanel';

// ── Panel router ───────────────────────────────────────────────────────────
//
// Add a new case here when adding a new character.
// Each panel component is fully independent — edit it without touching the others.

function PanelContent({ character }: { character: Character }) {
  switch (character.id) {
    case 'basic':     return <DavidPanel    character={character} />;
    case 'developer': return <CoderPanel    character={character} />;
    case 'engineer':  return <ExplorerPanel character={character} />;
    case 'hobbyist':  return <CreatorPanel  character={character} />;
    case 'future':    return <FuturePanel   character={character} />;
  }
}

// ── Wrapper — scroll tracking + fade gradient ──────────────────────────────

const EXIT_MS  = 220;
const ENTER_MS = 480;

export function CharacterInfoPanel({ selectedId }: { selectedId: CharacterId | null }) {
  const { t } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atBottom, setAtBottom]       = useState(false);
  const [displayedId, setDisplayedId] = useState<CharacterId | null>(selectedId);
  const [phase, setPhase]             = useState<'idle' | 'exiting' | 'entering'>('idle');

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setAtBottom(el.scrollHeight - el.scrollTop <= el.clientHeight + 2);
  }, []);

  useEffect(() => { checkScroll(); }, [displayedId, checkScroll]);

  useEffect(() => {
    if (selectedId === displayedId) return;

    setPhase('exiting');

    let enterTimer: ReturnType<typeof setTimeout>;
    const exitTimer = setTimeout(() => {
      setDisplayedId(selectedId);
      setPhase('entering');
      enterTimer = setTimeout(() => setPhase('idle'), ENTER_MS);
    }, EXIT_MS);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(enterTimer!);
    };
  }, [selectedId]); // eslint-disable-line react-hooks/exhaustive-deps

  const character = characters.find((c) => c.id === displayedId) ?? null;

  const animClass = [
    phase === 'exiting'  ? 'info-panel-wrapper--exit'  : '',
    phase === 'entering' ? 'info-panel-wrapper--enter' : '',
    atBottom             ? 'info-panel-wrapper--at-bottom' : '',
  ].filter(Boolean).join(' ');

  if (!character) {
    return (
      <div className="info-panel-outer">
        <div className={`info-panel-wrapper ${animClass}`}>
          <div className="info-panel info-panel--empty">
            <p>{t.infoPanel.selectCharacter}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="info-panel-outer">
      <div className={`info-panel-wrapper ${animClass}`}>
        <div
          ref={scrollRef}
          className="info-panel"
          style={{ '--char-color': character.color } as React.CSSProperties}
          onScroll={checkScroll}
        >
          <PanelContent character={character} />
        </div>
      </div>
    </div>
  );
}
