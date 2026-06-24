import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'pos-system',
    title: 'POS System (FBR Integrated)',
    description: 'Python based POS platform with inventory management and FBR integration for businesses.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'FBR API'],
    image: '/projects/POS-system.png',
    category: 'fullstack',
    github: 'https://github.com/talhasajjad140',
    live: '',
  },
  {
    id: 'Dashboard',
    title: 'NOAA Dashboard',
    description: 'Real-time weather data visualization dashboard using NOAA APIs, built with Python and Plotly.',
    technologies: ['Plotmlib', 'Python', 'AI', 'Data Visualization','Graphs'],
    image: '/projects/NOAA-dashboard.png',
    category: 'ai',
    github: 'https://github.com/talhasajjad',
    live: 'https://dashboard-28.streamlit.app',
  },
  {
    id: 'Thorse',
    title: 'Thorse Clothing store',
    description: 'E-commerce platform for a clothing brand with product management, shopping cart, and payment integration.',
    technologies: ['Shopify', 'HTML', 'AI/LLM', 'CSS', 'Liquid-Shopify'],
    image: '/projects/Thorse-Clothing.png',
    category: 'design',
    github: 'https://github.com/talhasajjad140',
    live: '',
  },
  {
    id: 'spider-robot',
    title: 'Spider Robot',
    description: 'Robotics project focused on locomotion and embedded systems integration with real-time control.',
    technologies: ['C++', 'Arduino', 'Embedded Systems', 'Hardware'],
    image: '/projects/spider-robot.jpg',
    category: 'embedded',
    github: '',
    live: '',
  },
];
