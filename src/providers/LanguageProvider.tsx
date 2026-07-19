// src/providers/LanguageProvider.tsx
"use client";
import React, { createContext, useContext, useState } from "react";
import { translations } from "@/data/translations";

type Lang = "en" | "id";
type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)["en"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}