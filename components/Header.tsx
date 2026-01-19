"use client";

import { Button } from "@/components/ui/button";
import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeaderProps {
  data: {
    logo_text_first: string;
    logo_text_highlight: string;
    cta: string;
  }
}

export function Header({ data }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? "border-b border-white/10 bg-[#020817] shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex h-20 md:h-28 lg:h-32 items-center justify-between">
          <Link href="#hero" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={300}
              height={120}
              className="h-16 md:h-24 lg:h-28 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="flex items-center gap-4">
            <Button
              className="bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange)]/90 text-white font-semibold"
              asChild
            >
              <Link href="#lead-form">
                {data.cta}
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
