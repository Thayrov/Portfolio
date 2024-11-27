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
import pokemon from '@/public/pokemon.png';
import rym from '@/public/rym.png';
import lookart from '@/public/lookart.png';
import merciv from '@/public/merciv.png';

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
    name: 'Experience',
    name_es: 'Experiencia',
    section: 'Experience',
    hash: '#experience',
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
    name: 'Contact',
    name_es: 'Contacto',
    section: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Senior Software Developer',
    location: 'Philadelphia, Pennsylvania, United States (Remote)',
    description:
      'Developed web and mobile applications using React, React Native, Redux, Express, Node.js, and MySQL. Collaborated in an agile team following SCRUM methodologies to ensure timely deliveries and iterative feedback. Created reusable and efficient components for navigation and the management of tasks, reminders, and notifications.',
    title_es: 'Desarrollador Senior de Software',
    location_es: 'Filadelfia, Pensilvania, Estados Unidos (Remoto)',
    description_es:
      'Desarrollé aplicaciones web y móviles utilizando React, React Native, Redux, Express, Node.js y MySQL. Colaboré en un equipo ágil siguiendo metodologías SCRUM para asegurar entregas a tiempo y feedback iterativo. Creé componentes reutilizables y eficientes para la navegación y el manejo de tareas, recordatorios y notificaciones.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jun 2024 - Present',
  },
  {
    title: 'Front End Developer',
    location: 'Montevideo, Uruguay (Part Time, Remote)',
    description:
      'Developed the UI and API fetching logic for EMS software using TypeScript, React, Redux Toolkit, and Tailwind CSS, as part of a two-member team, including a senior developer who supervised my work. Followed agile SCRUM methodology to ensure timely delivery and iterative feedback',
    title_es: 'Front End Developer',
    location_es: 'Montevideo, Uruguay (Part Time, Remoto)',
    description_es:
      'Desarrollé la interfaz de usuario y la lógica de conexión con API para software EMS utilizando TypeScript, React, Redux Toolkit y Tailwind CSS como parte de un equipo de dos personas, incluido un desarrollador senior que supervisaba mi trabajo. Seguí metodología SCRUM para asegurar entregas a tiempo y feedback iterativo',
    icon: React.createElement(CgWorkAlt),
    date: 'Nov 2023 - Present',
  },
  {
    title: 'Team Lead and Front End Developer',
    location: 'Cali, Colombia (Full Time, Remote)',
    description:
      'Led an 8-person development team under SCRUM methodology, focusing on front-end development using React, Redux Toolkit, and a combination of Material UI with Tailwind CSS for user interface. Implemented Husky, Lint-staged, ESLint, and Prettier, linked through GitHub Issues and PRs, to maintain rigorous development standards.',
    title_es: 'Líder de equipo y Front End Developer',
    location_es: 'Cali, Colombia (Full Time, Remoto)',
    description_es:
      'Dirigí un equipo de desarrollo de 8 personas bajo la metodología SCRUM, enfocándome en el desarrollo de front-end utilizando React, Redux Toolkit y una combinación de Material UI con Tailwind CSS para la interfaz de usuario. Implementé Husky, Lint-staged, ESLint y Prettier, vinculados a través de Issues y PRs de GitHub, para mantener estándares de desarrollo rigurosos.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2024 - Mar 2024',
  },
  {
    title: 'Freelance Full Stack Developer',
    location: 'Barcelona, Spain (Part Time, Remote)',
    description:
      'Developed a responsive web platform using Next.js and Tailwind CSS. Integrated email services and optimized state management with React Context and Resend. Conducted a seamless site migration from Ionos to Vercel, improving performance and scalability.',
    title_es: 'Desarrollador Full Stack Freelance',
    location_es: 'Barcelona, España (Part Time, Remoto)',
    description_es:
      'Desarrollé una plataforma web responsiva usando Next.js y Tailwind CSS. Integré servicios de correo electrónico y optimicé la gestión de estados con React Context y Resend. Realicé una migración fluida del sitio de Ionos a Vercel, mejorando el rendimiento y la escalabilidad.',
    icon: React.createElement(CgWorkAlt),
    date: 'Oct 2023 - Mar 2024',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Buenos Aires, Argentina (Part Time, Remote)',
    description:
      'Participated in a team of 5 (UX/UI Designers, Developers, and Community Manager) to launch the landing page for "Geo Papel". Used React (Vite and ChakraUI) for the interface; created a backend with Node/Express, integrating the Notion API for code-free edits, and managed deployment on cPanel',
    title_es: 'Desarrollador Full Stack',
    location_es: 'Buenos Aires, Argentina (Remoto)',
    description_es:
      'Participé en un equipo de 5 (Diseñadores UX/UI, Desarrolladores y Community Manager) para lanzar la página de inicio de "Geo Papel". Utilicé React (Vite y ChakraUI) para la interfaz; creé un backend con Node/Express, integrando la API de Notion para ediciones sin código y gestioné el despliegue en cPanel',
    icon: React.createElement(CgWorkAlt),
    date: 'Jun 2023 – Aug 2023',
  },
  /* {
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
  }, */
  {
    title: 'Trading Bots Developer',
    location: 'Morelia, Mexico (Full Time, Remote)',
    description:
      'Designed and executed three automated trading strategies using Pine Script and specialized APIs. Developed customized backtesting software to evaluate strategies effectively. Integrated web development skills with quantitative analysis and financial programming to enhance trading solutions.',
    title_es: 'Desarrollador de Bots de Trading',
    location_es: 'Morelia, México (Full Time, Remoto)',
    description_es:
      'Diseñé y ejecuté tres estrategias de trading automatizadas utilizando Pine Script y APIs especializadas. Desarrollé software personalizado de backtesting para la evaluación de estrategias. Integré habilidades de desarrollo web con análisis cuantitativo y programación financiera para mejorar las soluciones de trading.',
    icon: React.createElement(CgWorkAlt),
    date: 'May 2022 - Oct 2023',
  },
  /*  {
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
  }, */
  {
    title: 'Teaching Assistant',
    location: 'Buenos Aires, Argentina (Part Time, Remote)',
    description:
      'Delivered a course on Git and GitHub, enhancing student collaboration through practical projects and automated workflows. Facilitated bootcamp initiation for new students, promoting a collaborative learning environment and contributing to community development. Led the design and execution of a project simulating technical interviews, significantly enhancing the educational experience.',
    title_es: 'Teaching Assistant',
    location_es: 'Buenos Aires, Argentina (Part Time, Remoto)',
    description_es:
      'Impartí un curso sobre Git y GitHub, mejorando la colaboración estudiantil a través de proyectos prácticos y flujos de trabajo automatizados. Facilité la iniciación del bootcamp para nuevos estudiantes, promoviendo un ambiente de aprendizaje colaborativo y contribuyendo al desarrollo de la comunidad. Lideré el diseño y ejecución de un proyecto que simulaba entrevistas técnicas, mejorando significativamente la experiencia educativa.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2024 - Apr 2024',
  },
  {
    title: 'Co-Founder and Organizer, Henry CodeChallenge Fest',
    location: 'Buenos Aires, Argentina (Part Time, Remote)',
    description:
      'Co-founded and organized a JavaScript logic tournament at Henry Bootcamp, crafting rules and selecting exercises to ensure a fair and competitive environment.',
    title_es: 'Cofundador y Organizador, Henry CodeChallenge Fest',
    location_es: 'Buenos Aires, Argentina (Part Time, Remoto)',
    description_es:
      'Co-fundé y organicé un torneo de lógica JavaScript en Henry Bootcamp, diseñando reglas y seleccionando ejercicios para garantizar un entorno justo y competitivo.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2024 - Apr 2024',
  },
  {
    title: 'Bootcamp Pre-Course Assistant for Full-Stack Development Students',
    location: 'Buenos Aires, Argentina (Part Time, Remote)',
    description:
      'Guided students through pre-admission JavaScript exercises and tool setups, and delivered live lectures on HTML/CSS and JavaScript best practices, preparing them for upcoming bootcamp challenges.',
    title_es: 'Asistente del Pre-Curso para Estudiantes de Desarrollo Full-Stack',
    location_es: 'Buenos Aires, Argentina (Part Time, Remoto)',
    description_es:
      'Guié a los estudiantes a través de ejercicios de JavaScript previos a la admisión y configuraciones de herramientas, y dicté clases en vivo sobre mejores prácticas de HTML/CSS y JavaScript, preparándolos para los desafíos del bootcamp.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2024 - Mar 2024',
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
    date: '2005 - 2022',
  },
] as const;
export const projectsData = [
  {
    title: 'Mercadillo Cívico',
    description:
      'E-commerce for healthy products with administration panels for suppliers and administrators.',
    description_es:
      'E-commerce de productos saludables con paneles de administración para proveedores y administradores.',
    tags: [
      'React',
      'Material UI',
      'Tailwind CSS',
      'Redux Toolkit',
      'Node.js',
      'Express',
      'JWT',
      'Passport',
      'Stripe',
      'Prisma',
      'PostgreSQL',
    ],
    imageUrl: merciv,
    repo: 'https://github.com/MercadilloCivico/MercadilloCivico',
    link: 'https://mer-civ.onrender.com/',
  },
  {
    title: 'Look Art BCN',
    description:
      'Commercial page of a beauty center and photo studio in Barcelona with integrated email services. Conducted a seamless site migration from Ionos to Vercel.',
    description_es:
      'Commercial page de un salón de belleza y estudio fotográfico con servicios de correo electrónico. Realicé una migración fluida del sitio de Ionos a Vercel.',
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Resend'],
    imageUrl: lookart,
    repo: 'https://github.com/Thayrov/lookartbcn',
    link: 'https://lookartbcn.vercel.app/',
  },
  {
    title: 'Rick and Morty App',
    description:
      'Web application to search for and view information about characters from the "Rick and Morty" series using the Rick and Morty GraphQL API.',
    description_es:
      'Aplicación web para buscar y ver información sobre personajes de la serie "Rick and Morty" utilizando la API GraphQL de Rick and Morty.',
    tags: [
      'React',
      'Styled Components',
      'GraphQL',
      'Apollo Client',
      'Github Actions',
      'Github Pages',
    ],
    imageUrl: rym,
    repo: 'https://github.com/Thayrov/kimche-challenge',
    link: 'https://thayrov.github.io/kimche-challenge/',
  },
  {
    title: 'National Pokedex',
    description:
      'Web application for exploring Pokémon with custom filters and real-time data from PokeAPI, cached in my own backend and database.',
    description_es:
      'Aplicación web para explorar Pokémon con filtros personalizados y datos en tiempo real de PokeAPI, cacheados en mi propio backend y BDD.',
    tags: [
      'Node.js',
      'React',
      'Redux',
      'Styled Components',
      'Express',
      'Sequelize',
      'PostgreSQL',
      'Jest',
    ],
    imageUrl: pokemon,
    repo: 'https://github.com/Thayrov/PI-Pokemon',
    link: 'https://pokefront.onrender.com/',
  },
  {
    title: 'Geo Papel',
    description:
      'Worked as a full-stack developer on this startup project for 2 months. Develop half of the front-end and full back-end with Notion API Integration.',
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
  'programming': ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go'],
  'frontend-web': [
    'HTML5',
    'jQuery',
    'React',
    'React router DOM',
    'Formik',
    'Yup',
    'Next.js',
    'Redux',
    'Redux Toolkit',
    'Redux Persist',
    'SweetAlert2',
    'Webpack',
    'Vite',
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
  'database': ['Mongo', 'MySQL', 'PostgreSQL', 'Sequelize', 'Prisma', 'Mongoose', 'Firebase'],
  'API management': ['Axios', 'Fetch API', 'GraphQL', 'Apollo Client', 'Swagger', 'Insomnia'],
  'mobile': ['React Native', 'Expo', 'Xcode', 'Android Studio', 'SQLite'],
  'devOps': ['Docker', 'OCI', 'PM2', 'Cross-Env'],
  'testing': ['Jest', 'Chai', 'Mocha', 'Supertest'],
  'code quality & logging': ['ESLint', 'Prettier', 'Husky', 'Lint-Staged', 'Winston', 'Morgan'],
  'version control': ['Git', 'Github'],
  'soft Skills': [
    'Analytical Thinking',
    'Teamwork',
    'Communication',
    'Projects management',
    'Results Oriented',
  ],
} as const;
