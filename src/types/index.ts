export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  demoUrl?: string;
  githubUrl: string;
  tags: string[];
  featured: boolean;
  highlights: string[];
}

export interface Skill {
  name: string;
  progress?: number;
  category: 'core' | 'exploring' | 'tools';
  level?: 'expert' | 'proficient' | 'learning';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}