import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 sm:pt-40 md:pt-48 md:pb-28">
      <h1 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
        Dalemberg Garcia
      </h1>
      <p className="mt-3 text-xl tracking-tight text-muted sm:text-2xl md:text-3xl">
        DevOps & Infrastructure Engineer
      </p>

      <p className="mt-10 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        Llevo más de dos años a cargo de infraestructura en producción. Mi
        trabajo es que el software llegue a producción de forma automática,
        segura y sin sorpresas, y que se mantenga estable una vez ahí.
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm">
        <a
          href="#contacto"
          className="rounded-full bg-fg px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-80"
        >
          Contactar
        </a>
        <a
          href="/cv.pdf"
          download="cv_dalemberg_garcia.pdf"
          className="link inline-flex items-center gap-1"
        >
          Descargar CV <ArrowDown size={14} strokeWidth={1.5} />
        </a>
        <a
          href="https://github.com/DalemDev"
          target="_blank"
          rel="noopener noreferrer"
          className="link inline-flex items-center gap-1"
        >
          GitHub <ArrowUpRight size={14} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/dalemberg-garcia-688489216/"
          target="_blank"
          rel="noopener noreferrer"
          className="link inline-flex items-center gap-1"
        >
          LinkedIn <ArrowUpRight size={14} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
