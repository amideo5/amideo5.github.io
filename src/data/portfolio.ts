/**
 * Central portfolio data — generated from Aryan's resume (Aryan_Trivedi_Resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Aryan Trivedi',
  displayName: 'Aryan Trivedi',
  firstName: 'ARYAN',
  seriesTag: 'PORTFOLIO',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'BUILT BY ARYAN TRIVEDI',
  role: 'Software Engineer',
  tagline: ['Full-Stack Engineering', 'AI Systems', 'Cloud & Mobile'],
  intro:
    'Software Engineer based in Bangalore, India, building and improving web, mobile, and AI-powered systems. Experienced in healthcare software, Flutter applications, augmented reality, machine-learning pipelines, and full-stack platforms.',
  location: 'Bangalore, India',
  email: 'aryantrvd22@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/aryan-trivedi-1187871ba',
    github: 'https://github.com/amideo5',
  },
  resumePdf: '/assets/Aryan_Trivedi_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Aryan Trivedi',
  },
  interests: ['AI-powered workflows', 'Cloud deployment', 'Mobile experiences', 'Backend performance'],
};

export const education = [
  {
    school: 'Visvesvaraya Technological University',
    place: 'Karnataka, India',
    degree: 'Bachelor of Engineering — Computer Science and Engineering',
    period: 'August 2019 – July 2023',
    score: '7.89 CGPA',
  },
];

export const experience = [
  {
    company: 'InfiMed Solutions (UniversalMed Supply Inc.)',
    role: 'Software Developer',
    place: 'Healthcare technology',
    period: 'May 2025 – Present',
    points: [
      'Maintain and enhance Universal Med Supply, a healthcare platform supporting Durable Medical Equipment (DME) insurance claims, order workflows, and patient communication.',
      'Improve application performance by removing redundant database queries, adding indexes, and using Eloquent eager loading.',
      'Contribute to a Flutter mobile app for delivery personnel, including order lookup, delivery confirmation, and patient verification.',
      'Support integrations with insurance-validation APIs and internal notification services.',
      'Built an AI-driven call-recording analysis workflow using Vertex AI, processing 1,000+ recordings per month and reducing manual QA effort by 60–70%.',
      'Developed speech-to-text and NLP workflows with 85–90% transcription accuracy and a RAG assistant over 500+ internal policy documents, reducing policy search time by approximately 75%.',
      'Automated audio ingestion and indexing with Google Drive API and Apps Script, reducing manual reporting effort by approximately 80%.',
      'Worked with role-based access controls and controlled-access policies in a HIPAA-compliant Google Cloud environment.',
    ],
  },
  {
    company: 'Cocotechoes Solutions Pvt. Ltd.',
    role: 'Software Engineer',
    place: 'Software development',
    period: 'November 2023 – April 2025',
    points: [
      'Developed and deployed a Flutter augmented-reality application using Wikitude, then built an enhanced version using Vuforia SDK and Unity3D.',
      'Implemented communication between Flutter and Unity and integrated backend services for mobile experiences.',
      'Built a Python machine-learning voice-analysis system with 93.5% accuracy, exposed through a Flask application and real-time APIs, and deployed it on Google Cloud Platform.',
      'Created a Chrome extension for real-time voice analysis during meetings and contributed to an Enneagram-based personality-profiling module.',
      'Built a Laravel adventure-travel platform with a custom admin dashboard, Sanctum authentication, REST APIs, Blade templates, SQL migrations, and media management.',
      'Developed a Laravel-based student-assistance portal and integrated a HubSpot chatbot for automated user support.',
    ],
  },
  {
    company: 'Embrise Solutions',
    role: 'Software Engineer (Freelance; self-founded initiative)',
    place: 'Client projects',
    period: 'August 2023 – October 2023',
    points: [
      'Managed three client projects across e-commerce, travel, and fintech, handling requirements, development, deployment, and client communication.',
      'Built a perfume e-commerce website using Laravel Blade and Sanctum authentication, integrating the Cashfree payment gateway.',
      'Developed a responsive travel-agency website with package management, inquiry workflows, and an admin content-management system.',
      'Built a desktop transaction-management application for a national bank union using Flask and packaged it with PyInstaller.',
    ],
  },
  {
    company: 'Nextuple India Pvt. Ltd.',
    role: 'Associate Software Developer Intern',
    place: 'Software engineering',
    period: 'February 2023 – July 2023',
    points: [
      'Built E-Wallet and Food Ordering proof-of-concept applications using Spring Boot and React.js.',
      'Contributed to a live microservices project focused on customer order-sourcing workflows.',
      'Implemented near-caching strategies to improve application startup performance and fixed UI and backend issues.',
      'Collaborated in an Agile team environment.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const palettes = {
  ai: { from: '#10241f', via: '#1d5b4a', to: '#0b1110', accent: '#62d6ad' },
  rag: { from: '#101b32', via: '#254b7a', to: '#090e19', accent: '#8dbbff' },
  ar: { from: '#211631', via: '#583b7a', to: '#100d18', accent: '#c7a6ff' },
  voice: { from: '#2b1d13', via: '#75502b', to: '#120e0a', accent: '#f4bd75' },
  web: { from: '#14252e', via: '#286174', to: '#0b1116', accent: '#82d5e7' },
  fintech: { from: '#211b2b', via: '#4c3a66', to: '#0e0b13', accent: '#d2b4ff' },
};

export const projects: Project[] = [
  {
    id: 'ai-call-analysis',
    title: 'AI Call Recording Analysis',
    year: '2026',
    genre: 'AI • Speech • Automation',
    logline: 'An automated call-analysis workflow designed to reduce manual quality-assurance effort.',
    stack: ['Python', 'Vertex AI', 'Speech-to-Text', 'NLP', 'Google Cloud', 'Apps Script'],
    build: [
      'Built an AI-driven call-recording analysis workflow processing 1,000+ recordings per month and reducing manual QA effort by 60–70%.',
      'Created speech-to-text and NLP workflows with 85–90% transcription accuracy and automated audio ingestion and indexing using Google Drive API and Apps Script.',
      'Reduced QA feedback turnaround from 2–3 days to under 4 hours.',
    ],
    features: [
      'Automated audio ingestion and indexing',
      'Speech-to-text and NLP analysis',
      'Compliance indicators and performance metrics',
      'Google Cloud IAM and controlled access',
    ],
    metrics: [
      { value: '1,000+', label: 'recordings processed monthly' },
      { value: '60–70%', label: 'less manual QA effort' },
      { value: '85–90%', label: 'transcription accuracy' },
      { value: '<4 hours', label: 'QA feedback turnaround' },
    ],
    palette: palettes.ai,
    motif: 'shield',
  },
  {
    id: 'rag-policy-assistant',
    title: 'RAG Policy Assistant',
    year: '2026',
    genre: 'RAG • Search • LLM',
    logline: 'An internal assistant that helps teams retrieve information from policy documents.',
    stack: ['Python', 'RAG', 'LLMs', 'Google Cloud'],
    build: [
      'Developed a retrieval-augmented assistant across 500+ internal policy documents.',
      'Reduced policy search time by approximately 75% through context-aware retrieval and responses.',
    ],
    features: [
      'Retrieval across internal policy documents',
      'Context-aware responses',
      'Faster policy lookup for internal teams',
    ],
    metrics: [
      { value: '500+', label: 'internal policy documents' },
      { value: '~75%', label: 'reduction in policy search time' },
    ],
    palette: palettes.rag,
    motif: 'flow',
  },
  {
    id: 'ar-mobile-platform',
    title: 'AR Mobile Platform',
    year: '2024',
    genre: 'Mobile • AR • 3D',
    logline: 'A Flutter mobile experience integrating augmented reality with Unity-based rendering.',
    stack: ['Flutter', 'Dart', 'Vuforia', 'Unity3D', 'Wikitude'],
    build: [
      'Developed a Flutter application with AR features using Wikitude and deployed it to the Google Play Store.',
      'Built an enhanced version using Vuforia SDK and Unity3D, with Unity scripting to support Flutter–Unity communication.',
    ],
    features: [
      'Flutter mobile interface',
      'AR experiences with Wikitude and Vuforia',
      'Unity rendering and Flutter–Unity communication',
      'Multimedia overlays',
    ],
    metrics: [],
    palette: palettes.ar,
    motif: 'tenants',
  },
  {
    id: 'voice-analysis-engine',
    title: 'Voice Analysis Engine',
    year: '2025',
    genre: 'Machine Learning • Speech',
    logline: 'A machine-learning system for voice analysis exposed through a Flask API.',
    stack: ['Python', 'Machine Learning', 'Flask', 'Google Cloud'],
    build: [
      'Developed a voice-analysis model with 93.5% accuracy using feature engineering and data augmentation.',
      'Integrated the model into a Flask web application with real-time API capabilities and deployed it on Google Cloud Platform.',
      'Created a Chrome extension for real-time voice analysis during meetings and contributed to an Enneagram-based personality-profiling module.',
    ],
    features: [
      'Feature engineering and data augmentation',
      'Flask API integration',
      'Google Cloud deployment',
      'Chrome extension for meeting analysis',
    ],
    metrics: [{ value: '93.5%', label: 'reported model accuracy' }],
    palette: palettes.voice,
    motif: 'shield',
  },
  {
    id: 'client-platforms',
    title: 'Client Web & Desktop Platforms',
    year: '2023',
    genre: 'E-commerce • Travel • Fintech',
    logline: 'A set of client projects delivered across e-commerce, travel, and transaction management.',
    stack: ['Laravel', 'PHP', 'Flask', 'Python', 'Cashfree', 'PyInstaller'],
    build: [
      'Built a perfume e-commerce platform with Laravel Blade, Sanctum authentication, and Cashfree payment integration.',
      'Developed a travel-agency website with package listings, inquiry workflows, and an admin CMS.',
      'Engineered a desktop transaction-management system using Flask and packaged it with PyInstaller.',
    ],
    features: [
      'E-commerce and payment integration',
      'Travel package and inquiry management',
      'Desktop transaction-management workflow',
      'End-to-end client delivery',
    ],
    metrics: [{ value: '3', label: 'parallel client projects' }],
    palette: palettes.fintech,
    motif: 'tenants',
  },

  {
    id: 'finance-app',
    title: 'Finance & Shared Expense App',
    year: '2025 - Present',
    genre: 'Mobile • Fintech • Firebase',
    logline:
      'A personal-finance and shared-expense mobile app supporting multiple financial profiles, transaction tracking, and expense splitting.',
    stack: [
      'Expo',
      'React Native',
      'TypeScript',
      'Firebase Authentication',
      'Cloud Firestore',
      'Expo SecureStore',
    ],
    build: [
      'Developed a mobile finance application with email/password authentication, profile switching, and local PIN storage using Expo SecureStore.',
      'Implemented foundations for income and expense tracking, financial accounts, category-based transactions, budgets, goals, investments, and net-worth snapshots.',
      'Built friend connections, friend requests, shared expenses, and participant payment tracking using Cloud Firestore.',
    ],
    features: [
      'Email/password authentication',
      'Personal, business, family, and custom finance profiles',
      'Income and expense tracking with categories and payment modes',
      'Friends, expense splitting, and payment tracking',
      'Budgets, goals, investments, and net-worth tracking services',
    ],
    metrics: [],
    palette: {
      from: '#102b27',
      via: '#176b5b',
      to: '#091411',
      accent: '#65e0bb',
    },
    motif: 'flow',
  },
  {
    id: 'vuforia-ar-app',
    title: 'Vuforia AR Application',
    year: '2023–2025',
    genre: 'Mobile • Augmented Reality',
    logline:
      'A Flutter mobile application integrating Unity and Vuforia to deliver augmented-reality experiences.',
    stack: [
      'Flutter',
      'Dart',
      'Spring Boot',
      'SQL',
      'Vuforia',
      'Unity3D',
    ],
    build: [
      'Combined Flutter mobile UI with Spring Boot backend services and SQL data storage.',
      'Integrated Vuforia SDK and Unity3D to render augmented-reality content through the mobile camera.',
      'Implemented communication between Flutter and Unity to connect the mobile interface with the AR experience.',
    ],
    features: [
      'Mobile AR experiences',
      'Unity3D rendering',
      'Flutter–Unity integration',
      'Backend API and SQL integration',
    ],
    metrics: [],
    github: 'https://github.com/amideo5/Vuforia-AR-App',
    palette: {
      from: '#17172d',
      via: '#494080',
      to: '#0b0b15',
      accent: '#b7a8ff',
    },
    motif: 'tenants',
  },
  {
    id: 'e-wallet-app',
    title: 'E-Wallet Application',
    year: '2023',
    genre: 'Full Stack • Fintech',
    logline:
      'An e-wallet application built with React, Spring Boot, and MongoDB.',
    stack: ['React.js', 'Spring Boot', 'Java', 'MongoDB'],
    build: [
      'Developed a React frontend connected to a Spring Boot backend.',
      'Used MongoDB for application data storage supporting wallet and transaction-related workflows.',
    ],
    features: [
      'React user interface',
      'Spring Boot backend',
      'MongoDB data storage',
      'Wallet and transaction-related functionality',
    ],
    metrics: [],
    github: 'https://github.com/amideo5/E-wallet-App',
    palette: {
      from: '#10202c',
      via: '#245c79',
      to: '#091018',
      accent: '#83d3ff',
    },
    motif: 'tenants',
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization Dashboard',
    year: '2023',
    genre: 'Full Stack • Data Visualization',
    logline:
      'A web application that reads CSV data and presents insights through interactive charts.',
    stack: ['React.js', 'Express.js', 'CSV Parser', 'Chart.js'],
    build: [
      'Built a React frontend for exploring data loaded from CSV files.',
      'Used Express.js for backend functionality and Chart.js to render visualizations.',
    ],
    features: [
      'CSV data processing',
      'Interactive charts',
      'React-based interface',
      'Express.js backend',
    ],
    metrics: [],
    github: 'https://github.com/amideo5/Data-Visualization-Charts',
    palette: {
      from: '#152329',
      via: '#2f6870',
      to: '#091114',
      accent: '#8ce1dc',
    },
    motif: 'flow',
  },
  {
    id: 'todo-list',
    title: 'React Todo List',
    year: '2023',
    genre: 'Frontend • Productivity',
    logline:
      'A simple task-management interface for creating, completing, and organizing daily tasks.',
    stack: ['React.js', 'JavaScript'],
    build: [
      'Built a React interface for creating and managing tasks.',
      'Implemented task completion and deletion workflows.',
    ],
    features: [
      'Create tasks',
      'Mark tasks as complete',
      'Delete tasks',
    ],
    metrics: [],
    github: 'https://github.com/amideo5/react-to-do-list',
    palette: {
      from: '#17271d',
      via: '#3e704d',
      to: '#09110c',
      accent: '#a5e5ad',
    },
    motif: 'flow',
  },
  {
    id: 'linux-printer-driver',
    title: 'Linux Printer Device Driver',
    year: '2023',
    genre: 'Systems Programming • Linux',
    logline:
      'A systems-level project exploring Linux device-driver development for printer control.',
    stack: ['C', 'Linux', 'Linux Kernel'],
    build: [
      'Worked on a Linux kernel device-driver project intended to control printer-device operations.',
    ],
    features: [
      'Linux device-driver concepts',
      'C programming',
      'Kernel-level systems exploration',
    ],
    metrics: [],
    github: 'https://github.com/amideo5/MajorProject',
    palette: {
      from: '#20242a',
      via: '#505a65',
      to: '#0c0e11',
      accent: '#c2d0dc',
    },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Cisco', name: 'CCNA — Introduction to Networks', link: 'https://www.credly.com/badges/b34a0bec-64c1-45c5-9457-ab6dd3432016' },
  { issuer: 'Great Learning Academy', name: 'Cloud Foundations', link: 'https://www.mygreatlearning.com/certificate/OKBVZFCX' },
  { issuer: 'Celonis', name: 'Celonis Foundations', link: 'https://www.credly.com/badges/8c7dcfb4-d40b-46a5-b502-373d5bfad977' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming languages',
    skills: [
      { name: 'Java', mono: 'Ja' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Dart', mono: 'Da' },
      { name: 'PHP', mono: 'Ph' },
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'SQ' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend-mobile',
    title: 'Frontend & Mobile',
    subtitle: 'Web and mobile experiences',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'React Native', mono: 'RN' },
      { name: 'Expo', mono: 'Ex' },
      { name: 'Flutter', mono: 'Fl' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Blade', mono: 'Bl' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Frameworks',
    subtitle: 'Application and API development',
    skills: [
      { name: 'Spring Boot', mono: 'Sp' },
      { name: 'Laravel', mono: 'La' },
      { name: 'Flask', mono: 'Fk' },
      { name: 'REST APIs', mono: 'API' },
      { name: 'Laravel Sanctum', mono: 'LS' },
      { name: 'Firebase Authentication', mono: 'FA' },
      { name: 'Node.js', mono: 'Nd' },
    ],
  },
  {
    id: 'ai-cloud',
    title: 'AI & Cloud',
    subtitle: 'Applied AI, generative AI and deployment',
    skills: [
      { name: 'Machine Learning', mono: 'ML' },
      { name: 'Natural Language Processing', mono: 'NL' },
      { name: 'Speech Processing', mono: 'SP' },
      { name: 'Speech-to-Text', mono: 'ST' },
      { name: 'Retrieval-Augmented Generation', mono: 'RG' },
      { name: 'Vertex AI', mono: 'VA' },
      { name: 'Gemini', mono: 'Ge' },
      { name: 'Google Cloud Platform', mono: 'GCP' },
      { name: 'Google Apps Script', mono: 'AS' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Database design and data management',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'MariaDB', mono: 'Ma' },
      { name: 'MongoDB', mono: 'Mo' },
      { name: 'Cloud Firestore', mono: 'FS' },
      { name: 'Database Indexing', mono: 'DI' },
      { name: 'Query Optimization', mono: 'QO' },
    ],
  },
  {
    id: 'tools-testing',
    title: 'Tools & Testing',
    subtitle: 'Development workflow and quality',
    skills: [
      { name: 'Git', mono: 'Gi' },
      { name: 'GitHub', mono: 'GH' },
      { name: 'Postman', mono: 'Po' },
      { name: 'JIRA', mono: 'Ji' },
      { name: 'JUnit', mono: 'JU' },
      { name: 'Jest', mono: 'Je' },
      { name: 'Unity3D', mono: 'Un' },
      { name: 'Vuforia SDK', mono: 'Vu' },
      { name: 'Wikitude', mono: 'Wi' },
      { name: 'Eloquent ORM', mono: 'EO' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Spring Boot projects at Nextuple'],
  JavaScript: ['React.js applications'],
  Dart: ['Flutter mobile applications'],
  PHP: ['Laravel travel and e-commerce platforms'],
  Python: ['Voice analysis, Flask applications, AI call analysis'],
  'React.js': ['Food Ordering and E-Wallet proof-of-concept applications'],
  Flutter: ['AR mobile platform', 'Delivery personnel mobile application'],
  'Spring Boot': ['Food Ordering and E-Wallet proof-of-concept applications'],
  Laravel: ['Adventure travel platform', 'Perfume e-commerce platform', 'Student assistance portal'],
  Flask: ['Voice analysis engine', 'Desktop transaction-management application'],
  'Machine Learning': ['Voice Analysis Engine'],
  'Google Cloud Platform': ['Voice analysis deployment', 'AI call analysis workflows'],
  'Vertex AI': ['AI Call Recording Analysis'],
  RAG: ['RAG Policy Assistant'],
  MongoDB: ['Inventory management backend and project work'],
  MySQL: ['Laravel platforms and SQL-backed applications'],
  Unity3D: ['AR Mobile Platform'],
  Vuforia: ['AR Mobile Platform'],
  Wikitude: ['AR Mobile Platform'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Foundations',
    period: 'February – July 2023',
    synopsis: 'Software engineering internship and early full-stack project work.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'First Production Workflows',
        description: 'Built Spring Boot and React proof-of-concept applications and contributed to a microservices-based order-sourcing project at Nextuple.',
        tags: ['Java', 'Spring Boot', 'React', 'Microservices'],
        runtime: 'Feb 2023 – Jul 2023',
        palette: palettes.web,
      },
    ],
  },
  {
    number: 2,
    title: 'Independent Delivery',
    period: 'August – October 2023',
    synopsis: 'Freelance work across e-commerce, travel, and fintech.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Client Projects',
        description: 'Delivered a perfume e-commerce platform, travel-agency website, and desktop transaction-management application.',
        tags: ['Laravel', 'Cashfree', 'Flask', 'PyInstaller'],
        runtime: 'Aug 2023 – Oct 2023',
        palette: palettes.fintech,
      },
    ],
  },
  {
    number: 3,
    title: 'Mobile, AR & AI',
    period: 'November 2023 – April 2025',
    synopsis: 'Built mobile augmented-reality experiences, a voice-analysis system, and full-stack web platforms.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Immersive Applications',
        description: 'Developed Flutter AR experiences with Wikitude, then Vuforia and Unity3D.',
        tags: ['Flutter', 'Wikitude', 'Vuforia', 'Unity3D'],
        runtime: 'Nov 2023 – Apr 2025',
        palette: palettes.ar,
      },
      {
        code: 'S03 E02',
        title: 'Voice Intelligence',
        description: 'Built a Python voice-analysis system with 93.5% reported accuracy and a Flask API.',
        tags: ['Python', 'ML', 'Flask', 'GCP'],
        runtime: 'Nov 2023 – Apr 2025',
        palette: palettes.voice,
      },
    ],
  },
  {
    number: 4,
    title: 'Healthcare & Applied AI',
    period: 'May 2025 – Present',
    synopsis: 'Improving healthcare workflows while building automation and retrieval tools for internal teams.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Healthcare Platform',
        description: 'Maintains DME claims and order workflows, improves database performance, and contributes to a Flutter delivery app.',
        tags: ['Laravel', 'SQL', 'Flutter', 'APIs'],
        runtime: 'May 2025 – Present',
        palette: palettes.web,
      },
      {
        code: 'S04 E02',
        title: 'AI Workflows',
        description: 'Developed call-analysis automation and a RAG assistant for internal policy documents.',
        tags: ['Vertex AI', 'NLP', 'RAG', 'Google Cloud'],
        runtime: 'May 2025 – Present',
        palette: palettes.ai,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'AI automation', title: 'Call Analysis', detail: '1,000+ recordings monthly • 60–70% less manual QA effort', palette: palettes.ai },
  { label: 'Knowledge retrieval', title: 'RAG Assistant', detail: '500+ internal policy documents • ~75% less search time', palette: palettes.rag },
  { label: 'Machine learning', title: 'Voice Analysis', detail: '93.5% reported model accuracy', palette: palettes.voice },
  { label: 'Mobile & AR', title: 'AR Platform', detail: 'Flutter • Vuforia • Unity3D', palette: palettes.ar },
  { label: 'Healthcare', title: 'Universal Med Supply', detail: 'DME claims, order workflows and delivery operations', palette: palettes.web },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Computer Science Engineer.',
    lines: [
      'B.E. in Computer Science and Engineering',
      'Visvesvaraya Technological University',
      'August 2019 – July 2023',
    ],
    chips: ['Computer Science', 'Software Engineering'],
  },
  {
    kicker: 'Skills',
    title: 'Full stack. AI. Mobile.',
    lines: [
      'Languages: Java, PHP, Python, JavaScript, TypeScript and Dart',
      'Frontend & Mobile: React.js, Flutter, React Native and Tailwind CSS',
      'Backend: Spring Boot, Laravel, Node.js and Flask',
      'Data & Cloud: MySQL, MariaDB, MongoDB, Firebase, Redis and Google Cloud',
      'AI & AR: Machine learning, audio processing, RAG, Vuforia and Unity',
    ],
    chips: ['Backend', 'Frontend', 'AI/ML', 'Cloud', 'Mobile'],
  },
  {
    kicker: 'Work',
    title: 'Products in production.',
    lines: [
      'InfiMed Solutions — Healthcare platforms, AI call analysis, RAG assistant and Flutter delivery app',
      'Cocotechoes Solutions — AR applications, voice analysis AI and web platforms',
      'Embrise Solutions — E-commerce, travel website and transaction management app',
      'Nextuple — Spring Boot microservices, food ordering, e-wallet and Redis caching',
    ],
    chips: [
      'Healthcare',
      'AI/ML',
      'RAG',
      'Flutter',
      'Laravel',
      'Spring Boot',
      'React',
      'Python',
    ],
  },
  {
    kicker: 'Projects',
    title: 'From ideas to applications.',
    lines: [
      'Finance app for personal finances and shared expenses',
      'Vuforia AR, inventory management, food ordering and e-wallet applications',
      'Book search, data visualization, weather and doctor appointment applications',
      'Voice analysis, AI-powered workflows and full-stack web applications',
    ],
    chips: ['React', 'Spring Boot', 'Flutter', 'Expo', 'Python'],
  },
  {
    kicker: 'Certified',
    title: 'Learning beyond the code.',
    lines: [
      'Cisco — CCNA: Introduction to Networks',
      'Great Learning Academy — Cloud Foundations',
      'Celonis — Celonis Foundations',
    ],
    chips: ['Networking', 'Cloud Computing', 'Process Mining'],
  },
  {
    kicker: 'Current Mission',
    title: 'Build useful things. Make them better.',
    lines: [
      'Deepening expertise in backend engineering and scalable systems',
      'Building practical AI-powered products and cross-platform applications',
      'Improving software quality, performance and maintainability',
    ],
    chips: ['Backend Systems', 'Applied AI', 'Product Engineering'],
  },
];

export type ProfileId = 'aryan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'aryan',
    name: 'Aryan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
