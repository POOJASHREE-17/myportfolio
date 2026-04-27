import { useEffect, useRef } from "react";

const MousePetalsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const petals: any[] = [];

    const addPetal = (x: number, y: number) => {
      petals.push({
        x: x + (Math.random() - 0.5) * 12, // spread petals
        y: y + (Math.random() - 0.5) * 12,
        size: Math.random() * 3 + 4,
        alpha: 0.6,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.6 - 0.2,
        rotate: Math.random() * Math.PI,
      });
    };

    const mouseMove = (e: MouseEvent) => {
      const now = performance.now();

      // 🌸 spawn max 1 petal every 30ms
      if (now - lastSpawnRef.current > 30) {
        addPetal(e.clientX, e.clientY);
        lastSpawnRef.current = now;
      }
    };

    window.addEventListener("mousemove", mouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = petals.length - 1; i >= 0; i--) {
        const p = petals[i];

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;

        if (p.alpha <= 0) {
          petals.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotate);

        ctx.fillStyle = "rgba(255, 182, 193, 1)";
        ctx.shadowColor = "rgba(255, 182, 193, 0.4)";
        ctx.shadowBlur = 4;

        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 8,
      }}
    />
  );
};

export default MousePetalsCanvas;
