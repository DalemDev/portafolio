import Section from "@/components/Section";

const grupos = [
  {
    categoria: "DevOps e infraestructura",
    techs: ["Linux", "Docker y Compose", "GitLab CI/CD", "GitHub Actions", "Nginx", "Apache", "HAProxy", "Bash y Cron", "SSL / DNS"],
  },
  {
    categoria: "Cloud",
    techs: ["AWS — EC2, S3, IAM", "Azure VMs", "Redes y VPC"],
  },
  {
    categoria: "QA y testing",
    techs: ["Playwright (E2E)", "Testing funcional", "Testing de integración", "Diseño de casos de prueba"],
  },
  {
    categoria: "Desarrollo y datos",
    techs: ["Laravel", "React", "PHP", "JavaScript", "MySQL", "PostgreSQL", "MongoDB", "Git"],
  },
];

export default function Tecnologias() {
  return (
    <Section id="stack" label="Stack">
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {grupos.map((g) => (
          <div key={g.categoria}>
            <h3 className="border-b border-line pb-3 text-sm font-medium">
              {g.categoria}
            </h3>
            <ul className="mt-4 space-y-2 text-muted">
              {g.techs.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
