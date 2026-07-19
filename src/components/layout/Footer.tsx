// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center text-xs text-gray-600">
      © {new Date().getFullYear()} Muhammad Faiz. Built with Next.js 15 & Framer Motion.
    </footer>
  );
}