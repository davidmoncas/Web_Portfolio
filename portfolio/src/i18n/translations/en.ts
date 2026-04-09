export const en = {
  topBar: {
    name: 'David Montoya Castano',
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
      name: 'The Coder',
      description: 'Game developer with 5+ years building mobile games, simulations and interactive media.',
      subtitle: 'Building Worlds, One Frame at a Time',
    },
    engineer: {
      name: 'The Explorer',
      description: 'Lifelong learner who loves tutorials, books and trying new technologies. MSc in Media Informatics.',
      subtitle: 'Always Learning, Always Growing',
    },
    hobbyist: {
      name: 'The Creator',
      description: 'Creative at heart — making music, drawing, and finding wonder in everyday things.',
      subtitle: 'Creating in Every Form',
    },
    basic: {
      name: 'David',
      description: 'Colombian software developer based in Berlin, Germany. 5+ years of experience building videogames and interactive media products.',
      subtitle: 'Full Stack Human Being',
    },
    future: {
      name: 'The Future',
      description: "I'm looking for my next adventure — ideally in Germany or remote, building games or software that makes a difference.",
      subtitle: 'Next Level Unlocked',
    },
  },
  skillCategories: {
    languages: 'Languages',
    engines: 'Engines & Frameworks',
    tools: 'Tools',
    interests: 'Interests',
    engineering: 'Engineering',
    software: 'Software',
    techStack: 'Tech Stack',
    spokenLanguages: 'Spoken Languages',
  },
  charList: {
    heading: 'Select your Character',
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
    future_cube1: 'Open to new opportunities',
  } as Record<string, string>,
  pages: {
    inventory: {
      title: 'Inventory',
      comingSoon: 'Projects coming soon.',
    },
    contact: {
      title: 'Contact',
      comingSoon: 'Contact form coming soon.',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      submit: 'Submit',
      success: 'Your message has been sent!',
      error: 'Something went wrong. Please try again.',
      emailError: 'Please enter a valid email address.',
    },
  },
  inventory: {
    gridLabel: 'Projects',
    empty: 'Select an item to view details',
    filters: {
      all: 'All',
      game: 'Games',
      code: 'Code',
      art: 'Art',
      other: 'Other',
    },
    stats: {
      year: 'Year',
      techStack: 'Tech Stack',
      role: 'Primary Role',
      other: 'Other',
    },
    categories: {
      game: 'Game',
      code: 'Code',
      art: 'Art',
      other: 'Other',
    },
    projects: {
      'cash-empire': {
        description: 'A mobile idle/casino-style game for Android. Responsible for core gameplay systems, UI implementation, economy balancing, and integration with backend services.',
        role: 'Game Developer',
        otherInfo: 'Published on Google Play',
      },
      'amazing-plinko': {
        description: 'A physics-based Plinko mobile game for Android. Developed the ball physics simulation, procedural board generation, and reward system.',
        role: 'Game Developer',
        otherInfo: 'Published on Google Play',
      },
      'meshroom-tools': {
        description: 'A set of Python automation scripts for the Meshroom photogrammetry pipeline. The tools batch-process image datasets, manage node graph configurations, and export optimized 3D meshes for research use.',
        role: 'Research Developer',
        otherInfo: 'Research tooling',
      },
      'rocklings-empire': {
        description: 'An Android strategy and base-building mobile game. Worked on the core loop mechanics, resource management systems, and player progression architecture.',
        role: 'Game Developer',
        otherInfo: 'NDA — details limited',
      },
      'chess-fire': {
        description: 'A mobile chess-inspired game with action and fire mechanics for Android. Responsible for AI opponent logic, move validation systems, and special ability implementations.',
        role: 'Game Developer',
        otherInfo: 'NDA — details limited',
      },
      'educational-video': {
        description: 'A self-produced educational animation video. Covers 3D modeling, rigging, scene layout in Blender, and final compositing and motion graphics in After Effects.',
        role: 'Animator / Director',
        otherInfo: 'Personal / portfolio piece',
      },
    } as Record<string, { description: string; role: string; otherInfo: string }>,
  },
};

export type Translations = typeof en;
