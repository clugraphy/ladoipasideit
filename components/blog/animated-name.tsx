'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function AnimatedName() {
    return (
        <ViewTransition>
            <Link
                href="/"
                className="flex items-center gap-4 mb-8 font-medium text-gray-400 dark:text-zinc-400"
            >
                <motion.span
                    className="text-3xl hover:text-gray-600 dark:hover:text-zinc-200 transition-colors duration-200"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.5 }}
                >
                    ←
                </motion.span>
                <motion.span
                    className="text-5xl hover:text-gray-600 dark:hover:text-zinc-200 transition-colors duration-200"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                >
                    Back
                </motion.span>
            </Link>
        </ViewTransition>
    );
} 