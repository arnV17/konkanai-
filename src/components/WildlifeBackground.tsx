import { useEffect, useRef, useState, createContext, useContext } from "react";

interface WildlifeBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

// Parallax context to share scrollY with children
export const ParallaxContext = createContext<{ scrollY: number }>({ scrollY: 0 });

const WildlifeBackground = ({ children, className = "" }: WildlifeBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Minimal wildlife elements
    const birds: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      flap: number;
      flapSpeed: number;
    }> = [];

    const trees: Array<{
      x: number;
      y: number;
      size: number;
      sway: number;
      swaySpeed: number;
    }> = [];

    const clouds: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
    }> = [];

    // Fewer elements for minimalism
    for (let i = 0; i < 2; i++) {
      birds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.2) + 60,
        vx: (Math.random() - 0.5) * 1.2 + 0.7,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 2,
        flap: 0,
        flapSpeed: Math.random() * 0.15 + 0.08
      });
    }

    for (let i = 0; i < 3; i++) {
      trees.push({
        x: Math.random() * canvas.width,
        y: canvas.height - Math.random() * 60 - 40,
        size: Math.random() * 30 + 40,
        sway: 0,
        swaySpeed: Math.random() * 0.01 + 0.005
      });
    }

    for (let i = 0; i < 5; i++) {
      clouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * 60 + 40,
        size: Math.random() * 40 + 30,
        speed: Math.random() * 0.2 + 0.1
      });
    }

    // Load coconut tree image
    const coconutTreeImg = new window.Image();
    coconutTreeImg.src = '/coconut-tree.png';

    // Animation loop
    let animationId: number;
    let scrollYValue = 0;
    
    // Track scroll position for parallax
    const handleScroll = () => {
      scrollYValue = window.scrollY;
      setScrollY(scrollYValue);
    };
    window.addEventListener('scroll', handleScroll);
    
    const animate = () => {
      // Minimal, soft gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#254a5d"); // Softer blue
      gradient.addColorStop(1, "#2d5016"); // Softer green
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw clouds (lower opacity) with stronger parallax
      clouds.forEach(cloud => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.13)";
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y + scrollYValue * 0.18, cloud.size, 0, Math.PI * 2);
        ctx.arc(cloud.x + cloud.size * 0.5, cloud.y + scrollYValue * 0.18, cloud.size * 0.7, 0, Math.PI * 2);
        ctx.arc(cloud.x - cloud.size * 0.5, cloud.y + scrollYValue * 0.18, cloud.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
        cloud.x += cloud.speed;
        if (cloud.x > canvas.width + cloud.size) {
          cloud.x = -cloud.size;
        }
      });

      // Draw trees (lower opacity, smaller) with stronger parallax
      trees.forEach(tree => {
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.translate(tree.x, tree.y + scrollYValue * 0.32);
        ctx.rotate(Math.sin(tree.sway) * 0.01);
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(-tree.size * 0.1, 0, tree.size * 0.2, tree.size * 0.5);
        ctx.fillStyle = "#2D5016";
        ctx.beginPath();
        ctx.arc(0, -tree.size * 0.2, tree.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        tree.sway += tree.swaySpeed;
      });

      // Draw birds (lower opacity)
      birds.forEach(bird => {
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.translate(bird.x, bird.y);
        ctx.scale(bird.vx > 0 ? 1 : -1, 1);
        ctx.fillStyle = "#2D5016";
        ctx.beginPath();
        ctx.ellipse(0, 0, bird.size, bird.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#1A3F63";
        ctx.beginPath();
        ctx.ellipse(-bird.size * 0.3, Math.sin(bird.flap) * 2, bird.size * 0.6, bird.size * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        bird.x += bird.vx;
        bird.y += bird.vy;
        bird.flap += bird.flapSpeed;
        if (bird.x > canvas.width + bird.size) {
          bird.x = -bird.size;
        } else if (bird.x < -bird.size) {
          bird.x = canvas.width + bird.size;
        }
        if (bird.y < 40 || bird.y > canvas.height * 0.3) {
          bird.vy *= -1;
        }
      });

      // Minimal fireflies
      for (let i = 0; i < 4; i++) {
        const x = (i * 97) % canvas.width;
        const y = (i * 53 + Date.now() * 0.001) % canvas.height;
        const alpha = (Math.sin(Date.now() * 0.001 + i) + 1) * 0.2;
        ctx.fillStyle = `rgba(255, 182, 39, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw coconut tree PNGs (when loaded) with stronger parallax
      const treeWidth = 200;
      const treeHeight = 300;
      if (coconutTreeImg.complete) {
        // Left side - two large trees
        for (let i = 0; i < 2; i++) {
          ctx.save();
          ctx.translate(-40 + i * 60, canvas.height - treeHeight - 20 + i * 15 + scrollYValue * 0.45);
          ctx.drawImage(coconutTreeImg, 0, 0, treeWidth, treeHeight);
          ctx.restore();
        }
        // Right side - two large trees (mirrored)
        for (let i = 0; i < 2; i++) {
          ctx.save();
          ctx.translate(canvas.width - 160 - i * 60, canvas.height - treeHeight - 20 + i * 15 + scrollYValue * 0.45);
          ctx.scale(-1, 1);
          ctx.drawImage(coconutTreeImg, -treeWidth, 0, treeWidth, treeHeight);
          ctx.restore();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <ParallaxContext.Provider value={{ scrollY }}>
      <div className={`relative min-h-screen overflow-hidden ${className}`}>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </ParallaxContext.Provider>
  );
};

export default WildlifeBackground; 