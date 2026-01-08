import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="section flex items-center justify-center bg-green px-4 md:px-8 pt-15 pb-15">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 section-title text-orange">Let's Work Together</h2>
        <p className="text-lg text-white mb-12">
          I'm currently seeking full-stack engineering opportunities in the Bay Area,
          particularly with teams building AI-powered products.
        </p>

      <motion.a
        href="mailto:nhawley5@gmail.com"
        className="inline-block px-8 py-4 bg-orange text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get In Touch
      </motion.a>
    </motion.div>
    </section>
  );
}