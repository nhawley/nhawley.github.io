import { motion } from 'framer-motion';
import { ArrowDown, Code2, Rocket, Users, Zap } from 'lucide-react';

import { Globe } from './About/Globe';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expert in React, TypeScript, and React Native with a decade of experience',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong mentor and collaborator with proven leadership experience',
    },
    {
      icon: Rocket,
      title: 'AI/ML Integration',
      description: 'Building next-gen applications with LLMs and modern AI technologies',
    },
    {
      icon: Zap,
      title: 'Performance Focus',
      description: 'Obsessed with building fast, scalable, and maintainable applications',
    },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-6 section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 mb-12 rounded-xl backdrop-blur-md bg-white/3 border border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <Globe size={450} />
            <p className='text-center'>SF Based • Globally Available</p>
          </div>
          <div className="prose prose-lg max-w-none space-x-4">
            <p className="text-lg leading-relaxed mb-4">
              I'm a full-stack engineer with a decade of experience building high-performance
              web and mobile apps. I specialize in React, TypeScript, and React Native,
              with a recent focus on integrating AI/ML capabilities into user-facing products.
            </p>
            <p className="text-lg leading-relaxed">
              Currently exploring opportunities in the Bay Area where I can contribute to
              products that leverage modern AI tech. I'm particularly interested in
              companies pushing the boundaries of reactive UI, developer tools, and
              consumer AI products.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <Icon className="text-cream" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-cream">{item.title}</h3>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex justify-start mt-8">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-gray-400" size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}