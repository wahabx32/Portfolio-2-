import About from "@/components/About";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />
      <div className="relative z-10">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
