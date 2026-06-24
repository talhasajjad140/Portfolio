'use client';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { useMobileMenu, useScrollPosition } from '@/hooks';
import { slideInTop } from '@/lib/animations';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu();
  const { isScrolled } = useScrollPosition();

  const navLinks = ['About', 'Skills', 'Projects', 'Designs', 'Contact'];

  return (
    <>
      <motion.nav
        variants={slideInTop}
        initial="hidden"
        animate="show"
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-cream/80 backdrop-blur-md border-b-2 border-black'
            : 'bg-cream border-b-2 border-black'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo - Left */}
            <motion.div
              className="flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="font-heading text-2xl lg:text-3xl font-bold leading-none">
                TALHA.SAJJAD
              </h1>
              <p className="hidden lg:block font-label text-xs font-semibold tracking-wider mt-1">
                Full Stack Developer
              </p>
              <p className="hidden lg:block font-label text-xs font-semibold tracking-wider">
                Embedded Systems Engineer
              </p>
            </motion.div>

            {/* Center Navigation - Desktop Only */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-label text-sm font-semibold uppercase tracking-wider hover:text-lime transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>

            {/* Right CTA - Desktop */}
            <motion.button
              className="hidden lg:block px-6 py-2 bg-lime text-black border-2 border-black font-label font-bold uppercase text-xs tracking-wider hover:bg-black hover:text-lime transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Hire Me
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggle}
              className="lg:hidden p-2 hover:bg-black/10 rounded transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <Menu size={28} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={close} />

      {/* Navbar Spacer - to prevent content overlap */}
      <div className="h-20 lg:h-24" />
    </>
  );
}
