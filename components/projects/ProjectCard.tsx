'use client'

import { motion } from 'motion/react'
import { ProjectIcon } from './ProjectIcon'

interface ProjectCardProps {
    title: string
    description: string
    tech?: string[]
    link?: string
    Icon?: React.ComponentType
}

export function ProjectCard({ title, description, tech, link, Icon }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
                scale: 1.02,
                rotate: [0, -1, 1, 0],
                transition: { rotate: { duration: 0.3 } }
            }}
            className="aspect-square relative p-6 rounded-lg shadow-lg transition-all
                      bg-gradient-to-br from-yellow-100 to-yellow-200 
                      dark:from-white/90 dark:to-white/95
                      before:content-[''] before:absolute before:top-0 before:left-[50%] 
                      before:w-[40%] before:h-[30px] before:-translate-x-1/2 before:-translate-y-[10px]
                      before:bg-yellow-200/80 dark:before:bg-white/80 before:rounded-t-lg before:shadow-md
                      flex flex-col"
        >
            <div className="flex-1 overflow-auto">
                {Icon && (
                    <div className="mb-4 text-neutral-700 dark:text-neutral-600">
                        <ProjectIcon icon={Icon} />
                    </div>
                )}
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-700"
                >
                    {title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-neutral-700 dark:text-neutral-600 mb-4 text-sm line-clamp-4"
                >
                    {description}
                </motion.p>
                {tech && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mb-4"
                    >
                        <div className="flex flex-wrap gap-1">
                            {tech.map((t, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                                    className="inline-block bg-yellow-300/50 dark:bg-neutral-200/50 text-neutral-700 dark:text-neutral-600
                                             text-xs px-2 py-1 rounded-full"
                                >
                                    {t}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
            {link && (
                <div className="mt-auto pt-3 border-t border-yellow-300/50 dark:border-neutral-200/50">
                    <motion.a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="text-neutral-700 dark:text-neutral-600 text-sm inline-flex items-center
                                 relative overflow-hidden group"
                    >
                        <span className="relative z-10 pr-2">View Project</span>
                        <motion.span
                            className="relative z-10"
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            &rarr;
                        </motion.span>
                        <motion.div
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-neutral-700"
                            initial={{ scaleX: 0, originX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            className="absolute bottom-0 left-0 w-full h-0 bg-yellow-300/30"
                            initial={{ height: 0 }}
                            whileHover={{ height: '100%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>
                </div>
            )}
        </motion.div>
    )
} 