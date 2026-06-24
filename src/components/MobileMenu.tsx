'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = ['About', 'Skills', 'Projects', 'Designs', 'Contact'];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            aria-hidden="true"
          />

          {/* Menu Drawer */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 bg-cream border-b-2 border-black z-50 lg:hidden"
          >
            <div className="container-custom py-4">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-2xl font-bold">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-black/10 rounded transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <motion.nav
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="space-y-4"
              >
                {menuItems.map((item) => (
                  <motion.a
                    key={item}
                    variants={fadeIn}
                    href={`#${item.toLowerCase()}`}
                    onClick={onClose}
                    className="block text-lg font-label uppercase font-semibold tracking-wider hover:text-lime transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.nav>

              {/* Mobile CTA Button */}
              <motion.button
                variants={fadeIn}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.3 }}
                className="w-full mt-8 px-6 py-3 bg-black text-cream border-2 border-black font-label font-bold uppercase text-sm tracking-wider hover:bg-lime hover:text-black transition-colors"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
