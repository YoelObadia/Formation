'use client';

import { motion } from "framer-motion";
import { Clock, MapPin, Calendar, Target } from "lucide-react";

interface FormatProps {
    data: {
        title: string;
        items: string[];
    };
    title_label: string;
}

export function FormatSection({ data, title_label }: FormatProps) {
    const icons = [MapPin, Calendar, Clock, Clock, Target]; // Mapping icons roughly to items order

    return (
        <section className="py-24 relative border-t border-white/5">
            <div className="w-full max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-brand-blue)] font-bold tracking-widest uppercase text-sm mb-4 block">{title_label}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{data.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.items.map((item, index) => {
                        const Icon = icons[index] || Target;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:bg-white/10 hover:border-[var(--color-brand-blue)]/30 transition-all group h-full"
                            >
                                <div className="w-12 h-12 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <p className="text-white text-lg font-medium">{item}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
