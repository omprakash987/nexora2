import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import { Play } from 'lucide-react';
import { projects } from '../../data/projects';

const categories = ['All', 'Web Development', 'Social Media Growth'];

export default function ProjectsSection() {
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All' ? projects : projects.filter(p => p.category === activeCat);

  return (
    <section className="py-32 bg-slate-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-4">Featured Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Premium Case Studies</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCat === cat
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence>
            {filtered.map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden ${project.colSpan}`}
              >
                <Link to={`/projects/${project.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${project.title}`} />
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 " /> */}

                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center "> */}
                  {/* <Play className="text-white fill-white ml-1" size={24} /> */}
                {/* </div> */}

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-brand-orange/20 text-brand-orange rounded-full border border-brand-orange/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs text-slate-400 font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
