"use client";

const grupos = [
  {
    categoria: "DevOps & Infraestructura",
    techs: [
      { nombre: "Linux (Admin)", emoji: "🐧" },
      { nombre: "Docker & Compose", emoji: "🐳" },
      { nombre: "GitLab CI/CD", emoji: "🦊" },
      { nombre: "GitHub Actions", emoji: "⚙️" },
      { nombre: "Nginx", emoji: "🟢" },
      { nombre: "Apache", emoji: "🪶" },
      { nombre: "HAProxy", emoji: "⚖️" },
      { nombre: "Bash / Cron", emoji: "💻" },
      { nombre: "SSL / DNS", emoji: "🔒" },
    ],
    color: "from-indigo-500/10 to-violet-500/10",
    border: "border-indigo-500/20",
    badge: "text-indigo-400 bg-indigo-500/10",
  },
  {
    categoria: "Cloud (AWS · Azure)",
    techs: [
      { nombre: "EC2 / S3 / IAM", emoji: "☁️" },
      { nombre: "Azure VMs", emoji: "🔷" },
      { nombre: "Redes / VPC", emoji: "🌐" },
    ],
    color: "from-cyan-500/10 to-indigo-500/10",
    border: "border-cyan-500/20",
    badge: "text-cyan-400 bg-cyan-500/10",
  },
  {
    categoria: "QA & Testing",
    techs: [
      { nombre: "Cypress (E2E)", emoji: "🧪" },
      { nombre: "Testing funcional", emoji: "✅" },
      { nombre: "Testing integración", emoji: "🔗" },
      { nombre: "Diseño de casos", emoji: "📋" },
    ],
    color: "from-green-500/10 to-cyan-500/10",
    border: "border-green-500/20",
    badge: "text-green-400 bg-green-500/10",
  },
  {
    categoria: "FullStack & Bases de datos",
    techs: [
      { nombre: "Laravel", emoji: "🔴" },
      { nombre: "React", emoji: "⚛️" },
      { nombre: "PHP · JS", emoji: "⚡" },
      { nombre: "MySQL", emoji: "🐬" },
      { nombre: "PostgreSQL", emoji: "🐘" },
      { nombre: "MongoDB", emoji: "🍃" },
      { nombre: "Git / GitLab / GitHub", emoji: "🌿" },
    ],
    color: "from-violet-500/10 to-pink-500/10",
    border: "border-violet-500/20",
    badge: "text-violet-400 bg-violet-500/10",
  },
];

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Stack tecnológico
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Herramientas que <span className="gradient-text">domino</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Tecnologías con las que he trabajado en entornos productivos reales,
            no solo en proyectos de práctica.
          </p>
        </div>

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {grupos.map((g) => (
            <div
              key={g.categoria}
              className={`p-6 rounded-2xl bg-gradient-to-br ${g.color} border ${g.border}`}
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 ${g.badge}`}
              >
                {g.categoria}
              </span>
              <div className="flex flex-wrap gap-2">
                {g.techs.map((t) => (
                  <div
                    key={t.nombre}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--bg-card)] border border-[rgba(99,102,241,0.1)] text-sm text-[var(--text-muted)] hover:text-white hover:border-indigo-500/30 transition-all duration-200 cursor-default"
                  >
                    <span>{t.emoji}</span>
                    <span>{t.nombre}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
