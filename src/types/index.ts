/**
 * Component and Data Types
 */

/* Project Type */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  category: 'fullstack' | 'ai' | 'embedded' | 'design';
}

/* Skill Type */
export interface SkillItem {
  name: string;
  level?: 'expert' | 'advanced' | 'intermediate';
}

export interface SkillCategory {
  name: string;
  items: SkillItem[];
}

/* Timeline Type */
export interface TimelineEntry {
  year: number;
  title: string;
  description: string;
  index: number;
}

/* Education Type */
export interface EducationEntry {
  degree: string;
  university: string;
  duration: string;
  status: 'completed' | 'in-progress';
}

/* Design Type */
export interface Design {
  id: string;
  title: string;
  image: string;
  category: string;
  tools: string[];
}

/* Contact Form Type */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/* Component Props */
export interface NavbarProps {}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface HeroSectionProps {}
