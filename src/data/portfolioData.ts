export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'Full Stack' | 'Frontend' | 'E-Commerce';
  featured: boolean;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  tag: string;
  level: string;
  description: string;
  details: string;
  color: string;
  logo: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  certId?: string;
  score?: string;
  image: string;
  pdfUrl: string;
  description: string;
  topics: string[];
}

export interface Education {
  institution: string;
  diploma: string;
  level: string;
  duration: string;
  location: string;
  status: string;
  highlights: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  shortDesc: string;
  icon: string;
  details: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Ismail Sedrati',
    role: 'FULL STACK DEVELOPER',
    label: 'DÉVELOPPEUR FULL-STACK JUNIOR',
    tagline: 'DIGITAL EXPERIENCES THAT INSPIRE',
    availability: 'AVAILABLE FOR STAGE & FULL-TIME',
    location: 'Témara / Rabat, Morocco',
    phone: '+212 707-48-06-08',
    email: 'smailsedrati00@gmail.com',
    secondaryEmail: 'sedratiismail01@gmail.com',
    github: 'https://github.com/smailsedrati00-afk',
    linkedin: 'https://www.linkedin.com/in/ismail-sedrati-01a0b6352/',
    cvPdfUrl: '/assets/aistudio/cv_sedrati_ismail_devloper_full-stck_0425532c.pdf',
    intro:
      "Hi, I'm Ismail Sedrati, a passionate Web Developer from Rabat, Morocco. I build modern, responsive and interactive web applications using modern technologies.",
    aboutBio:
      "My name is Ismail Sedrati. I am a graduate in Digital Development from ISTA NTIC Hay Riad, Rabat, Morocco. I am passionate about web development, programming and creating useful digital experiences. I enjoy learning new technologies and developing modern web applications. My goal is to become a professional Software Engineer.",
    portrait: '/assets/aistudio/photo_f0486662.png',
    languages: [
      { name: 'Arabe', level: 'Langue maternelle (Native)' },
      { name: 'Français', level: 'Bon niveau (Professional Working)' },
      { name: 'Anglais', level: 'Niveau intermédiaire (Technical)' },
    ],
  },

  stats: [
    {
      value: '2+',
      label: 'YEARS OF TRAINING',
      description: 'Specialized digital development & engineering foundations (ISTA NTIC Hay Riad)',
      icon: 'GraduationCap',
    },
    {
      value: '3+',
      label: 'PROJECTS COMPLETED',
      description: 'C-Style, Cavo-Coffee & Todo-Liste',
      icon: 'FolderGit2',
    },
    {
      value: '8+',
      label: 'CORE TECHNOLOGIES',
      description: 'HTML5, CSS3, JavaScript, React, PHP, Laravel, Node.js, MySQL',
      icon: 'Layers',
    },
    {
      value: '100%',
      label: 'PASSION FOR DEVELOPMENT',
      description: 'Committed to clean architecture, continuous learning & problem solving',
      icon: 'Sparkles',
    },
  ],

  projects: [
    {
      id: 'c-style',
      name: 'C-STYLE',
      subtitle: 'Modern Fashion E-Commerce',
      description:
        'Projet web de style/mode avec pages produits, interface responsive, panier interactif et filtres par catégories.',
      fullDescription:
        'C-Style is a high-performance fashion storefront built for effortless apparel shopping. It features dynamic product filtering by category (Tops, Bottoms, Dresses, Shoes, Accessories), wishlist and shopping cart management, fast checkout flows, and mobile-optimized responsiveness.',
      image: '/assets/aistudio/image_77d78708.png',
      technologies: ['React.js', 'Vite', 'JavaScript', 'CSS3', 'Lucide Icons'],
      liveUrl: 'https://c-stylee.netlify.app/',
      githubUrl: 'https://github.com/sedrati-ismail/c-style',
      category: 'E-Commerce',
      featured: true,
      highlights: [
        'Interactive shopping cart state with live badge counter',
        'Category-based dynamic product catalog (Tops, Bottoms, Shoes)',
        'Free shipping and promotion announcement banners',
        'Fully responsive mobile & tablet design',
      ],
    },
    {
      id: 'cavo-coffee',
      name: 'CAVO COFFEE',
      subtitle: 'Artisanal Coffee & Roastery Experience',
      description:
        'Site web pour un café : présentation du menu, storytelling des grains et produits dans une ambiance sombre raffinée.',
      fullDescription:
        'Cavo Coffee celebrates artisanal coffee culture with a warm, immersive visual atmosphere. It features an interactive beverage and pastry menu, roastery story sections, location locator, and online order dispatch built with pure React and refined styling.',
      image: '/assets/aistudio/image_ef7dd6cd.png',
      technologies: ['React.js', 'Vite', 'CSS3', 'Responsive Layout'],
      liveUrl: 'https://cavo-coffe.netlify.app/',
      githubUrl: 'https://github.com/sedrati-ismail/cavo-coffee',
      category: 'Frontend',
      featured: true,
      highlights: [
        'Warm dark espresso aesthetic with custom typography',
        'Interactive drink and food specialty catalog',
        'Interactive "Explore Menu" and "Our Story" sections',
        'Fluid navigation with subtle background treatments',
      ],
    },
    {
      id: 'todo-liste',
      name: 'TODO-LISTE',
      subtitle: 'Application de Gestion de Tâches & Productivité',
      description:
        'Application de gestion de tâches : ajout, modification, suppression, suivi du statut et organisation des priorités quotidiennes.',
      fullDescription:
        'Todo-Liste (TaskFlow) helps individuals prioritize and conquer daily goals one task at a time. Provides intuitive status counters (Remaining, Paused, Completed), clean filtering, and fast local storage syncing.',
      image: '/images/pagee3.png',
      technologies: ['React.js', 'Vite', 'Tailwind CSS', 'LocalStorage', 'State Management'],
      liveUrl: 'https://todo-listee.netlify.app/',
      githubUrl: 'https://github.com/sedrati-ismail/todo-list',
      category: 'Frontend',
      featured: true,
      highlights: [
        'Ajout, modification, validation et suppression de tâches en temps réel',
        'Visual status overview indicators (Remaining, Paused, Completed)',
        'Minimalist distraction-free layout with responsive controls',
      ],
    },
  ] as Project[],

  skills: {
    frontend: [
      {
        name: 'React.js',
        tag: 'Framework UI',
        level: 'Avancé',
        color: '#61DAFB',
        logo: 'react',
        description: 'Construction de Single Page Applications modernes et interactives.',
        details: 'Hooks personnalisés, gestion d\'état (Context, useState, useEffect), modularité des composants et intégration d\'APIs REST.',
      },
      {
        name: 'JavaScript (ES6+)',
        tag: 'Langage Core',
        level: 'Avancé (Certifié Cisco)',
        color: '#F7DF1E',
        logo: 'javascript',
        description: 'Programmation orientée objet, manipulation du DOM et asynchronisme.',
        details: 'Promesses, async/await, closures, programmation événementielle, tableaux fonctionnels (map, filter, reduce) et modularité ES6.',
      },
      {
        name: 'HTML5',
        tag: 'Structure Web',
        level: 'Avancé',
        color: '#E34F26',
        logo: 'html5',
        description: 'Balisage sémantique moderne, accessibilité et SEO technique.',
        details: 'Balises sémantiques strictes (header, nav, main, section, article), formulaires optimisés et intégration multimédia native.',
      },
      {
        name: 'CSS3 / Tailwind',
        tag: 'Styling & Design',
        level: 'Avancé',
        color: '#38BDF8',
        logo: 'css3',
        description: 'Design responsive, Flexbox, CSS Grid et animations fluides.',
        details: 'Mise en page complexe, variables CSS, micro-interactions, responsive design mobile-first et intégration Tailwind CSS.',
      },
    ],
    backend: [
      {
        name: 'PHP',
        tag: 'Langage Serveur',
        level: 'Intermédiaire',
        color: '#777BB4',
        logo: 'php',
        description: 'Développement de logique métier serveur et programmation orientée objet.',
        details: 'Architecture MVC, sessions sécurisées, manipulation de données relationnelles et traitement sécurisé des formulaires.',
      },
      {
        name: 'Laravel',
        tag: 'Framework PHP',
        level: 'Intermédiaire',
        color: '#FF2D20',
        logo: 'laravel',
        description: 'Développement d\'applications web robustes et sécurisées.',
        details: 'Routage REST, Eloquent ORM, Blade templating, migrations de base de données, authentification et middlewares.',
      },
      {
        name: 'Node.js',
        tag: 'Runtime Serveur',
        level: 'Intermédiaire',
        color: '#5FA04E',
        logo: 'nodejs',
        description: 'Exécution JavaScript côté serveur pour microservices et APIs rapides.',
        details: 'Architecture non-bloquante orientée événements, gestion des modules npm, flux de données et scripts backend.',
      },
      {
        name: 'Express.js',
        tag: 'Framework API',
        level: 'Intermédiaire',
        color: '#FFFFFF',
        logo: 'express',
        description: 'Création d\'APIs RESTful légères, modulaires et documentées.',
        details: 'Middlewares de validation, gestion d\'erreurs centralisée, CORS, parsers JSON et contrôle des routes d\'application.',
      },
    ],
    database: [
      {
        name: 'MySQL',
        tag: 'SGBD Relationnel',
        level: 'Intermédiaire',
        color: '#4479A1',
        logo: 'mysql',
        description: 'Conception de schémas relationnels et gestion efficace des données.',
        details: 'Création de tables, clés primaires et étrangères, jointures multi-tables (INNER, LEFT), indexation et requêtes d\'agrégation.',
      },
      {
        name: 'SQL',
        tag: 'Langage Requête',
        level: 'Intermédiaire',
        color: '#00758F',
        logo: 'sql',
        description: 'Requêtes de manipulation (DML) et définition de données (DDL).',
        details: 'Opérations CRUD complètes, filtrage avancé (WHERE, GROUP BY, HAVING), transactions et normalisation (1NF, 2NF, 3NF).',
      },
    ],
    tools: [
      {
        name: 'Python',
        tag: 'Langage (Bases)',
        level: 'Certifié Cisco',
        color: '#3776AB',
        logo: 'python',
        description: 'Algorithmique, logique de programmation et structures de données.',
        details: 'Certifié Cisco Python Essentials 1 : variables, structures conditionnelles, boucles, fonctions et logique fondamentale.',
      },
      {
        name: 'Git & GitHub',
        tag: 'Gestion de Versions',
        level: 'Avancé',
        color: '#F05032',
        logo: 'git',
        description: 'Versionnage du code source, branches et collaboration en équipe.',
        details: 'Workflows Git (commit, branch, merge, rebase, push), gestion des dépôts GitHub et collaboration professionnelle.',
      },
      {
        name: 'VS Code',
        tag: 'Éditeur & Outils',
        level: 'Avancé',
        color: '#007ACC',
        logo: 'vscode',
        description: 'Environnement de développement intégré optimisé avec extensions.',
        details: 'Debugging JavaScript/PHP, extensions ESLint/Prettier, snippets productifs et terminal intégré.',
      },
      {
        name: 'npm',
        tag: 'Gestionnaire Paquets',
        level: 'Avancé',
        color: '#CB3837',
        logo: 'npm',
        description: 'Installation, configuration et gestion des dépendances logicielles.',
        details: 'Scripts package.json, résolution des conflits de versions, devDependencies et bundling avec Vite.',
      },
    ],
  },

  capabilities: [
    {
      title: 'Full Stack Web Development',
      description:
        'Conception d\'applications web complètes reliant interfaces réactives (React) et backends robustes (Node.js/Express, Laravel).',
      icon: 'Monitor',
    },
    {
      title: 'Responsive UI / UX Engineering',
      description:
        'Transformation de maquettes en interfaces modernes, fluides, esthétiques et parfaitement adaptées au mobile et desktop.',
      icon: 'Smartphone',
    },
    {
      title: 'RESTful API & Server Logic',
      description:
        'Développement de routes API sécurisées avec validation de données, architecture MVC et gestion des erreurs.',
      icon: 'Cpu',
    },
    {
      title: 'Database Architecture & Modeling',
      description:
        'Modélisation UML, conception de bases de données relationnelles MySQL et écriture de requêtes SQL optimisées.',
      icon: 'Database',
    },
  ],

  education: {
    institution: 'NTIC Hay Riyad – Rabat',
    diploma: 'Technicien Spécialisé en Développement Informatique',
    level: 'Bac +2',
    duration: '2024 – 2026 (2 Ans)',
    location: 'Rabat, Morocco',
    status: 'Diplômé / Graduate',
    highlights: [
      'Conception et développement d\'applications web et informatiques complètes',
      'Front-end moderne : HTML5, CSS3, JavaScript ES6+, React.js et intégration responsive',
      'Back-end robuste : PHP, Laravel, Node.js, Express.js et création d\'APIs REST',
      'Base de données relationnelle MySQL, modélisation UML, logique algorithmique',
      'Documentation technique, tests et qualité du code, gestion de projet agile avec Git',
    ],
  } as Education,

  certifications: [
    {
      id: 'cert-python',
      title: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      issueDate: '10 Jun 2025',
      score: 'Certified (Bases Python)',
      image: '/assets/aistudio/image_0e85c44c.png',
      pdfUrl: '/assets/aistudio/certificate_python_4294bf27.pdf',
      description:
        'Offered by CDC TERTIAIRE-TIC-AG & AV through Cisco Networking Academy program. Validates fundamental Python programming concepts, algorithmic logic, control flow, functions, and data structures.',
      topics: ['Python Syntax & Variables', 'Control Flow & Loops', 'Functions & Modules', 'Data Structures (Lists, Tuples, Dictionaries)', 'Algorithmic Logic'],
    },
    {
      id: 'cert-frontend',
      title: 'Front-End Development With Distinction',
      issuer: 'Science of Apps',
      issueDate: '01 Nov 2026',
      certId: 'SOA-FED-9YMK-A3GK',
      score: '100% Score · Distinction',
      image: '/assets/aistudio/image_e7bddc93.png',
      pdfUrl: '/assets/aistudio/certificate_frond-end_77d75a1c.pdf',
      description:
        'Awarded with Distinction and a perfect 100% score for demonstrating superior proficiency in modern Front-End Web Development, responsive design patterns, CSS architecture, and JavaScript.',
      topics: ['Responsive Web Development', 'Modern JavaScript Execution', 'Component Architecture', 'CSS Flexbox & Grid Systems', 'Cross-Browser Performance'],
    },
    {
      id: 'cert-backend',
      title: 'Back-End Development With Distinction',
      issuer: 'Science of Apps',
      issueDate: '01 Nov 2026',
      certId: 'SOA-BED-8YJM-QPS8',
      score: '93% Score · Distinction',
      image: '/assets/aistudio/image_e86691ab.png',
      pdfUrl: '/assets/aistudio/certificate_back_-_end_c061c0b4.pdf',
      description:
        'Awarded with Distinction (93% score) for demonstrating backend engineering excellence, server routing logic, database communication, RESTful APIs, and application security.',
      topics: ['Backend Server Logic', 'Database Design & Queries', 'API Architecture', 'Middleware & Security', 'Server-Side Workflows'],
    },
    {
      id: 'cert-javascript',
      title: 'JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy & JS Institute',
      issueDate: '01 Nov 2026',
      certId: '09265bf0-f5a9-44e4-9a51-b05c79559bf6',
      score: 'Certified · Cisco & JS Institute',
      image: '/assets/aistudio/image_d7c1e45f.png',
      pdfUrl: '/assets/aistudio/certificate_-_javascripts_93d5a30d.pdf',
      description:
        'Offered by Cisco Networking Academy in partnership with Open Education & Development Group (JS Institute). Verifies solid mastery of core JavaScript language fundamentals, DOM interactions, and event-driven programming.',
      topics: ['Modern JavaScript (ES6+)', 'DOM Manipulation', 'Event-Driven Programming', 'Scope & Closures', 'Asynchronous Workflows'],
    },
  ] as Certificate[],

  process: [
    {
      step: '01',
      title: 'DISCOVER',
      shortDesc: 'Comprendre les besoins utilisateurs, objectifs et contraintes du projet.',
      icon: 'Search',
      details:
        'Analyse approfondie des besoins, étude des fonctionnalités cibles et définition des exigences techniques.',
    },
    {
      step: '02',
      title: 'DEFINE',
      shortDesc: 'Modélisation UML, conception des données et spécification des APIs.',
      icon: 'Compass',
      details:
        'Élaboration des schémas relationnels MySQL, architecture logicielle MVC et structure des endpoints REST.',
    },
    {
      step: '03',
      title: 'DESIGN',
      shortDesc: 'Conception d\'interfaces modernes, fluides, esthétiques et responsives.',
      icon: 'PenTool',
      details:
        'Création d\'expériences soignées avec Tailwind CSS, animations douces, typographie affirmée et ergonomie pensée utilisateur.',
    },
    {
      step: '04',
      title: 'DEVELOP',
      shortDesc: 'Développement full-stack propre avec React, Laravel/Node.js et MySQL.',
      icon: 'Code2',
      details:
        'Écriture de code modulaire et réutilisable, respect des bonnes pratiques et intégration de tests.',
    },
    {
      step: '05',
      title: 'DELIVER',
      shortDesc: 'Tests rigoureux, optimisation des performances et déploiement.',
      icon: 'Rocket',
      details:
        'Validation responsive multi-supports, contrôle de la qualité du code et mise en ligne opérationnelle.',
    },
  ] as ProcessStep[],
};

export const getLocalProject = (
  project: Partial<Project> & { title?: string },
): Project | undefined => {
  const searchText = [project.id, project.name, project.title]
    .filter((value): value is string => Boolean(value))
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  return PORTFOLIO_DATA.projects.find((localProject) => {
    const localId = localProject.id.toLowerCase().replace(/[^a-z0-9]/g, '');
    const localName = localProject.name.toLowerCase().replace(/[^a-z0-9]/g, '');

    return (
      searchText.includes(localId) ||
      searchText.includes(localName) ||
      (localProject.id === 'todo-liste' && searchText.includes('todolist'))
    );
  });
};