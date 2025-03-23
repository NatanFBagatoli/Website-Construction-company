import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    
    subtitle: "Construa+",
    description: "Da concepção à entrega, transformamos sonhos em estruturas sólidas e espaços que inspiram."
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",

    subtitle: "Construa+",
    description: "Da concepção à entrega, transformamos sonhos em estruturas sólidas e espaços que inspiram."
  },

{
  image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",

  subtitle: "Construa+",
  description: "Da concepção à entrega, transformamos sonhos em estruturas sólidas e espaços que inspiram."
}
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
 
              <h1 className="text-orange-600 text-4xl md:text-6xl font-bold mb-4">{slide.subtitle}</h1>
              <p className="text-lg md:text-xl mb-8">{slide.description}</p>
              <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-700 transition-all duration-300 px-24 py-8 text-xl md:text-2xl transform hover:scale-105"
                >
                  <MessageCircle className="h-8 w-8 mr-2" />
                  Entre em Contato
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default Hero;