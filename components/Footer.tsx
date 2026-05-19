"use client";

import { Code2, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(99,102,241,0.15)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 font-bold">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <Code2 size={16} className="text-white" />
          </span>
          <span className="gradient-text">DalemDev</span>
        </a>

        {/* Copyright */}
        <p className="text-[var(--text-muted)] text-sm text-center">
          © {new Date().getFullYear()} Dalemberg García · Hecho con Next.js + Tailwind
        </p>

        {/* Links + back to top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/DalemDev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[var(--text-muted)] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/dalemberg-garcia-688489216/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[var(--text-muted)] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="#inicio"
            className="p-2 text-[var(--text-muted)] hover:text-indigo-400 transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
