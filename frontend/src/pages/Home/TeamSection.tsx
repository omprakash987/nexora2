import { motion } from 'framer-motion';
// import PlaceholderImage from '../../components/ui/PlaceholderImage';
import rishu from '../../assets/rishu.jpeg'
import daksh from '../../assets/daksh2.jpeg'
import om from '../../assets/om.png'

const team = [
  { name: 'Rishu', role: 'Co-Founder', desc: 'Marketing and Sales Director.', image: rishu },
  { name: 'Daksh', role: 'Co-Founder', desc: 'Frontend Developer and UI/UX Designer.', image: daksh },
  { name: 'Om', role: 'Co-Founder', desc: 'Backend Developer and System Architect.', image: om }
];

export default function TeamSection() {
  return (
    <section className="py-32 bg-slate-900 dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Ambient Glow */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-brand-yellow font-semibold tracking-wider uppercase text-sm mb-4">Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet the Founders</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm"
            >
              {/* Hover Spotlight Gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" /> */}

              <div className="h-[400px] w-full relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-t-3xl" />
                {/* <PlaceholderImage className="w-full h-full object-cover border-0 rounded-none bg-slate-800" text="Put Image Here"  /> */}

                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center p-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                  <h4 className="text-brand-orange text-2xl font-bold mb-2">{member.name}</h4>
                  <p className="text-brand-orange font-medium mb-1">{member.role}</p>
                  <p className="text-brand-orange text-sm max-w-xs text-center">{member.desc}</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {/* <p className="text-brand-orange font-medium text-sm mb-1">{member.role}</p> */}
                {/* <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
                // <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"> */}
                  {/* {member.desc} */}
                {/* </p> */}

                {/* <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"> */}
                  {/* <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white bg-brand-orange hover:bg-brand-orange hover:text-white transition-colors font-bold text-xs">
                    X
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center bg-brand-orange  text-white hover:bg-brand-orange hover:text-white transition-colors font-bold text-xs">
                    IN
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:text-white transition-colors font-bold text-xs">
                    GH
                  </a> */}
                {/* </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
