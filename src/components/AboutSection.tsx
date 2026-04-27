import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profilePic from "@/assets/profilepic.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Divider */}
      <motion.div
        className="section-divider mb-16"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-rose mb-4">
            About Me
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <motion.div variants={cardVariants} className="sakura-card">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I am a{" "}
                <span className="font-medium text-foreground">
                  passionate Computer Science and Engineering student
                </span>{" "}
                at{" "}
                <span className="font-medium text-foreground">
                  Nandha Engineering College
                </span>
                .
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I have strong knowledge in{" "}
                <span className="font-medium text-foreground">
                  Machine Learning, Deep Learning, Full Stack Development, and
                  Generative AI
                </span>
                , focused on building intuitive, responsive, and user-centered
                digital experiences using modern technologies.
              </p>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={cardVariants}
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={profilePic}
                alt="Pooja Shree"
                className="w-[320px] h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating Sakura Accent */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-sakura opacity-60"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
