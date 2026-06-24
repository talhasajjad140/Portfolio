'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { timeline } from '@/data/timeline';

export function TimelineSection() {
  return (
    <section id="timeline" className="bg-cream text-black py-20 lg:py-32 border-b-2 border-black">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Title */}
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-5xl lg:text-6xl font-bold mb-16 text-black"
          >
            Timeline
          </motion.h2>

          {/* Timeline */}
          <div className="space-y-12 lg:space-y-16">
            {timeline.map((entry, idx) => (
              <motion.div
                key={entry.year}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-0 lg:pl-32"
              >
                {/* Timeline Dot and Line (Desktop) */}
                <div className="hidden lg:absolute lg:left-0 lg:top-0 lg:w-10 lg:h-10 lg:flex lg:items-center lg:justify-center">
                  <div className="w-6 h-6 bg-lime border-2 border-black rounded-full" />
                </div>

                {/* Timeline Line (Desktop) */}
                {idx < timeline.length - 1 && (
                  <div className="hidden lg:absolute lg:left-4 lg:top-10 lg:w-1 lg:h-16 bg-black" />
                )}

                {/* Mobile Timeline Indicator */}
                <div className="lg:hidden flex items-start gap-4">
                  <div className="w-4 h-4 bg-lime border-2 border-black rounded-full flex-shrink-0 mt-2" />
                  <div className="flex-grow">
                    {/* Year and Title */}
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-heading text-3xl font-bold text-lime">{entry.year}</span>
                      <h3 className="font-heading text-xl font-bold text-black">{entry.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="font-body text-base text-black/70">{entry.description}</p>
                  </div>
                </div>

                {/* Desktop Timeline Content */}
                <div className="hidden lg:block">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-heading text-4xl font-bold text-lime">{entry.year}</span>
                    <h3 className="font-heading text-2xl font-bold text-black">{entry.title}</h3>
                  </div>
                  <p className="font-body text-lg text-black/70">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
