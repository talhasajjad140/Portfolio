import { SkillCategory } from '@/types';

export const skills: SkillCategory[] = [
  {
    name: 'Programming & Systems',
    items: [
      { name: 'Python', level: 'expert' },
      { name: 'C++', level: 'advanced' },
      { name: 'Embedded Systems', level: 'advanced' },
      { name: 'Hardware Integration', level: 'intermediate' },
    ],
  },
  {
    name: 'Web Development',
    items: [
      { name: 'React', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'Django', level: 'advanced' },
      { name: 'Flask', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
    ],
  },
  {
    name: 'Artificial Intelligence',
    items: [
      { name: 'Prompt Engineering', level: 'expert' },
      { name: 'LLM Integration', level: 'advanced' },
      { name: 'AI Automation', level: 'advanced' },
    ],
  },
  {
    name: 'Tools',
    items: [
      { name: 'Git & GitHub', level: 'expert' },
      { name: 'VS Code', level: 'expert' },
      { name: 'Arduino', level: 'advanced' },
      { name: 'Figma', level: 'intermediate' },
      { name: 'Photoshop', level: 'intermediate' },
      { name: 'Claude AI', level: 'expert' },
    ],
  },
];
