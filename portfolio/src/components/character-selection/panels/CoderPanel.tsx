import { useI18n } from '../../../i18n/I18nContext';
import { PanelHeader, InfoSection, SkillCategories, SkillCardGrid, WorkExperienceList, ToolsGrid } from './PanelShared';
import type { Character } from '../../../types';

interface Props {
  character: Character;
}

export function CoderPanel({ character }: Props) {
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

      <InfoSection title={t.infoPanel.skillsTitle}>
        <SkillCategories
          categories={character.skillCategories}
          skillCategoryLabels={t.skillCategories}
        />
      </InfoSection>

      <InfoSection title={t.panels.coder.workExperience}>
        <WorkExperienceList entries={character.workExperience ?? []} />
      </InfoSection>

      <InfoSection title={t.panels.coder.expertise}>
        <SkillCardGrid cards={character.skillCards} />
      </InfoSection>

      {character.toolEntries && character.toolEntries.length > 0 && (
        <InfoSection title={t.panels.coder.tools}>
          <ToolsGrid tools={character.toolEntries} />
        </InfoSection>
      )}
    </>
  );
}
