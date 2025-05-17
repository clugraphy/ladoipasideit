import { unstable_ViewTransition as ViewTransition } from 'react';
import { motion } from "motion/react";
import Image from "next/image";

export default function ProjectsLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <ViewTransition>{children}</ViewTransition>;
}
