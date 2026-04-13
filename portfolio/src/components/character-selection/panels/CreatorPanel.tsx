import { useI18n } from '../../../i18n/I18nContext';
import { PanelHeader, InfoSection, SkillCardGrid, QuestList } from './PanelShared';
import type { Character } from '../../../types';

interface Props {
  character: Character;
}

export function CreatorPanel({ character }: Props) {
  const { t } = useI18n();
  const ch = t.characters[character.id];

  return (
    <>
      <PanelHeader
        classLabel={ch.classLabel}
        name={ch.name}
        subtitle={ch.subtitle}
        bio={ch.description}
      />

      <InfoSection title={t.panels.creator.hobbies}>
        <SkillCardGrid cards={character.skillCards} />
      </InfoSection>

      <InfoSection title={t.panels.creator.quests}>
        <QuestList items={character.items} />
      </InfoSection>
    </>
  );
}
