import type { Project } from '../types';
import cashEmpireLogo    from '../images/projects/cash_empire/cash_empire_logo.png';
import cashEmpireShot0   from '../images/projects/cash_empire/screenshot_0.png';
import cashEmpireShot1   from '../images/projects/cash_empire/screenshot_1.jpg';
import cashEmpireShot2   from '../images/projects/cash_empire/screenshot_2.jpg';
import cashEmpireShot3   from '../images/projects/cash_empire/screenshot_3.jpg';
import dollarSignUrl     from '../3d/dollar_sign.glb?url';
import chessPieceUrl     from '../3d/ChessPiece.glb?url';
import rocklingPieceUrl  from '../3d/rockling.glb?url';
import automationUrl     from '../3d/clogs.glb?url';
import plinkoUrl         from '../3d/plinko.glb?url';
import cactusUrl         from '../3d/cactus.glb?url';
import truckUrl          from '../3d/truck.glb?url';
import idleRebellionIcon  from '../images/Projects/Idle_rebellion/icon.png';
import idleRebellionShot1 from '../images/Projects/Idle_rebellion/screenshot_1.png';
import idleRebellionShot2 from '../images/Projects/Idle_rebellion/screenshot_2.png';
import idleRebellionShot3 from '../images/Projects/Idle_rebellion/screenshot_3.jpg';
import idleRebellionShot4 from '../images/Projects/Idle_rebellion/screenshot_4.jpg';
import idleRebellionShot5 from '../images/Projects/Idle_rebellion/screenshot_5.jpg';
import idleRebellionShot6 from '../images/Projects/Idle_rebellion/screenshot_6.jpg';
import meshroomIcon      from '../images/projects/meshroom_tools/icon.png';
import rocklingsIcon     from '../images/projects/rocklings_empire/icon.webp';
import rocklingsShot1    from '../images/projects/rocklings_empire/screenshot_1.png';
import rocklingsShot2    from '../images/projects/rocklings_empire/screenshot_2.jpeg';
import rocklingsShot3    from '../images/projects/rocklings_empire/screenshot_3.webp';
import rocklingsShot4    from '../images/projects/rocklings_empire/screenshot_4.jpg';
import educationalIcon   from '../images/projects/educational_video/icon_2.png';
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
    year: 2021,
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
    year: 2020,
    techStack: ['Python', 'Meshroom', 'Photogrammetry'],
    role: 'Research Developer',
    description:
      'A set of Python automation scripts for the Meshroom photogrammetry pipeline. The tools batch-process image datasets, manage node graph configurations, and export optimized 3D meshes for research use.',
    otherInfo: 'Research tooling',
    completion: 85,
    scene3dUrl: automationUrl,
    icon: '🔧',
    panelImageUrl: meshroomIcon,
    links: [
      { type: 'github', url: 'https://github.com/davidmoncas/meshroom_CLI', label: 'GitHub' },
    ],
    template: {
      sections: ['header', 'stats', 'description', 'links'],
      stats: ['year', 'techStack', 'role', 'company'],
    },
  },
  {
    id: 'rocklings-empire',
    name: 'Rocklings Empire',
    company: 'Company under NDA',
    category: 'game',
    year: 2024,
    techStack: ['Unity', 'C#', 'Android'],
    role: 'Game Developer',
    description:
      'An Android strategy and base-building mobile game. Worked on the core loop mechanics, resource management systems, and player progression architecture.',
    otherInfo: 'NDA — details limited',
    completion: 100,
    scene3dUrl: rocklingPieceUrl,
    icon: '🪨',
    panelImageUrl: rocklingsIcon,
    thumbnails: [rocklingsShot1, rocklingsShot2, rocklingsShot3, rocklingsShot4],
    template: {
      sections: ['header', 'stats', 'description', 'links', 'gallery'],
      stats: ['year', 'techStack', 'role', 'company'],
    },
  },
  {
    id: 'chess-fire',
    name: 'Chess Fire',
    company: 'Company under NDA',
    category: 'game',
    year: 2024,
    techStack: ['Unity', 'C#', 'Android', 'iOS'],
    role: 'Game Developer',
    description:
      'A mobile chess-inspired game with action and fire mechanics for Android. Responsible for AI opponent logic, move validation systems, and special ability implementations.',
    otherInfo: 'NDA — details limited',
    downloads: '>50k',
    rating: '4.1 stars',
    completion: 100,
    icon: '♟️',
    panelImageUrl: chessFireIcon,
    thumbnails: [chessFireShot1, chessFireShot2, chessFireShot3, chessFireShot5],
    scene3dUrl: chessPieceUrl,
    links: [
      { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.starryskygames.chessgunner', label: 'Google Play' },
    ],
    template: {
      sections: ['header', 'stats', 'description', 'links', 'gallery'],
      stats: ['year', 'techStack', 'downloads', 'company'],
    },
  },
  {
    id: 'idle-rebellion',
    name: 'Idle Rebellion',
    company: 'Company under NDA',
    category: 'game',
    year: 2025,
    techStack: ['Unity', 'C#', 'Android'],
    role: 'Game Developer',
    description:
      'A mobile casual game combining idle resource management with an auto-battle system, tied together by a progression loop where players balance supporting a dictatorship while secretly funding a rebellion.',
    otherInfo: 'Mobile casual Game - Android / Iphone',
    downloads: '>100k',
    completion: 100,
    icon: '✊',
    panelImageUrl: idleRebellionIcon,
    thumbnails: [idleRebellionShot1, idleRebellionShot2, idleRebellionShot3, idleRebellionShot4, idleRebellionShot5, idleRebellionShot6],
    scene3dUrl: truckUrl,
    links: [
      { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.nightskygames.idlerebellion', label: 'Google Play' },
    ],
    template: {
      sections: ['header', 'stats', 'description', 'links', 'gallery'],
      stats: ['year', 'techStack', 'downloads', 'company'],
    },
  },
  {
    id: 'educational-video',
    name: 'Educational Video',
    company: 'Personal Project',
    category: 'art',
    year: 2025,
    techStack: ['Blender', 'After Effects', 'Premiere Pro'],
    role: 'Animator / Director',
    description:
      'A self-produced educational animation video. Covers 3D modeling, rigging, scene layout in Blender, and final compositing and motion graphics in After Effects.',
    otherInfo: 'Personal / portfolio piece',
    completion: 70,
    icon: '🎬',
    panelImageUrl: educationalIcon,
    youtubeId: 'oizFACYTiOs',
    scene3dUrl: cactusUrl,
    template: {
      sections: ['header', 'stats', 'description', 'video'],
      stats: ['year', 'techStack'],
    },
  },
];
