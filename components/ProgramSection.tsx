'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Brain, Database, Bot, Zap, Network, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
    "rag": Database,
    "agents": Bot,
    "vibe": Zap,
};

interface Module {
    id: string;
    title: string;
    description: string;
}

interface ProgramProps {
    data: Module[];
    title: string;
    subtitle: string;
}

export function ProgramSection({ data, title, subtitle }: ProgramProps) {
    return (
        <section id="programme" className="min-h-screen flex flex-col justify-center py-24 relative">
            <div className="w-full max-w-[95vw] xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl font-bold text-white sm:text-5xl text-center">{title}</h2>
                    <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg lg:text-xl">{subtitle}</p>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                    {data.map((module, index) => {
                        const Icon = iconMap[module.id] || Brain;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex min-w-[85vw] md:min-w-0 snap-center"
                            >
                                <Card className="flex flex-col h-full w-full bg-white/5 border-white/10 hover:border-[var(--color-brand-blue)]/50 hover:bg-white/10 transition-all duration-300 group cursor-default p-6 lg:p-8">
                                    <CardHeader className="text-center pb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-blue)]/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--color-brand-blue)] transition-colors duration-300">
                                            <Icon className="w-8 h-8 text-[var(--color-brand-blue)] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <CardTitle className="text-white text-2xl font-bold">{module.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center flex-grow">
                                        <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                                            {module.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
