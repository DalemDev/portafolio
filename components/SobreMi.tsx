"use client";

import { Download, CheckCircle2, User } from "lucide-react";

const valores = [
  "Visión end-to-end del ciclo de vida del software",
  "Automatización por defecto, procesos manuales como excepción",
  "Infraestructura tratada como código: reproducible y versionada",
  "Comunicación directa y transparencia en cada decisión técnica",
];

const stats = [
  { valor: "2+", label: "Años en infraestructura productiva" },
  { valor: "+20", label: "Servidores Linux administrados" },
  { valor: "3", label: "Stacks de BD en producción" },
];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — photo placeholder + stats */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            {/* Photo */}
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-[rgba(99,102,241,0.3)] flex items-center justify-center overflow-hidden">
                <div className="flex flex-col items-center gap-3 text-[var(--text-muted)]">
                  <User size={64} strokeWidth={1} className="text-indigo-400/50" />
                  <span className="text-xs">Tu foto aquí</span>
                </div>
              </div>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 opacity-10 blur-xl -z-10" />
              {/* Badge disponible */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Disponible
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 rounded-xl bg-[var(--bg-card)] border border-[rgba(99,102,241,0.15)]"
                >
                  <p className="text-2xl font-bold gradient-text">{s.valor}</p>
                  <p className="text-[var(--text-muted)] text-xs mt-1 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Sobre mí
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hola, soy{" "}
              <span className="gradient-text">Dalemberg García</span>
            </h2>
            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed mb-8">
              <p>
                Ingeniero DevOps/Infrastructure con más de 2 años de
                responsabilidad directa sobre entornos productivos: administración
                de +20 servidores Linux, implementación de pipelines CI/CD con
                GitLab CI y gestión de entornos contenerizados con Docker.
              </p>
              <p>
                Diseñé e implementé desde cero el sistema de CI/CD de Ambiensa
                S.A., eliminando despliegues manuales y reduciendo el riesgo de
                errores humanos. Tengo visión end-to-end del ciclo de vida del
                software y actualmente amplío conocimientos en AWS y Azure.
              </p>
            </div>

            {/* Valores */}
            <ul className="space-y-3 mb-10">
              {valores.map((v) => (
                <li key={v} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
                  <span className="text-[var(--text-muted)]">{v}</span>
                </li>
              ))}
            </ul>

            {/* Download CV */}
            <a
              href="/cv.pdf"
              download="CV_Dalemberg_Garcia_DevOps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(99,102,241,0.3)] text-[var(--text-muted)] hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-200 text-sm font-medium"
            >
              <Download size={16} />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
