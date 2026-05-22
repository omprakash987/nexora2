import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

type ServiceType = {
  title: string;
  description: string;
  features: string[];
  cta: string;
};

const servicesData: Record<string, ServiceType> = {
  'website-development': {
    title: 'Web / App Development',

    description:
      'High-performance websites and mobile applications built with modern technologies, cinematic UI, and scalable architecture. At Nexora, we create fast, responsive, and immersive digital experiences designed to elevate brands and drive real business growth.',

    features: [
      'Custom UI/UX Design',
      'Responsive Web & Mobile Apps',
      'React / Next.js Development',
      'Modern App Architecture',
      'Framer Motion Animations',
      'SEO & Performance Optimization',
      'API & CMS Integration',
      'Cross-device Responsive Experience',
    ],

    cta:
      'Let’s build powerful web and mobile experiences that help your brand stand out and scale faster.',
  },

  'ai-automation': {
    title: 'AI Automation',

    description:
      'Smart AI-powered automation systems built to streamline operations, reduce manual workload, and improve business efficiency. At Nexora, we create intelligent digital workflows that help brands automate, scale faster, and operate smarter.',

    features: [
      'Custom AI Workflow Automation',
      'AI Chatbots & Virtual Assistants',
      'CRM & API Integrations',
      'Lead Generation Automation',
      'Business Process Optimization',
      'Automated Customer Support',
      'Scalable Automation Systems',
      'Real-time Data & Workflow Management',
    ],

    cta:
      'Let’s build intelligent AI automation systems that simplify workflows, save time, and accelerate your business growth.',
  },

  'social-media-growth': {
    title: 'Social Media Growth',

    description:
      'Data-driven social media strategies designed to maximize reach, engagement, and brand visibility. At Nexora, we help brands grow through viral content strategies, audience targeting, and high-performing digital campaigns.',

    features: [
      'Instagram & YouTube Growth',
      'Viral Reels Strategy',
      'Audience Targeting',
      'Content Optimization',
      'Performance Analytics',
      'Organic Growth Scaling',
      'Trend-based Content Planning',
      'Brand Engagement Strategy',
    ],

    cta:
      'Let’s grow your brand with powerful social media strategies that drive visibility, engagement, and real audience growth.',
  },

  branding: {
    title: 'Branding',

    description:
      'Strategic branding solutions crafted to build strong identities, increase recognition, and create lasting impressions. At Nexora, we design modern brand experiences that connect with audiences and position businesses for long-term growth.',

    features: [
      'Brand Identity Design',
      'Logo & Visual Systems',
      'Brand Strategy',
      'Social Media Brand Assets',
      'Modern Marketing Visuals',
      'Creative Direction',
      'Consistent Design Language',
      'Visual Brand Positioning',
    ],

    cta:
      'Let’s create a powerful brand identity that stands out, builds trust, and leaves a lasting impact.',
  },
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [id]);

  const service = id ? servicesData[id] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-slate-900 dark:text-white">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Back Button */}
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors mb-12"
      >
        <ArrowLeft size={20} />
        Back to Services
      </Link>

      {/* Hero Section */}
      <div className="max-w-4xl mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
          {service.title}
        </h1>

        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Features Card */}
        <div className="bg-slate-50 dark:bg-[#1a1a1a] rounded-3xl p-10 border border-slate-200 dark:border-white/5">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            What You Get
          </h3>

          <ul className="space-y-4">
            {service.features.map((feature: string) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
              >
                <CheckCircle2
                  className="text-brand-orange"
                  size={20}
                />

                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Card */}
        <div className="bg-brand-orange text-white rounded-3xl p-10 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px]" />

          <h3 className="text-3xl font-bold mb-4 relative z-10">
            Start Your Project
          </h3>

          <p className="mb-8 relative z-10 text-white/90">
            {service.cta}
          </p>

          <Link
            to="/contact"
            className="w-fit px-8 py-4 bg-white text-brand-orange font-bold rounded-full hover:scale-105 transition-transform relative z-10"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}