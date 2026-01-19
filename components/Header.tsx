import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrainCircuit } from "lucide-react";

interface HeaderProps {
  data: {
    logo_text_first: string;
    logo_text_highlight: string;
    cta: string;
  }
}

export function Header({ data }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#020817]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#020817]/60">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link href="#hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BrainCircuit className="h-6 w-6 text-[var(--color-brand-blue)]" />
            <span className="text-xl font-bold tracking-tight text-white">
              {data.logo_text_first} <span className="text-[var(--color-brand-blue)]">{data.logo_text_highlight}</span>
            </span>
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
