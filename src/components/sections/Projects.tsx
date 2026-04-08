import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { ProjectCard } from './Projects/ProjectCard';
import { projects } from './Projects/projects';
import { GithubIcon } from '../ui/icons';

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <p className="mb-12 max-w-2xl">
            Here are some of the projects I'm working on:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/nhawley"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border backdrop-blur-sm bg-[rgba(30,80,160,0.1)] border-[rgba(30,80,180,0.4)] dark:bg-[rgba(100,180,255,0.08)] dark:border-[rgba(100,180,255,0.25)]"
          >
            <GithubIcon />
            <span className="text-sm font-medium tracking-wide text-black dark:text-white/80">View all on GitHub</span>
            <ArrowUpRight size={12} className="text-black dark:text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}