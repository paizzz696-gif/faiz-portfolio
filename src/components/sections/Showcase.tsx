// src/components/sections/Showcase.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import { Eye } from "lucide-react";
import { SVGProps } from "react"; // Import tipe untuk SVG

// Import Logo Asli dari react-icons
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiJavascript, 
  SiPhp, SiLaravel, SiMysql, SiHtml5, SiGit, SiGithub,
  SiNodedotjs, SiVite 
} from "react-icons/si";

// --- KUSTOM SVG MANUAL (DENGAN TIPE YANG BENAR) ---
const Css3Icon = ({ className, style }: SVGProps<SVGSVGElement>) => (
  <svg className={className} style={style} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.61L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
);

const VsCodeIcon = ({ className, style }: SVGProps<SVGSVGElement>) => (
  <svg className={className} style={style} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v9.896z"/>
  </svg>
);

const BladeIcon = ({ className, style }: SVGProps<SVGSVGElement>) => (
  <svg className={className} style={style} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L22 22H2L12 2z" opacity="0.8"/>
    <path d="M12 6L18 20H6L12 6z"/>
  </svg>
);

const AlpineIcon = ({ className, style }: SVGProps<SVGSVGElement>) => (
  <svg className={className} style={style} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 6.5L12 11l4.5-4.5L12 2 7.5 6.5zm-7.5 11L4.5 22 9 17.5 4.5 13 0 17.5zm15 0L19.5 22 24 17.5 19.5 13 15 17.5z"/>
  </svg>
);

// Data Tech Stack
const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: Css3Icon, color: "#1572B6" },
  { name: "VS Code", icon: VsCodeIcon, color: "#007ACC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Blade", icon: BladeIcon, color: "#FF2D20" },
  { name: "Alpine.js", icon: AlpineIcon, color: "#77C1D2" },
];

// Definisikan tipe data untuk Sertifikat
interface CertData {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

const certs: CertData[] = [
  { 
    id: 1, 
    title: "AMD Classroom", 
    issuer: "Sertifikat penghargaan atas partisipasi sebagai peserta dalam acara talkshow AMD Classroom yang diselenggarakan pada 27 Agustus 2025 di Universitas Andalas", 
    year: "Aug 27, 2025",
    image: "/images/certificates/cert-1.jpg"
  },
  { 
    id: 2, 
    title: "Code Politan", 
    issuer: "Sertifikat kelulusan dari kelas Dasar dan Penggunaan Generatif AI yang diterbitkan pada 11 September 2025", 
    year: "Sep 11, 2025",
    image: "/images/certificates/cert-2.jpg"
  },
  { 
    id: 3, 
    title: "Claude 101", 
    issuer: "Sertifikat penyelesaian (completion) karena telah berhasil menyelesaikan kursus atau program Claude 101 pada 27 April 2026", 
    year: "Apr 27, 2026",
    image: "/images/certificates/cert-3.jpg"
  },
];

// KOMPONEN KARTU SERTIFIKAT INTERAKTIF (3D TILT)
const CertificateCard = ({ cert }: { cert: CertData }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/40 transition-colors h-full cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(40px)" }} 
        className="relative w-full h-40 rounded-lg overflow-hidden border border-white/5 bg-gray-800 group"
      >
        <Image 
          src={cert.image} 
          alt={cert.title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-white scale-90 group-hover:scale-100 transition-transform duration-300">
            <Eye size={24} className="text-accent" />
            <span className="text-xs font-medium uppercase tracking-widest">Preview</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
        <p className="text-gray-400 text-xs leading-relaxed flex-grow">{cert.issuer}</p>
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-white/5">
        <span className="text-accent text-xs font-medium">{cert.year}</span>
      </div>
    </motion.div>
  );
};

export default function Showcase() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "tech">("projects");

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === "projects" || customEvent.detail === "certificates" || customEvent.detail === "tech") {
        setActiveTab(customEvent.detail);
      }
    };
    window.addEventListener("changeShowcaseTab", handler);
    return () => window.removeEventListener("changeShowcaseTab", handler);
  }, []);

  const tabs = [
    { id: "projects" as const, label: t.showcase.tabs.projects },
    { id: "certificates" as const, label: t.showcase.tabs.certificates },
    { id: "tech" as const, label: t.showcase.tabs.tech },
  ];

  return (
    <section id="showcase" className="relative min-h-screen flex flex-col justify-center py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">{t.showcase.title}</h2>
            <p className="text-gray-400 max-w-md">{t.showcase.subtitle}</p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* TAB PROJECTS (LAYOUT ZIG-ZAG ALTERNATING) */}
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
              id="projects"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center group glass rounded-3xl p-6 md:p-10 hover:border-accent/30 transition-colors`}
                >
                  {/* BAGIAN FOTO */}
                  <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  {/* BAGIAN TEKS */}
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent text-sm font-mono">0{index + 1}</span>
                      <div className="h-[1px] w-12 bg-accent" />
                      <span className="text-xs text-gray-500 uppercase tracking-widest">{project.status}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{project.overview}</p>
                    
                    <p className="text-sm text-gray-500 mt-2">
                      <span className="text-white font-medium">Role:</span> {project.role}
                    </p>

                    <div className="mt-4">
                      <p className="text-xs uppercase text-gray-600 tracking-widest mb-3">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs uppercase text-gray-600 tracking-widest mb-3">Future Improvements</p>
                      <ul className="space-y-2">
                        {project.futureImprovements.map((imp) => (
                          <li key={imp} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-accent mt-1">→</span> {imp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* TAB CERTIFICATES */}
          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-6"
              id="certificates"
            >
              {certs.map((cert) => (
                <CertificateCard key={cert.id} cert={cert} />
              ))}
            </motion.div>
          )}

          {/* TAB TECH STACK */}
          {activeTab === "tech" && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {techStack.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div 
                    key={tech.name} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="glass rounded-xl p-5 flex flex-col items-center justify-center gap-3 border border-white/5 relative overflow-hidden group cursor-pointer"
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }}
                    ></div>
                    <Icon 
                      style={{ color: tech.color }} 
                      className="text-3xl transition-all duration-300 group-hover:scale-110 relative z-10" 
                    />
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors relative z-10">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}