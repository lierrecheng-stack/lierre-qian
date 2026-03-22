import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS, translations } from '../data';

const ProjectDetail = () => {
  const { id } = useParams();
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const p = PROJECTS.find(proj => proj.id === id);

  if (!p) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-paper text-ink">
        <h1 className="text-4xl mb-4 font-bold tracking-tight text-accent">Project Not Found</h1>
        <Link to="/#works" className="text-ink/40 hover:text-accent underline font-sans text-xs uppercase tracking-widest font-bold">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-paper/80 backdrop-blur-md border-b border-white/5">
        <Link to="/#works" className="flex items-center gap-3 hover:text-accent transition-all text-ink/60">
          <ArrowLeft size={16} />
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em]">Back to Portfolio</span>
        </Link>
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="font-sans text-[11px] font-bold border border-white/10 px-6 py-2 rounded-full hover:bg-accent hover:text-white hover:border-accent transition-all"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="h-[90vh] relative overflow-hidden flex items-end">
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img 
            src={p.heroImage} 
            alt={p.title[lang]} 
            className="w-full h-full object-cover brightness-[0.95] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label-mono text-accent mb-6 block">Case Study / {p.id.toUpperCase()}</span>
            <h1 className="text-6xl md:text-[8vw] text-accent font-bold leading-[0.9] tracking-tight mb-16 uppercase">
              {p.title[lang]}
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/20 pt-12"
          >
            <div>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Role</span>
              <span className="text-white text-xs font-bold uppercase tracking-widest leading-relaxed">{p.subtitle[lang]}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Year</span>
              <span className="text-white text-xs font-bold uppercase tracking-widest leading-relaxed">{p.time}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Category</span>
              <span className="text-white text-xs font-bold uppercase tracking-widest leading-relaxed">{p.tags[0]}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Location</span>
              <span className="text-white text-xs font-bold uppercase tracking-widest leading-relaxed">Beijing</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Overview Section */}
      <section className="py-48 bg-paper">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-6">
              <span className="label-mono">Overview</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <p className="text-2xl md:text-4xl text-ink leading-tight font-bold tracking-tight whitespace-pre-wrap">
              {p.description[lang]}
            </p>
            {p.note && (
              <div className="p-10 bg-white/5 border-l-4 border-accent rounded-r-2xl">
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Note</p>
                <p className="text-ink/70 font-medium leading-relaxed italic">{p.note[lang]}</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="py-48 space-y-64">
        {p.sections?.map((section, idx) => (
          <section key={section.id} className="max-w-7xl mx-auto px-6 md:px-12 relative">
            <div className="grid md:grid-cols-12 gap-24 items-start">
              <div className="md:col-span-4 sticky top-48">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-6 mb-12">
                    <span className="text-accent font-bold text-5xl">0{idx + 1}</span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>
                  <h2 className="text-4xl font-bold uppercase tracking-tight mb-12 leading-none text-accent">{section.title[lang]}</h2>
                  <p className="text-xl text-ink/60 leading-relaxed border-l-4 border-accent pl-8 font-medium italic">
                    {section.content[lang]}
                  </p>
                </motion.div>
              </div>
              
              <div className="md:col-span-8 space-y-32">
                {section.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group overflow-hidden rounded-2xl bg-white/5 shadow-sm hover:shadow-2xl hover:shadow-white/5 transition-all duration-700"
                  >
                    <img 
                      src={img} 
                      alt={`${section.id}-${i}`} 
                      className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105 brightness-[0.9]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 right-6 vertical-text text-[10px] text-accent font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      FIGURE 0{idx + 1}-{i + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Closing Statement */}
      {p.closing && (
        <section className="bg-white text-black py-64 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
            <h2 className="text-[30vw] font-bold uppercase tracking-tighter leading-none select-none">AZUKI</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-6 relative z-10"
          >
            <span className="label-mono text-accent mb-12 block">Final Thoughts</span>
            <p className="text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tight italic">
              {p.closing[lang]}
            </p>
            <div className="mt-16 h-px w-32 bg-accent/30 mx-auto" />
          </motion.div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-48 bg-paper text-center border-t border-white/5">
        <Link to="/#works" className="group inline-flex flex-col items-center gap-12">
          <span className="label-mono text-accent">Next Step</span>
          <h3 className="text-6xl md:text-[100px] font-bold tracking-tight leading-[0.85] text-accent group-hover:text-accent transition-colors uppercase">
            BACK TO<br />PORTFOLIO
          </h3>
          <div className="mt-12 w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500">
            <ArrowLeft size={32} className="group-hover:-translate-x-2 transition-transform" />
          </div>
        </Link>
      </footer>
    </div>
  );
};

export default ProjectDetail;
