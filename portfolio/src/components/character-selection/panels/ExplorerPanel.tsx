import { useI18n } from '../../../i18n/I18nContext';
import { PanelHeader, InfoSection, SkillCategories, SkillCardGrid, EquipmentList } from './PanelShared';
import type { Character } from '../../../types';

interface Props {
  character: Character;
}

export function ExplorerPanel({ character }: Props) {
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

      <InfoSection title={t.panels.explorer.education}>
        <SkillCardGrid cards={character.skillCards} />
      </InfoSection>

      {character.skillCategories.length > 0 && (
        <InfoSection title={t.infoPanel.skillsTitle}>
          <SkillCategories
            categories={character.skillCategories}
            skillCategoryLabels={t.skillCategories}
          />
        </InfoSection>
      )}

      <InfoSection title={t.panels.explorer.courses}>
        <EquipmentList items={character.items} />
      </InfoSection>
    </>
  );
}
