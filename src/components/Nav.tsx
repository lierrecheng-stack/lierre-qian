import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Settings } from 'lucide-react';
import { translations } from '../data';

interface NavProps {
  lang: 'zh' | 'en';
  setLang: (l: 'zh' | 'en') => void;
}

const Nav = ({ lang, setLang }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const t = translations[lang].nav;
  const links = [
    { name: t.about, id: "about" },
    { name: t.internship, id: "internship" },
    { name: t.projects, id: "projects" },
    { name: t.works, id: "works" },
    { name: t.contact, id: "contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="glass-card rounded-full px-8 h-16 flex items-center justify-between">
        <div className="font-serif text-xl font-bold tracking-tighter cursor-pointer text-white" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          QIAN.CHENG
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <span key={link.id} onClick={() => scrollTo(link.id)} className="text-[10px] font-mono text-white/70 hover:text-accent transition-colors cursor-pointer uppercase tracking-widest">
              {link.name}
            </span>
          ))}
          <button 
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="font-mono text-[9px] glass-button px-3 py-1 rounded-full text-white"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
          <Link to="/admin" className="text-white/50 hover:text-white transition-colors">
            <Settings size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full glass-card rounded-3xl p-8 flex flex-col gap-6 md:hidden z-50"
          >
            {links.map((link) => (
              <span key={link.id} onClick={() => scrollTo(link.id)} className="text-lg font-mono text-white uppercase tracking-widest">
                {link.name}
              </span>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button 
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="font-mono text-xs glass-button px-4 py-2 rounded-full text-white"
              >
                {lang === 'zh' ? 'ENGLISH' : '中文'}
              </button>
              <Link to="/admin" onClick={() => setIsOpen(false)} className="glass-button p-3 rounded-full text-white/50 hover:text-white">
                <Settings size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
