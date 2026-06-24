'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function AboutSection() {
  return (
    <section id="about" className="bg-cream text-black py-20 lg:py-32 border-b-2 border-black">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {/* Section Title */}
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-5xl lg:text-6xl font-bold mb-8 text-black"
          >
            About Me
          </motion.h2>

          {/* Content */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="font-body text-lg lg:text-xl leading-relaxed text-black/80">
              I am a Full Stack Web Developer and Embedded Systems Engineer who treats code and
              design as two sides of the same coin. Moving effortlessly between frontend
              interfaces and backend architecture, I adapt to any tech stack required from Next.js
              and React to Django and Flask.
            </p>

            <p className="font-body text-lg lg:text-xl leading-relaxed text-black/80">
              I pair this technical flexibility with a deep appreciation for editorial aesthetics,
              minimalist layout structures, and sharp typography.
            </p>

            <p className="font-body text-lg lg:text-xl leading-relaxed text-black/80">
              Whether I am building a fluid web application, integrating local AI, or working down
              to the hardware level, I engineer end to end solutions that are as visually striking
              as they are functionally robust.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-3 bg-black text-cream border-2 border-black font-label font-bold uppercase text-sm tracking-wider hover:bg-lime hover:text-black transition-colors"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
