import { useEffect, useRef } from "react";

const COLORS = ['#7c3aed','#a855f7','#ec4899','#06b6d4','#3b82f6','#8b5cf6','#f472b6','#22d3ee'];

function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const N = 180;
    const particles = Array.from({ length: N }, (_, i) => {
      return {
        index: i,
        angle: (i / N) * Math.PI * 2,
        radius: 60 + Math.random() * 180,
        speed: 0.003 + Math.random() * 0.008,
        spiralSpeed: 0.0002 + Math.random() * 0.0005,
        z: Math.random() * 2 - 1,
        zSpeed: (Math.random() - 0.5) * 0.005,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 1 + Math.random() * 2.5,
        opacity: 0.4 + Math.random() * 0.6,
        trail: [],
        trailLen: 12 + Math.floor(Math.random() * 20),
      };
    });

    // Rings
    const rings = [
      { r: 180, speed: 0.003, color: '#7c3aed', angle: 0, tilt: 0, tiltSpeed: 0.002 },
      { r: 220, speed: -0.002, color: '#06b6d4', angle: 1, tilt: 1, tiltSpeed: -0.0015 },
      { r: 140, speed: 0.005, color: '#ec4899', angle: 2, tilt: 0.5, tiltSpeed: 0.003 },
    ];

    function loop() {
      animId = requestAnimationFrame(loop);
      t++;
      ctx.fillStyle = "rgba(10,10,26,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw rings
      rings.forEach(ring => {
        ring.angle += ring.speed;
        ring.tilt += ring.tiltSpeed;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ring.tilt);
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.r, ring.r * 0.35, ring.angle, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color + "40";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });

      // Update + draw particles
      particles.forEach(p => {
        p.angle += p.speed;
        p.radius += Math.sin(t * p.spiralSpeed + p.index) * 0.5;
        p.z += p.zSpeed;
        if (p.z > 1 || p.z < -1) p.zSpeed *= -1;
        if (p.radius > 280 || p.radius < 20) p.speed *= -1;

        const perspective = 0.5 + p.z * 0.5;
        const x = cx + Math.cos(p.angle) * p.radius * perspective;
        const y = cy + Math.sin(p.angle * 0.7 + t * 0.0003) * p.radius * 0.6 * perspective;
        p.trail.unshift({ x, y, size: p.size * perspective });
        if (p.trail.length > p.trailLen) p.trail.pop();

        for (let i = 0; i < p.trail.length - 1; i++) {
          const alpha = (1 - i / p.trail.length) * p.opacity;
          const sz = p.trail[i].size * (1 - i / p.trail.length);
          ctx.beginPath();
          ctx.arc(p.trail[i].x, p.trail[i].y, Math.max(0.1, sz), 0, Math.PI * 2);
          ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, "0");
          ctx.fill();
        }
      });
    }

    loop();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

export default HeroCanvas;