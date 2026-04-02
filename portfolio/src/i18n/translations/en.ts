export const en = {
  topBar: {
    name: 'David',
  },
  nav: {
    characters: 'Select Character',
    inventory: 'Inventory',
    contact: 'Contact',
  },
  language: {
    label: 'Language',
    en: 'EN',
    es: 'ES',
    de: 'DE',
  },
  characters: {
    developer: {
      name: 'Developer',
      description: 'Game developer specializing in interactive experiences and simulations.',
      subtitle: 'Building Worlds, One Frame at a Time',
    },
    engineer: {
      name: 'Engineer',
      description: 'Civil engineer with expertise in structural analysis and technical design.',
      subtitle: 'Structure Is Everything',
    },
    hobbyist: {
      name: 'Hobbyist',
      description: 'Creative soul exploring 3D art, game jams, and music production.',
      subtitle: 'Play. Create. Repeat.',
    },
    basic: {
      name: 'About Me',
      description: 'A passionate developer and engineer building interactive worlds.',
      subtitle: 'Full Stack Human Being',
    },
  },
  skillCategories: {
    languages: 'Languages',
    engines: 'Engines & Frameworks',
    tools: 'Tools',
    interests: 'Interests',
    engineering: 'Engineering',
    software: 'Software',
  },
  infoPanel: {
    skillsTitle: 'Skills & Technologies',
    selectCharacter: 'Select a character to learn more.',
  },
  scene: {
    level: 'LVL 33',
  },
  /** Keys must match SceneObject.tooltipKey in characters.ts */
  sceneTooltips: {
    basic_cube1: 'Open to new opportunities',
    developer_cube1: '5+ years of game development',
    engineer_cube1: 'Civil Engineering degree',
    hobbyist_cube1: '50+ game jams entered',
  } as Record<string, string>,
  pages: {
    inventory: {
      title: 'Inventory',
      comingSoon: 'Projects coming soon.',
    },
    contact: {
      title: 'Contact',
      comingSoon: 'Contact form coming soon.',
    },
  },
};

export type Translations = typeof en;
