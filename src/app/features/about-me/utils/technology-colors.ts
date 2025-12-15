export interface TechnologyInfo {
  color: string;
  image?: string;
}

export const TECHNOLOGY_INFO: Record<string, TechnologyInfo> = {
  // Frontend
  'Angular': { color: '#dd0031', image: 'images/skills/angular.webp' },
  'React': { color: '#61dafb' },
  'Vue': { color: '#42b883' },
  'JavaScript': { color: '#f7df1e', image: 'images/skills/javascript.png' },
  'TypeScript': { color: '#3178c6', image: 'images/skills/typescript.png' },
  'HTML': { color: '#e34c26', image: 'images/skills/html.png' },
  'CSS': { color: '#264de4', image: 'images/skills/css.png' },
  'SCSS': { color: '#cc6699' },
  'Tailwind': { color: '#06b6d4' },
  'Bootstrap': { color: '#7952b3' },
  'Svelte': { color: '#ff3e00', image: 'images/skills/svelte.png' },
  
  // Mobile
  'Ionic': { color: '#3880ff', image: 'images/skills/ionic.webp' },
  'React Native': { color: '#61dafb' },
  'Flutter': { color: '#02569b' },
  
  // Backend
  'Node.js': { color: '#339933', image: 'images/skills/nodejs.webp' },
  'Express': { color: '#000000' },
  'NestJS': { color: '#e0234e' },
  'Python': { color: '#3776ab' },
  'Django': { color: '#092e20' },
  'Flask': { color: '#000000' },
  'Java': { color: '#007396' },
  'Spring': { color: '#6db33f' },
  '.NET': { color: '#512bd4', image: 'images/skills/dotnet.png' },
  'PHP': { color: '#777bb4' },
  'Laravel': { color: '#ff2d20' },
  
  // Database
  'MongoDB': { color: '#47a248' },
  'PostgreSQL': { color: '#336791', image: 'images/skills/postgresql.png' },
  'MySQL': { color: '#4479a1', image: 'images/skills/mysql.png' },
  'SQL Server': { color: '#cc2927', image: 'images/skills/sql-server.png' },
  'Redis': { color: '#dc382d' },
  'Firebase': { color: '#ffca28' },
  'SQLite': { color: '#003b57' },
  
  // Cloud & DevOps
  'AWS': { color: '#ff9900' },
  'Azure': { color: '#0078d4' },
  'GCP': { color: '#4285f4' },
  'Docker': { color: '#2496ed', image: 'images/skills/docker.webp' },
  'Kubernetes': { color: '#326ce5' },
  'Jenkins': { color: '#d24939' },
  'GitLab': { color: '#fc6d26' },
  'GitHub': { color: '#181717' },
  'GitHub Actions': { color: '#2088ff', image: 'images/skills/github-actions.png' },
  
  // Testing
  'Jest': { color: '#c21325', image: 'images/skills/jest.png' },
  'Cypress': { color: '#17202c' },
  'Selenium': { color: '#43b02a' },
  'Playwright': { color: '#2ead33', image: 'images/skills/playwright.png' },
  
  // Design
  'Figma': { color: '#f24e1e', image: 'images/skills/figma.png' },
  
  // Default color for unknown technologies
  'default': { color: '#6366f1' }
};

export function getTechnologyColor(technology: string): string {
  const info = TECHNOLOGY_INFO[technology] || TECHNOLOGY_INFO['default'];
  return info.color;
}

export function getTechnologyImage(technology: string): string | undefined {
  const info = TECHNOLOGY_INFO[technology];
  return info?.image;
}
