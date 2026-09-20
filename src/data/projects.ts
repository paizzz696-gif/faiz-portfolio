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
    id: "taskflow",
    title: "TaskFlow",
    overview: "A modern productivity and task management web application designed to help users organize, track, and manage tasks across different areas such as college, work, and personal activities. It provides a centralized workspace for managing deadlines, priorities, categories, subtasks, and task progress.",
    image: "/images/projects/taskflow.jpg",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "Supabase", "Prisma ORM", "Node.js"],
    role: "Fullstack Developer",
    status: "Completed",
    futureImprovements: ["Mobile App Version (React Native)", "Collaborative Workspaces & Sharing", "AI-Powered Task Prioritization"],
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
  },
  {
    id: "basket-court-pos",
    title: "Basket Court POS & Booking System",
    overview: "A Laravel-based web app serving as a Point of Sale (POS) and booking management system for basketball courts. It automates operations from court selection and schedule checking to auto-pricing, transaction recording, and printable receipts.",
    image: "/images/projects/basket-court-pos.jpg",
    techStack: ["Laravel 12", "PHP 8.2", "MySQL", "Blade", "Tailwind CSS", "Alpine.js", "Laravel Breeze"],
    role: "Fullstack Developer",
    status: "Completed",
    futureImprovements: ["Customer-facing online booking portal", "Digital payment gateway integration", "Automated WhatsApp booking reminders"],
  },
  {
    id: "python-crawling-analytics",
    title: "Python Web Crawling & Data Analytics Dashboard",
    overview: "A Python-based web crawling and data analytics platform that collects book data from a public website, cleans and stores the data in MySQL, performs basic analysis, and presents the results through an interactive Streamlit dashboard.",
    image: "/images/projects/python-crawling-analytics.jpg",
    techStack: ["Python", "Requests", "BeautifulSoup4", "Pandas", "Matplotlib", "Plotly", "Streamlit", "MySQL", "PyMySQL", "Pytest", "python-dotenv"],
    role: "Full-Stack Developer & Data Engineer",
    status: "Completed",
    futureImprovements: ["Automated Scheduled Crawling", "Advanced Data Analytics", "Production Deployment & Monitoring"],
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