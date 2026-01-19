'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const lines = [
    "> Initializing NCAI_Bot...",
    "> Loading No-Code modules...",
    "> Connecting to OpenAI API...",
    "> Training Agent on business data...",
    "> Building RAG System with 98% accuracy...",
    "> Optimizing workflow automation...",
    "> System Ready. Starting transformation."
];

export function AITerminal() {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [text, setText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        if (!startTyping || currentLineIndex >= lines.length) return;

        const currentLine = lines[currentLineIndex];
        let charIndex = 0;

        const typeInterval = setInterval(() => {
            if (charIndex <= currentLine.length) {
                setText(currentLine.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    if (currentLineIndex < lines.length - 1) {
                        setCurrentLineIndex(prev => prev + 1);
                    }
                }, 800); // Wait before next line
            }
        }, 50); // Typing speed

        return () => clearInterval(typeInterval);
    }, [currentLineIndex, startTyping]);

    return (
        <section className="py-24 bg-[#0a0a0a] flex justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onViewportEnter={() => setStartTyping(true)}
                className="w-full max-w-3xl bg-[#020817] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm sm:text-base"
            >
                {/* Terminal Header */}
                <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center text-gray-500 text-xs flex items-center justify-center gap-2">
                        <Terminal className="w-3 h-3" />
                        ncai-bot — bash — 80x24
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 h-[400px] text-green-400/90 overflow-y-auto font-mono flex flex-col justify-end">
                    {lines.slice(0, currentLineIndex).map((line, i) => (
                        <div key={i} className="mb-2 opacity-60">{line}</div>
                    ))}
                    <div className="mb-2">
                        {text}
                        <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} inline-block w-2.5 h-4 bg-green-400 ml-1 align-middle`} />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
