import { motion, AnimatePresence } from "framer-motion";
import cherryBlossomPattern from "@/assets/cherry-blossom-pattern.jpg";
import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  const email = import.meta.env.VITE_CONTACT_EMAIL || "your-email@example.com";
  const linkedin = import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com";
  const github = import.meta.env.VITE_GITHUB_URL || "https://github.com";

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">

      {/* ================= HEADER ================= */}
      <header className="absolute top-0 left-0 w-full z-30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          {/* NAVIGATION */}
          <nav className="flex gap-4 text-sm font-semibold tracking-wide">
            {["About Me", "Skills", "Achievements", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item === "About Me" ? "about" : item.toLowerCase()}`}
                className="
                  px-4 py-2 rounded-full
                  text-pink-800/60
                  transition-all duration-300
                  hover:bg-pink-100/50
                  hover:text-pink-500
                  hover:shadow-sm
                  hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.3)]
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">
            {[
              { Icon: Linkedin, href: linkedin },
              { Icon: Github, href: github },
              { Icon: Mail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Portfolio Inquiry&body=Hi Pooja, I came through your portfolio...` }
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="
                  p-2 rounded-full
                  text-pink-500/70
                  transition-all duration-300
                  hover:bg-pink-100/50
                  hover:scale-110 hover:-translate-y-1
                  hover:text-pink-400
                  hover:drop-shadow-[0_0_15px_rgba(244,114,182,0.6)]
                  cursor-pointer
                "
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ================= BACKGROUND ================= */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${cherryBlossomPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.1) saturate(0.85)",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2 }}
      />

      <div
        className="absolute inset-0 z-10"
        style={{
          background: "var(--gradient-sunset)",
          opacity: 0.85,
        }}
      />

      {/* FLOATING AESTHETIC ELEMENTS */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: "100vh" }}
              animate={{
                opacity: [0, 0.4, 0],
                y: "-10vh",
                x: Math.sin(i) * 100,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
              className="absolute text-pink-300"
              style={{ left: `${15 + i * 15}%` }}
            >
              {i % 2 === 0 ? <Heart size={14} fill="currentColor" className="opacity-50" /> : <Sparkles size={16} className="opacity-40" />}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="text-center space-y-8 max-w-3xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* NAME */}
          <h1 className="text-5xl md:text-6xl font-semibold text-gradient-rose tracking-wide">
            POOJA SHREE
          </h1>

          {/* ROLE */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-pink-300/30 rounded-full"></span>
            <p className="text-xl md:text-2xl font-medium text-gradient-accent-pink animate-gradient-x tracking-widest">
              Software Engineer
            </p>
            <span className="h-[1px] w-12 bg-pink-300/30 rounded-full"></span>
          </div>

          <p className="text-pink-500/80 font-medium tracking-wide text-sm md:text-base flex items-center justify-center flex-wrap gap-2">
            <span>UI/UX</span> 
            <span className="text-pink-300/50 text-[10px]">♥</span> 
            <span>AI Engineer</span> 
            <span className="text-pink-300/50 text-[10px]">♥</span> 
            <span>Generative AI</span> 
            <span className="text-pink-300/50 text-[10px]">♥</span> 
            <span>Full Stack Developer</span>
          </p>

          <p className="text-pink-700/60 leading-relaxed max-w-xl mx-auto font-normal text-sm md:text-base pt-2">
            Crafting exceptional digital experiences with modern technologies
            and elegant, innovative solutions.
          </p>

          {/* CENTER ICONS */}
          <div className="flex justify-center gap-6 pt-6">
            {[
              { Icon: Linkedin, href: linkedin },
              { Icon: Github, href: github },
              { Icon: Mail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Portfolio Inquiry&body=Hi Pooja, I came through your portfolio...` }
            ].map(({ Icon, href }, i) => (
              <a 
                key={i}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="
                  p-3 rounded-full
                  transition-all duration-300
                  hover:bg-pink-100/50
                  group
                "
              >
                <Icon
                  className="
                    w-5 h-5
                    text-pink-400/70
                    transition-all duration-300
                    hover:scale-125 hover:-translate-y-1
                    hover:text-pink-400
                    hover:drop-shadow-[0_8px_20px_rgba(244,114,182,0.6)]
                    cursor-pointer
                  "
                />
              </a>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
            <a href="#projects">
              <button className="pink-cta group">
                <Sparkles size={14} className="text-pink-400 group-hover:text-pink-300 transition-colors" />
                View My Work
              </button>
            </a>

            <a href="#contact">
              <button className="pink-cta group">
                <Heart size={14} className="text-pink-400 group-hover:text-pink-300 transition-colors fill-current" />
                Get In Touch
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
