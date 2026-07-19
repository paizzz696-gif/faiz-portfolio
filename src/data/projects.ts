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
    techStack: ["HTML5", "CSS3", "JavaScript"],
    role: "Frontend Developer",
    status: "Completed",
    futureImprovements: ["Advanced Analytics Dashboard", "Real-Time Collaboration Engine", "Drag and drop sorting"],
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    overview: "A premium personal portfolio website designed to showcase projects, technical expertise, certifications, and professional identity.",
    image: "/images/projects/personal-portfolio.jpg",
    techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Lenis", "shadcn/ui", "Lucide React", "Vercel"],
    role: "UI/UX Designer & Fullstack Developer",
    status: "Completed",
    futureImprovements: ["Certificate Filter & Categorization", "Interactive Skill Card Animations", "Dark/Light Mode Toggle"],
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