// src/components/sections/About.tsx
"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* KARTU LANYARD INTERAKTIF */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <div className="relative w-1 h-24 bg-gradient-to-b from-transparent to-gray-700 mb-[-20px] z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gray-700"></div>
          </div>

          <motion.div
            drag
            dragSnapToOrigin
            dragElastic={0.4}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileTap={{ cursor: "grabbing", scale: 0.98 }}
            whileHover={{ scale: 1.02, rotate: 1 }}
            initial={{ rotate: -3 }}
            className="relative w-72 h-96 glass rounded-2xl overflow-hidden cursor-grab shadow-2xl z-10"
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-white/20 z-20"></div>
            
            {/* FOTO ABOUT */}
            <div className="absolute inset-0 top-12 bottom-20">
              <Image 
                src="/images/profile/about.jpg" // <-- DIUBAH KE about.jpg
                alt="Muhammad Faiz" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-20 bg-background/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">Muhammad Faiz</h3>
              <p className="text-xs text-accent uppercase tracking-widest">Info Systems Student</p>
            </div>
          </motion.div>
          
          <p className="text-xs text-gray-600 mt-6 animate-pulse">↔ Drag the card</p>
        </motion.div>

        {/* TEKS ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t.about.title}</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">{t.about.bio}</p>
          
          <div className="space-y-4 border-l border-gray-800 pl-6">
            <div>
              <p className="text-xs uppercase text-gray-600 tracking-widest">University</p>
              <p className="text-white">Universitas Andalas</p>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-600 tracking-widest">Semester</p>
              <p className="text-white">3rd Semester</p>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-600 tracking-widest">Specialization</p>
              <p className="text-white">UI/UX Design & Fullstack Development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}