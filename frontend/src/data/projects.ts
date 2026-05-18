import TalentFlow from '../assets/TalentFlow.png';
import VishalInterior from '../assets/Vishal_Interior.png';

export type Project = {
  id: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  image?: string;
  year: number;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  link?: string;
  colSpan?: string;
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Vishal Interior',
    category: 'Web Development',
    desc: 'High-speed e-commerce platform',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: VishalInterior,
    year: 2025,
    overview:
      'An enterprise-grade automation dashboard built to streamline data processing, generate predictive insights, and manage complex team workflows with an intuitive, cinematic UI.',
    challenge:
      'The client needed a modern and fast online presence that could handle product showcases, lead generation, and dynamic content without sacrificing performance.',
    solution:
      'We delivered a responsive frontend with performant animations, an easy-to-update project CMS, and a polished design system that reflects the brand’s premium interior styling.',
    features: [
      'Responsive design for desktop and mobile',
      'Fast image loading with optimized assets',
      'Cinematic UI interactions',
      'Clear product and service sections',
    ],
    link: '#',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: '2',
    title: 'Talent Flow',
    category: 'Web Development',
    desc: 'Cinematic corporate site',
    tech: ['Vue', 'GSAP', 'Tailwind CSS'],
    image: TalentFlow,
    year: 2024,
    overview:
      'A storytelling-led corporate website built to highlight talent-driven services through motion, case studies, and immersive visual presentation.',
    challenge:
      'The existing brand site lacked visual coherence and failed to communicate service value effectively across devices.',
    solution:
      'We crafted a fluid narrative experience with animated content sections, bold typography, and a streamlined inquiry flow for prospective clients.',
    features: [
      'Animated page transitions',
      'Engaging project case study layout',
      'Clear calls to action',
      'Modern brand-first aesthetic',
    ],
    link: '#',
    colSpan: 'md:col-span-2 md:row-span-1',
  },
];
