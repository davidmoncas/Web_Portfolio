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
  imageUrl?: string; // optional logo/image shown in the card
}

/** Item in the equipment/tools list */
export interface ItemEntry {
  id: string;
  icon: string;   // emoji placeholder
  name: string;   // bold short label
  description: string;
  category?: string; // optional category for grouped display
  progress?: number; // quest progress (current)
  max?: number;      // quest max (0 = infinite/ongoing)
}

/** Tool entry — logo-only display with tooltip */
export interface ToolEntry {
  id: string;
  name: string;
  logoUrl: string;
}

/** Work experience entry for timeline display */
export interface WorkEntry {
  id: string;
  role: string;
  company: string;
  period: string;
}

export type ProjectCategory = 'game' | 'code' | 'art' | 'other';

export type ProjectSectionKey = 'header' | 'stats' | 'description' | 'links' | 'thumbnails' | 'gallery';
export type ProjectStatKey    = 'year' | 'techStack' | 'role' | 'other' | 'company';

export interface ProjectDisplayConfig {
  sections: ProjectSectionKey[];
  stats?: ProjectStatKey[];
}

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
  panelImageUrl?: string;
  thumbnails?: string[];
  links?: ProjectLink[];
  icon: string;
  /** URL to a GLB model rendered inside the inventory slot. */
  scene3dUrl?: string;
  /** Named template key or inline display config. Defaults to 'standard'. */
  template?: string | ProjectDisplayConfig;
  /** Completion percentage 0–100 shown as a bar in the header subpanel. */
  completion?: number;
}

export interface Character {
  id: CharacterId;
  icon: string;
  color: string;
  skillCategories: SkillCategory[];
  sceneObjects: SceneObject[];
  skillCards: SkillCard[];
  items: ItemEntry[];
  workExperience?: WorkEntry[];
  toolEntries?: ToolEntry[];
}
