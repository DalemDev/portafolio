import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import Experiencia from "@/components/Experiencia";
import Proyectos from "@/components/Proyectos";
import Tecnologias from "@/components/Tecnologias";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <SobreMi />
        <Experiencia />
        <Proyectos />
        <Tecnologias />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
