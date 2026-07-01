'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Mail, Github, Linkedin } from 'lucide-react';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      body.append(key, String(value));
    });

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzx9HHdgcX5UCNB57NBXfipF8gMyd5c9Rf2gL4qHi_zMKRg_8Gw6UBOkaKdKzf_2xcBpQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        body,
      });

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-cream text-black py-20 lg:py-32 border-b-2 border-black">
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
            className="font-heading text-5xl lg:text-6xl font-bold mb-4 text-black text-center"
          >
            Let's Build
          </motion.h2>

          <motion.h2
            variants={fadeInUp}
            className="font-heading text-5xl lg:text-6xl font-bold mb-12 text-black text-center"
          >
            Something <span className="text-lime">Meaningful</span>
          </motion.h2>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center"
          >
            <a
              href="mailto:talhasajjad140@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-cream hover:bg-lime hover:text-black transition-colors border-2 border-black font-label font-bold uppercase text-sm tracking-wider"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/talhasajjad140"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-cream hover:bg-lime hover:text-black transition-colors border-2 border-black font-label font-bold uppercase text-sm tracking-wider"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/talha-sajjad-199040251/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-cream hover:bg-lime hover:text-black transition-colors border-2 border-black font-label font-bold uppercase text-sm tracking-wider"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeInUp}
            className="space-y-6 bg-black/2 p-8 lg:p-12 border-2 border-black"
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="font-label text-xs uppercase font-bold tracking-wider block mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-cream border-2 border-black font-body text-base focus:outline-lime focus:outline-offset-0 transition-colors"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="font-label text-xs uppercase font-bold tracking-wider block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-cream border-2 border-black font-body text-base focus:outline-lime focus:outline-offset-0 transition-colors"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="font-label text-xs uppercase font-bold tracking-wider block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={6}
                required
                className="w-full px-4 py-3 bg-cream border-2 border-black font-body text-base focus:outline-lime focus:outline-offset-0 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
              className="w-full px-6 py-3 bg-lime text-black border-2 border-black font-label font-bold uppercase text-sm tracking-wider hover:bg-black hover:text-lime transition-colors"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
              <p className="font-label text-sm font-bold text-green-600 text-center">
                Message sent successfully.
              </p>
            )}

            {status === 'error' && (
              <p className="font-label text-sm font-bold text-red-600 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
