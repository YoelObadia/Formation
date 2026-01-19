'use client';

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface Target {
    role: string;
    benefit: string;
}

interface TargetAudienceProps {
    data: Target[];
    title: string;
}

export function TargetAudienceSection({ data, title }: TargetAudienceProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-brand-blue)]/10 via-transparent to-transparent pointer-events-none" />

            <div className="w-full max-w-[95vw] xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl font-bold text-white sm:text-5xl text-center">{title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {data.map((target, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 hover:bg-white/10 transition-colors flex flex-col items-center text-center h-full">
                                <CheckCircle2 className="w-12 h-12 text-[var(--color-brand-orange)] mb-8" />
                                <h3 className="text-2xl font-bold text-white mb-6">{target.role}</h3>
                                <p className="text-gray-400 leading-relaxed text-base lg:text-lg flex-grow">
                                    {target.benefit}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
