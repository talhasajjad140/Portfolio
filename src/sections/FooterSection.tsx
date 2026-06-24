'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-cream py-12 lg:py-16 border-t-2 border-black">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          {/* Left: Branding */}
          <motion.div variants={fadeIn} transition={{ delay: 0 }}>
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-cream mb-2">
              Talha Sajjad
            </h3>
            <p className="font-label text-sm uppercase font-bold tracking-wider text-cream/80">
              Full Stack Developer & Embedded Systems Engineer
            </p>
          </motion.div>

          {/* Center: Motto */}
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.1 }}
            className="font-body text-sm lg:text-base text-cream/70"
          >
            Engineering Ideas Into Reality
          </motion.p>

          {/* Right: Copyright */}
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="font-label text-xs uppercase font-bold tracking-wider text-cream/60"
          >
            © {currentYear} All Rights Reserved
          </motion.p>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="w-full h-px bg-cream/20 my-8"
        />

        {/* Bottom: Links and Additional Info */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left text-xs"
        >
          <div className="flex gap-6 flex-wrap justify-center sm:justify-start">
            <a
              href="#about"
              className="font-label uppercase font-bold tracking-wider hover:text-lime transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="font-label uppercase font-bold tracking-wider hover:text-lime transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="font-label uppercase font-bold tracking-wider hover:text-lime transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="font-label uppercase font-bold tracking-wider hover:text-lime transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="font-label uppercase font-bold tracking-wider text-cream/60">
            Made with Code & Design
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
