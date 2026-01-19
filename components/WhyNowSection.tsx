'use client';

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface WhyNowProps {
    data: {
        title: string;
        intro: string;
        bullets: string[];
    };
    title_label: string;
}

export function WhyNowSection({ data, title_label }: WhyNowProps) {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-brand-orange)] font-bold tracking-widest uppercase text-sm mb-4 block">{title_label}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{data.title}</h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">{data.intro}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.bullets.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-[var(--color-brand-blue)]/50 transition-colors"
                        >
                            <div className="bg-[var(--color-brand-blue)]/20 p-2 rounded-lg shrink-0">
                                <Check className="w-5 h-5 text-[var(--color-brand-blue)]" />
                            </div>
                            <p className="text-gray-200 text-lg">{item}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
