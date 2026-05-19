import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dalemberg García | Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack con 3+ años de experiencia construyendo aplicaciones web modernas. Disponible para proyectos freelance: desarrollo web completo, frontend, backend y consultoría técnica.",
  keywords: [
    "desarrollador full stack",
    "freelance",
    "desarrollo web",
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
  ],
  authors: [{ name: "Dalemberg García" }],
  openGraph: {
    title: "Dalemberg García | Desarrollador Full Stack",
    description:
      "Desarrollo web que convierte ideas en productos digitales reales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
