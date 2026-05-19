"use client";

import { useState, useRef, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import emailjs from "@emailjs/browser";

const tiposProyecto = [
  "Sitio web / Landing page",
  "Aplicación web completa",
  "E-commerce / Tienda online",
  "API / Backend",
  "Dashboard / Panel admin",
  "Consultoría técnica",
  "Otro",
];

const presupuestos = [
  "Menos de $500 USD",
  "$500 – $1,500 USD",
  "$1,500 – $3,000 USD",
  "$3,000+ USD",
  "Aún no lo sé",
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contacto() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    tipo: "",
    presupuesto: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_dc9cwjr",
        "template_1osifg3",
        formRef.current!,
        "TWnIiqjHaFNU-TEo5"
      );
      setStatus("success");
      setForm({ nombre: "", correo: "", tipo: "", presupuesto: "", mensaje: "" });
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[rgba(99,102,241,0.2)] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors text-sm";

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            ¿Tienes un proyecto?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hablemos de <span className="gradient-text">tu idea</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Cuéntame qué necesitas. Respondo en menos de 24 horas con una
            evaluación honesta de si puedo ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[var(--text-muted)] mb-1.5 ml-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-muted)] mb-1.5 ml-1">
                  Correo *
                </label>
                <input
                  type="email"
                  name="correo"
                  required
                  placeholder="tu@correo.com"
                  value={form.correo}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[var(--text-muted)] mb-1.5 ml-1">
                  Tipo de proyecto
                </label>
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {tiposProyecto.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-[var(--text-muted)] mb-1.5 ml-1">
                  Presupuesto estimado
                </label>
                <select
                  name="presupuesto"
                  value={form.presupuesto}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Selecciona un rango
                  </option>
                  {presupuestos.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1.5 ml-1">
                Cuéntame más *
              </label>
              <textarea
                name="mensaje"
                required
                rows={5}
                placeholder="Describe tu proyecto, qué problema resuelve y qué esperas del resultado..."
                value={form.mensaje}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {/* Feedback */}
            {status === "success" && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                <CheckCircle size={16} />
                ¡Mensaje enviado! Te respondo en menos de 24 horas.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                <AlertCircle size={16} />
                Hubo un error. Escríbeme directamente a tu correo.
              </div>
            )}
          </form>

          {/* Sidebar info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Info card */}
            <div className="card p-6">
              <h3 className="font-bold mb-4">¿Por qué trabajar conmigo?</h3>
              <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                {[
                  "Respuesta en menos de 24h",
                  "Presupuesto sin compromiso",
                  "Código limpio que podrás mantener",
                  "Soporte 30 días post-entrega",
                  "Comunicación directa, sin intermediarios",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div className="card p-6">
              <h3 className="font-bold mb-4">También aquí</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/DalemDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[rgba(99,102,241,0.2)] text-[var(--text-muted)] hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all text-sm"
                >
                  <GithubIcon size={16} />
                  GitHub · DalemDev
                </a>
                <a
                  href="https://www.linkedin.com/in/dalemberg-garcia-688489216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[rgba(99,102,241,0.2)] text-[var(--text-muted)] hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all text-sm"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn · Dalemberg García
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
