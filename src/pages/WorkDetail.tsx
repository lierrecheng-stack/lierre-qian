import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { WORKS, translations } from '../data';

const WorkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const workIndex = WORKS.findIndex(w => w.id === id);
  const work = WORKS[workIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentSlide(0);
    
    if (work) {
      const allImages = [
        work.image,
        ...(work.gallery || []),
        ...(work.imageGroups?.flatMap(g => g.images) || []),
        ...(work.waterfallImages || []),
        ...(work.verticalImages || [])
      ];
      
      let loadedCount = 0;
      const totalImages = allImages.length;
      
      if (totalImages === 0) {
        setIsLoaded(true);
        return;
      }

      allImages.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) setIsLoaded(true);
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) setIsLoaded(true);
        };
      });
    }
  }, [id, work]);

  // Auto-play for gallery
  useEffect(() => {
    if (work?.layoutType === 'gallery' && work.gallery && !isFullscreen) {
      const timer = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % work.gallery!.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [work, isFullscreen]);

  if (!work || !isLoaded) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-paper text-ink">
        {!work ? (
          <>
            <h1 className="text-4xl mb-4 font-bold tracking-tight text-accent">Work Not Found</h1>
            <Link to="/#works" className="text-ink/40 hover:text-accent underline font-sans text-[10px] font-bold uppercase tracking-[0.2em]">Back to Portfolio</Link>
          </>
        ) : (
          <div className="space-y-4">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-ink/40">Loading Experience...</p>
          </div>
        )}
      </div>
    );
  }

  const t = translations[lang].workDetail;
  const nextWork = WORKS[(workIndex + 1) % WORKS.length];

  const nextSlide = () => {
    if (work.gallery) {
      setCurrentSlide(prev => (prev + 1) % work.gallery!.length);
    }
  };

  const prevSlide = () => {
    if (work.gallery) {
      setCurrentSlide(prev => (prev - 1 + work.gallery!.length) % work.gallery!.length);
    }
  };

  const getAspectRatioClass = (ratio: string | undefined) => {
    switch (ratio) {
      case '4:3': return 'aspect-[4/3]';
      case '8:3': return 'aspect-[8/3]';
      case 'A3': return 'aspect-[1/1.414]';
      case 'original': return 'h-[80vh] md:h-[90vh]';
      default: return 'aspect-video';
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-white font-sans overflow-hidden flex flex-col">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
      <button
  onClick={() => navigate(-1)}
  className="flex items-center gap-3 text-ink/60 hover:text-accent transition-all pointer-events-auto bg-paper/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/5 shadow-sm"
>
  <ArrowLeft size={16} />
  <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
    Back to Portfolio
  </span>
</button>
        {work.id !== 'utopia' && (
          <div className="text-ink/30 text-[11px] font-bold tracking-[0.2em] uppercase bg-paper/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/5 shadow-sm pointer-events-auto">
            {work.title[lang]}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        {(work.layoutType === 'gallery' || (!work.layoutType && work.gallery)) && work.gallery && work.gallery.length > 0 ? (
          <div className="w-full h-screen flex items-center justify-center overflow-hidden bg-paper">
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${work.id}-${currentSlide}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  src={work.gallery[currentSlide] || ''}
                  alt={`Slide ${currentSlide}`}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Controls */}
              <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <button 
                  onClick={prevSlide} 
                  className="p-5 bg-paper/80 backdrop-blur-xl rounded-full text-ink hover:text-accent hover:scale-110 transition-all duration-300 border border-white/5 shadow-xl"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide} 
                  className="p-5 bg-paper/80 backdrop-blur-xl rounded-full text-ink hover:text-accent hover:scale-110 transition-all duration-300 border border-white/5 shadow-xl"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                {work.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1 transition-all duration-700 rounded-full ${currentSlide === i ? 'w-12 bg-accent' : 'w-3 bg-white/10 hover:bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-screen overflow-y-auto no-scrollbar bg-paper">
            <div className="max-w-7xl mx-auto px-6 py-48 space-y-48">
              {/* Handle Image Groups if they exist (e.g., for 'others') */}
              {work.imageGroups ? (
                work.imageGroups.map((group, groupIdx) => (
                  <div key={groupIdx} className="space-y-16">
                    <div className="space-y-4 border-l-4 border-accent pl-8">
                      <h2 className="text-4xl font-bold tracking-tight uppercase text-accent">{group.title[lang]}</h2>
                      <div className="h-px w-16 bg-accent/40" />
                    </div>
                    
                    {/* Use waterfall for first group, vertical for others as per request */}
                    {groupIdx === 0 ? (
                      <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
                        {group.images.map((img, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="break-inside-avoid rounded-2xl overflow-hidden bg-white/5 group shadow-sm hover:shadow-2xl hover:shadow-white/5 transition-all duration-500"
                          >
                            <img 
                              src={img} 
                              alt="" 
                              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                              referrerPolicy="no-referrer" 
                              loading="lazy"
                            />
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-32">
                        {group.images.map((img, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white/5 group shadow-2xl shadow-white/5"
                          >
                            <img 
                              src={img} 
                              alt="" 
                              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" 
                              referrerPolicy="no-referrer" 
                              loading="lazy"
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <>
                  {/* Waterfall Section (Masonry-like Grid) */}
                  {work.waterfallImages && (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
                      {work.waterfallImages.map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="break-inside-avoid rounded-2xl overflow-hidden bg-white/5 group shadow-sm hover:shadow-2xl hover:shadow-white/5 transition-all duration-500"
                        >
                          <img 
                            src={img} 
                            alt="" 
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                            referrerPolicy="no-referrer" 
                            loading="lazy"
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Vertical Images Section (Large Display) */}
{work.verticalImages && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
    {work.verticalImages.map((img, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        className="overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-white/5 transition-all duration-500"
      >
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </motion.div>
    ))}
  </div>
)}
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default WorkDetail;
