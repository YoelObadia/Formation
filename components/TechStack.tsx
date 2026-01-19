'use client';

import { motion } from "framer-motion";

const tools = [
    { name: "Make", color: "hover:text-purple-500" },
    { name: "OpenAI", color: "hover:text-green-500" },
    { name: "Anthropic", color: "hover:text-amber-500" },
    { name: "Bubble", color: "hover:text-blue-500" },
    { name: "Pinecone", color: "hover:text-cyan-500" },
    { name: "LangChain", color: "hover:text-emerald-500" },
    { name: "n8n", color: "hover:text-pink-500" },
    { name: "FlutterFlow", color: "hover:text-indigo-500" },
];

export function TechStack() {
    return (
        <section className="py-12 bg-black/40 border-y border-white/5 overflow-hidden relative backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10 pointer-events-none" />

            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-16 md:gap-32 pr-16 md:pr-32 whitespace-nowrap"
                >
                    {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
                        <div
                            key={index}
                            className={`text-2xl md:text-4xl font-bold text-gray-300/50 hover:opacity-100 transition-all duration-300 cursor-default ${tool.color}`}
                        >
                            {tool.name}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
