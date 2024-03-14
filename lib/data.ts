import {CgWorkAlt} from 'react-icons/cg';
import {FaReact} from 'react-icons/fa';
import {LuGraduationCap} from 'react-icons/lu';
import React from 'react';
import ecommerceRestApi from '@/public/ecommerceRestApi.png';
import geopapel from '@/public/geopapel.png';
import mandalaApp from '@/public/mandalaApp.png';
import misApuntesDeProgramacion from '@/public/misApuntesDeProgramacion.png';
import textEncryptionApp from '@/public/textEncryptionApp.png';
import tradingTX from '@/public/tradingTX.png';

export const links = [
  {
    name: 'Home',
    name_es: 'Inicio',
    section: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    name_es: 'Sobre mí',
    section: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    name_es: 'Proyectos',
    section: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    name_es: 'Habilidades',
    section: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    name_es: 'Experiencia',
    section: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    name_es: 'Contacto',
    section: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Full-Stack Developer',
    location: 'Buenos Aires, Argentina (Remote)',
    description:
      'Participated in a team of 5 (UX/UI Designers, Developers, and Community Manager) to launch the landing page for "Geo Papel". Used React (Vite and ChakraUI) for the interface; created a backend with Node/Express, integrating the Notion API for code-free edits, and managed deployment on cPanel',
    title_es: 'Desarrollador Full Stack',
    location_es: 'Buenos Aires, Argentina (Remoto)',
    description_es:
      'Participé en un equipo de 5 (Diseñadores UX/UI, Desarrolladores y Community Manager) para lanzar la página de inicio de "Geo Papel". Utilicé React (Vite y ChakraUI) para la interfaz; creé un backend con Node/Express, integrando la API de Notion para ediciones sin código y gestioné el despliegue en cPanel',
    icon: React.createElement(CgWorkAlt),
    date: '2023',
  },
  {
    title: 'Full-Stack Developer Student',
    location: 'Coderhouse (Remote)',
    description:
      'I graduated after 1 year of studying. I immediately found a job as a front-end developer, ended up deploying a back-end as well.',
    title_es: 'Estudiante de Desarrollo Full-Stack',
    location_es: 'Coderhouse (Remoto)',
    description_es:
      'Me gradué después de 1 año de estudios. Inmediatamente encontré un trabajo como desarrollador front-end y terminé desplegando también un back-end.',
    icon: React.createElement(LuGraduationCap),
    date: '2022 - 2023',
  },
  {
    title: 'Algorithmic Trader',
    location: 'Morelia, México (Remote)',
    description:
      'Developed a backtester in Pine Script to analyze historical results of automated trading strategies',
    title_es: 'Operador Financiero Algorítmico',
    location_es: 'Morelia, México (Remoto)',
    description_es:
      'Desarrollé un backtester en Pine Script para analizar resultados históricos de estrategias de trading automatizadas',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - 2023',
  },
  {
    title: 'Oracle Next Education Student',
    location: 'Oracle & Alura Latam (Remote)',
    description:
      'Graduated from Oracle Next Education (ONE) program; Acquired in-depth knowledge in front-end development using React. Gained foundational skills in MySQL and Oracle Cloud Infrastructure (OCI). Honed my expertise in Python, specifically for Data Science applications.',
    title_es: 'Estudiante de Oracle Next Education',
    location_es: 'Oracle y Alura Latam (Remoto)',
    description_es:
      'Me gradué del programa Oracle Next Education (ONE); adquirí un conocimiento profundo en desarrollo front-end usando React. Obtuve habilidades fundamentales en MySQL e Infraestructura en la nube de Oracle (OCI). Perfeccioné mi experiencia en Python, específicamente para aplicaciones de Ciencia de Datos.',
    icon: React.createElement(LuGraduationCap),
    date: '2022 - 2023',
  },
  {
    title: 'Diverse Roles',
    location: 'Caracas, Venezuela & Morelia, Mexico',
    description:
      'Gained extensive experience across multiple disciplines: customer service, sales, teaching, management, and designing. Recognized for exceptional sales achievements, led rebranding strategies, developed data management tools, and advised in academic performance.',
    title_es: 'Roles Diversos',
    location_es: 'Caracas, Venezuela & Morelia, México',
    description_es:
      'Adquirí una amplia experiencia en diversas disciplinas: servicio al cliente, ventas, enseñanza, gestión y diseño. Reconocido por logros excepcionales en ventas, lideré estrategias de rebranding, desarrollé herramientas de gestión de datos y asesoré en rendimiento académico.',
    icon: React.createElement(CgWorkAlt),
    date: '2005-2022',
  },
] as const;

