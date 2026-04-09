import type { Character } from '../types';

export const characters: Character[] = [
  // ── David ────────────────────────────────────────────────────────────────
  {
    id: 'basic',
    nameKey: 'characters.basic.name',
    descriptionKey: 'characters.basic.description',
    subtitleKey: 'characters.basic.subtitle',
    color: '#a855f7',
    skillCategories: [],
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
        id: 'colombian-dev',
        icon: '🇨🇴',
        title: 'Colombian Developer in Berlin',
        description: 'Based in Berlin, Germany. Bringing Latin American creativity and a passion for interactive media to every project.',
      },
      {
        id: 'game-dev-exp',
        icon: '🎮',
        title: '5+ Years in Videogames',
        description: 'Over five years building videogames and interactive media products — from mobile games to simulations and educational tools.',
      },
      {
        id: 'explore-more',
        icon: '🗺️',
        title: "There's More to Discover",
        description: 'Select a character to explore my skills, background, and studies. Visit the Inventory page to see my projects.',
      },
    ],
    items: [
      { id: 'macbook', icon: '💻', name: 'MacBook Pro', description: 'Primary development machine' },
      { id: 'notion', icon: '📓', name: 'Notion', description: 'Project management and notes' },
      { id: 'headphones', icon: '🎧', name: 'Headphones', description: 'Deep focus mode' },
    ],
  },

  // ── The Coder ─────────────────────────────────────────────────────────────
  {
    id: 'developer',
    nameKey: 'characters.developer.name',
    descriptionKey: 'characters.developer.description',
    subtitleKey: 'characters.developer.subtitle',
    color: '#3b82f6',
    skillCategories: [
      {
        labelKey: 'skillCategories.techStack',
        skills: [
          { name: 'Unity', level: 80 },
          { name: 'C#', level: 80 },
          { name: 'JavaScript / TypeScript', level: 50 },
          { name: 'Python', level: 30 },
          { name: 'Git', level: 70 },
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
        id: 'game-development',
        icon: '🎮',
        title: 'Game Development',
        description: '5+ years building mobile games, simulations and interactive experiences with Unity and Godot.',
      },
      {
        id: 'digital-art',
        icon: '🎨',
        title: 'Digital Art & 3D',
        description: 'Creating game assets, UI mockups and 3D models using Photoshop, Blender and Figma.',
      },
      {
        id: 'js-teacher',
        icon: '👨‍🏫',
        title: 'JS / TS Instructor',
        description: 'Teaching JavaScript and TypeScript fundamentals to aspiring developers.',
      },
    ],
    items: [
      { id: 'unity', icon: '🎮', name: 'Unity', description: 'Primary engine for 3D / mobile projects' },
      { id: 'godot', icon: '🟣', name: 'Godot', description: 'Go-to for 2D and rapid prototyping' },
      { id: 'github', icon: '🐙', name: 'GitHub', description: 'Version control and collaboration' },
      { id: 'vscode', icon: '🔵', name: 'VS Code', description: 'Daily driver editor' },
    ],
  },

  // ── The Explorer ──────────────────────────────────────────────────────────
  {
    id: 'engineer',
    nameKey: 'characters.engineer.name',
    descriptionKey: 'characters.engineer.description',
    subtitleKey: 'characters.engineer.subtitle',
    color: '#f97316',
    skillCategories: [
      {
        labelKey: 'skillCategories.spokenLanguages',
        skills: [
          { name: 'Spanish', level: 100 },
          { name: 'English', level: 85 },
          { name: 'German (B2)', level: 65 },
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
        id: 'msc-media',
        icon: '🎓',
        title: 'MSc Media Informatics',
        description: "Master's in Media Informatics, University of Bremen, Germany — 2021.",
      },
      {
        id: 'bachelor-civil',
        icon: '🏛️',
        title: "Bachelor's in Civil Engineering",
        description: 'Civil Engineering, Universidad EAFIT, Colombia — 2016. Minor in Computational Mechanics.',
      },
    ],
    items: [
      { id: 'data-science', icon: '📊', name: 'Introduction to Data Science', description: 'IBM — Coursera' },
      { id: 'game-design-course', icon: '🎮', name: 'Principles of Game Design', description: 'Michigan State University — Coursera' },
      { id: 'ml-course', icon: '🤖', name: 'Machine Learning', description: 'Coursera' },
      { id: 'plants-course', icon: '🌿', name: 'Understanding Plants — Part I', description: 'What a Plant Knows — Tel Aviv University' },
    ],
  },

  // ── The Creator ───────────────────────────────────────────────────────────
  {
    id: 'hobbyist',
    nameKey: 'characters.hobbyist.name',
    descriptionKey: 'characters.hobbyist.description',
    subtitleKey: 'characters.hobbyist.subtitle',
    color: '#22c55e',
    skillCategories: [],
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
        id: 'guitar',
        icon: '🎸',
        title: 'Guitar',
        description: 'Playing acoustic and electric guitar — fingerstyle, chords and improvisation.',
      },
      {
        id: 'drawing',
        icon: '✏️',
        title: 'Drawing',
        description: 'Sketching characters, environments and concept art — pencil and digital.',
      },
      {
        id: 'piano',
        icon: '🎹',
        title: 'Piano',
        description: 'Playing piano with a focus on classical pieces and film scores.',
      },
      {
        id: 'photography',
        icon: '📷',
        title: 'Photography',
        description: 'Urban, nature and travel photography.',
      },
    ],
    items: [
      { id: 'football', icon: '⚽', name: 'Football', description: 'Regular 5-a-side player' },
      { id: 'boulder', icon: '🧗', name: 'Bouldering', description: 'Indoor climbing and problem solving on the wall' },
      { id: 'juggling', icon: '🤹', name: 'Juggling', description: '3-ball patterns and beyond' },
      { id: 'natural-sciences', icon: '🔬', name: 'Natural Sciences', description: 'Fascinated by biology, botany and physics' },
      { id: 'serious-games', icon: '🎓', name: 'Serious Games', description: 'Games as tools for learning, therapy and social impact' },
      { id: 'plants', icon: '🌿', name: 'Plants', description: 'Amateur botanist and proud plant parent' },
      { id: 'psychology', icon: '🧠', name: 'Psychology', description: 'Human cognition, behavior and player experience' },
      { id: 'books', icon: '📖', name: 'Books', description: 'Avid reader across science, fiction and game design' },
    ],
  },
  // ── The Future ────────────────────────────────────────────────────────────
  {
    id: 'future',
    nameKey: 'characters.future.name',
    descriptionKey: 'characters.future.description',
    subtitleKey: 'characters.future.subtitle',
    color: '#f59e0b',
    skillCategories: [],
    sceneObjects: [
      {
        id: 'future_cube1',
        position: [2.4, 0, 0],
        color: '#f59e0b',
        size: [0.6, 0.6, 0.6],
        tooltipKey: 'future_cube1',
      },
    ],
    skillCards: [],
    items: [],
  },
];
