"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d1a]/90 backdrop-blur-md border-b border-[rgba(99,102,241,0.2)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 font-bold text-lg"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <Code2 size={16} className="text-white" />
          </span>
          <span className="gradient-text">DalemDev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm text-[var(--text-muted)] hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="ml-4 px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white transition-all duration-200 shadow-lg shadow-indigo-500/20"
            >
              Contratar
            </a>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/5 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#13131f]/95 backdrop-blur-md border-b border-[rgba(99,102,241,0.2)]">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="block px-4 py-3 text-sm text-[var(--text-muted)] hover:text-white rounded-lg hover:bg-white/5 transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={close}
                className="block text-center px-5 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
              >
                Contratar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
