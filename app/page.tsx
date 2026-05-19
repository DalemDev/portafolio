import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import SobreMi from "@/components/SobreMi";
import Tecnologias from "@/components/Tecnologias";
import Proyectos from "@/components/Proyectos";
import Proceso from "@/components/Proceso";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <NavBar />
      <Hero />
      <Servicios />
      <SobreMi />
      <Tecnologias />
      <Proyectos />
      <Proceso />
      <Contacto />
      <Footer />
    </main>
  );
}
