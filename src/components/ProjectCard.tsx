import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data';

interface ProjectCardProps {
  project: Project;
  index: number;
  lang: 'zh' | 'en';
  isExpanded: boolean;
  onToggle: () => void;
  key?: string | number;
}

const ProjectCard = ({ project, index, lang, isExpanded, onToggle }: ProjectCardProps) => {
  const isLarge = index === 0;
  
  return (
    <motion.div 
      layout
      whileHover={!isExpanded ? { y: -10 } : {}}
      onClick={onToggle}
      className={`bento-item p-8 flex flex-col justify-between group cursor-pointer transition-all duration-500 ease-in-out ${
        isExpanded 
          ? 'md:col-span-12 md:row-span-2 min-h-[600px] bg-zinc-900 border-accent/50' 
          : isLarge 
            ? 'md:col-span-8 md:row-span-2' 
            : 'md:col-span-4'
      }`}
    >
      <motion.div layout className="space-y-4">
        <div className="flex justify-between items-start">
          <span className="text-[10px] font-mono text-accent font-bold tracking-widest uppercase">{project.time}</span>
          <div className={`w-10 h-10 rounded-full glass-button flex items-center justify-center transition-all ${isExpanded ? 'bg-accent text-white rotate-45' : 'group-hover:bg-accent group-hover:text-white'}`}>
            <ArrowUpRight size={18} />
          </div>
        </div>
        
        <div className="space-y-2">
          <motion.h3 layout className={`font-bold tracking-tighter leading-tight uppercase transition-all duration-500 ${isExpanded ? 'text-4xl md:text-6xl text-accent' : 'text-2xl md:text-3xl'}`}>
            {project.title[lang]}
          </motion.h3>
          <motion.p layout className="text-accent/80 font-mono text-[10px] uppercase tracking-widest">
            {project.subtitle[lang]}
          </motion.p>
        </div>
      </motion.div>

      <div className="mt-8 relative overflow-hidden flex-1 flex flex-col">
        {/* Preview State: Image and Short Description */}
        <motion.div 
          animate={{ opacity: isExpanded ? 0 : 1, y: isExpanded ? -20 : 0 }}
          transition={{ duration: 0.4 }}
          className={isExpanded ? 'pointer-events-none absolute inset-0' : 'space-y-6'}
        >
          <div className="aspect-video rounded-2xl overflow-hidden bg-black/20">
            <img 
              src={project.image || undefined} 
              alt={project.title[lang]} 
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-sm text-white/80 leading-relaxed line-clamp-3">
            {project.intro ? project.intro[lang] : project.description[lang]}
          </p>
        </motion.div>

        {/* Expanded State: Detailed Content */}
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-12 py-8"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-accent uppercase tracking-widest">Description</h4>
                  <p className="text-lg text-white/90 leading-relaxed whitespace-pre-wrap">{project.description[lang]}</p>
                </div>
                
                {project.note && (
                  <div className="p-4 bg-accent/10 border-l-2 border-accent rounded-r-lg">
                    <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-1">Note</p>
                    <p className="text-sm text-white/70 italic">{project.note[lang]}</p>
                  </div>
                )}
                
                {project.details && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono text-accent uppercase tracking-widest">Key Details</h4>
                    <ul className="space-y-3">
                      {project.details[lang].map((detail, i) => (
                        <li key={i} className="flex gap-3 text-sm text-white/70">
                          <span className="text-accent">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                {project.sections && project.sections.map((section) => (
                  <div key={section.id} className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h5 className="font-bold text-accent uppercase tracking-tight">{section.title[lang]}</h5>
                    <p className="text-sm text-white/70 leading-relaxed">{section.content[lang]}</p>
                    {section.images && section.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {section.images.map((img, idx) => (
                          <img key={idx} src={img} alt="" className="rounded-lg w-full h-24 object-cover" referrerPolicy="no-referrer" />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-8 border-t border-white/10">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-[10px] font-mono uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
