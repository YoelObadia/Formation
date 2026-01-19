'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
    data: {
        title: string;
        subtitle: string;
        cta: string;
    }
}

export function HeroSection({ data }: HeroProps) {
    return (
        <section className="relative overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="AI Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                {/* Gradient Overlay - Lighter to show image */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/20 via-[#020817]/50 to-[#020817] z-10" />
            </div>

            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--color-brand-blue)]/20 blur-[120px] rounded-full pointer-events-none z-10" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[var(--color-brand-orange)]/10 blur-[100px] rounded-full pointer-events-none z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center py-12">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl max-w-5xl leading-tight px-4"
                >
                    {data.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
                >
                    {data.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 mx-4 sm:mx-0 w-full sm:w-auto flex justify-center"
                >
                    <Button
                        size="lg"
                        className="bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange)]/90 text-white font-bold h-auto py-5 px-10 text-xl shadow-[0_0_20px_-5px_var(--color-brand-orange)] w-full sm:w-auto whitespace-normal text-center leading-tight transition-transform duration-200 hover:scale-105"
                        asChild
                    >
                        <Link href="#lead-form" className="flex items-center justify-center gap-3">
                            <span className="flex-1 sm:flex-none">{data.cta}</span>
                            <ArrowRight className="h-6 w-6 shrink-0" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
