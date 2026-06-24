import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design system colors
        cream: '#F5EAD7',
        black: '#111111',
        lime: '#7FFF00',
        success: '#16A34A',
        
        // Semantic
        background: '#F5EAD7',
        text: '#111111',
        primary: '#7FFF00',
        secondary: '#111111',
        border: '#111111',
      },
      fontFamily: {
        // Typography stack
        heading: ['var(--font-bebas-neue)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        label: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      fontSize: {
        // Responsive typography
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '50px'],
        '6xl': ['60px', '60px'],
      },
      spacing: {
        // Custom spacing
        gutter: '1rem',
        'gutter-md': '2rem',
        'gutter-lg': '3rem',
      },
      animation: {
        // Smooth animations
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(127, 255, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(127, 255, 0, 0.6)' },
        },
      },
      borderWidth: {
        3: '3px',
      },
      transitionDuration: {
        2000: '2000ms',
      },
    },
  },
  plugins: [],
};

export default config;
