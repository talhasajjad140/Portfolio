'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import Image from 'next/image';

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-cream text-black py-20 lg:py-32 border-b-2 border-black"
    >
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Title */}
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-5xl lg:text-6xl font-bold mb-16 text-black"
          >
            Projects
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="border-2 border-black overflow-hidden hover:border-lime transition-colors group"
              >
                {/* Project Image */}
<div className="relative w-full h-48 lg:h-40 overflow-hidden border-b-2 border-black">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
</div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold mb-3 text-black">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-black/70 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-label font-bold uppercase tracking-wider px-2 py-1 bg-black/5 border border-black/20"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.technologies.length > 2 && (
                      <span className="text-xs font-label font-bold uppercase tracking-wider px-2 py-1 bg-black/5 border border-black/20">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-black text-cream hover:bg-lime hover:text-black transition-colors border border-black font-label text-xs font-bold uppercase tracking-wider"
                    >
                      <Github size={16} />
                      <span className="hidden sm:inline">Code</span>
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-transparent text-black hover:bg-black hover:text-cream transition-colors border-2 border-black font-label text-xs font-bold uppercase tracking-wider"
                    >
                      <ExternalLink size={16} />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}