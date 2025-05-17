'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'

export function ContactForm() {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Here you would typically send the form data to your backend
            await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call

            toast({
                title: "Message sent!",
                description: "We'll get back to you as soon as possible.",
            })

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                />
            </motion.div>

            <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                />
            </motion.div>

            <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3 }}
            >
                <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                />
            </motion.div>

            <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                />
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
            </motion.div>
        </motion.form>
    )
} 