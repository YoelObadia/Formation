'use client';

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface OutcomesProps {
    data: {
        title: string;
        items: string[];
    };
    title_label: string;
}

export function OutcomesSection({ data, title_label }: OutcomesProps) {
    return (
        <section className="py-24">
            <div className="w-full max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-green-500 font-bold tracking-widest uppercase text-sm mb-4 block">{title_label}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{data.title}</h2>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 gap-6">
                        {data.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                                    <Trophy className="w-5 h-5 text-green-500" />
                                </div>
                                <span className="text-lg md:text-xl text-gray-200 font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
