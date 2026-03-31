import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

import { ChatCircle } from './Hero/ChatCircle';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-orange"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Nate Hawley
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Senior Full-Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            React • TypeScript • React Native
            <br />
            <span className="text-base">
              Deploying Ideas Since 2016
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-cobalt text-sub rounded-lg font-semibold hover:bg-green hover:text-cream transition-colors"
            >
              Download Resume
            </a>
          </motion.div>

        </motion.div>

        <ChatCircle />

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="text-gray-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
}