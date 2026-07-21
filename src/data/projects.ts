// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  overview: string;
  image: string;
  techStack: string[];
  role: string;
  status: string;
  futureImprovements: string[];
}

export const projects: Project[] = [
  {
    id: "roast-room-pos",
    title: "The Roast Room POS",
    overview: "A web-based Point of Sale system designed specifically for coffee shops to manage orders, inventory, and billing efficiently.",
    image: "/images/projects/roast-room-pos.jpg",
    techStack: ["Laravel 12", "PHP 8.2", "Blade", "Tailwind CSS", "Alpine.js", "MySQL", "Laravel Breeze", "Laravel Excel", "Vite"],
    role: "Fullstack Developer",
    status: "Completed",
    futureImprovements: ["Add cloud printing support", "Integrate payment gateway", "Real-time analytics dashboard"],
  },
  {
    id: "taskflow-todo",
    title: "TaskFlow ToDo",
    overview: "A modern, minimalist to-do application focusing on smooth user experience and quick task management.",
    image: "/images/projects/taskflow-todo.jpg",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "shadcn/ui", "MySQL",],
    role: "Full-Stack Developer",
    status: "Completed",
    futureImprovements: ["Advanced Analytics Dashboard", "Real-Time Collaboration Engine", "Drag and drop sorting"],
  },
  {
    id: "Photobooth Web App",
    title: "Photobooth Web App",
    overview: "PixelTide is a 100% client-side web photobooth with an 8-bit Deep Sea Pixel theme. Users can capture, apply creative retro frames, and download photo strips directly in-browser, ensuring full privacy and zero server costs.",
    image: "/images/projects/personal-portfolio.jpg",
    techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Lucide React", "Vercel"],
    role: "UI/UX Designer & Fullstack Developer",
    status: "Completed",
    futureImprovements: ["Multi-Format & Individual Downloads", "Custom 8-bit Frame Builder", "Dynamic Themes & Soundscapes"],
  }
];

// Data untuk Tab Tech Stack di Showcase.tsx
export const techStack = [
  { name: "Next.js", icon: "▲" },
  { name: "React.js", icon: "⚛️" },
  { name: "TypeScript", icon: "🟦" },
  { name: "Tailwind", icon: "🌊" },
  { name: "JavaScript", icon: "🟨" },
  { name: "PHP", icon: "🐘" },
  { name: "Laravel", icon: "🔴" },
  { name: "MySQL", icon: "🗄️" },
  { name: "HTML5", icon: "🟧" },
  { name: "CSS3", icon: "🟦" },
];