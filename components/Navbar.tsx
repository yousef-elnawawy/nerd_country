"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // نحسب الحالة فورًا عند التحميل (مش لازم ننتظر أول سكرول)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "نبذة", href: "/nabza" },
    { name: "موقعها", href: "/location" },
    { name: "تاريخها", href: "/history" },
    { name: "الوزارات", href: "/ministries" },
    { name: "منصات التواصل", href: "/social" },
  ];

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
      window.scrollTo(0, 0);
    } else {
      const top = document.body.style.top;
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (top) {
        window.scrollTo(0, parseInt(top || "0") * -1);
      }
    }

    return () => {
      const top = document.body.style.top;
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (top) {
        window.scrollTo(0, parseInt(top || "0") * -1);
      }
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-surface-container-high py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="page-container flex items-center justify-between">
        {/* Right side: Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex md:h-12 md:w-12 h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg transition-all duration-300 group-hover:scale-105">
            <span className="text-xl text-white">⚜</span>
          </div>
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-arabic text-body-md transition-colors relative group py-2 ${
                pathname === link.href
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 right-0 h-0.5 bg-primary transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Left side: Theme toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* Mobile: Theme toggle + menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-on-surface hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[999] lg:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible pointer-events-auto bg-background/95 backdrop-blur-sm border-b border-surface-container/30"
            : "opacity-0 invisible pointer-events-none bg-background"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-arabic transition-colors ${
                pathname === link.href
                  ? "text-primary"
                  : "text-on-surface hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}