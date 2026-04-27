import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import sih1 from '../assets/sih1.jpeg';
import sih2 from '../assets/sih2.jpeg';
import sih3 from '../assets/sih3.jpeg';
import sih4 from '../assets/sih4.jpeg';
import sih5 from '../assets/sih5.jpeg';

import genai1 from '../assets/genai1.jpeg';
import genai2 from '../assets/genai2.jpeg';
import genai3 from '../assets/genai3.jpeg';
import gen4 from '../assets/gen4.jpeg';
import e1 from '../assets/e1.jpeg';

const sihImages = [
  sih1,
  sih2,
  sih3,
  sih4,
  sih5,
];

const sihCaptions = [
  "Team at SIH Grand Finale",
  "Hackathon Working Session",
  "Project Presentation Round",
  "Prototype Demonstration",
  "Certificate and Valedictory Session"
];

const genaiImages = [
  genai1,
  genai2,
  genai3,
  gen4,
];

const genaiCaptions = [
  "GenAI Spark Winning Moment",
  "Team Presentation",
  "Prototype Demonstration",
  "Prize & Recognition"
];

const trisathonImages = [
  e1,
];

const trisathonCaptions = [
  "Best Innovation Award – Trisathon’25 Hackathon",
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState<'sih' | 'genai' | 'trisathon' | null>(null);

  const activeImages = activeGallery === 'sih' ? sihImages : activeGallery === 'genai' ? genaiImages : activeGallery === 'trisathon' ? trisathonImages : [];
  const activeCaptions = activeGallery === 'sih' ? sihCaptions : activeGallery === 'genai' ? genaiCaptions : activeGallery === 'trisathon' ? trisathonCaptions : [];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      if (e.key === 'Escape') setIsGalleryOpen(false);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, activeImages.length]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === activeImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? activeImages.length - 1 : prev - 1));
  };

  const projects = [
    {
      title: 'Best Innovation Award – Trisathon’25 Hackathon',
      category: 'Hackathon Winner / Deep Learning / Innovation Project',
      shortSummary: 'Best Innovation Deep Learning Prototype',
      description: 'Award-winning applied AI innovation project developed during Trisathon’25 at Erode Sengunthar Engineering College. Secured the Best Innovation Award for an original prototype featuring a Deep Learning model and intelligent system development.',
      tags: ['Deep Learning', 'Python', 'Model Training', 'Data Preprocessing', 'Innovation Prototype', 'AI Solution'],
      contributions: ['Deep Learning Model Training', 'Dataset Preparation and Preprocessing', 'Model Optimization', 'Prototype Development', 'System Workflow / UI-UX Design', 'Testing and Presentation'],
      highlights: ['Award-Winning Innovation Project', 'Prototype Demonstration Completed', 'Recognition for Best Innovation', 'Applied AI Problem Solving'],
      color: 'from-pink-500 to-purple-600',
      galleryType: 'trisathon',
    },
    {
      title: '1st Prize – GenAI Spark Hackathon',
      category: 'Hackathon Winner / Generative AI',
      shortSummary: '1st Prize Healthcare AI Prototype',
      description: 'AI-Based Eye Disease Diagnosis System with Deep Learning and RAG.',
      tags: ['Deep Learning', 'RAG', 'Healthcare AI', 'Python', 'Model Training', 'Backend'],
      contributions: ['Model Optimization', 'Dataset Preprocessing', 'Backend Integration', 'Prototype Development'],
      highlights: ['Team: SHREESABARI, Pooja, Vidhya, Sharniga, Suganthan', 'ShellKode Private Limited', '1st Prize Winner'],
      color: 'from-pink-500 to-purple-600',
      galleryType: 'genai',
    },
    {
      title: 'Smart Criminal Monitoring System – SIH 2024',
      category: 'Hackathon Project / AI & Computer Vision',
      shortSummary: 'National Face Recognition Hackathon Project',
      description: 'Face Recognition, Deep Learning, Roboflow, UI/UX, Web App.',
      tags: ['Face Recognition', 'Deep Learning', 'Roboflow', 'UI/UX', 'Web App'],
      contributions: ['Model Training', 'Roboflow Dataset Work', 'UI/UX Design', 'Prototype Development'],
      highlights: ['SIH Grand Finale', 'National Hackathon Finalist'],
      color: 'from-pink-500 to-purple-600',
      galleryType: 'sih',
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section ref={ref} id="achievements" className="py-20 px-6 bg-muted/30">
      {/* Section Divider */}
      <motion.div
        className="section-divider mb-16"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-rose mb-4">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for beautiful, functional design
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group cursor-pointer ${
                project.galleryType 
                  ? "rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]" 
                  : ""
              }`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                if (project.galleryType) {
                  setCurrentImageIndex(0);
                  setActiveGallery(project.galleryType as 'sih' | 'genai' | 'trisathon');
                  setIsGalleryOpen(true);
                }
              }}
            >
              <div className={`sakura-card flex flex-col h-full ${project.galleryType ? "bg-background/90 border-pink-500/30" : ""}`}>
                {/* Project Image Placeholder */}
                <div className={`w-full h-48 flex-shrink-0 rounded-xl bg-gradient-to-br ${project.color} mb-6 relative overflow-hidden`}>
                  {project.galleryType === 'sih' ? (
                    <motion.img 
                      src={sihImages[0]}
                      alt="SIH 2024 Cover"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : project.galleryType === 'genai' ? (
                    <motion.img 
                      src={genaiImages[0]}
                      alt="GenAI Spark Cover"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : project.galleryType === 'trisathon' ? (
                    <motion.img 
                      src={trisathonImages[0]}
                      alt="Trisathon'25 Cover"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <motion.div
                      className="absolute inset-0 bg-white/10 transition-transform duration-500 group-hover:scale-110"
                      initial={{ scale: 1 }}
                    />
                  )}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-xl line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {/* @ts-ignore */}
                    {project.shortSummary || project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>

      {/* Fullscreen Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8">
          <button 
            className="absolute top-4 right-4 z-50 text-white/70 hover:text-white transition p-2 bg-white/10 rounded-full hover:bg-white/20"
            onClick={() => setIsGalleryOpen(false)}
          >
            <X size={28} />
          </button>

          <div className="w-full max-w-7xl h-full max-h-[90vh] flex flex-col md:flex-row bg-background/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
            
            {/* Left Side (Image Gallery) - 70% */}
            <div className="w-full md:w-[70%] h-1/2 md:h-full flex flex-col items-center justify-center relative bg-black/40 p-4">
              <div className="relative w-full flex-grow flex items-center justify-center min-h-0">
                <button 
                  className="absolute left-4 z-10 text-white/70 hover:text-white transition p-3 bg-black/50 rounded-full hover:bg-black/80"
                  onClick={handlePrev}
                >
                  <ChevronLeft size={32} />
                </button>

                <motion.div 
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center p-4"
                >
                  <img 
                    src={activeImages[currentImageIndex]} 
                    alt={`Project Gallery Image ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
                  />
                  <div className="absolute bottom-6 inset-x-0 mx-auto w-max max-w-[80%] bg-black/60 text-white px-4 py-2 rounded-full text-center backdrop-blur-sm shadow-lg">
                    <p className="text-sm md:text-base font-medium">{activeCaptions[currentImageIndex]}</p>
                  </div>
                </motion.div>

                <button 
                  className="absolute right-4 z-10 text-white/70 hover:text-white transition p-3 bg-black/50 rounded-full hover:bg-black/80"
                  onClick={handleNext}
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4 overflow-x-auto w-full max-w-2xl px-4 py-2 custom-scrollbar">
                {activeImages.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-20 h-14 flex-shrink-0 rounded-md overflow-hidden transition-all duration-300 ${
                      currentImageIndex === idx ? 'ring-2 ring-pink-500 scale-105 opacity-100' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={src} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side (Project Details) - 30% */}
            <div className="w-full md:w-[30%] h-1/2 md:h-full overflow-y-auto bg-card/60 backdrop-blur-xl border-t md:border-t-0 md:border-l border-white/5 p-6 md:p-8 custom-scrollbar">
              {(() => {
                const project = projects.find(p => p.galleryType === activeGallery);
                if (!project) return null;

                return (
                  <div className="flex flex-col h-full text-left">
                    <div className="mb-6">
                      <span className="text-xs font-bold text-pink-600 bg-pink-100 px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mt-4 leading-tight">
                        {project.title}
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2"></span>
                          About the Project
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {project.description || project.shortSummary}
                        </p>
                      </div>

                      {project.galleryType === 'sih' && (
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2"></span>
                            Problem Statement
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            SIH1788 - Developing an AI-powered Smart Criminal Monitoring System for law enforcement using advanced computer vision techniques.
                          </p>
                        </div>
                      )}

                      {project.galleryType === 'genai' && (
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2"></span>
                            Achievement
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Secured 1st Prize at GenAI Spark. Organized in collaboration with ShellKode Private Limited.
                          </p>
                        </div>
                      )}

                      {project.galleryType === 'trisathon' && (
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2"></span>
                            Achievement
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            🏆 Best Innovation Award Winner<br/>
                            📍 Trisathon’25 Hackathon<br/>
                            🏫 Erode Sengunthar Engineering College
                          </p>
                        </div>
                      )}

                      {project.tags && (
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2"></span>
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                              <span key={tag} className="text-xs font-medium text-pink-700 bg-pink-50 px-2.5 py-1 rounded-md border border-pink-300">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.contributions && (
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2"></span>
                            My Contributions
                          </h4>
                          <ul className="space-y-1.5">
                            {project.contributions.map((item, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                <span className="text-pink-500 mr-2 mt-0.5">▹</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.highlights && (
                        <div>
                          <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2"></span>
                            Team & Highlights
                          </h4>
                          <ul className="space-y-1.5">
                            {project.highlights.map((item, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                <span className="text-pink-500 mr-2 mt-0.5">▹</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;