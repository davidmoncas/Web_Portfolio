import { useI18n } from '../../../i18n/I18nContext';
import { PanelHeader, InfoSection, SkillCardGrid, EquipmentList } from './PanelShared';
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
        classLabel={character.id.toUpperCase()}
        name={ch.name}
        subtitle={ch.subtitle}
        bio={ch.description}
      />

      <InfoSection title="Hobbies">
        <SkillCardGrid cards={character.skillCards} />
      </InfoSection>

      <InfoSection title="Activities & Interests">
        <EquipmentList items={character.items} />
      </InfoSection>
    </>
  );
}
