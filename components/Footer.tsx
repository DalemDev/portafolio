export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Dalemberg Garcia</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/DalemDev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fg"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dalemberg-garcia-688489216/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fg"
          >
            LinkedIn
          </a>
          <a href="#inicio" className="transition-colors hover:text-fg">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
