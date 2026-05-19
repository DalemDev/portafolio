"use client";

import { Globe, Layout, Server, MessagesSquare } from "lucide-react";

const servicios = [
  {
    icon: Globe,
    titulo: "Desarrollo Web Completo",
    descripcion:
      "Construyo tu producto de principio a fin: desde la base de datos hasta la interfaz de usuario. Ideal para startups y negocios que quieren lanzar rápido.",
    items: ["Tiendas online", "Apps web a medida", "Sistemas internos", "MVP en tiempo récord"],
    color: "from-indigo-500 to-violet-500",
    glow: "rgba(99,102,241,0.15)",
  },
  {
    icon: Layout,
    titulo: "Frontend & UI",
    descripcion:
      "Interfaces responsivas, accesibles y pixel-perfect que convierten visitantes en clientes. Priorizo la experiencia de usuario y el rendimiento.",
    items: ["Landing pages", "Dashboards", "Diseño responsivo", "Animaciones web"],
    color: "from-violet-500 to-pink-500",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    icon: Server,
    titulo: "Backend & APIs",
    descripcion:
      "APIs REST robustas, seguras y bien documentadas. Arquitecturas que escalan y bases de datos optimizadas para tu caso de uso.",
    items: ["APIs REST", "Autenticación JWT", "Bases de datos", "Integraciones"],
    color: "from-cyan-500 to-indigo-500",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    icon: MessagesSquare,
    titulo: "Consultoría Técnica",
    descripcion:
      "¿Tu equipo necesita dirección? Reviso tu código, propongo mejoras de arquitectura y te ayudo a tomar las decisiones técnicas correctas.",
    items: ["Code review", "Arquitectura", "Refactoring", "Mentoría técnica"],
    color: "from-green-500 to-cyan-500",
    glow: "rgba(16,185,129,0.15)",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            ¿Qué puedo hacer por ti?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">servicios</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Ofrezco soluciones completas adaptadas a lo que tu negocio necesita,
            con comunicación clara y entregas puntuales.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicios.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.titulo}
                className="card p-8 group cursor-default"
                style={{
                  boxShadow: `0 0 0 0 ${s.glow}`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px 0 ${s.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${s.glow}`;
                }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">{s.titulo}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed mb-6 text-sm">
                  {s.descripcion}
                </p>

                {/* Items */}
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1 text-xs rounded-full border border-[rgba(99,102,241,0.25)] text-[var(--text-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5"
          >
            Solicitar presupuesto gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
