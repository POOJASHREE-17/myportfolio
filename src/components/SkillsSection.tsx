import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Palette, 
  MonitorSmartphone, 
  Coffee, 
  Terminal, 
  Brain, 
  Network, 
  Sparkles, 
  Database, 
  Atom, 
  Cpu 
} from "lucide-react";

const skills = [
  {
    name: "UI/UX Design",
    description: "Designing intuitive and visually stunning user experiences.",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    name: "Full Stack Development",
    description: "Building robust, end-to-end web applications.",
    icon: <MonitorSmartphone className="w-8 h-8" />,
  },
  {
    name: "Java",
    description: "Developing scalable enterprise-grade applications.",
    icon: <Coffee className="w-8 h-8" />,
  },
  {
    name: "Python",
    description: "Scripting, data analysis, and backend logic.",
    icon: <Terminal className="w-8 h-8" />,
  },
  {
    name: "Machine Learning",
    description: "Creating predictive models and intelligent algorithms.",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    name: "Deep Learning",
    description: "Training neural networks for complex pattern recognition.",
    icon: <Network className="w-8 h-8" />,
  },
  {
    name: "Generative AI",
    description: "Harnessing LLMs and generative models for creative solutions.",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    name: "MySQL",
    description: "Designing and managing efficient relational databases.",
    icon: <Database className="w-8 h-8" />,
  },
  {
    name: "React",
    description: "Building dynamic and interactive user interfaces.",
    icon: <Atom className="w-8 h-8" />,
  },
  {
    name: "TensorFlow",
    description: "Building, training, and deploying machine learning models.",
    icon: <Cpu className="w-8 h-8" />,
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Divider */}
      <motion.div
        className="section-divider mb-16"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gradient-rose mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group rounded-2xl p-[1px] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-pink-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-transparent to-pink-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-background/80 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500 dark:bg-pink-400/10 dark:text-pink-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
