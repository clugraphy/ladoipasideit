'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface ContactLayoutProps {
    children: React.ReactNode
    className?: string
}

export function ContactLayout({ children, className }: ContactLayoutProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                'container mx-auto px-4 py-8 max-w-4xl',
                className
            )}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
} 