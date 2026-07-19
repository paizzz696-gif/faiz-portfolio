// src/components/layout/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fungsi untuk mengubah tab Showcase dan scroll ke section tersebut
  const handleTabClick = (e: React.MouseEvent, tabName: "projects" | "certificates") => {
    e.preventDefault();
    const showcase = document.getElementById("showcase");
    if (showcase) {
      showcase.scrollIntoView({ behavior: "smooth" });
    }
    // Kirim sinyal ke Showcase untuk ganti tab
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("changeShowcaseTab", { detail: tabName }));
    }, 300);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 4, duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        scrolled ? "w-[90%] max-w-3xl glass rounded-full py-3 px-6" : "w-full py-6 px-8"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8 mx-auto">
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
            {t.nav.about}
          </a>
          <a 
            href="#showcase" 
            onClick={(e) => handleTabClick(e, "projects")} 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {t.nav.projects}
          </a>
          <a 
            href="#showcase" 
            onClick={(e) => handleTabClick(e, "certificates")} 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {t.nav.certificates}
          </a>
          <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
            {t.nav.contact}
          </a>
        </div>
        <button
          onClick={() => setLang(lang === "en" ? "id" : "en")}
          className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-700 hover:border-accent hover:text-accent transition-all absolute right-6 md:right-0"
        >
          {lang === "en" ? "ID" : "EN"}
        </button>
      </div>
    </motion.nav>
  );
}