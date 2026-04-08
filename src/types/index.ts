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
