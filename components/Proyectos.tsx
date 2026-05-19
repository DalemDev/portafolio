"use client";

import { ExternalLink, Clock } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const proyectos = [
  {
    numero: "01",
    titulo: "E-commerce Full Stack",
    descripcion:
      "Tienda online completa con catálogo de productos, carrito de compras, pasarela de pagos Stripe y panel de administración para gestionar inventario y pedidos.",
    techs: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind"],
    demo: null,
    github: null,
    estado: "en construcción",
    color: "from-indigo-500 to-violet-500",
  },
  {
    numero: "02",
    titulo: "SaaS Kanban Manager",
    descripcion:
      "Aplicación de gestión de proyectos con tableros Kanban, colaboración en equipo, actualizaciones en tiempo real con WebSockets y sistema de roles y permisos.",
    techs: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Tailwind"],
    demo: null,
    github: null,
    estado: "en construcción",
    color: "from-violet-500 to-pink-500",
  },
  {
    numero: "03",
    titulo: "REST API Documentada",
    descripcion:
      "API REST robusta con autenticación JWT, refresh tokens, rate limiting, tests unitarios e integración, y documentación interactiva generada con Swagger/OpenAPI.",
    techs: ["Node.js", "Express", "PostgreSQL", "JWT", "Jest", "Swagger"],
    demo: null,
    github: null,
    estado: "en construcción",
    color: "from-cyan-500 to-indigo-500",
  },
  {
    numero: "04",
    titulo: "Dashboard de Analytics",
    descripcion:
      "Panel de métricas interactivo con gráficas en tiempo real, filtros por rango de fechas, comparativas y exportación de datos a CSV.",
    techs: ["React", "TypeScript", "Recharts", "Tailwind", "Node.js"],
    demo: null,
    github: null,
    estado: "en construcción",
    color: "from-green-500 to-cyan-500",
  },
  {
    numero: "05",
    titulo: "Landing + CMS Headless",
    descripcion:
      "Sitio web corporativo con diseño profesional y CMS headless (Sanity) que permite al cliente gestionar su propio contenido sin necesidad de tocar el código.",
    techs: ["Next.js", "Sanity", "TypeScript", "Tailwind", "Vercel"],
    demo: null,
    github: null,
    estado: "en construcción",
    color: "from-orange-500 to-pink-500",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Portafolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos <span className="gradient-text">destacados</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Proyectos que demuestran capacidad real para construir productos
            completos, no solo ejercicios de práctica.
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-6">
          {proyectos.map((p, i) => (
            <div
              key={p.numero}
              className="card p-8 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Number */}
                <div
                  className={`text-5xl font-black bg-gradient-to-br ${p.color} bg-clip-text text-transparent opacity-30 group-hover:opacity-60 transition-opacity shrink-0 leading-none`}
                >
                  {p.numero}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                      {p.titulo}
                    </h3>
                    {/* Estado badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      <Clock size={11} />
                      {p.estado}
                    </span>
                  </div>
                  <p className="text-[var(--text-muted)] leading-relaxed text-sm mb-5">
                    {p.descripcion}
                  </p>

                  {/* Techs */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.techs.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-lg bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.2)] text-indigo-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] opacity-40 cursor-not-allowed">
                      <ExternalLink size={14} />
                      Demo próximamente
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] opacity-40 cursor-not-allowed">
                      <GithubIcon size={14} />
                      Repositorio próximamente
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/DalemDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(99,102,241,0.3)] text-[var(--text-muted)] hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-200 text-sm font-medium"
          >
            <GithubIcon size={16} />
            Ver todos mis repositorios en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
