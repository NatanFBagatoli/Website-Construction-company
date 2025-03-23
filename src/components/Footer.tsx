import { Facebook, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, section?: string) => {
    if (path === '/') {
      navigate(path);
      if (section) {
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-medium">© 'Nome' Construções LTDA</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            <button onClick={() => handleNavigation('/')} className="hover:text-[#e65100] transition-colors">
              Início
            </button>
            <button onClick={() => handleNavigation('/', 'Projects')} className="hover:text-[#e65100] transition-colors">
              Serviços
            </button>
            <button onClick={() => handleNavigation('/', 'About')} className="hover:text-[#e65100] transition-colors">
              Sobre Nós
            </button>
            <button onClick={() => handleNavigation('/Galeria')} className="hover:text-[#e65100] transition-colors">
              Galeria
            </button>
            <button onClick={() => handleNavigation('/contato')} className="hover:text-[#e65100] transition-colors">
              Contato
            </button>
          </nav>

          <div className="flex gap-6">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e65100] transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e65100] transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;