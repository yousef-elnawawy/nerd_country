"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Waves from "@/components/Waves";
import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";

const WAVE_COLORS = {
  dark: "#221C06",
  light: "rgba(225, 205, 156, 0.2)",
} as const;

export default function NotFound() {
  const { theme } = useTheme();
  const waveColor = WAVE_COLORS[theme] || WAVE_COLORS.dark;

  useEffect(() => {
    document.title = "404 - الصفحة غير موجودة | Page Not Found";
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 relative flex items-center justify-center pt-24 overflow-hidden min-h-[calc(100vh-160px)]">
        {/* Animated Waves Background */}
        <Waves
          lineColor={waveColor}
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />

        {/* Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, var(--theme-hero-glow), transparent 60%)`,
          }}
        />

        {/* 404 Layout */}
        <div className="page-container relative z-10 flex flex-col items-center justify-center text-center gap-8 py-16">
          <div className="flex flex-col items-center">
            {/* Huge 404 Text */}
            <h1 className="font-latin text-[120px] md:text-[180px] font-black text-primary leading-none tracking-tighter drop-shadow-[0_0_30px_var(--theme-glow-primary)] select-none">
              404
            </h1>
            
            {/* Arabic / English Bilingual Subtitle */}
            <h2 className="font-arabic text-headline-lg font-black text-on-surface mt-4">
              عذراً، الصفحة غير موجودة
            </h2>
            <p className="font-latin text-label-caps text-primary tracking-widest mt-2 uppercase">
              Page Not Found
            </p>
          </div>

          <p className="font-arabic text-body-lg text-on-surface-variant max-w-md leading-relaxed px-4">
            الرابط الذي حاولت الوصول إليه قد يكون معطلاً، أو تم نقله لعنوان آخر، أو أن الصفحة لم تعد متوفرة.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row flex-wrap gap-4 mt-4 justify-center">
            <Link href="/" className="btn-primary">
              العودة للرئيسية
            </Link>
            <Link href="/#contact" className="btn-secondary">
              تواصل معي
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
