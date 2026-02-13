// PageTransition — Framer Motion wrapper for staggered page reveals
// animation-manifest.md: opacity fade-in, translateY 10-20px, stagger 80-120ms, <800ms total
// performance-budget.md: <10 animated elements per load

"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

interface PageTransitionProps {
    children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: React.ReactNode;
}

export function StaggerItem({ children }: StaggerItemProps) {
    return (
        <motion.div variants={itemVariants}>
            {children}
        </motion.div>
    );
}
