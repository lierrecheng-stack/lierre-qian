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
      whileHover={!isExpanded ? { y: -5, scale: 1.01 } : {}}
      onClick={onToggle}
      className={`bento-item p-8 flex flex-col justify-between group cursor-pointer transition-all duration-500 ease-in-out ${
        isExpanded 
          ? 'md:col-span-12 md:row-span-2 min-h-[600px] bg-card border-accent/20' 
          : isLarge 
            ? 'md:col-span-8 md:row-span-2' 
            : 'md:col-span-4'
      }`}
    >
      {/* Top Section: Time and Arrow */}
      <motion.div layout className="flex justify-between items-start mb-6">
        <span className="text-[10px] font-sans text-accent font-bold tracking-widest uppercase">{project.time}</span>
        <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all ${isExpanded ? 'bg-accent text-white rotate-45' : 'group-hover:bg-accent group-hover:text-white'}`}>
          <ArrowUpRight size={18} />
        </div>
      </motion.div>

      {/* Expanded Title */}
      {isExpanded && (
        <motion.h3 layout className="text-4xl md:text-6xl text-accent font-bold tracking-tight leading-tight uppercase mb-8">
          {project.title[lang]}
        </motion.h3>
      )}

      <div className="relative overflow-hidden flex-1 flex flex-col">
        {/* Preview State: Image -> Tags -> Title -> Intro */}
        {!isExpanded && (
          <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3 flex flex-col h-full"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5">
              <img 
                src={project.image || undefined} 
                alt={project.title[lang]} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-[0.9]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="space-y-2">
              {/* Capsule Tags */}
              <div className="flex items-center gap-2">
                {project.tags.slice(0, 2).map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-white/10 text-white/70 text-[10px] px-3 py-1 rounded-full font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.h3 layout className="text-2xl md:text-3xl text-ink font-bold tracking-tight leading-tight uppercase group-hover:text-accent transition-colors">
                {project.title[lang]}
              </motion.h3>
            </div>

            <p className="text-sm text-ink/70 leading-relaxed line-clamp-3 font-normal mt-auto">
              {project.intro ? project.intro[lang] : project.description[lang]}
            </p>
          </motion.div>
        )}

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
                  <h4 className="text-[10px] font-sans text-accent uppercase tracking-[0.2em] font-bold">Description</h4>
                  <p className="text-lg text-ink/90 leading-relaxed whitespace-pre-wrap font-light">{project.description[lang]}</p>
                </div>
                
                {project.note && (
                  <div className="p-4 bg-accent/5 border-l-2 border-accent rounded-r-lg">
                    <p className="text-[9px] font-sans text-accent uppercase tracking-[0.2em] mb-1 font-bold">Note</p>
                    <p className="text-sm text-ink/60 italic">{project.note[lang]}</p>
                  </div>
                )}
                
                {project.details && (
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-sans text-accent uppercase tracking-[0.2em] font-bold">Key Details</h4>
                    <ul className="space-y-3">
                      {project.details[lang].map((detail, i) => (
                        <li key={i} className="flex gap-3 text-sm text-ink/70 font-light">
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
                  <div key={section.id} className="space-y-4 p-6 bg-white/5 rounded-xl border border-white/5">
                    <h5 className="font-bold text-accent uppercase tracking-tight">{section.title[lang]}</h5>
                    <p className="text-sm text-ink/70 leading-relaxed font-light">{section.content[lang]}</p>
                    {section.images && section.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {section.images.map((img, idx) => (
                          <img key={idx} src={img} alt="" className="rounded-lg w-full h-24 object-cover brightness-[0.9]" referrerPolicy="no-referrer" />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-white/10 text-white/70 text-[10px] px-3 py-1 rounded-full font-medium tracking-wide"
                >
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
