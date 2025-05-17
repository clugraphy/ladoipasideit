'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface ProjectsLayoutProps {
    children: React.ReactNode
    className?: string
}

export function ProjectsLayout({ children, className }: ProjectsLayoutProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={cn(
                'container mx-auto px-4 py-8 max-w-7xl',
                className
            )}
        >
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
} 