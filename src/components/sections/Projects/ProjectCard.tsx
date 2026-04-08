import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import type { Project } from '../../../types';
import { GithubIcon } from '../../ui/icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="flex flex-col rounded-xl bg-white/35 dark:bg-black/15 border-l border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Tags bar */}
      <div className="flex items-center bg-black text-white text-[11px] font-medium tracking-widest px-3 py-2 gap-2 flex-wrap">
        {project.tags.map((tag, i) => (
          <span key={tag} className="flex items-center gap-2">
            {i > 0 && <span className="opacity-40">•</span>}
            <span>{tag}</span>
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-4 text-black dark:text-white">
        <span className="text-sm font-bold tracking-widest uppercase">{project.title}</span>

        <p className="text-sm leading-relaxed opacity-95">{project.description}</p>

        {/* Highlights */}
        <ul className="flex flex-col gap-1.5">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-2 text-xs leading-relaxed opacity-80">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-0.5 rounded-full border backdrop-blur-sm bg-[rgba(30,80,160,0.1)] border-[rgba(30,80,180,0.4)] dark:bg-[rgba(100,180,255,0.08)] dark:border-[rgba(100,180,255,0.25)]"
            >
              <GithubIcon />
              <span className="text-xs font-medium tracking-wide text-black dark:text-white/80">GitHub</span>
              <ArrowUpRight size={12} className="text-black dark:text-white" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-0.5 rounded-full border backdrop-blur-sm bg-[rgba(30,80,160,0.1)] border-[rgba(30,80,180,0.4)] dark:bg-[rgba(100,180,255,0.08)] dark:border-[rgba(100,180,255,0.25)]"
            >
              <span className="text-xs font-medium tracking-wide text-black dark:text-white/80">Demo</span>
              <ArrowUpRight size={12} className="text-black dark:text-white" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
