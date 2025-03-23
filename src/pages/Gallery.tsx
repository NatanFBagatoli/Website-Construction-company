import ContactNavbar from "@/components/ContactNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ContactNavbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="md:hidden mb-4">
          <Link to="/">
            <Button variant="ghost" className="text-black hover:text-accent">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar ao Menu
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">Nossa Galeria</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
              alt="Projeto Residencial"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Projeto Residencial</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt="Construção Comercial"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Construção Comercial</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              alt="Reforma Estrutural"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Reforma Estrutural</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f"
              alt="Projeto Industrial"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Projeto Industrial</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1481253127861-534498168948"
              alt="Infraestrutura Urbana"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Infraestrutura Urbana</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="Acabamento Premium"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Acabamento Premium</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;