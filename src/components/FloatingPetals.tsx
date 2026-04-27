import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 4,
        size: 0.5 + Math.random() * 1,
      }));
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute opacity-30"
          style={{
            left: `${petal.x}%`,
            width: `${petal.size * 8}px`,
            height: `${petal.size * 8}px`,
          }}
          initial={{
            y: '100vh',
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: '-100px',
            x: 50,
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className="w-full h-full rounded-full bg-primary/40"
            style={{
              background: 'linear-gradient(135deg, hsl(340 75% 88% / 0.6), hsl(340 100% 95% / 0.3))',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPetals;