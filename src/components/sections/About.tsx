import { motion } from 'framer-motion';

import { Globe } from './About/Globe';
import { Pill } from './About/Pill';
import { ProfileCard } from './About/ProfileCard';
import AboutAccordion from './About/AboutAccordion';

export function About() {

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-6 section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 mb-10 rounded-xl p-4 backdrop-blur-md bg-white/3 border border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col items-center justify-center py-2">
            <Pill text="Interactive" />
            <Globe size={400} />
            <p className='text-center text-sm mb-1'>SF Based • Globally Available</p>
          </div>
          <ProfileCard />
        </motion.div>

        <div className="grid mb-10 rounded-xl p-4 backdrop-blur-md bg-white/3 border border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <AboutAccordion />
          </motion.div>
        </div> 

      </div>
    </section>
  );
}