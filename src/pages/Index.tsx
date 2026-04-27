// Index.tsx
import { motion } from 'framer-motion';
import FloatingPetals from '@/components/FloatingPetals';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import MousePetals from "@/components/MousePetals";
import MousePetalsCanvas from "@/components/MousePetalsCanvas";

const Index = () => {
  return (
    <div className="relative">
      <MousePetalsCanvas /> {/* 🌸 GUARANTEED VISIBLE */}
      <FloatingPetals />

      <main className="relative z-10">
        <motion.div
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <HeroSection />
        </motion.div>
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;


