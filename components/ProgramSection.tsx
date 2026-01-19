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
        <section id="programme" className="min-h-screen flex flex-col justify-center py-24 bg-black">
            <div className="w-full max-w-[95vw] xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl font-bold text-white sm:text-5xl text-center">{title}</h2>
                    <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg lg:text-xl">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {data.map((module, index) => {
                        const Icon = iconMap[module.id] || Brain;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex"
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
