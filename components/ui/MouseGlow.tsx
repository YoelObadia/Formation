'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function MouseGlow() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 250); // -250 to center the 500px glow
            cursorY.set(e.clientY - 250);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
            style={{
                background: 'transparent',
            }}
        >
            <motion.div
                className="absolute h-[500px] w-[500px] rounded-full opacity-15 blur-[100px]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(249, 115, 22, 0.4) 50%, transparent 80%)',
                }}
            />
        </motion.div>
    );
}
