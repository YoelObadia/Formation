'use client';

import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface InteractiveHeroProps {
    data: {
        title: string;
        subtitle: string;
        cta: string;
    }
}

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    color: string;
    size: number;
    vx: number;
    vy: number;
}

export function InteractiveHero({ data }: InteractiveHeroProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;

        // Visual Customization: Electric Blue Palette
        const colors = ['#ffffff', '#93c5fd', '#3b82f6']; // White, Light Blue, Electric Blue

        const resize = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            // MASSIVE Density Increase (PRESERVED)
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 5000);

            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push({
                    x,
                    y,
                    originX: x,
                    originY: y,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 2 + 1.5,
                    vx: 0,
                    vy: 0
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections (PRESERVED)
            ctx.lineWidth = 1.2;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 190) {
                        const opacity = 1 - distance / 190;
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.7})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw particles (PRESERVED)
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Physics: Mouse attraction
                const dx = mouse.current.x - p.x;
                const dy = mouse.current.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceDistance = 150;
                let force = 0;

                if (distance < forceDistance) {
                    force = (forceDistance - distance) / forceDistance;
                }

                if (distance > 0) {
                    const angle = Math.atan2(dy, dx);
                    const attractionStrength = 2;
                    p.vx += Math.cos(angle) * force * attractionStrength;
                    p.vy += Math.sin(angle) * force * attractionStrength;
                }

                // Physics: Elasticity
                const dxOrigin = p.originX - p.x;
                const dyOrigin = p.originY - p.y;
                const springStrength = 0.05;

                p.vx += dxOrigin * springStrength;
                p.vy += dyOrigin * springStrength;

                // Dampening
                p.vx *= 0.9;
                p.vy *= 0.9;

                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Draw particle
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.current.x = -1000;
            mouse.current.y = -1000;
        }

        window.addEventListener('resize', resize);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="hero" ref={containerRef} className="relative overflow-hidden min-h-screen flex flex-col justify-center bg-black">
            {/* Background Image Base - REVEALED */}
            {/* Increased transparency to 0.8 and brighter to show text - keeping dark ambiance but cleaner */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/hero-bg.webp"
                    alt="AI Background"
                    fill
                    className="object-cover opacity-80 mix-blend-screen contrast-125"
                    priority
                />
            </div>

            {/* Interactive Canvas Overlay */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-10 w-full h-full mix-blend-screen"
            />

            {/* Content Overlay (High Z-Index) */}
            {/* Gradient for readability - Adjusted to clear center */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-[#020817]/60 z-10 pointer-events-none" />

            <div className="w-full max-w-[95vw] xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 relative z-20 flex flex-col items-center text-center pointer-events-none">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl max-w-5xl leading-tight px-4 drop-shadow-2xl"
                >
                    {data.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-lg"
                >
                    {data.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 mx-4 sm:mx-0 w-full sm:w-auto flex justify-center pointer-events-auto"
                >
                    <Button
                        size="lg"
                        className="bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange)]/90 text-white font-bold h-auto py-5 px-10 text-xl shadow-[0_0_30px_-5px_var(--color-brand-orange)] w-full sm:w-auto whitespace-normal text-center leading-tight transition-transform duration-200 hover:scale-105 border border-white/10 backdrop-blur-sm"
                        asChild
                    >
                        <Link href="#lead-form" className="flex items-center justify-center gap-3">
                            <span className="flex-1 sm:flex-none">{data.cta}</span>
                            <ArrowRight className="h-6 w-6 shrink-0" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
