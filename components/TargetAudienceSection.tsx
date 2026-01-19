'use client';

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface Segment {
    role: string;
    benefit: string;
}

interface TargetAudienceProps {
    data: {
        title: string;
        subtitle: string;
        segments: Segment[];
        personas_pro: Segment[];
    };
    title: string;
}

export function TargetAudienceSection({ data, title }: TargetAudienceProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[var(--color-brand-blue)]/5 via-transparent to-transparent pointer-events-none" />

            <div className="w-full max-w-[95vw] xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl font-bold text-white sm:text-5xl text-center mb-6">{title}</h2>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">{data.subtitle}</p>
                </div>

                {/* General Segments */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-10 pl-2 border-l-4 border-[var(--color-brand-blue)]">Profils Variés</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {data.segments.map((target, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors flex flex-col items-start h-full text-left group">
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-brand-orange)] transition-colors">{target.role}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                                        {target.benefit}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Pro Segments */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-10 pl-2 border-l-4 border-[var(--color-brand-orange)]">Professionnels & Entreprises</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.personas_pro.map((target, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className="h-full"
                            >
                                <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors flex flex-col items-start h-full text-left group hover:border-[var(--color-brand-orange)]/30">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-[var(--color-brand-orange)]">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--color-brand-orange)] transition-colors">{target.role}</h4>
                                    <p className="text-gray-400 text-base leading-relaxed flex-grow">
                                        {target.benefit}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