export const projectsData = [
  {
    title: 'Geo Papel',
    description:
      'Worked as a full-stack developer on this startup project for 2 months. Develop half of the front-end and full back-end with  Notion API Integration.',
    description_es:
      'Trabajé como desarrollador full-stack en este proyecto de startup durante 2 meses. Desarrollé la mitad del front-end y todo el back-end con la integración de la API de Notion.',
    tags: ['React', 'Chakra UI', 'Node.js', 'Express', 'Notion API'],
    imageUrl: geopapel,
    repo: 'https://github.com/Thayrov/geopapel',
    link: 'https://www.geopapel.com.ar',
  },
  {
    title: 'Mandala App',
    description: 'Developed an app for advertising and selling hand-colored mandalas by my wife.',
    description_es:
      'Desarrollé una aplicación para anunciar y vender mándalas pintados a mano por mi esposa.',
    tags: ['React', 'Material UI', 'React Router', 'Firebase'],
    imageUrl: mandalaApp,
    repo: 'https://github.com/Thayrov/mandala-app',
    link: 'https://thayrov.github.io/mandala-app/',
  },
  {
    title: 'Text Encryption App',
    description:
      'Created an app for secure message exchange with custom encryption keys. Managed the project using agile methods and Trello.',
    description_es:
      'Creé una aplicación para el intercambio seguro de mensajes con claves de cifrado personalizadas. Gestioné el proyecto utilizando métodos ágiles y Trello.',
    tags: ['Encryption', 'JavaScript', 'Agile Development', 'Trello'],
    imageUrl: textEncryptionApp,
    repo: 'https://github.com/Thayrov/ChallengeONE_EncriptadorTexto',
    link: 'https://thayrov.github.io/ChallengeONE_EncriptadorTexto/',
  },
  {
    title: 'Trading Journal',
    description:
      'Developed a trading tools platform that includes a position sizing calculator and trading journal.',
    description_es:
      'Desarrollé una plataforma de herramientas de trading que incluye una calculadora de tamaño de posición y un diario de trading.',
    tags: ['JavaScript', 'Trading', 'Calculator', 'Bootstrap'],
    imageUrl: tradingTX,
    repo: 'https://github.com/Thayrov/TradingJournal',
    link: 'https://thayrov.github.io/TradingJournal/',
  },
  {
    title: 'Mis Apuntes de Programación',
    description:
      'Created a website to share notes, toolkits, and reflections from my Web Development course.',
    description_es:
      'Creé un sitio web para compartir notas, kits de herramientas y reflexiones de mi curso de Desarrollo Web.',
    tags: ['Web Development', 'HTML', 'SASS', 'Bootstrap'],
    imageUrl: misApuntesDeProgramacion,
    repo: 'https://github.com/Thayrov/apuntes_de_programacion',
    link: 'https://thayrov.github.io/apuntes_de_programacion/',
  },
  {
    title: 'E-commerce REST API',
    description:
      'Developed a REST API for managing user, product, and cart entities in an e-commerce platform.',
    description_es:
      'Desarrollé una API REST para gestionar entidades de usuario, producto y carrito en una plataforma de comercio electrónico.',
    tags: ['REST API', 'MongoDB', 'Authentication', 'Express', 'Testing', 'Swagger'],
    imageUrl: ecommerceRestApi,
    repo: 'https://github.com/Thayrov/Backend',
    link: 'https://thayrov-backend.2.us-1.fl0.io/',
  },
] as const;

export const skillsData = {
  'programming': ['JavaScript', 'TypeScript', 'Python'],
  'frontend': [
    'HTML5',
    'jQuery',
    'React',
    'Next.js',
    'Redux',
    'Redux Toolkit',
    'Redux Persist',
    'SweetAlert2',
    'Webpack',
    'Vite',
    'Axios',
  ],
  'styling': [
    'CSS',
    'SASS',
    'LESS',
    'Tailwind CSS',
    'Bootstrap',
    'Material UI',
    'Chakra UI',
    'Styled Components',
  ],
  'backend': [
    'Node.js',
    'Express',
    'Socket.io',
    'Json-Server',
    'Cors',
    'Dotenv',
    'Multer',
    'Nodemailer',
    'Faker',
    'Handlebars',
  ],
  'authentication and session management': ['Express-Session', 'Passport', 'JWT', 'Bcrypt'],
  'database': ['Mongo', 'MySQL', 'Postgres', 'Sequelize', 'Prisma', 'Mongoose', 'Firebase'],
  'mobile': ['React Native', 'Expo', 'Android Studio', 'SQLite'],
  'devOps': ['Docker', 'OCI', 'PM2', 'Cross-Env'],
  'testing': ['Jest', 'Chai', 'Mocha', 'Supertest'],
  'docs & logging': ['Swagger', 'Winston', 'Morgan'],
  'code quality': ['ESLint', 'Prettier', 'Husky', 'Lint-Staged'],
  'version control': ['Git', 'Github'],
  'soft Skills': [
    'Analytical Thinking',
    'Teamwork',
    'Communication',
    'Projects management',
    'Results Oriented',
  ],
} as const;
