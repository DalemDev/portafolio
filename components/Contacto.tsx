"use client";

import { useState, useRef, FormEvent } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import Section from "@/components/Section";

const EMAIL = "dalemberismael7@gmail.com";

const motivosContacto = [
  "Oferta laboral / Oportunidad",
  "Consultoría técnica",
  "Colaboración en proyecto",
  "Otro",
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contacto() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    asunto: "",
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
      setForm({ nombre: "", correo: "", asunto: "", mensaje: "" });
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const labelClass = "block font-mono text-[11px] uppercase tracking-[0.15em] text-muted";
  const inputClass =
    "mt-2 w-full rounded-none border-0 border-b border-line bg-transparent py-2.5 text-base text-fg placeholder:text-subtle transition-colors focus:border-fg focus:outline-none";

  return (
    <Section id="contacto" label="Contacto">
      <p className="max-w-xl text-2xl leading-snug tracking-tight sm:text-3xl">
        Abierto a roles de DevOps, infraestructura o SRE.
      </p>
      <p className="mt-4 text-muted">
        Escríbeme a{" "}
        <a href={`mailto:${EMAIL}`} className="link text-fg">
          {EMAIL}
        </a>{" "}
        o usa el formulario.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-14 max-w-2xl space-y-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <label className={labelClass}>
            Nombre
            <input
              type="text"
              name="nombre"
              required
              autoComplete="name"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              className={inputClass}
            />
          </label>
          <label className={labelClass}>
            Correo
            <input
              type="email"
              name="correo"
              required
              autoComplete="email"
              placeholder="tu@empresa.com"
              value={form.correo}
              onChange={handleChange}
              className={inputClass}
            />
          </label>
        </div>

        <label className={labelClass}>
          Motivo
          <span className="relative block">
            <select
              name="asunto"
              value={form.asunto}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer appearance-none pr-8 ${
                form.asunto ? "" : "text-subtle"
              }`}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {motivosContacto.map((m) => (
                <option key={m} value={m} className="bg-bg text-fg">
                  {m}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              strokeWidth={1.5}
              className="pointer-events-none absolute right-0 top-1/2 mt-1 -translate-y-1/2 text-muted"
            />
          </span>
        </label>

        <label className={labelClass}>
          Mensaje
          <textarea
            name="mensaje"
            required
            rows={4}
            placeholder="Cuéntame sobre el rol, el equipo o el proyecto"
            value={form.mensaje}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />
        </label>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "sending" ? "Enviando…" : "Enviar mensaje"}
            <ArrowRight size={15} strokeWidth={1.5} />
          </button>

          <p aria-live="polite" className="text-sm text-muted">
            {status === "success" && "Mensaje enviado. Te respondo pronto."}
            {status === "error" && `No se pudo enviar. Escríbeme a ${EMAIL}.`}
          </p>
        </div>
      </form>
    </Section>
  );
}
