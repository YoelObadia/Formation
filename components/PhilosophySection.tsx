'use client';

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface PhilosophyProps {
    data: {
        quote: string;
        author: string;
    }
}

export function PhilosophySection({ data }: PhilosophyProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center py-24 bg-[#020817]/50 border-y border-white/5 relative overflow-hidden">

            <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none" />

            <div className="w-full max-w-[95vw] xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Quote className="h-16 w-16 text-[var(--color-brand-blue)]/50 mx-auto mb-8" />
                        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white/90 italic">
                            "{data.quote}"
                        </blockquote>
                        <p className="mt-12 text-xl text-[var(--color-brand-orange)] font-medium animate-pulse">
                            — {data.author}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
