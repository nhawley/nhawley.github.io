import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="card group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-gray-200 dark:bg-gray-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
              aria-label="View demo"
            >
              <ExternalLink className="text-gray-900" size={20} />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
            aria-label="View code"
          >
            <Github className="text-gray-900" size={20} />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-2">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
              <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}