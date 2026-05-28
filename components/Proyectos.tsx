"use client";

import { CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const logros = [
  {
    numero: "01",
    titulo: "Pipeline CI/CD desde cero con GitLab CI",
    empresa: "Ambiensa S.A. · 2023–2025",
    descripcion:
      "Diseñé e implementé el sistema de CI/CD completo de la empresa desde cero. Automaticé los despliegues a entornos productivos y pre-productivos, eliminando procesos manuales y reduciendo el riesgo de errores humanos en cada release.",
    techs: ["GitLab CI", "Docker", "Linux", "Bash", "SSH"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    numero: "02",
    titulo: "Administración de infraestructura Linux a escala",
    empresa: "Ambiensa S.A. · 2023–2025",
    descripcion:
      "Responsable de +20 servidores Linux en entornos de producción, preproducción y bases de datos. Configuración de Nginx, Apache y HAProxy, gestión de SSL/DNS, automatización con Bash y Cron, y monitoreo de disponibilidad.",
    techs: ["Linux", "Nginx", "Apache", "HAProxy", "SSL/DNS", "Bash", "Cron"],
    color: "from-violet-500 to-cyan-500",
  },
  {
    numero: "03",
    titulo: "Suite E2E automatizada con Cypress integrada al CI/CD",
    empresa: "Ambiensa S.A. · 2025–Presente",
    descripcion:
      "Diseñé e implementé una suite de pruebas automatizadas E2E con Cypress, integrada directamente al pipeline CI/CD para validación continua de releases antes de llegar a producción. Definí la estrategia de testing funcional e integración para los sistemas en producción.",
    techs: ["Cypress", "GitLab CI", "JavaScript", "Testing E2E"],
    color: "from-cyan-500 to-green-500",
  },
  {
    numero: "04",
    titulo: "Despliegue full-stack contenerizado en producción",
    empresa: "Ambiensa S.A. · 2023–2025",
    descripcion:
      "Implementé proyectos React + Laravel + Docker + Apache completos desde cero, incluyendo configuración de dominio, certificado SSL y proxy reverso en servidores de producción. Administración de instancias MySQL, PostgreSQL y MongoDB en servidores dedicados.",
    techs: ["Docker", "Docker Compose", "Apache", "Laravel", "React", "MySQL", "PostgreSQL", "MongoDB"],
    color: "from-green-500 to-indigo-500",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Trabajo real
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Logros <span className="gradient-text">destacados</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Proyectos e iniciativas ejecutados en entornos productivos reales,
            no ejercicios de práctica.
          </p>
        </div>

        {/* Logros list */}
        <div className="space-y-6">
          {logros.map((p) => (
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
                  <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
                    <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                      {p.titulo}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 border border-green-500/30 text-green-400 shrink-0">
                      <CheckCircle size={11} />
                      Producción
                    </span>
                  </div>
                  <p className="text-indigo-300/70 text-xs mb-3">{p.empresa}</p>
                  <p className="text-[var(--text-muted)] leading-relaxed text-sm mb-5">
                    {p.descripcion}
                  </p>

                  {/* Techs */}
                  <div className="flex flex-wrap gap-2">
                    {p.techs.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-lg bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.2)] text-indigo-300"
                      >
                        {t}
                      </span>
                    ))}
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
            Ver mis repositorios en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
