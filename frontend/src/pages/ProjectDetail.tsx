import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();

  const project = useMemo(
    () => projects.find(p => p.id === id),
    [id]
  );

  if (!project) {
    return (
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto min-h-screen">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors mb-12">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        <div className="rounded-3xl bg-slate-100 dark:bg-slate-900 p-12 text-slate-700 dark:text-slate-200">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <p className="text-lg leading-relaxed">The project you’re looking for doesn’t exist yet. Please return to the home page and choose another case study.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors mb-12">
        <ArrowLeft size={20} /> Back to Home
      </Link>

      <div className="mb-16">
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-medium">
          <span className="px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">{project.category}</span>
          <span className="text-slate-500">{project.year}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">{project.title}</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">{project.overview}</p>
      </div>

      <div className="h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-20 relative bg-slate-100 dark:bg-slate-950">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-slate-400">
            Project image coming soon
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="col-span-2 space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Challenge</h3>
            <p>{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Solution</h3>
            <p>{project.solution}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-3">
              {project.features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-8 bg-slate-50 dark:bg-[#1a1a1a] rounded-2xl border border-slate-200 dark:border-white/5">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 border-b border-slate-200 dark:border-white/10 pb-4">Technologies</h4>
            <ul className="space-y-3">
              {project.tech.map(t => (
                <li key={t} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* <a
            href={project.link || '#'}
            target={project.link ? '_blank' : undefined}
            rel={project.link ? 'noreferrer' : undefined}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform ${
              project.link
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-[1.02]'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            Visit Live Site <ArrowUpRight size={20} />
          </a> */}
        </div>
      </div>
    </div>
  );
}
