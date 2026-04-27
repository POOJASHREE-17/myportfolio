import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Heart, Sparkles, X } from "lucide-react";

const InteractiveEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setIsOpen(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-20 mb-32 h-[500px] flex justify-center items-center perspective-1000">
      
      {/* Floating Elements (Petals when closed, Sparkles when open) */}
      <AnimatePresence>
        {!isSent && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`float-${i}`}
                initial={{ opacity: 0, y: 50, scale: 0 }}
                animate={{ 
                  opacity: [0, isOpen ? 1 : 0.6, 0], 
                  y: isOpen ? -200 - Math.random() * 100 : -50 - Math.random() * 50,
                  x: (Math.random() - 0.5) * (isOpen ? 200 : 300),
                  scale: [0, 1, 0.5],
                  rotate: Math.random() * 180
                }}
                transition={{ duration: 3 + Math.random(), repeat: Infinity, delay: i * 0.4 }}
                className="absolute text-pink-300 z-0 top-1/2 pointer-events-none"
              >
                {isOpen ? (
                  i % 2 === 0 ? <Sparkles size={16} fill="currentColor" /> : <Heart size={12} fill="currentColor" />
                ) : (
                  <Heart size={14} className="text-pink-200/50 fill-pink-200/50" />
                )}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* CLICKABLE ENVELOPE CONTAINER */}
      <div className="relative w-full max-w-[400px] flex flex-col items-center group z-20">
        
        {/* ENVELOPE GROUP */}
        <motion.div
          animate={
            isOpen 
              ? { opacity: 0, scale: 0.9, y: 50, pointerEvents: "none" } 
              : { opacity: 1, scale: 1, y: 0, pointerEvents: "auto" }
          }
          whileHover={!isOpen ? { y: -8, scale: 1.02 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-[260px] cursor-pointer"
          onClick={() => !isOpen && setIsOpen(true)}
        >
          {/* Envelope Back */}
          <div className="absolute inset-0 bg-[#fdfaf8] rounded-xl border border-pink-200/60 shadow-[0_15px_30px_rgba(244,114,182,0.15)] group-hover:shadow-[0_25px_50px_rgba(244,114,182,0.25)] transition-shadow duration-500 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />
            {/* Cute Corner Emboss Details */}
            <Heart size={16} className="absolute top-4 left-4 text-pink-200/40" />
            <Heart size={16} className="absolute top-4 right-4 text-pink-200/40" />
          </div>

          {/* Envelope Front Pocket */}
          <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-xl">
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[200px] border-l-pink-50 border-t-[130px] border-t-transparent border-b-[130px] border-b-pink-50 drop-shadow-[2px_0_4px_rgba(0,0,0,0.05)]" />
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[200px] border-r-pink-50 border-t-[130px] border-t-transparent border-b-[130px] border-b-pink-50 drop-shadow-[-2px_0_4px_rgba(0,0,0,0.05)]" />
            <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-pink-100/30 to-transparent" />
          </div>

          {/* Envelope Flap */}
          <motion.div
            animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "top", transformStyle: "preserve-3d" }}
            className="absolute top-0 left-0 w-full h-[150px] z-40"
          >
            <div className="w-full h-full relative backface-hidden group-hover:drop-shadow-[0_5px_15px_rgba(236,72,153,0.3)] transition-all duration-300">
               <svg viewBox="0 0 400 150" className="w-full h-full drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]" preserveAspectRatio="none">
                 <path d="M0,0 L400,0 L200,150 Z" fill="#fffcf9" stroke="#fbcfe8" strokeWidth="2" />
               </svg>
               <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex items-center justify-center">
                 <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-[3px] border-pink-100/50 group-hover:shadow-[0_0_20px_rgba(244,114,182,0.6)] group-hover:animate-pulse transition-all duration-300">
                   <Heart size={22} className="text-white fill-white drop-shadow-sm" />
                 </div>
               </div>
            </div>
            <div className="w-full h-full absolute top-0 left-0 rotate-x-180 backface-hidden">
               <svg viewBox="0 0 400 150" className="w-full h-full" preserveAspectRatio="none">
                 <path d="M0,0 L400,0 L200,150 Z" fill="#fdfaf8" stroke="#fbcfe8" strokeWidth="1" />
               </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* OPEN ME TEXT (Only visible when closed) */}
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 pointer-events-none"
          >
            <span className="font-handwriting text-3xl font-bold text-pink-500 drop-shadow-sm tracking-wide">Open Me 💌</span>
          </motion.div>
        )}
      </div>

      {/* THE LETTER (FORM) GROUP */}
      <motion.div
        initial={false}
        animate={isOpen ? { 
          y: 0, 
          scale: 1,
          opacity: 1,
          zIndex: 30
        } : { 
          y: 200,
          scale: 0.8,
          opacity: 0,
          zIndex: 10
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for smooth slide-up
        }}
        className={`absolute w-full max-w-[420px] bg-white rounded-lg shadow-elegant border border-pink-50 min-h-[440px] p-8 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]" />
        
        {/* Close Button */}
        <AnimatePresence>
          {isOpen && !isSent && (
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4 text-pink-300 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all z-50 p-2"
            >
              <X size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isSent ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="relative h-full flex flex-col pt-4"
            >
              <div className="absolute -top-2 -left-2 text-pink-200 opacity-50"><Heart size={14} fill="currentColor"/></div>
              <div className="absolute -bottom-2 -right-2 text-pink-200 opacity-50"><Heart size={14} fill="currentColor"/></div>

              {/* Stamp */}
              <div className="absolute -top-6 right-0 w-14 h-16 border border-dashed border-pink-200 flex flex-col items-center justify-center p-1 rounded-sm rotate-6 bg-pink-50/20">
                <div className="text-[7px] font-bold text-pink-400 uppercase tracking-tighter">Sakura</div>
                <Heart size={12} className="text-pink-300 fill-pink-100 mt-1" />
                <div className="text-[5px] font-medium text-pink-400 mt-1">MAIL</div>
              </div>

              <div className="mb-6 mt-2 text-center">
                <h4 className="font-handwriting text-3xl text-pink-500 mb-1">Write me a note...</h4>
                <div className="w-16 h-0.5 bg-pink-100 rounded-full mx-auto" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 flex-grow relative z-20">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-pink-50/40 border-b-2 border-pink-100 p-2 text-sm focus:outline-none focus:border-pink-300 transition-colors placeholder:text-pink-200 text-gray-700 font-medium rounded-t-md"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-pink-50/40 border-b-2 border-pink-100 p-2 text-sm focus:outline-none focus:border-pink-300 transition-colors placeholder:text-pink-200 text-gray-700 font-medium rounded-t-md"
                  />
                </div>
                <div className="flex-grow">
                  <textarea 
                    placeholder="Your Message" 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full h-full bg-pink-50/40 border-b-2 border-pink-100 p-2 text-sm focus:outline-none focus:border-pink-300 transition-colors placeholder:text-pink-200 text-gray-700 font-medium resize-none rounded-t-md"
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-200 to-pink-300 rounded-xl text-white font-bold text-xs uppercase tracking-widest shadow-soft hover:shadow-glow transition-all flex items-center justify-center gap-2 mt-4"
                >
                  Send Letter <Send size={14} />
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center p-8 relative z-20"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mb-6 shadow-inner"
              >
                <Heart className="text-pink-500 fill-pink-400" size={40} />
              </motion.div>
              <h3 className="font-handwriting text-4xl text-pink-500 mb-3">Sent with love!</h3>
              <p className="text-gray-500 text-sm font-medium mb-6">Your letter is on its way. <br/> I'll get back to you soon 💌</p>
              
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/pooja-shreer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-pink-50 text-pink-500 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-pink-100 transition-colors border border-pink-100"
                >
                  Connect on LinkedIn
                </a>
                <a 
                  href="https://github.com/POOJASHREE-17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors border border-gray-100"
                >
                  View GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        .font-handwriting {
          font-family: 'Dancing Script', cursive;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
      `}</style>
    </div>
  );
};

export default InteractiveEnvelope;
