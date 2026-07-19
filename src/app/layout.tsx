// src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import LoadingScreen from "@/components/animations/LoadingScreen";

export const metadata: Metadata = {
  title: "Muhammad Faiz | Personal Portfolio",
  description: "Premium portfolio of Muhammad Faiz, UI/UX Designer & Fullstack Developer.",
  openGraph: {
    title: "Muhammad Faiz | Personal Portfolio",
    description: "Building digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <SmoothScrollProvider>
            <LoadingScreen />
            {children}
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}