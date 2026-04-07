import type { Translations } from './en';

export const es: Translations = {
  topBar: {
    name: 'David Montoya Castano',
  },
  nav: {
    characters: 'Seleccionar Personaje',
    inventory: 'Inventario',
    contact: 'Contacto',
  },
  language: {
    label: 'Idioma',
    en: 'EN',
    es: 'ES',
    de: 'DE',
  },
  characters: {
    developer: {
      name: 'Desarrollador',
      description: 'Desarrollador de juegos especializado en experiencias interactivas y simulaciones.',
      subtitle: 'Construyendo Mundos, Frame a Frame',
    },
    engineer: {
      name: 'Ingeniero',
      description: 'Ingeniero civil con experiencia en análisis estructural y diseño técnico.',
      subtitle: 'La Estructura Lo Es Todo',
    },
    hobbyist: {
      name: 'Aficionado',
      description: 'Alma creativa explorando arte 3D, game jams y producción musical.',
      subtitle: 'Jugar. Crear. Repetir.',
    },
    basic: {
      name: 'Sobre Mí',
      description: 'Un apasionado desarrollador e ingeniero construyendo mundos interactivos.',
      subtitle: 'Ser Humano Full Stack',
    },
  },
  skillCategories: {
    languages: 'Lenguajes',
    engines: 'Motores y Frameworks',
    tools: 'Herramientas',
    interests: 'Intereses',
    engineering: 'Ingeniería',
    software: 'Software',
  },
  infoPanel: {
    skillsTitle: 'Habilidades y Tecnologías',
    selectCharacter: 'Selecciona un personaje para saber más.',
  },
  scene: {
    level: 'NVL 33',
  },
  sceneTooltips: {
    basic_cube1: 'Abierto a nuevas oportunidades',
    developer_cube1: '5+ años de desarrollo de juegos',
    engineer_cube1: 'Título en Ingeniería Civil',
    hobbyist_cube1: '50+ game jams completados',
  },
  pages: {
    inventory: {
      title: 'Inventario',
      comingSoon: 'Proyectos próximamente.',
    },
    contact: {
      title: 'Contacto',
      comingSoon: 'Formulario de contacto próximamente.',
      name: 'Tu Nombre',
      email: 'Tu Correo',
      message: 'Tu Mensaje',
      submit: 'Enviar',
      success: '¡Tu mensaje ha sido enviado!',
      error: 'Algo salió mal. Por favor intenta de nuevo.',
      emailError: 'Por favor introduce un correo electrónico válido.',
    },
  },
  inventory: {
    gridLabel: 'Proyectos',
    empty: 'Selecciona un ítem para ver detalles',
    filters: {
      all: 'Todo',
      game: 'Juegos',
      code: 'Código',
      art: 'Arte',
      other: 'Otro',
    },
    stats: {
      year: 'Año',
      techStack: 'Tech Stack',
      role: 'Rol Principal',
      other: 'Otro',
    },
    categories: {
      game: 'Juego',
      code: 'Código',
      art: 'Arte',
      other: 'Otro',
    },
    projects: {
      'cash-empire': {
        description: 'Juego móvil idle/casino para Android. Responsable de los sistemas de juego, implementación de UI, balance de economía e integración con servicios backend.',
        role: 'Desarrollador de Juegos',
        otherInfo: 'Publicado en Google Play',
      },
      'amazing-plinko': {
        description: 'Juego móvil de Plinko basado en física para Android. Desarrollé la simulación de física de bolas, generación procedural del tablero y sistema de recompensas.',
        role: 'Desarrollador de Juegos',
        otherInfo: 'Publicado en Google Play',
      },
      'meshroom-tools': {
        description: 'Conjunto de scripts Python para el pipeline de fotogrametría Meshroom. Las herramientas procesan lotes de imágenes, gestionan configuraciones de nodos y exportan mallas 3D optimizadas.',
        role: 'Desarrollador de Investigación',
        otherInfo: 'Herramientas de investigación',
      },
      'rocklings-empire': {
        description: 'Juego móvil de estrategia y construcción de bases para Android. Trabajé en la mecánica del bucle principal, sistemas de gestión de recursos y arquitectura de progresión del jugador.',
        role: 'Desarrollador de Juegos',
        otherInfo: 'NDA — detalles limitados',
      },
      'chess-fire': {
        description: 'Juego móvil inspirado en el ajedrez con mecánicas de acción y fuego para Android. Responsable de la lógica del oponente IA, sistemas de validación de movimientos e implementación de habilidades especiales.',
        role: 'Desarrollador de Juegos',
        otherInfo: 'NDA — detalles limitados',
      },
      'educational-video': {
        description: 'Vídeo educativo de animación autoproducido. Cubre modelado 3D, rigging y composición de escenas en Blender, y composición final y motion graphics en After Effects.',
        role: 'Animador / Director',
        otherInfo: 'Proyecto personal / portafolio',
      },
    } as Record<string, { description: string; role: string; otherInfo: string }>,
  },
};
