import Section from "@/components/Section";

const experiencias = [
  {
    cargo: "Ingeniero QA",
    empresa: "Ambiensa S.A.",
    periodo: "Mar 2025 — Hoy",
    descripcion:
      "Responsable de la calidad del software en sistemas productivos. Diseñé la suite de pruebas E2E y la integré al pipeline de CI/CD.",
    logros: [
      "Suite E2E con Playwright ejecutándose en cada release",
      "Estrategia de testing funcional y de integración",
      "Validación continua antes de llegar a producción",
    ],
    techs: ["Playwright", "GitLab CI", "Testing E2E", "Testing de integración"],
  },
  {
    cargo: "Desarrollador FullStack & DevOps",
    empresa: "Ambiensa S.A.",
    periodo: "Jul 2023 — Mar 2025",
    descripcion:
      "Rol central en la infraestructura y el sistema interno de la empresa: administración de los entornos productivos, diseño del CI/CD y desarrollo de aplicaciones completas.",
    logros: [
      "Diseño y desarrollo desde cero de módulos del sistema interno para diversas áreas de la empresa, automatizando procesos que antes eran manuales (frontend, backend y base de datos) con patrones de diseño y buenas prácticas",
      "Administración de más de 20 servidores Linux (producción, preproducción y BD)",
      "CI/CD con GitLab CI desde cero, sin despliegues manuales",
      "Stacks React + Laravel + Docker + Apache en producción con SSL",
      "Bases de datos productivas en MySQL, PostgreSQL y MongoDB",
    ],
    techs: ["Linux", "GitLab CI", "Docker", "Nginx", "Apache", "MySQL", "PostgreSQL", "MongoDB", "Laravel", "React"],
  },
  {
    cargo: "Desarrollador FullStack",
    empresa: "Viamatica S.A.",
    periodo: "May 2023 — Jul 2023",
    descripcion:
      "Proyecto por contrato de duración definida. Desarrollo de APIs REST e interfaces de usuario.",
    logros: [
      "APIs REST documentadas",
      "Interfaces con JavaScript y PHP",
    ],
    techs: ["JavaScript", "PHP", "REST APIs"],
  },
];

export default function Experiencia() {
  return (
    <Section id="experiencia" label="Experiencia">
      <ol className="space-y-14">
        {experiencias.map((exp) => (
          <li
            key={exp.cargo + exp.periodo}
            className="grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-8"
          >
            <p className="font-mono text-xs text-muted sm:pt-1.5">{exp.periodo}</p>
            <div>
              <h3 className="text-lg font-medium tracking-tight">
                {exp.cargo}
                <span className="text-muted"> · {exp.empresa}</span>
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{exp.descripcion}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {exp.logros.map((logro) => (
                  <li key={logro} className="flex gap-3">
                    <span className="select-none text-subtle">—</span>
                    <span>{logro}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-mono text-xs leading-relaxed text-subtle">
                {exp.techs.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
