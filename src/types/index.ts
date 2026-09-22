export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  /** Real screenshot/artwork URL. Omitted projects render a placeholder tile. */
  image?: string;
  demoUrl?: string;
  githubUrl: string;
  tags: string[];
  featured: boolean;
  highlights: string[];
}
