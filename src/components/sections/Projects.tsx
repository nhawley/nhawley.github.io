import { motion } from 'framer-motion';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

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
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
            Here are some of my recent projects showcasing my skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Link */}
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
            className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline"
          >
            <span>View all projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}