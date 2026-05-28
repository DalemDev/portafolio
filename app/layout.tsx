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
  title: "Dalemberg García | DevOps / Infrastructure Engineer",
  description:
    "DevOps / Infrastructure Engineer con 2+ años de responsabilidad directa sobre infraestructura productiva: +20 servidores Linux, pipelines CI/CD con GitLab CI, Docker, y gestión de entornos en producción.",
  keywords: [
    "devops engineer",
    "infraestructura",
    "linux",
    "docker",
    "gitlab ci",
    "github actions",
    "nginx",
    "ci/cd",
    "kubernetes",
    "aws",
    "azure",
  ],
  authors: [{ name: "Dalemberg García" }],
  openGraph: {
    title: "Dalemberg García | DevOps / Infrastructure Engineer",
    description:
      "Ingeniero DevOps con experiencia real en infraestructura productiva, CI/CD y administración de servidores Linux a escala.",
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
