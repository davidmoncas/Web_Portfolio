import type { Character } from '../types';

export const characters: Character[] = [
  {
    id: 'basic',
    nameKey: 'characters.basic.name',
    descriptionKey: 'characters.basic.description',
    subtitleKey: 'characters.basic.subtitle',
    color: '#a855f7',
    skillCategories: [
      {
        labelKey: 'skillCategories.languages',
        skills: [
          { name: 'C#', level: 90 },
          { name: 'Python', level: 75 },
          { name: 'TypeScript', level: 70 },
          { name: 'C++', level: 60 },
        ],
      },
      {
        labelKey: 'skillCategories.engineering',
        skills: [
          { name: 'Structural Analysis', level: 80 },
          { name: 'AutoCAD', level: 75 },
          { name: 'Project Management', level: 70 },
        ],
      },
    ],
    sceneObjects: [
      {
        id: 'basic_cube1',
        position: [2.4, 0, 0],
        color: '#e879f9',
        size: [0.6, 0.6, 0.6],
        tooltipKey: 'basic_cube1',
      },
    ],
    skillCards: [
      {
        id: 'cross-discipline',
        icon: '🔗',
        title: 'Cross-discipline',
        description: 'Bridging engineering rigour with software creativity to solve real-world problems.',
      },
      {
        id: 'open-source',
        icon: '💻',
        title: 'Open Source',
        description: 'Contributing to and learning from open source projects in game dev and tooling.',
      },
      {
        id: 'lifelong-learner',
        icon: '📚',
        title: 'Lifelong Learner',
        description: 'Always exploring new tools, paradigms and technologies across disciplines.',
      },
    ],
    items: [
      { id: 'macbook', icon: '💻', name: 'MacBook Pro', description: 'Primary development machine' },
      { id: 'notion', icon: '📓', name: 'Notion', description: 'Project management and notes' },
      { id: 'headphones', icon: '🎧', name: 'Headphones', description: 'Deep focus mode' },
    ],
  },

  {
    id: 'developer',
    nameKey: 'characters.developer.name',
    descriptionKey: 'characters.developer.description',
    subtitleKey: 'characters.developer.subtitle',
    color: '#3b82f6',
    skillCategories: [
      {
        labelKey: 'skillCategories.languages',
        skills: [
          { name: 'C#', level: 90 },
          { name: 'C++', level: 65 },
          { name: 'Python', level: 75 },
          { name: 'TypeScript', level: 70 },
          { name: 'GDScript', level: 80 },
        ],
      },
      {
        labelKey: 'skillCategories.engines',
        skills: [
          { name: 'Unity', level: 90 },
          { name: 'Unreal Engine', level: 55 },
          { name: 'Godot', level: 80 },
          { name: 'React', level: 70 },
        ],
      },
      {
        labelKey: 'skillCategories.tools',
        skills: [
          { name: 'Git', level: 85 },
          { name: 'Blender', level: 60 },
          { name: 'VS Code', level: 90 },
        ],
      },
    ],
    sceneObjects: [
      {
        id: 'developer_cube1',
        position: [2.4, 0, 0],
        color: '#22d3ee',
        size: [0.6, 0.6, 0.6],
        tooltipKey: 'developer_cube1',
      },
    ],
    skillCards: [
      {
        id: 'game-design',
        icon: '🎮',
        title: 'Game Design',
        description: 'Designing mechanics, levels, and player experiences with a focus on feel and flow.',
      },
      {
        id: 'simulation',
        icon: '⚙️',
        title: 'Simulation',
        description: 'Building physics-based and procedural simulations, from traffic to fluid dynamics.',
      },
      {
        id: 'ui-ux',
        icon: '🖥️',
        title: 'UI / UX',
        description: 'Crafting interfaces for both games and web applications that feel intuitive.',
      },
    ],
    items: [
      { id: 'unity', icon: '🎮', name: 'Unity', description: 'Primary engine for 3D projects' },
      { id: 'godot', icon: '🟣', name: 'Godot', description: 'Go-to for 2D and rapid prototyping' },
      { id: 'github', icon: '🐙', name: 'GitHub', description: 'Version control and collaboration' },
      { id: 'vscode', icon: '🔵', name: 'VS Code', description: 'Daily driver editor' },
    ],
  },

  {
    id: 'engineer',
    nameKey: 'characters.engineer.name',
    descriptionKey: 'characters.engineer.description',
    subtitleKey: 'characters.engineer.subtitle',
    color: '#f97316',
    skillCategories: [
      {
        labelKey: 'skillCategories.engineering',
        skills: [
          { name: 'Structural Analysis', level: 85 },
          { name: 'Soil Mechanics', level: 75 },
          { name: 'Technical Writing', level: 80 },
          { name: 'Project Management', level: 70 },
        ],
      },
      {
        labelKey: 'skillCategories.software',
        skills: [
          { name: 'AutoCAD', level: 80 },
          { name: 'Revit / BIM', level: 65 },
          { name: 'SAP2000', level: 70 },
          { name: 'Excel / VBA', level: 75 },
        ],
      },
    ],
    sceneObjects: [
      {
        id: 'engineer_cube1',
        position: [2.4, 0, 0],
        color: '#fbbf24',
        size: [0.6, 0.6, 0.6],
        tooltipKey: 'engineer_cube1',
      },
    ],
    skillCards: [
      {
        id: 'structural-design',
        icon: '🏗️',
        title: 'Structural Design',
        description: 'Analysis and design of reinforced concrete and steel structures under various loads.',
      },
      {
        id: 'site-management',
        icon: '📋',
        title: 'Site Management',
        description: 'Coordinating contractors, schedules, and quality control on construction sites.',
      },
      {
        id: 'bim',
        icon: '📐',
        title: 'BIM Modeling',
        description: '3D building information modeling for coordination, clash detection, and documentation.',
      },
    ],
    items: [
      { id: 'autocad', icon: '📐', name: 'AutoCAD', description: 'Technical drafting and 2D layout' },
      { id: 'sap2000', icon: '🏗️', name: 'SAP2000', description: 'Structural analysis software' },
      { id: 'revit', icon: '📊', name: 'Revit', description: 'BIM modeling and documentation' },
      { id: 'msproject', icon: '📋', name: 'MS Project', description: 'Construction planning and scheduling' },
    ],
  },

  {
    id: 'hobbyist',
    nameKey: 'characters.hobbyist.name',
    descriptionKey: 'characters.hobbyist.description',
    subtitleKey: 'characters.hobbyist.subtitle',
    color: '#22c55e',
    skillCategories: [
      {
        labelKey: 'skillCategories.interests',
        skills: [
          { name: 'Blender (3D Art)', level: 65 },
          { name: 'Game Jams', level: 85 },
          { name: 'Music Production', level: 55 },
          { name: 'Board Games', level: 90 },
          { name: 'Photography', level: 60 },
        ],
      },
    ],
    sceneObjects: [
      {
        id: 'hobbyist_cube1',
        position: [2.4, 0, 0],
        color: '#f472b6',
        size: [0.6, 0.6, 0.6],
        tooltipKey: 'hobbyist_cube1',
      },
    ],
    skillCards: [
      {
        id: '3d-art',
        icon: '🎨',
        title: '3D Art',
        description: 'Creating game assets, environments, and characters in Blender for personal projects.',
      },
      {
        id: 'tabletop',
        icon: '🎲',
        title: 'Tabletop Games',
        description: 'Designing and playing strategy, Euro-style, and role-playing games with friends.',
      },
      {
        id: 'music',
        icon: '🎵',
        title: 'Music Production',
        description: 'Composing ambient and chiptune tracks using a DAW for game jams and fun.',
      },
    ],
    items: [
      { id: 'blender', icon: '🔵', name: 'Blender', description: '3D modeling and rendering' },
      { id: 'flstudio', icon: '🎵', name: 'FL Studio', description: 'Music production and composition' },
      { id: 'camera', icon: '📷', name: 'Camera', description: 'Urban and nature photography' },
      { id: 'boardgames', icon: '🎲', name: 'Board Games', description: 'Collection of 30+ strategy games' },
    ],
  },
];
