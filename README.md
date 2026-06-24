# Talha Sajjad - Premium Personal Portfolio

A premium personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, Shadcn UI, and Framer Motion.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Bebas Neue, Inter, Space Grotesk)
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
├── sections/            # Page sections
├── data/                # Static data (projects, skills, etc.)
├── types/               # TypeScript interfaces
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── constants/           # Constants and configuration
└── styles/              # Global styles

public/
├── avatar/              # Profile avatar
├── projects/            # Project images
├── designs/             # Design showcase images
└── resume/              # Resume/CV PDF
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Design System

### Colors
- **Background**: #F5EAD7 (Cream)
- **Text**: #111111 (Black)
- **Primary Accent**: #7FFF00 (Lime)
- **Secondary**: #111111 (Black)
- **Border**: #111111 (Black)
- **Success**: #16A34A (Green)

### Typography
- **Headings**: Bebas Neue
- **Body**: Inter
- **Labels**: Space Grotesk

### Breakpoints
- 320px (Mobile)
- 375px (Mobile)
- 768px (Tablet)
- 1024px (Desktop)
- 1440px (Large Desktop)

## Features

- ✅ Mobile-first responsive design
- ✅ No horizontal scrolling
- ✅ Smooth Framer Motion animations
- ✅ Accessible components (WCAG compliant)
- ✅ SEO optimized
- ✅ Image optimization
- ✅ Lazy loading
- ✅ Lighthouse 95+ performance target

## Pages & Sections

- **Hero**: Introduction with floating avatar
- **About**: Personal bio
- **Education**: Timeline education info
- **Skills**: Animated skill cards
- **Projects**: Dynamic project grid
- **Designs**: Design showcase
- **Timeline**: Experience timeline
- **Contact**: Contact form and social links
- **Footer**: Copyright and branding

## Data Management

### Projects
All projects are stored in `src/data/projects.ts` and dynamically rendered. To add a new project:

```typescript
// src/data/projects.ts
export const projects: Project[] = [
  {
    id: 'project-id',
    title: 'Project Title',
    description: 'Project description',
    image: '/projects/image.png',
    technologies: ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    live: 'https://demo.com',
    category: 'fullstack',
  },
];
```

## Performance

- Optimized images with Next.js Image component
- Font loading optimized with `next/font`
- CSS-in-JS minimized with Tailwind
- Code splitting and lazy loading
- Target Lighthouse score: 95+

## Accessibility

- Semantic HTML
- Keyboard navigation
- ARIA labels
- Focus visible states
- High contrast colors
- Reduced motion support

## Deployment

This project is optimized for deployment on **Vercel**.

```bash
# Deploy to Vercel
vercel
```

## License

© 2026 Talha Sajjad. All rights reserved.
