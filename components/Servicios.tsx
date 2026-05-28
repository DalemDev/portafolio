"use client";

import { Briefcase, CheckCircle2 } from "lucide-react";

const experiencias = [
  {
    cargo: "Ingeniero QA",
    empresa: "Ambiensa S.A.",
    periodo: "Mar 2025 – Presente",
    actual: true,
    descripcion:
      "Responsable de la calidad del software en sistemas productivos. Diseño e implementación de suite de pruebas automatizadas E2E integradas al pipeline CI/CD.",
    logros: [
      "Suite E2E automatizada con Cypress integrada al CI/CD",
      "Definición de estrategia de testing funcional e integración",
      "Validación continua de releases en entornos productivos",
    ],
    techs: ["Cypress", "GitLab CI", "Testing E2E", "Testing integración"],
    color: "from-indigo-500/10 to-violet-500/10",
    border: "border-indigo-500/20",
    badge: "text-indigo-400 bg-indigo-500/10",
  },
  {
    cargo: "Desarrollador FullStack & DevOps",
    empresa: "Ambiensa S.A.",
    periodo: "Jul 2023 – Mar 2025",
    actual: false,
    descripcion:
      "Rol central en infraestructura y DevOps de la empresa. Administración de toda la infraestructura productiva, diseño del sistema CI/CD desde cero y despliegue de aplicaciones completas.",
    logros: [
      "Administración de +20 servidores Linux (producción, preproducción y BD)",
      "CI/CD con GitLab CI implementado desde cero, eliminando despliegues manuales",
      "Stacks React + Laravel + Docker + Apache desplegados en producción con SSL",
      "Gestión de bases de datos productivas: MySQL, PostgreSQL y MongoDB",
    ],
    techs: ["Linux", "GitLab CI", "Docker", "Nginx", "Apache", "MySQL", "PostgreSQL", "MongoDB", "Laravel", "React"],
    color: "from-violet-500/10 to-cyan-500/10",
    border: "border-violet-500/20",
    badge: "text-violet-400 bg-violet-500/10",
  },
  {
    cargo: "Desarrollador FullStack",
    empresa: "Viamatica S.A.",
    periodo: "May 2023 – Jul 2023",
    actual: false,
    descripcion:
      "Proyecto de duración definida por contrato. Desarrollo de APIs REST y construcción de interfaces de usuario.",
    logros: [
      "Desarrollo de APIs REST documentadas",
      "Construcción de interfaces con JavaScript y PHP",
    ],
    techs: ["JavaScript", "PHP", "REST APIs"],
    color: "from-cyan-500/10 to-green-500/10",
    border: "border-cyan-500/20",
    badge: "text-cyan-400 bg-cyan-500/10",
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Trayectoria profesional
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiencia <span className="gradient-text">laboral</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Más de 2 años con responsabilidad directa sobre infraestructura
            productiva real.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiencias.map((exp) => (
            <div
              key={exp.cargo + exp.empresa}
              className={`p-8 rounded-2xl bg-gradient-to-br ${exp.color} border ${exp.border} group`}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[rgba(99,102,241,0.2)] flex items-center justify-center shrink-0">
                    <Briefcase size={14} className="text-indigo-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold">{exp.cargo}</h3>
                      {exp.actual && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-500/15 border border-green-500/30 text-green-400">
                          ACTUAL
                        </span>
                      )}
                    </div>
                    <p className="text-indigo-300 text-sm font-medium">{exp.empresa}</p>
                  </div>
                </div>
                <span
                  className={`self-start px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${exp.badge}`}
                >
                  {exp.periodo}
                </span>
              </div>

              {/* Description */}
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5 ml-11">
                {exp.descripcion}
              </p>

              {/* Logros */}
              <ul className="space-y-2 mb-5 ml-11">
                {exp.logros.map((logro) => (
                  <li key={logro} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-[var(--text-muted)]">{logro}</span>
                  </li>
                ))}
              </ul>

              {/* Techs */}
              <div className="flex flex-wrap gap-2 ml-11">
                {exp.techs.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-lg bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.2)] text-indigo-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
