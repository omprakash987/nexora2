import { motion } from 'framer-motion';
import {
  MonitorSmartphone,
  Cpu,
  TrendingUp,
  Sparkles,
  type LucideIcon
} from 'lucide-react';

import { Link } from 'react-router-dom';

type Service = {
  icon: LucideIcon;
  color: string;
  slug: string;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: MonitorSmartphone,
    color: 'text-brand-orange',
    slug: 'website-development',
    title: 'Web/App Development',
    desc: 'High-performance, cinematic, and responsive web experiences built with modern architecture.'
  },
  {
    icon: Cpu,
    color: 'text-brand-yellow',
    slug: 'ai-automation',
    title: 'AI Automation',
    desc: 'Custom AI systems to streamline your operations, save time, and scale your business efficiently.'
  },
  {
    icon: TrendingUp,
    color: 'text-green-400',
    slug: 'social-media-growth',
    title: 'Social Media Growth',
    desc: 'Data-driven strategies to expand your reach, increase engagement, and build authority.'
  },
  {
    icon: Sparkles,
    color: 'text-purple-400',
    slug: 'branding',
    title: 'Branding',
    desc: 'Premium identity design that makes your business unforgettable and builds instant trust.'
  }
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fa] py-32 dark:bg-[#111111]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-orange/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Our Expertise
          </h2>

          <h3 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Premium Services
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((srv, idx) => {
            const Icon = srv.icon;

            return (
              <motion.div
                key={srv.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link
                  to={`/services/${srv.slug}`}
                  className="group relative block rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,122,0,0.1)] dark:border-white/5 dark:bg-[#1a1a1a]"
                >
                  {/* Hover Gradient */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-orange/0 to-brand-orange/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 transition-transform duration-300 group-hover:scale-110 dark:border-white/5 dark:bg-black/50">
                    <Icon size={32} className={srv.color} />
                  </div>

                  {/* Title */}
                  <h4 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                    {srv.title}
                  </h4>

                  {/* Description */}
                  <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                    {srv.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 font-medium text-brand-orange transition-all duration-300 group-hover:gap-3">
                    Learn more
                    <span className="text-lg">→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}