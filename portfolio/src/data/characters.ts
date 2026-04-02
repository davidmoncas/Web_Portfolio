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
  },
];
