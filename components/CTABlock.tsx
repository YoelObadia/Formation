'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface CTABlockProps {
    data: {
        title: string;
        subtitle: string;
        button: string;
    }
}

export function CTABlock({ data }: CTABlockProps) {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Vivid Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-90" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" /> {/* Optional noise texture if available, or just gradient */}

            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight drop-shadow-md"
                >
                    {data.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-2xl text-white/90 font-medium mb-10 max-w-2xl mx-auto drop-shadow-sm"
                >
                    {data.subtitle}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button
                        size="lg"
                        className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-xl px-12 py-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        asChild
                    >
                        <Link href="#lead-form" className="flex items-center gap-3">
                            {data.button}
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
