'use client'

import { motion } from 'motion/react'

interface ProjectIconProps {
    icon: React.ComponentType
}

export function ProjectIcon({ icon: Icon }: ProjectIconProps) {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <Icon />
        </motion.div>
    )
} 