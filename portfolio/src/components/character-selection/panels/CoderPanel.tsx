import { useI18n } from '../../../i18n/I18nContext';
import { PanelHeader, InfoSection, SkillCategories, SkillCardGrid, EquipmentList, WorkExperienceList } from './PanelShared';
import type { WorkEntry } from './PanelShared';
import type { Character } from '../../../types';

interface Props {
  character: Character;
}

const WORK_EXPERIENCE: WorkEntry[] = [
  { id: 'redi', role: 'JavaScript Teacher (Volunteer)', company: 'ReDI School of Digital Integration', period: 'Feb 2026 – Present' },
  { id: 'lumid', role: 'Unity / C# Developer', company: 'Lumid Labs UG', period: 'May 2024 – May 2025' },
  { id: 'justdice-dev', role: 'Unity / C# Developer', company: 'JustDice', period: 'Apr 2021 – May 2024' },
  { id: 'justdice-qa', role: 'Quality Assurance Working Student', company: 'JustDice', period: 'Sep 2020 – Mar 2021' },
  { id: 'quatio', role: 'Junior Unity Developer', company: 'Quatio', period: 'Jun 2018 – Jul 2019' },
  { id: 'gms', role: 'Junior Civil Engineer (Hydraulics and Hydrology)', company: 'GMS Consulting Engineers', period: 'Jan 2017 – Jan 2018' },
];

export function CoderPanel({ character }: Props) {
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

      <InfoSection title={t.infoPanel.skillsTitle}>
        <SkillCategories
          categories={character.skillCategories}
          skillCategoryLabels={t.skillCategories}
        />
      </InfoSection>

      <InfoSection title="Expertise">
        <SkillCardGrid cards={character.skillCards} />
      </InfoSection>

      <InfoSection title="Work Experience">
        <WorkExperienceList entries={WORK_EXPERIENCE} />
      </InfoSection>

      <InfoSection title="Tools">
        <EquipmentList items={character.items} />
      </InfoSection>
    </>
  );
}
