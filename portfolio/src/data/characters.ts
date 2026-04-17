import type { Character } from '../types';
import eafitLogo from '../images/eafit_logo.png';
import bremenLogo from '../images/university_bremen_logo.png';
import iconGuitar      from '../images/icons/icon_guitar.png';
import iconPencil      from '../images/icons/icon_pencil.png';
import iconMusic       from '../images/icons/icon_music.png';
import iconCamera      from '../images/icons/icon_camera.png';

export const characters: Character[] = [
  // ── David ────────────────────────────────────────────────────────────────
  {
    id: 'basic',
    icon: '👤',
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
        id: 'creative-analytical',
        icon: '🧩',
        title: 'Creative & Analytical',
        description: 'An unusual mix of civil engineering and game development: structured problem-solving meets creative thinking in every project.',
      },
      {
        id: 'explore-more',
        icon: '🗺️',
        title: "There's More to Discover",
        description: 'Select a character to explore my skills, background, and studies. Visit the Inventory page to see my projects.',
      },
    ],
    items: [],
  },

  // ── The Coder ─────────────────────────────────────────────────────────────
  {
    id: 'developer',
    icon: '💻',
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
        description: '5+ years building mobile games, simulations and interactive experiences with Unity.',
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
    items: [],
    workExperience: [
      { id: 'redi',         role: 'JavaScript Teacher (Volunteer)',                   company: 'ReDI School of Digital Integration', period: 'Feb 2026 – Present' },
      { id: 'lumid',        role: 'Unity / C# Developer',                             company: 'Lumid Labs UG',                     period: 'May 2024 – May 2025' },
      { id: 'justdice-dev', role: 'Unity / C# Developer',                             company: 'JustDice',                          period: 'Apr 2021 – May 2024' },
      { id: 'justdice-qa',  role: 'Quality Assurance Working Student',                company: 'JustDice',                          period: 'Sep 2020 – Mar 2021' },
      { id: 'quatio',       role: 'Junior Unity Developer',                           company: 'Quatio',                            period: 'Jun 2018 – Jul 2019' },
      { id: 'gms',          role: 'Junior Civil Engineer (Hydraulics and Hydrology)', company: 'GMS Consulting Engineers',          period: 'Jan 2017 – Jan 2018' },
    ],
    toolEntries: [
      { id: 'tool-unity',      name: 'Unity',       logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain.svg' },
      { id: 'tool-csharp',     name: 'C#',          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { id: 'tool-blender',    name: 'Blender',     logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg' },
      { id: 'tool-figma',      name: 'Figma',       logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { id: 'tool-vscode',     name: 'VS Code',     logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { id: 'tool-git',        name: 'Git',         logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { id: 'tool-github',     name: 'GitHub',      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { id: 'tool-photoshop',  name: 'Photoshop',   logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg' },
      { id: 'tool-ts',         name: 'TypeScript',  logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    ],
  },

  // ── The Explorer ──────────────────────────────────────────────────────────
  {
    id: 'engineer',
    icon: '📐',
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
        imageUrl: bremenLogo,
      },
      {
        id: 'bachelor-civil',
        icon: '🏛️',
        title: "Bachelor's in Civil Engineering",
        description: 'Civil Engineering, Universidad EAFIT, Colombia — 2016. Minor in Computational Mechanics.',
        imageUrl: eafitLogo,
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
    icon: '🎲',
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
        imageUrl: iconGuitar,
      },
      {
        id: 'drawing',
        icon: '✏️',
        title: 'Drawing',
        description: 'Sketching characters, environments and concept art — pencil and digital.',
        imageUrl: iconPencil,
      },
      {
        id: 'piano',
        icon: '🎹',
        title: 'Piano',
        description: 'Playing piano with a focus on classical pieces and film scores.',
        imageUrl: iconMusic,
      },
      {
        id: 'photography',
        icon: '📷',
        title: 'Photography',
        description: 'Urban, nature and travel photography.',
        imageUrl: iconCamera,
      },
    ],
    items: [
      { id: 'football',         icon: '⚽', name: 'Football',         description: 'Score at least 1 goal per match. Any match will do.',                                          category: 'sports',      progress: 0,  max: 1  },
      { id: 'boulder',          icon: '🧗', name: 'Bouldering',       description: 'Finish a V1 route. Without touching the mat mid-route.',                                      category: 'sports',      progress: 1,  max: 1  },
      { id: 'juggling',         icon: '🤹', name: 'Juggling',         description: 'Juggle 4 balls simultaneously. Spoiler: it\'s harder than 3.',                               category: 'creativity',  progress: 3,  max: 4  },
      { id: 'natural-sciences', icon: '🔬', name: 'Natural Sciences', description: 'Read enough rabbit holes to fake expertise at dinner parties.',                               category: 'knowledge',   progress: 47, max: 100 },
      { id: 'plants',           icon: '🌿', name: 'Plants',           description: 'Keep a plant alive for 6 consecutive months. No fakes allowed.',                             category: 'knowledge',   progress: 5,  max: 6  },
      { id: 'books',            icon: '📖', name: 'Books',            description: 'Finish the to-read pile before adding more. Spoiler: the pile grows faster.',                category: 'knowledge',   progress: 3,  max: 47 },
    ],
  },
  // ── The Future ────────────────────────────────────────────────────────────
  {
    id: 'future',
    icon: '❓',
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
