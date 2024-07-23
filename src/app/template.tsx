"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
        <motion.div
            initial={{ y: 500 }}
            animate={{
                y: 0,
                transition: { duration: 0.5, type: "spring" },
            }}
            exit={{
                y: -500,
                transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
            }}
        >
            {children}
        </motion.div>
    );
}