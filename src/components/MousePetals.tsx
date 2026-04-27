import { useEffect, useRef } from "react";

const MousePetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createPetal = (x: number, y: number) => {
      const petal = document.createElement("span");
      petal.className = "mouse-petal";

      petal.style.left = `${x}px`;
      petal.style.top = `${y}px`;

      const size = Math.random() * 8 + 6; // BIGGER
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;

      petal.style.transform = `rotate(${Math.random() * 360}deg)`;

      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 1200);
    };

    const handleMove = (e: MouseEvent) => {
      // CREATE MORE PETALS
      createPetal(e.clientX, e.clientY);
      createPetal(e.clientX + 4, e.clientY + 4);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div ref={containerRef} className="mouse-petals-container" />;
};

export default MousePetals;
