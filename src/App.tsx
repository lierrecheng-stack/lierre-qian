import { useState } from "react";
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
import Admin from './pages/Admin';

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
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img 
              src={globals.heroImage} 
              alt="Lierre Cheng" 
              className="w-full h-full object-cover brightness-90 contrast-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="noise-overlay opacity-10" />
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center p-8 md:p-24 space-y-16 bg-paper relative">
          <div className="noise-overlay opacity-5" />
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 relative z-10"
          >
            <div className="space-y-2">
              <span className="text-accent font-mono text-[10px] tracking-[0.5em] uppercase font-bold">Architectural Designer</span>
              <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-white uppercase leading-[0.85]">
                LIERRE <br /> CHENG
              </h1>
            </div>
            
            <div className="space-y-6 max-w-md">
              <p className="text-white/90 font-light text-xl md:text-2xl leading-tight tracking-tight">
                AI-Driven Spatial Designer
              </p>
              <p className="text-white/40 font-light text-sm md:text-base leading-relaxed tracking-wide">
                Exploring the Intersection of Architecture, Ecology, and Technology
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="relative z-10"
          >
            <button 
              onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-6 text-white/60 hover:text-accent transition-all duration-500"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.5em] font-light">Explore Work ↓</span>
              <div className="relative flex items-center">
                <div className="w-16 h-px bg-white/10 group-hover:bg-accent group-hover:w-32 transition-all duration-700 ease-in-out" />
                <div className="absolute right-0 w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </button>
          </motion.div>

          {/* Bottom Meta Info */}
          <div className="absolute bottom-12 left-8 md:left-24 flex gap-12 opacity-20">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-mono uppercase tracking-widest">Location</span>
              <span className="text-[10px] font-light">Beijing / Global</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-mono uppercase tracking-widest">Year</span>
              <span className="text-[10px] font-light">2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <Section id="about" className="bg-paper min-h-screen flex items-center py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full max-w-[450px] aspect-square bento-item p-6 bg-[#121212]">
              <div className="w-full h-full overflow-hidden rounded-2xl border border-white/5">
                <img 
                  src={globals.aboutImage} 
                  alt="Qian Cheng" 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-12 text-white">
            <div className="space-y-4">
              <h2 className="text-8xl font-bold tracking-tighter text-accent">{t.about.hi}</h2>
              <p className="text-lg font-mono text-[#CCCCCC] tracking-widest uppercase">{t.about.hereIs}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-7xl font-bold tracking-tight leading-tight text-accent">{t.about.nameZh}</h3>
              <h3 className="text-7xl font-bold tracking-tight leading-tight text-accent opacity-50">{t.about.nameEn}</h3>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="label-mono text-accent">{t.about.eduTitle}</h4>
                <div className="space-y-6">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-lg text-white">{edu.school[lang]}</span>
                        <span className="font-mono text-xs text-[#CCCCCC]">{edu.time}</span>
                      </div>
                      <p className="text-sm font-medium text-white/80">{edu.degree[lang]}</p>
                      <p className="text-xs text-[#CCCCCC] leading-relaxed">{edu.details[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="label-mono text-accent">{t.about.honorsTitle}</h4>
                <div className="space-y-2">
                  {HONORS.map((honor, idx) => (
                    <p key={idx} className="text-sm text-white/80">{honor[lang]}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="label-mono text-accent">{t.about.skillsTitle}</h4>
                <div className="grid grid-cols-1 gap-4">
                  {SKILLS.map((skill, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#CCCCCC] w-24 pt-1">{skill.category[lang]}</span>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[11px] font-medium text-white/80">
                            {typeof item === 'string' ? item : item[lang]}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="bg-[#121212] p-6 rounded-2xl space-y-2 border border-white/5">
                  <span className="text-xs font-mono text-[#CCCCCC] uppercase tracking-widest">Instagram</span>
                  <span className="block font-bold text-lg text-white">{t.about.ins}</span>
                </div>
                <div className="bg-[#121212] p-6 rounded-2xl space-y-2 border border-white/5">
                  <span className="text-xs font-mono text-[#CCCCCC] uppercase tracking-widest">Email</span>
                  <div className="space-y-1">
                    <span className="block font-bold text-sm text-white">{t.about.mail}</span>
                    <span className="block font-bold text-sm text-white">{t.about.mail2}</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </Section>

      {/* Internship Section */}
      <Section id="internship" className="bg-paper text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="label-mono text-white/40">{t.internship.label}</span>
            <h2 className="text-4xl font-bold uppercase tracking-tighter text-white">{t.internship.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h3 className="text-3xl font-bold mb-2 text-accent">{INTERNSHIP.company[lang]}</h3>
              <p className="text-[#CCCCCC] mb-4 font-mono text-xs uppercase tracking-widest">{INTERNSHIP.role[lang]}</p>
              <div className="h-px w-12 bg-accent mb-4" />
              <p className="font-mono text-[10px] text-white/30">{INTERNSHIP.time}</p>
            </div>
            <div className="md:col-span-8 space-y-8">
              {INTERNSHIP.details[lang].map((detail, i) => (
                <div key={i} className="group border-b border-white/5 pb-8 last:border-0">
                  <div className="flex gap-6 items-start">
                    <span className="text-accent font-bold text-xl">0{i+1}</span>
                    <p className="text-xl leading-relaxed text-white/90 group-hover:text-accent transition-colors duration-300">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <section id="projects" className="bg-paper py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div className="space-y-4">
              <span className="label-mono">{t.projects.label}</span>
              <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-white">Selected<br />Projects</h2>
            </div>
            <p className="max-w-md text-[#CCCCCC] font-mono text-sm leading-relaxed">
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
      <Section id="works" className="bg-paper text-ink border-t-8 border-accent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col items-center text-center">
            <span className="label-mono mb-4">Portfolio</span>
            <h2 className="text-8xl md:text-[140px] font-bold tracking-tighter uppercase leading-[0.8] hero-title text-accent">CRAFTED<br />WORKS</h2>
            <div className="mt-8 vertical-text text-[10px] opacity-30">SCROLL TO EXPLORE</div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {works.map((work, i) => (
              <motion.div 
                key={work.id} 
                className="group relative bg-paper border-2 border-ink p-4 shadow-[6px_6px_0px_0px_rgba(10,10,10,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
                onClick={() => navigate(`/work/${work.id}`)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative aspect-square overflow-hidden mb-6 border border-ink">
                  <motion.img 
                    whileTap={{ scale: 1.1 }}
                    src={work.image} 
                    alt={work.title[lang]} 
                    className="w-full h-full object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-accent font-bold uppercase">{work.category[lang]}</span>
                    <h4 className="text-lg font-bold uppercase tracking-tight leading-none group-hover:text-accent transition-colors">{work.title[lang]}</h4>
                  </div>
                  <ArrowUpRight size={24} className="text-accent group-hover:rotate-45 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-accent text-paper py-32 overflow-hidden relative">
        <div className="absolute -bottom-20 -right-20 text-[20vw] font-bold opacity-5 pointer-events-none select-none uppercase tracking-tighter leading-none">Contact</div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="label-mono text-paper/60">{t.contact.label}</span>
                  <div className="h-px flex-1 bg-paper/20" />
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[1.1] md:leading-[1.05] break-words">{t.contact.desc}</h2>
              </div>
              
              <div className="flex flex-wrap gap-12 pt-8">
                <motion.div whileHover={{ y: -5 }} className="group flex flex-col gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-paper/50">Email Me</span>
                  <div className="flex flex-col gap-2">
                    <a href={`mailto:${t.about.mail}`} className="text-xl md:text-2xl font-bold flex items-center gap-3 hover:text-white transition-colors">
                      {t.about.mail}
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <a href={`mailto:${t.about.mail2}`} className="text-xl md:text-2xl font-bold flex items-center gap-3 hover:text-white transition-colors">
                      {t.about.mail2}
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
                <div className="group flex flex-col gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-paper/50">Call Me</span>
                  <span className="text-2xl md:text-3xl font-bold group-hover:text-white transition-colors">15005535009</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-2">
                  {['LinkedIn', 'Behance', 'Instagram', 'GitHub'].map((social) => (
                    <motion.a key={social} href="#" whileHover={{ x: 10 }} className="group flex items-center justify-between py-5 border-b border-paper/10 hover:border-paper/40 transition-all">
                      <span className="text-2xl font-bold uppercase tracking-tight">{social}</span>
                      <div className="w-12 h-12 rounded-full border border-paper/20 flex items-center justify-center group-hover:bg-paper group-hover:text-accent transition-all">
                        <ArrowUpRight size={24} />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-24 space-y-6">
                <div className="flex items-center gap-4 text-paper/60">
                  <MapPin size={16} />
                  <span className="text-xs font-mono uppercase tracking-widest">Beijing, China</span>
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-[10px] opacity-40 uppercase tracking-[0.3em]">© 2026 QIAN CHENG. ALL RIGHTS RESERVED.</p>
                  <p className="font-mono text-[9px] opacity-30 uppercase tracking-[0.2em]">DESIGNED WITH PRECISION / BUILT FOR IMPACT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 px-6 border-t grid-border text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <div className="font-mono text-[10px] opacity-30 uppercase tracking-widest">{t.footer}</div>
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
        <Route path="/admin" element={<Admin />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/work/:id" element={<WorkDetail />} />
      </Routes>
    </Router>
  );
}
