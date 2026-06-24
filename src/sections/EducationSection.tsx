'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { education } from '@/data/education';

const getStatusLabel = (status: string) => {
  return status === 'in-progress' ? 'In Progress' : 'Completed';
};

export function EducationSection() {
  return (
    <section id="education" className="bg-cream text-black py-20 lg:py-32 border-b-2 border-black">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          {/* Section Title */}
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-5xl lg:text-6xl font-bold mb-12 text-black"
          >
            Education
          </motion.h2>

          {/* Education Cards */}
          {education.map((edu) => (
            <motion.div
              key={`${edu.university}-${edu.degree}`}
              variants={fadeInUp}
              className="p-8 lg:p-12 border-3 border-black bg-cream"
            >
              {/* Degree */}
              <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-4 text-black">
                {edu.degree}
              </h3>

              {/* University */}
              <p className="font-heading text-2xl font-bold text-lime mb-6">{edu.university}</p>

              {/* Duration and Status */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t-2 border-black">
                <div>
                  <p className="font-label text-xs uppercase font-bold tracking-wider text-black/60 mb-1">
                    Duration
                  </p>
                  <p className="font-body text-lg font-semibold text-black">{edu.duration}</p>
                </div>

                <div className="inline-flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-lime" />
                  <p className="font-label text-sm uppercase font-bold tracking-wider text-black">
                    {getStatusLabel(edu.status)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
