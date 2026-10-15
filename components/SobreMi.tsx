import Section from "@/components/Section";

const datos = [
  { valor: "2+", label: "años en producción" },
  { valor: "20+", label: "servidores Linux" },
  { valor: "4", label: "motores de base de datos" },
];

const principios = [
  "Automatizar primero; lo manual es la excepción.",
  "Infraestructura como código: reproducible y versionada.",
  "Visión completa del ciclo de vida del software, del commit a producción.",
  "Decisiones técnicas explicadas y documentadas.",
];

export default function SobreMi() {
  return (
    <Section id="sobre-mi" label="Sobre mí">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
        <p>
          Soy ingeniero de software y mi trabajo diario es mantener
          estables los entornos productivos: servidores Linux, pipelines de
          CI/CD con GitLab CI y servicios en contenedores con Docker.
        </p>
        <p className="text-muted">
          En Ambiensa S.A. diseñé el sistema de CI/CD desde cero y dejamos atrás
          los despliegues manuales. Vengo del desarrollo fullstack y de procesos de QA, así
          que conozco el ciclo completo del software. Hoy estoy ampliando mi
          experiencia en la nube.
        </p>
      </div>

      <dl className="mt-12 grid grid-cols-3 border-y border-line">
        {datos.map((d) => (
          <div
            key={d.label}
            className="border-l border-line py-6 pl-4 first:border-l-0 first:pl-0 sm:pl-6"
          >
            <dt className="sr-only">{d.label}</dt>
            <dd className="text-3xl font-medium tracking-tight sm:text-4xl">
              {d.valor}
            </dd>
            <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">
              {d.label}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-12 space-y-3 text-muted">
        {principios.map((p) => (
          <li key={p} className="flex gap-4">
            <span className="select-none text-subtle">—</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
