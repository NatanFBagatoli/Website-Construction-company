import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { InstagramIcon, FacebookIcon } from "lucide-react";

const ContactNavbar = () => {
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <div className="text-3xl font-bold tracking-tight text-black">
            'Nome'
            <span className="text-accent"> Construções</span>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 space-x-16">
            <Link to="/" className="text-black hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/#Projects" className="text-black hover:text-accent transition-colors">
              Serviços
            </Link>
            <Link to="/#About" className="text-black hover:text-accent transition-colors">
              Sobre nós
            </Link>
            <Link to="/galeria" className="text-black hover:text-accent transition-colors">
              Galeria
            </Link>
            <Link to="/contato" className="text-black hover:text-accent transition-colors">
              Contato
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="lg" className="text-base text-black">
                <InstagramIcon className="h-5 w-5 mr-2" />
                Instagram
              </Button>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="lg" className="text-base text-black">
                <FacebookIcon className="h-5 w-5 mr-2" />
                Facebook
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ContactNavbar;