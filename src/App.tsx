import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin
} from "lucide-react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import { 
  Project, 
  Work, 
  translations, 
  EDUCATION, 
  HONORS,
  SKILLS, 
  INTERNSHIP, 
  PROJECTS, 
  WORKS 
} from './data';

import Nav from './components/Nav';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './pages/ProjectDetail';
import WorkDetail from './pages/WorkDetail';

// --- Portfolio Component ---
function Portfolio() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [works] = useState<Work[]>(WORKS);
  const [projects] = useState<Project[]>(PROJECTS);
  const [globals] = useState<any>({
    heroImage: "/images/home/ID.jpg",
    aboutImage: "/images/about/about.jpg"
  });
  const navigate = useNavigate();
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const t = translations[lang];

  const { scrollY } = useScroll();

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Nav lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <header className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-paper">
        {/* Left Column: Image */}
        <div className="relative h-[60vh] md:h-screen overflow-hidden border-r border-white/5">
          <motion.div 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img 
              src={globals.heroImage} 
              alt="Lierre Cheng" 
              className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center p-8 md:p-24 space-y-16 bg-paper relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 relative z-10"
          >
            <div className="space-y-2">
              <span className="text-accent font-sans text-[11px] tracking-[0.4em] uppercase font-bold">Architectural Designer</span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-ink uppercase leading-[0.9]">
                LIERRE <br /> CHENG
              </h1>
            </div>
            
            <div className="space-y-6 max-w-md">
              <p className="text-ink/80 font-medium text-xl md:text-2xl leading-tight tracking-tight">
                AI-Driven Spatial Designer
              </p>
              <p className="text-ink/50 font-normal text-sm md:text-base leading-relaxed tracking-wide">
                Exploring the Intersection of Architecture, Ecology, and Technology
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative z-10"
          >
            <button 
              onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-6 text-ink/40 hover:text-accent transition-all duration-500"
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold">Explore Work ↓</span>
              <div className="relative flex items-center">
                <div className="w-12 h-px bg-white/10 group-hover:bg-accent group-hover:w-24 transition-all duration-700 ease-in-out" />
              </div>
            </button>
          </motion.div>

          {/* Bottom Meta Info */}
          <div className="absolute bottom-12 left-8 md:left-24 flex gap-12 opacity-30">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-ink/40">Location</span>
              <span className="text-[10px] font-medium text-ink">Beijing / Global</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-ink/40">Year</span>
              <span className="text-[10px] font-medium text-ink">2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <Section id="about" className="bg-paper min-h-screen flex items-center py-48">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-white/5">
              <img 
                src={globals.aboutImage} 
                alt="Lierre Cheng" 
                className="w-full h-full object-cover brightness-[0.9]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="space-y-12 text-ink">
            <div className="space-y-4">
              <h2 className="text-7xl md:text-8xl font-bold tracking-tight text-accent">{t.about.hi}</h2>
              <p className="text-sm font-bold text-ink/40 tracking-[0.3em] uppercase">{t.about.hereIs}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight text-accent">{t.about.nameZh}</h3>
              <h3 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight text-accent">{t.about.nameEn}</h3>
            </div>

            <div className="w-full h-px bg-white/5" />

            <div className="space-y-12">
              <div className="space-y-6">
                <h4 className="label-mono">{t.about.eduTitle}</h4>
                <div className="space-y-8">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-xl text-ink">{edu.school[lang]}</span>
                        <span className="font-sans text-xs font-bold text-ink/30 tracking-wider">{edu.time}</span>
                      </div>
                      <p className="text-base font-medium text-ink/70">{edu.degree[lang]}</p>
                      <p className="text-sm text-ink/40 leading-relaxed font-normal">{edu.details[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="label-mono">{t.about.honorsTitle}</h4>
                <div className="space-y-3">
                  {HONORS.map((honor, idx) => (
                    <p key={idx} className="text-base text-ink/70 font-medium">{honor[lang]}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="label-mono">{t.about.skillsTitle}</h4>
                <div className="grid grid-cols-1 gap-6">
                  {SKILLS.map((skill, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-4 md:items-center">
                      <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-ink/30 w-32">{skill.category[lang]}</span>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <span key={i} className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-medium text-ink/70">
                            {typeof item === 'string' ? item : item[lang]}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="bg-card p-8 rounded-2xl space-y-2 border border-white/5">
                <span className="text-[10px] font-bold text-ink/30 uppercase tracking-widest">Instagram</span>
                <span className="block font-bold text-xl text-ink">{t.about.ins}</span>
              </div>
              <div className="bg-card p-8 rounded-2xl space-y-2 border border-white/5">
                <span className="text-[10px] font-bold text-ink/30 uppercase tracking-widest">Email</span>
                <div className="space-y-1">
                  <span className="block font-bold text-base text-ink">{t.about.mail}</span>
                  <span className="block font-bold text-base text-ink">{t.about.mail2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Internship Section */}
      <Section id="internship" className="bg-paper text-ink py-48">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-24">
            <span className="label-mono">{t.internship.label}</span>
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight text-accent">{t.internship.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4 space-y-6">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-accent leading-tight">{INTERNSHIP.company[lang]}</h3>
                <p className="text-ink/40 font-bold text-xs uppercase tracking-[0.2em]">{INTERNSHIP.role[lang]}</p>
              </div>
              <div className="h-px w-16 bg-accent/30" />
              <p className="font-sans text-xs font-bold text-ink/20 tracking-widest">{INTERNSHIP.time}</p>
            </div>
            <div className="md:col-span-8 space-y-12">
              {INTERNSHIP.details[lang].map((detail, i) => (
                <div key={i} className="group border-b border-white/5 pb-10 last:border-0">
                  <div className="flex gap-8 items-start">
                    <span className="text-accent/20 font-bold text-4xl md:text-5xl leading-none">0{i+1}</span>
                    <p className="text-xl md:text-2xl leading-relaxed text-ink/80 group-hover:text-ink transition-colors duration-300 font-light">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <section id="projects" className="bg-paper py-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
            <div className="space-y-6">
              <span className="label-mono">{t.projects.label}</span>
              <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tight text-accent">Selected<br />Projects</h2>
            </div>
            <p className="max-w-md text-ink/50 font-medium text-base leading-relaxed">
              A collection of architectural and design projects exploring the intersection of space, technology, and human experience.
            </p>
          </div>
          
          <div className="bento-grid">
            {projects.map((project, i) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={i} 
                lang={lang} 
                isExpanded={expandedProjectId === project.id}
                onToggle={() => setExpandedProjectId(expandedProjectId === project.id ? null : project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <Section id="works" className="bg-paper text-ink border-t border-white/5 py-48">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-32 flex flex-col items-center text-center space-y-8">
            <span className="label-mono">Portfolio</span>
            <h2 className="text-7xl md:text-[120px] font-bold tracking-tight uppercase leading-[0.85] text-accent">CRAFTED<br />WORKS</h2>
            <div className="mt-12 vertical-text text-[10px] opacity-20 font-bold tracking-[0.4em]">SCROLL TO EXPLORE</div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {works.map((work, i) => (
              <motion.div 
                key={work.id} 
                className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 cursor-pointer border border-white/5"
                onClick={() => navigate(`/work/${work.id}`)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    src={work.image} 
                    alt={work.title[lang]} 
                    className="w-full h-full object-cover transition-all duration-700 brightness-[0.9]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-8 pt-3 flex justify-between items-end">
                  <div className="flex-1">
                    {/* Capsule Tags */}
                    <div className="flex items-center gap-2 mb-2">
                      {work.tags?.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-white/10 text-white/70 text-[10px] px-3 py-1 rounded-full font-medium tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors">{work.title[lang]}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 ml-4">
                    <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-paper text-ink py-48 overflow-hidden relative border-t border-white/5">
        <div className="absolute -bottom-20 -right-20 text-[20vw] font-bold opacity-[0.02] pointer-events-none select-none uppercase tracking-tighter leading-none">Contact</div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-7 space-y-16">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <span className="label-mono text-ink/30">{t.contact.label}</span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tight leading-[1] text-accent">{t.contact.desc}</h2>
              </div>
              
              <div className="flex flex-wrap gap-16 pt-8">
                <motion.div whileHover={{ y: -5 }} className="group flex flex-col gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/30">Email Me</span>
                  <div className="flex flex-col gap-3">
                    <a href={`mailto:${t.about.mail}`} className="text-2xl md:text-3xl font-bold flex items-center gap-4 hover:text-accent transition-colors">
                      {t.about.mail}
                      <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <a href={`mailto:${t.about.mail2}`} className="text-2xl md:text-3xl font-bold flex items-center gap-4 hover:text-accent transition-colors">
                      {t.about.mail2}
                      <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
                <div className="group flex flex-col gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/30">Call Me</span>
                  <span className="text-3xl md:text-4xl font-bold text-ink">15005535009</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="grid grid-cols-1">
                  {['LinkedIn', 'Behance', 'Instagram', 'GitHub'].map((social) => (
                    <motion.a key={social} href="#" whileHover={{ x: 10 }} className="group flex items-center justify-between py-6 border-b border-white/5 hover:border-accent transition-all">
                      <span className="text-2xl font-bold uppercase tracking-tight text-ink/80 group-hover:text-ink">{social}</span>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500">
                        <ArrowUpRight size={24} />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-32 space-y-8">
                <div className="flex items-center gap-4 text-ink/40">
                  <MapPin size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">Beijing, China</span>
                </div>
                <div className="space-y-3">
                  <p className="font-sans text-[10px] font-bold text-ink/20 uppercase tracking-[0.4em]">© 2026 LIERRE CHENG. ALL RIGHTS RESERVED.</p>
                  <p className="font-sans text-[9px] font-bold text-ink/10 uppercase tracking-[0.3em]">DESIGNED WITH PRECISION / BUILT FOR IMPACT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-24 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="text-[11px] font-bold text-ink/20 uppercase tracking-[0.3em]">{t.footer}</div>
          <div className="text-[10px] text-ink/10 font-medium">© 2026 LIERRE CHENG. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/work/:id" element={<WorkDetail />} />
      </Routes>
    </Router>
  );
}
