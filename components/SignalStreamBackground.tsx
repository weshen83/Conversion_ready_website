import React, { useEffect, useRef } from 'react';

export const SignalStreamBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const columns = Math.floor(width / 20);
    const drops: number[] = [];
    const speeds: number[] = [];
    const chars = "01010101XYZA982";

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start above screen
      speeds[i] = Math.random() * 0.5 + 0.5; // Varied speed
    }

    const draw = () => {
      // Trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; // Fade to white (paper theme)
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#10b981'; // Emerald 500
      ctx.font = '10px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 20;
        const y = drops[i] * 20;

        // Randomly skip drawing to make it look sparse/glitchy
        if (Math.random() > 0.95) {
             ctx.globalAlpha = 0.4;
             ctx.fillText(text, x, y);
             ctx.globalAlpha = 1.0;
        }

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
        if(canvas) {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
    />
  );
};