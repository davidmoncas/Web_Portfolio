import type { Project } from '../types';
import cashEmpireLogo    from '../images/projects/cash_empire/cash_empire_logo.png';
import cashEmpireShot0   from '../images/projects/cash_empire/screenshot_0.png';
import cashEmpireShot1   from '../images/projects/cash_empire/screenshot_1.jpg';
import cashEmpireShot2   from '../images/projects/cash_empire/screenshot_2.jpg';
import cashEmpireShot3   from '../images/projects/cash_empire/screenshot_3.jpg';
import dollarSignUrl     from '../3d/dollar_sign.glb?url';
import chessPieceUrl     from '../3d/ChessPiece.glb?url';
import plinkoUrl         from '../3d/plinko.glb?url';
import chessFireIcon     from '../images/projects/chess_fire/icon.png';
import chessFireShot1    from '../images/projects/chess_fire/screenshot_1.jpg';
import chessFireShot2    from '../images/projects/chess_fire/screenshot_2.jpg';
import chessFireShot3    from '../images/projects/chess_fire/screenshot_3.jpg';
import chessFireShot5    from '../images/projects/chess_fire/screenshot_5.jpg';
import plinkoIcon        from '../images/projects/amazing_plinko/icon.webp';
import plinkoShot1       from '../images/projects/amazing_plinko/screenshot_1.jpg';
import plinkoShot2       from '../images/projects/amazing_plinko/screenshot_2.jpg';
import plinkoShot3       from '../images/projects/amazing_plinko/screenshot_3.jpg';
import plinkoShot4       from '../images/projects/amazing_plinko/screenshot_4.jpg';
import plinkoShot5       from '../images/projects/amazing_plinko/screenshot_5.jpg';

export const projects: Project[] = [
  {
    id: 'cash-empire',
    name: 'Cash Empire',
    company: 'JustDice GmbH',
    category: 'game',
    year: 2023,
    techStack: ['Unity', 'C#', 'Firebase', 'Android', 'iOS'],
    role: 'Game Developer',
    description:
      'A mobile idle/casino-style game for Android and iOS. Responsible for core gameplay systems, UI implementation, economy balancing, and integration with backend services.',
    panelImageUrl: cashEmpireLogo,
    thumbnails: [cashEmpireShot0, cashEmpireShot1, cashEmpireShot2, cashEmpireShot3],
    icon: '🎰',
    scene3dUrl: dollarSignUrl,
    completion: 100,
    template: {
      sections: ['header', 'stats', 'description', 'links', 'gallery'],
      stats: ['year', 'techStack', 'role', 'company'],
    },
  },
  {
    id: 'amazing-plinko',
    name: 'Amazing Plinko',
    company: 'JustDice',
    category: 'game',
    year: 2022,
    techStack: ['Unity', 'C#', 'Android'],
    role: 'Game Developer',
    description:
      'A physics-based Plinko mobile game for Android. Developed the ball physics simulation, procedural board generation, and reward system.',
    otherInfo: 'Published on Google Play',
    completion: 100,
    icon: '🎱',
    panelImageUrl: plinkoIcon,
    thumbnails: [plinkoShot1, plinkoShot2, plinkoShot3, plinkoShot4, plinkoShot5],
    scene3dUrl: plinkoUrl,
    template: {
      sections: ['header', 'stats', 'description', 'links', 'gallery'],
      stats: ['year', 'techStack', 'role', 'company'],
    },
  },
  {
    id: 'meshroom-tools',
    name: 'Meshroom Python Tools',
    company: 'University of Bremen',
    category: 'code',
    year: 2021,
    techStack: ['Python', 'Meshroom', 'Photogrammetry'],
    role: 'Research Developer',
    description:
      'A set of Python automation scripts for the Meshroom photogrammetry pipeline. The tools batch-process image datasets, manage node graph configurations, and export optimized 3D meshes for research use.',
    otherInfo: 'Research tooling',
    completion: 85,
    icon: '🔧',
  },
  {
    id: 'rocklings-empire',
    name: 'Rocklings Empire',
    company: 'Company under NDA',
    category: 'game',
    year: 2023,
    techStack: ['Unity', 'C#', 'Android'],
    role: 'Game Developer',
    description:
      'An Android strategy and base-building mobile game. Worked on the core loop mechanics, resource management systems, and player progression architecture.',
    otherInfo: 'NDA — details limited',
    completion: 100,
    icon: '🪨',
  },
  {
    id: 'chess-fire',
    name: 'Chess Fire',
    company: 'Company under NDA',
    category: 'game',
    year: 2022,
    techStack: ['Unity', 'C#', 'Android'],
    role: 'Game Developer',
    description:
      'A mobile chess-inspired game with action and fire mechanics for Android. Responsible for AI opponent logic, move validation systems, and special ability implementations.',
    otherInfo: 'NDA — details limited',
    completion: 100,
    icon: '♟️',
    panelImageUrl: chessFireIcon,
    thumbnails: [chessFireShot1, chessFireShot2, chessFireShot3, chessFireShot5],
    scene3dUrl: chessPieceUrl,
    template: {
      sections: ['header', 'stats', 'description', 'links', 'gallery'],
      stats: ['year', 'techStack', 'role', 'company'],
    },
  },
  {
    id: 'educational-video',
    name: 'Educational Video',
    company: 'Personal Project',
    category: 'art',
    year: 2024,
    techStack: ['Blender', 'After Effects', 'Premiere Pro'],
    role: 'Animator / Director',
    description:
      'A self-produced educational animation video. Covers 3D modeling, rigging, scene layout in Blender, and final compositing and motion graphics in After Effects.',
    otherInfo: 'Personal / portfolio piece',
    completion: 70,
    icon: '🎬',
  },
];
