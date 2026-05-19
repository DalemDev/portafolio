"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible para proyectos freelance
          <Sparkles size={14} />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
          Transformo tus ideas
          <br />
          en{" "}
          <span className="gradient-text">productos digitales</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Desarrollador Full Stack con 3+ años construyendo aplicaciones web
          modernas. Creo soluciones que funcionan, escalan y generan resultados
          reales para tu negocio.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contacto"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            Hablemos de tu proyecto
          </a>
          <a
            href="#proyectos"
            className="px-8 py-4 rounded-xl border border-[rgba(99,102,241,0.3)] text-[var(--text-muted)] hover:text-white hover:border-indigo-500 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            Ver mi trabajo →
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/DalemDev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-[rgba(99,102,241,0.2)] text-[var(--text-muted)] hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/dalemberg-garcia-688489216/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-[rgba(99,102,241,0.2)] text-[var(--text-muted)] hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#servicios"
          className="inline-flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-indigo-400 transition-colors text-xs"
        >
          <span>Scroll para explorar</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
