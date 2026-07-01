'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  fadeInUp,
  staggerContainer,
  float,
  slideInRight,
} from '@/lib/animations';

export function HeroSection() {
  return (
    <section className="min-h-screen bg-cream text-black relative overflow-hidden">
      
      <div className="container-custom h-screen flex items-center">
        
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* MAIN GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10"
        >

          {/* LEFT SIDE */}
          <motion.div className="order-2 lg:order-1">

            <motion.p
              variants={fadeInUp}
              className="font-label text-xs uppercase tracking-widest text-black/70 mb-4"
            >
              Hello, I'm Talha
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              No Code,
              <br />
              Just
              <br />
              <span className="text-lime">Creativity</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-lg lg:text-xl text-black/80 max-w-md mb-8"
            >
              Building digital experiences through development, design,
              artificial intelligence and embedded systems.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-black text-cream border-2 border-black font-label text-sm uppercase tracking-wider hover:bg-lime hover:text-black transition-colors"
              >
                View Work
              </motion.button>

              <motion.a
                href="/resume/Talha-Sajjad-CV.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3 bg-transparent text-black border-2 border-black font-label font-bold uppercase text-sm tracking-wider hover:bg-black hover:text-cream transition-colors"
              >
                Download CV
              </motion.a>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE - YOUR CYBER IMAGE */}
          <motion.div
            variants={slideInRight}
            className="order-1 lg:order-2 flex justify-center"
          >

            <motion.div
              variants={float}
              animate="animate"
              className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]"
            >

              {/* CYBER IMAGE (NO FRAME, NO BOX) */}
              <Image
                src="/avatar/cybernetic.png"
                alt="Talha Cyber Avatar"
                fill
                className="object-cover scale-110 hover:scale-105 transition-transform duration-500"
                priority
              />

            </motion.div>

          </motion.div>

        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="font-label text-xs uppercase tracking-wider">Scroll</p>
          <div className="w-1 h-6 border border-black" />
        </motion.div>

      </div>
    </section>
  );
}