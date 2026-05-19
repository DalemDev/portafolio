"use client";

import { Search, FileText, Code2, Rocket } from "lucide-react";

const pasos = [
  {
    icon: Search,
    numero: "01",
    titulo: "Discovery",
    descripcion:
      "Entiendo tu negocio, tus usuarios y tus objetivos reales. Hacemos una reunión donde tú hablas y yo escucho. Sin asumir nada.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: FileText,
    numero: "02",
    titulo: "Propuesta",
    descripcion:
      "Te entrego un presupuesto detallado con alcance, timeline, tecnologías y precio. Sin sorpresas después.",
    color: "from-violet-500 to-pink-500",
  },
  {
    icon: Code2,
    numero: "03",
    titulo: "Desarrollo",
    descripcion:
      "Trabajo por iteraciones semanales. Tienes acceso al avance en todo momento y puedes dar feedback antes de que sea tarde.",
    color: "from-cyan-500 to-indigo-500",
  },
  {
    icon: Rocket,
    numero: "04",
    titulo: "Entrega",
    descripcion:
      "Deploy, documentación técnica y soporte de 30 días post-lanzamiento incluido. El proyecto es tuyo desde el primer commit.",
    color: "from-green-500 to-cyan-500",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            ¿Cómo trabajo?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proceso <span className="gradient-text">transparente</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Sin cajas negras ni sorpresas. Sabes exactamente en qué fase está tu
            proyecto en todo momento.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={p.numero} className="relative">
                {/* Connector line (desktop) */}
                {idx < pasos.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-[rgba(99,102,241,0.4)] to-transparent z-10" />
                )}

                <div className="card p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 shrink-0`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Number */}
                  <span className="text-xs font-mono text-[var(--text-muted)] mb-2">
                    {p.numero}
                  </span>

                  <h3 className="text-lg font-bold mb-3">{p.titulo}</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1">
                    {p.descripcion}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
