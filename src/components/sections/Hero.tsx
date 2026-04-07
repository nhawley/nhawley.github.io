import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

import { ChatCircle } from './Hero/ChatCircle';
import { RoleScramble } from './Hero/RoleScramble';
import { ResumeButton } from './Hero/ResumeButton';
import { TechStack } from './Hero/TechStack';

const roles = [
  'Full-Stack Developer',
  'Software Developer in Test (SDET)',
  'Mobile Engineer',
  'Automated QA Engineer'
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-orange"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            NATE HAWLEY
          </motion.h1>

          <RoleScramble
            roles={roles}
            interval={5000}
            className="scramble text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />

          <motion.p
            className="text-lg md:text-xl mb-4 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Deploying Solutions & Automating Quality
          </motion.p>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <TechStack />
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ResumeButton />
          </motion.div>

        </motion.div>

        <ChatCircle />

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={32} />
        </motion.div>
      </div>
    </section>
  );
}