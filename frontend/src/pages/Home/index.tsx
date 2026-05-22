import { useEffect } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import WorkflowSection from './WorkflowSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import ProjectsSection from './ProjectsSection';
import StatsSection from './StatsSection';
// import SocialGrowthSection from './SocialGrowthSection';
import TeamSection from './TeamSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';



export default function Home({ initialSection }: { initialSection?: string }) {
  useEffect(() => {
    if (!initialSection) return;

    // small delay to allow layout and smooth-scroll libraries to initialize
    const t = setTimeout(() => {
      const el = document.getElementById(initialSection);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (initialSection === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);

    return () => clearTimeout(t);
  }, [initialSection]);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <div id="home"><HeroSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="workflow"><WorkflowSection /></div>
      <div id="why-choose-us"><WhyChooseUsSection /></div>
      <div id="projects"><ProjectsSection /></div>
      <div id="stats"><StatsSection /></div>
      {/* <div id="social-growth"><SocialGrowthSection /></div> */}
      <div id="team"><TeamSection /></div>
      <div id="testimonials"><TestimonialsSection /></div>
      <div id="faq"><FAQSection /></div>
      <div id="contact"><ContactSection /></div>
    </div>
  );
}
