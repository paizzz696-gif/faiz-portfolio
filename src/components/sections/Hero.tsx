// src/components/sections/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = t.hero.roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) setText(currentRole.slice(0, text.length + 1));
        else setTimeout(() => setIsDeleting(true), 2000);
      } else {
        if (text.length > 0) setText(currentRole.slice(0, text.length - 1));
        else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, t.hero.roles]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="relative z-20 grid md:grid-cols-12 gap-8 items-center px-6 md:px-16 max-w-7xl mx-auto w-full">
        
        <div className="md:col-span-8 flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 0.8 }}
            className="text-gray-400 mb-4 font-mono text-sm tracking-widest uppercase"
          >
            {t.hero.greeting}
          </motion.p>
          
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 4.4, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white"
            >
              {t.hero.name.split(" ")[0]}
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 4.5, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-700"
            >
              {t.hero.name.split(" ")[1]}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.8, duration: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-[2px] w-12 bg-accent" />
            <span className="text-xl md:text-2xl font-light text-white tracking-wide">
              {text}<span className="animate-pulse text-accent">|</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 0.8 }}
            className="flex gap-4"
          >
            <a href="#showcase" className="px-6 py-3 border border-white/20 text-white rounded-full font-medium flex items-center gap-2 hover:border-white hover:bg-white/5 transition-colors text-sm">
              {t.hero.cta2} <ArrowDown size={16} />
            </a>
          </motion.div>
        </div>

        {/* FOTO HERO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.6, duration: 1, ease: "easeOut" }}
          className="md:col-span-4 hidden md:block relative h-[500px] w-full rounded-2xl overflow-hidden glow"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <Image 
            src="/images/profile/hero.jpg" // <-- DIUBAH KE hero.jpg
            alt="Muhammad Faiz" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gray-600 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}