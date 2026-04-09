export type CharacterId = 'developer' | 'engineer' | 'hobbyist' | 'basic' | 'future';

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
  tooltipKey: string;
  imageUrl?: string;
}

/** Card shown below skill bars: an area of expertise */
export interface SkillCard {
  id: string;
  icon: string;   // emoji placeholder — replace with SVG later
  title: string;
  description: string;
}

/** Item in the equipment/tools list */
export interface ItemEntry {
  id: string;
  icon: string;   // emoji placeholder
  name: string;   // bold short label
  description: string;
}

export type ProjectCategory = 'game' | 'code' | 'art' | 'other';

export interface ProjectLink {
  type: 'youtube' | 'github' | 'itch' | 'web';
  url: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  company: string;
  category: ProjectCategory;
  year: number;
  techStack: string[];
  role: string;
  description: string;
  otherInfo?: string;
  imageUrl?: string;
  thumbnails?: string[];
  links?: ProjectLink[];
  icon: string;
}

export interface Character {
  id: CharacterId;
  nameKey: string;
  descriptionKey: string;
  subtitleKey: string;
  color: string;
  skillCategories: SkillCategory[];
  sceneObjects: SceneObject[];
  skillCards: SkillCard[];
  items: ItemEntry[];
}
