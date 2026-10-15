import { ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";

const logros = [
  {
    numero: "01",
    titulo: "Pipeline de CI/CD con GitLab CI",
    contexto: "Ambiensa S.A. · 2023–2025",
    descripcion:
      "Diseñé e implementé el CI/CD de la empresa desde cero. Los despliegues a producción y preproducción pasaron a ser automáticos, con menos pasos manuales y menos errores en cada release.",
    techs: ["GitLab CI", "Docker", "Linux", "Bash", "SSH"],
  },
  {
    numero: "02",
    titulo: "Infraestructura Linux en producción",
    contexto: "Ambiensa S.A. · 2023–2025",
    descripcion:
      "Más de 20 servidores Linux entre producción, preproducción y bases de datos. Configuración de Nginx, Apache y HAProxy, certificados SSL y DNS, tareas automatizadas con Bash y Cron, y monitoreo de disponibilidad.",
    techs: ["Linux", "Nginx", "Apache", "HAProxy", "SSL/DNS", "Bash", "Cron"],
  },
  {
    numero: "03",
    titulo: "Pruebas E2E integradas al pipeline",
    contexto: "Ambiensa S.A. · 2025–hoy",
    descripcion:
      "Suite de pruebas E2E con Playwright que corre dentro del CI/CD y valida cada release antes de producción. Incluye la estrategia de testing funcional y de integración de los sistemas productivos.",
    techs: ["Playwright", "GitLab CI"],
  },
  {
    numero: "04",
    titulo: "Despliegues fullstack en contenedores",
    contexto: "Ambiensa S.A. · 2023–2025",
    descripcion:
      "Proyectos React + Laravel sobre Docker y Apache, puestos en producción con dominio, SSL y proxy reverso. Administración de instancias MySQL, PostgreSQL y MongoDB en servidores dedicados.",
    techs: ["Docker Compose", "Apache", "Laravel", "React", "MySQL", "PostgreSQL", "MongoDB"],
  },
];

export default function Proyectos() {
  return (
    <Section id="proyectos" label="Proyectos">
      <ol className="divide-y divide-line">
        {logros.map((p) => (
          <li
            key={p.numero}
            className="grid gap-3 py-10 first:pt-0 last:pb-0 sm:grid-cols-[3rem_1fr]"
          >
            <span className="font-mono text-xs text-subtle sm:pt-1.5">{p.numero}</span>
            <div>
              <h3 className="text-lg font-medium tracking-tight">{p.titulo}</h3>
              <p className="mt-1 text-sm text-muted">{p.contexto}</p>
              <p className="mt-4 leading-relaxed text-muted">{p.descripcion}</p>
              <p className="mt-5 font-mono text-xs leading-relaxed text-subtle">
                {p.techs.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <a
        href="https://github.com/DalemDev"
        target="_blank"
        rel="noopener noreferrer"
        className="link mt-12 inline-flex items-center gap-1 text-sm"
      >
        Más en GitHub <ArrowUpRight size={14} strokeWidth={1.5} />
      </a>
    </Section>
  );
}
