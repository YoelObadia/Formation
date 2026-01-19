"use client";

import React, { useRef, useEffect } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    parallax: number;
}

const BrainCanvas: React.FC<{ className?: string }> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const config = {
            particleCount: typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 150,
            connectionDistance: 150,
            mouseRadius: 250,
            baseSpeed: 0.15,
            colors: ['#00f7ff', '#0088ff', '#ffffff'],
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const init = () => {
            particles = [];
            for (let i = 0; i < config.particleCount; i++) {
                const size = Math.random() * 2 + 1;
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * config.baseSpeed,
                    vy: (Math.random() - 0.5) * config.baseSpeed,
                    radius: size,
                    color: config.colors[Math.floor(Math.random() * config.colors.length)],
                    parallax: 0.5 + (size / 2)
                });
            }
        };

        const animate = () => {
            // 1. Fond et Illumination (AJUSTÉ)
            if (mouseRef.current.active) {
                const gradient = ctx.createRadialGradient(
                    mouseRef.current.x, mouseRef.current.y, 0,
                    // Rayon du dégradé légèrement réduit pour moins de diffusion
                    mouseRef.current.x, mouseRef.current.y, config.mouseRadius * 1.2
                );

                // --- CHANGEMENT ICI ---
                // Avant : 'rgba(0, 210, 255, 0.12)' (Trop clair et trop fort)
                // Maintenant : Bleu plus profond (100, 200) et opacité divisée par deux (0.06)
                gradient.addColorStop(0, 'rgba(26, 50, 70, 0.06)');

                gradient.addColorStop(1, '#01030a');
                ctx.fillStyle = gradient;
            } else {
                ctx.fillStyle = '#01030a';
            }
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = 'lighter';

            // 2. Mise à jour et Dessin des points (Inchangé)
            particles.forEach((p, i) => {
                p.x += p.vx * p.parallax;
                p.y += p.vy * p.parallax;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.6;
                ctx.fill();

                // 3. Création des liens au Hover (Inchangé)
                if (mouseRef.current.active) {
                    const dxM = mouseRef.current.x - p.x;
                    const dyM = mouseRef.current.y - p.y;
                    const distToMouse = Math.sqrt(dxM * dxM + dyM * dyM);

                    if (distToMouse < config.mouseRadius) {
                        for (let j = i + 1; j < particles.length; j++) {
                            const p2 = particles[j];
                            const dxP = p.x - p2.x;
                            const dyP = p.y - p2.y;
                            const distPoints = Math.sqrt(dxP * dxP + dyP * dyP);

                            if (distPoints < config.connectionDistance) {
                                const proximityPoints = 1 - distPoints / config.connectionDistance;
                                const proximityMouse = 1 - distToMouse / config.mouseRadius;

                                ctx.beginPath();
                                ctx.strokeStyle = p.color;
                                ctx.lineWidth = 0.5;
                                ctx.globalAlpha = proximityPoints * proximityMouse * 0.8;
                                ctx.moveTo(p.x, p.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.stroke();
                            }
                        }
                    }
                }
            });

            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);

        // Mouse Interaction
        const onMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
        };
        const onLeave = () => { mouseRef.current.active = false; };

        // Touch Interaction (Mobile Adaptation)
        const onTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, active: true };
            }
        };
        const onTouchEnd = () => { mouseRef.current.active = false; };

        window.addEventListener('mousemove', onMove);
        window.addEventListener('touchmove', onTouchMove); // Passive by default, won't block scroll
        window.addEventListener('touchstart', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);
        canvas.addEventListener('mouseleave', onLeave);

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchstart', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
            canvas.removeEventListener('mouseleave', onLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 z-0 bg-[#01030a] pointer-events-none ${className}`}
        />
    );
};

export default BrainCanvas;