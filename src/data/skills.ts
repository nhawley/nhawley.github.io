import type { Skill } from '../types';

export const skills: Skill[] = [
  // Core Technologies
  { name: 'JavaScript/TypeScript', category: 'core', level: 'expert', progress: 60 },
  { name: 'React & React Native', category: 'core', level: 'expert', progress: 60 },
  { name: 'Node.js/Express', category: 'core', level: 'proficient', progress: 60 },
  { name: 'HTML/CSS/Tailwind', category: 'core', level: 'expert', progress: 60 },
  { name: 'Git/GitHub', category: 'core', level: 'expert', progress: 60 },

  // Currently Exploring
  { name: 'LLMs & AI Applications', category: 'exploring', level: 'learning', progress: 60 },
  { name: 'Python & PyTorch', category: 'exploring', level: 'learning', progress: 60  },
  { name: 'RAG Architectures', category: 'exploring', level: 'learning', progress: 60  },
  { name: 'Vector Databases', category: 'exploring', level: 'learning', progress: 60  },
  { name: 'Prompt Engineering', category: 'exploring', level: 'learning', progress: 60  },

  // Tools & Others
  { name: 'Jest/Cypress/Playwright', category: 'tools', progress: 60  },
  { name: 'GraphQL & REST APIs', category: 'tools', progress: 60  },
  { name: 'PostgreSQL, MongoDB', category: 'tools', progress: 60  },
  { name: 'AWS/Vercel/Docker', category: 'tools', progress: 60  },
  { name: 'CI/CD (GitHub Actions)', category: 'tools', progress: 60  },
];