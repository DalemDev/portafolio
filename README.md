# Dalemberg García — Portafolio Personal

Portafolio personal construido con Next.js 16, React 19 y Tailwind CSS v4.

## Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19 + Tailwind CSS v4
- **Lenguaje**: TypeScript
- **Iconos**: Lucide React
- **Contacto**: EmailJS

## Secciones

| Sección | Descripción |
|---|---|
| Hero | Presentación con stats clave del CV |
| Experiencia | Timeline laboral: Ambiensa (QA + DevOps) y Viamatica |
| Sobre mí | Bio, valores y descarga de CV |
| Tecnologías | Stack DevOps, Cloud, QA y FullStack |
| Proyectos | Logros reales en entornos productivos |
| Contacto | Formulario para oportunidades laborales |

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura

```
app/
  page.tsx        # Composición de secciones
  layout.tsx      # Metadata y fuentes
  globals.css     # Variables CSS y estilos globales
components/
  NavBar.tsx
  Hero.tsx
  Servicios.tsx   # Sección Experiencia laboral
  SobreMi.tsx
  Tecnologias.tsx
  Proyectos.tsx
  Contacto.tsx
  Footer.tsx
  Icons.tsx
public/
  cv.pdf          # CV descargable
```