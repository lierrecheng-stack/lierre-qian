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
        <h1 className="text-4xl mb-4 hero-title text-accent">Project Not Found</h1>
        <Link to="/#works" className="text-ink/60 hover:text-accent underline font-mono text-xs uppercase tracking-widest">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-paper">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-paper/80 backdrop-blur-md border-b grid-border">
        <Link to="/#works" className="flex items-center gap-2 hover:text-accent transition-colors">
          <ArrowLeft size={16} />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Back to Portfolio</span>
        </Link>
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="font-mono text-[10px] font-bold border-2 border-ink px-4 py-1 hover:bg-accent hover:text-paper hover:border-accent transition-all"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="h-[90vh] relative overflow-hidden flex items-end border-b-8 border-accent">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <motion.img 
            whileTap={{ scale: 1.05 }}
            src={p.heroImage} 
            alt={p.title[lang]} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="label-mono text-accent mb-4 block">Case Study / {p.id.toUpperCase()}</span>
            <h1 className="text-6xl md:text-[10vw] text-paper font-bold leading-[0.8] tracking-tighter mb-12 hero-title uppercase">
              {p.title[lang]}
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-paper/20 pt-12"
          >
            <div>
              <span className="label-mono text-paper/40 block mb-2">Role</span>
              <span className="text-paper text-xs font-bold uppercase tracking-widest">{p.subtitle[lang]}</span>
            </div>
            <div>
              <span className="label-mono text-paper/40 block mb-2">Year</span>
              <span className="text-paper text-xs font-bold uppercase tracking-widest">{p.time}</span>
            </div>
            <div>
              <span className="label-mono text-paper/40 block mb-2">Category</span>
              <span className="text-paper text-xs font-bold uppercase tracking-widest">{p.tags[0]}</span>
            </div>
            <div>
              <span className="label-mono text-paper/40 block mb-2">Location</span>
              <span className="text-paper text-xs font-bold uppercase tracking-widest">Beijing</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 right-12 vertical-text text-paper/10 text-[120px] pointer-events-none">
          PROJECT
        </div>
      </header>

      {/* Overview Section */}
      <section className="py-32 bg-paper">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="label-mono text-accent">Overview</span>
              <div className="h-px flex-1 bg-accent/20" />
            </div>
            <p className="text-2xl md:text-3xl text-ink leading-relaxed font-medium whitespace-pre-wrap">
              {p.description[lang]}
            </p>
            {p.note && (
              <div className="p-6 bg-accent/5 border-l-4 border-accent rounded-r-xl">
                <p className="text-sm font-mono text-accent uppercase tracking-widest mb-2">Note</p>
                <p className="text-ink/70 italic">{p.note[lang]}</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="py-40 space-y-60">
        {p.sections?.map((section, idx) => (
          <section key={section.id} className="max-w-7xl mx-auto px-6 md:px-12 relative">
            <div className="grid md:grid-cols-12 gap-24 items-start">
              <div className="md:col-span-4 sticky top-40">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-accent font-bold text-4xl">0{idx + 1}</span>
                    <div className="h-px flex-1 bg-accent/20" />
                  </div>
                  <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8 leading-none">{section.title[lang]}</h2>
                  <p className="text-lg text-ink/80 leading-relaxed border-l-4 border-accent pl-6 italic">
                    {section.content[lang]}
                  </p>
                </motion.div>
              </div>
              
              <div className="md:col-span-8 space-y-24">
                {section.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileTap={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group overflow-hidden bg-zinc-100 border-2 border-ink shadow-[16px_16px_0px_0px_rgba(10,10,10,1)]"
                  >
                    <img 
                      src={img} 
                      alt={`${section.id}-${i}`} 
                      className="w-full h-auto object-cover transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 vertical-text text-[10px] text-accent font-bold">
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
        <section className="bg-ink text-paper py-60 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 flex items-center justify-center">
            <h2 className="text-[30vw] font-bold uppercase hero-title">AZUKI</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-6 relative z-10"
          >
            <span className="label-mono text-accent mb-8 block">Final Thoughts</span>
            <p className="text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tighter italic">
              {p.closing[lang]}
            </p>
            <div className="mt-12 h-px w-24 bg-accent mx-auto" />
          </motion.div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-40 bg-paper text-center border-t-8 border-accent">
        <Link to="/#works" className="group inline-flex flex-col items-center gap-8">
          <span className="label-mono text-accent">Next Step</span>
          <h3 className="text-6xl md:text-[120px] font-bold tracking-[ -0.05em] leading-[0.8] hero-title text-ink hover:text-accent transition-colors uppercase">
            BACK TO<br />PORTFOLIO
          </h3>
          <ArrowLeft size={48} className="text-accent group-hover:-translate-x-4 transition-transform mt-8" />
        </Link>
      </footer>
    </div>
  );
};

export default ProjectDetail;
