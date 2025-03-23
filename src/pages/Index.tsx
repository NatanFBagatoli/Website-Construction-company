import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import DecorativeImage from "@/components/DecorativeImage";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <DecorativeImage />
      <About />
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default Index;