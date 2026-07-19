// src/components/animations/LoadingScreen.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
            >
              Muhammad Faiz
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-sm text-gray-400 mb-1"
          >
            Personal Portfolio
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="text-xs text-gray-500 mb-8"
          >
            Building Digital Experiences...
          </motion.div>

          <div className="w-48 h-[2px] bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 2.2, duration: 1.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}