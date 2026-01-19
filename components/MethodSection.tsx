'use client';

import { motion } from "framer-motion";
import { Brain, Code2, CheckCircle } from "lucide-react";

interface Pole {
    id: string;
    title: string;
    description: string;
    bullets: string[];
}

interface MethodProps {
    data: {
        title: string;
        poles: Pole[];
    };
    title_label: string;
}

export function MethodSection({ data, title_label }: MethodProps) {
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-[95vw] xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-20">
                    <span className="text-[var(--color-brand-blue)] font-bold tracking-widest uppercase text-sm mb-4 block">{title_label}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">{data.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Visual Connector Line (Hidden on mobile) */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                    {data.poles.map((pole, index) => {
                        const Icon = pole.id === 'ai' ? Brain : Code2;
                        const colorClass = pole.id === 'ai' ? 'text-[var(--color-brand-blue)]' : 'text-[var(--color-brand-orange)]';
                        const bgClass = pole.id === 'ai' ? 'bg-[var(--color-brand-blue)]/10' : 'bg-[var(--color-brand-orange)]/10';
                        const borderClass = pole.id === 'ai' ? 'border-[var(--color-brand-blue)]/20' : 'border-[var(--color-brand-orange)]/20';

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`bg-white/5 border ${borderClass} rounded-2xl p-8 lg:p-12 relative overflow-hidden`}
                            >
                                <div className={`w-16 h-16 ${bgClass} rounded-2xl flex items-center justify-center mb-8`}>
                                    <Icon className={`w-8 h-8 ${colorClass}`} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{pole.title}</h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed border-b border-white/5 pb-8">
                                    {pole.description}
                                </p>
                                <ul className="space-y-4">
                                    {pole.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300">
                                            <CheckCircle className={`w-6 h-6 shrink-0 ${colorClass} mt-0.5`} />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
