import type { Translations } from './en';

export const de: Translations = {
  topBar: {
    name: 'David Montoya Castano',
  },
  nav: {
    characters: 'Charakter wählen',
    inventory: 'Inventar',
    contact: 'Kontakt',
  },
  language: {
    label: 'Sprache',
    en: 'EN',
    es: 'ES',
    de: 'DE',
  },
  characters: {
    developer: {
      name: 'Entwickler',
      description: 'Spieleentwickler spezialisiert auf interaktive Erlebnisse und Simulationen.',
      subtitle: 'Welten bauen, Frame für Frame',
    },
    engineer: {
      name: 'Ingenieur',
      description: 'Bauingenieur mit Expertise in Strukturanalyse und technischem Design.',
      subtitle: 'Struktur ist alles',
    },
    hobbyist: {
      name: 'Hobbyist',
      description: 'Kreative Seele, die 3D-Kunst, Game Jams und Musikproduktion erkundet.',
      subtitle: 'Spielen. Erschaffen. Wiederholen.',
    },
    basic: {
      name: 'Über Mich',
      description: 'Ein leidenschaftlicher Entwickler und Ingenieur, der interaktive Welten erschafft.',
      subtitle: 'Full Stack Mensch',
    },
  },
  skillCategories: {
    languages: 'Sprachen',
    engines: 'Engines & Frameworks',
    tools: 'Werkzeuge',
    interests: 'Interessen',
    engineering: 'Ingenieurwesen',
    software: 'Software',
  },
  infoPanel: {
    skillsTitle: 'Fähigkeiten & Technologien',
    selectCharacter: 'Wähle einen Charakter, um mehr zu erfahren.',
  },
  scene: {
    level: 'LVL 33',
  },
  sceneTooltips: {
    basic_cube1: 'Offen für neue Möglichkeiten',
    developer_cube1: '5+ Jahre Spieleentwicklung',
    engineer_cube1: 'Abschluss in Bauingenieurwesen',
    hobbyist_cube1: '50+ Game Jams absolviert',
  },
  pages: {
    inventory: {
      title: 'Inventar',
      comingSoon: 'Projekte demnächst verfügbar.',
    },
    contact: {
      title: 'Kontakt',
      comingSoon: 'Kontaktformular demnächst verfügbar.',
      name: 'Dein Name',
      email: 'Deine E-Mail',
      message: 'Deine Nachricht',
      submit: 'Senden',
      success: 'Deine Nachricht wurde gesendet!',
      error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
      emailError: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    },
  },
  inventory: {
    gridLabel: 'Projekte',
    empty: 'Wähle ein Element, um Details zu sehen',
    filters: {
      all: 'Alle',
      game: 'Spiele',
      code: 'Code',
      art: 'Kunst',
      other: 'Sonstiges',
    },
    stats: {
      year: 'Jahr',
      techStack: 'Tech Stack',
      role: 'Hauptrolle',
      other: 'Sonstiges',
    },
    categories: {
      game: 'Spiel',
      code: 'Code',
      art: 'Kunst',
      other: 'Sonstiges',
    },
    projects: {
      'cash-empire': {
        description: 'Ein mobiles Idle/Casino-Spiel für Android. Verantwortlich für Kernspielsysteme, UI-Implementierung, Wirtschaftsbalancing und Backend-Integration.',
        role: 'Spieleentwickler',
        otherInfo: 'Im Google Play veröffentlicht',
      },
      'amazing-plinko': {
        description: 'Ein physikbasiertes Plinko-Mobilspiel für Android. Entwickelt die Kugelphysiksimulation, prozedurale Spielfeldgenerierung und das Belohnungssystem.',
        role: 'Spieleentwickler',
        otherInfo: 'Im Google Play veröffentlicht',
      },
      'meshroom-tools': {
        description: 'Python-Automatisierungsskripte für die Meshroom-Photogrammetrie-Pipeline. Die Tools verarbeiten Bilddatensätze in Batches, verwalten Knotengraphkonfigurationen und exportieren optimierte 3D-Netze.',
        role: 'Forschungsentwickler',
        otherInfo: 'Forschungswerkzeuge',
      },
      'rocklings-empire': {
        description: 'Ein Android-Strategie- und Basisaufbauspiel. Arbeitete an den Kernschleifenmechaniken, Ressourcenmanagementsystemen und der Spielerfortschrittsarchitektur.',
        role: 'Spieleentwickler',
        otherInfo: 'NDA — Details begrenzt',
      },
      'chess-fire': {
        description: 'Ein mobilem Schach-inspiriertes Spiel mit Aktions- und Feuermechaniken für Android. Verantwortlich für KI-Gegnerlogik, Zugvalidierungssysteme und Spezialfähigkeiten.',
        role: 'Spieleentwickler',
        otherInfo: 'NDA — Details begrenzt',
      },
      'educational-video': {
        description: 'Ein selbst produziertes Bildungsanimationsvideo. Umfasst 3D-Modellierung, Rigging und Szenengestaltung in Blender sowie Compositing und Motion Graphics in After Effects.',
        role: 'Animator / Regisseur',
        otherInfo: 'Persönliches / Portfolio-Stück',
      },
    } as Record<string, { description: string; role: string; otherInfo: string }>,
  },
};
