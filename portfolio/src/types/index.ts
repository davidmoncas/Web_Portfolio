export type CharacterId = 'developer' | 'engineer' | 'hobbyist' | 'basic';

export type Language = 'en' | 'es' | 'de';

export type TabId = 'characters' | 'inventory' | 'contact';

export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  labelKey: string;
  skills: Skill[];
}

export interface SceneObject {
  id: string;
  position: [number, number, number];
  color: string;
  size: [number, number, number];
  /** Key into translations.sceneTooltips */
  tooltipKey: string;
}

export interface Character {
  id: CharacterId;
  nameKey: string;
  descriptionKey: string;
  subtitleKey: string;
  color: string;
  skillCategories: SkillCategory[];
  sceneObjects: SceneObject[];
}
