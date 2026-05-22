import TalentFlow from '../assets/TalentFlow.png';
import VishalInterior from '../assets/Vishal_Interior.png';
import CollegeAdmissionPage from '../assets/College_Admission_page.png';

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
  {
    id: '3',
    title: 'Instagram Growth Analytics',
category: 'Social Media Growth',
desc: 'High-performing organic reach and engagement campaign',
tech: ['Instagram Growth', 'Content Strategy', 'Analytics'],
image: CollegeAdmissionPage,
year: 2026,
overview:
  'A viral social media growth campaign that generated over 26 million views within 90 days through strategic reels content and audience targeting.',
challenge:
  'The goal was to rapidly increase reach, engagement, and non-follower discovery while maintaining strong organic performance and audience retention.',
solution:
'Instagram Solution: We executed a reels-focused Instagram growth strategy using trend-driven content, strong audience targeting, and optimized posting consistency, resulting in massive organic reach, higher engagement, and millions of non-follower impressions within 90 days.',

features: [
  '26M+ views generated in 90 days',
  '5.6M+ accounts reached organically',
  '83.6% traffic from non-followers',
  'Reels-focused viral growth strategy',
  'Performance analytics and trend tracking',
  'Optimized content publishing workflow',
],
    link: '#',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
  id: '4',
  title: 'YouTube Growth Analytics',
  category: 'Social Media Growth',
  desc: 'High-performing video reach and audience growth campaign',
  tech: ['YouTube Growth', 'Video Strategy', 'Analytics'],
  image: CollegeAdmissionPage,
  year: 2026,
  overview:
    'A high-impact YouTube growth campaign focused on increasing video reach, audience retention, and channel visibility through strategic content planning and optimization.',
  challenge:
    'The objective was to scale channel performance, improve watch time, and attract a larger organic audience while maintaining strong engagement across uploaded content.',
  solution:
    'YouTube Solution: We implemented a YouTube content growth strategy centered around high-retention videos, engaging thumbnails, SEO optimization, and consistent uploads, helping boost visibility, audience reach, and long-term organic channel growth across multiple campaigns.',

  features: [
    '20M+ video impressions generated',
    'High-retention content optimization',
    'SEO-focused titles and thumbnails',
    'Strong audience engagement growth',
    'Organic reach and subscriber scaling',
    'Performance tracking and analytics insights',
  ],
  link: '#',
  colSpan: 'md:col-span-1 md:row-span-1',
},
];
