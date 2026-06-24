'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { skills } from '@/data/skills';

export function SkillsSection() {
  return (
    <section id="skills" className="bg-cream text-black py-20 lg:py-32 border-b-2 border-black">
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
            Skills
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, idx) => (
              <motion.div
                key={category.name}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="p-6 lg:p-8 border-2 border-black bg-cream hover:bg-black/5 transition-colors"
              >
                {/* Category Title */}
                <h3 className="font-label text-sm font-bold uppercase tracking-wider mb-6 text-black">
                  {category.name}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="font-body text-base text-black/80 flex items-start gap-3"
                    >
                      <span className="text-lime font-bold mt-1">▪</span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
