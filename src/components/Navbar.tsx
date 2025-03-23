import { useEffect, useState } from "react";
import { InstagramIcon, FacebookIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionName: string) => {
    e.preventDefault();
    if (sectionName === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionName);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(sectionName);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '#Home' },
    { name: 'Serviços', href: '#Projects' },
    { name: 'Sobre nós', href: '#About' },
    { name: 'Galeria', href: '/galeria', isLink: true },
    { name: 'Contato', href: '/contato', isLink: true },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "bg-white/95 shadow-md" : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            <div className={`text-3xl font-bold tracking-tight ${isScrolled ? "text-black" : "text-white"}`}>
              'Nome'
              <span className="text-accent"> Construções</span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 focus:outline-none group"
            >
              <div className="relative flex overflow-hidden items-center justify-center w-full h-full transform transition-all duration-200">
                <div className={`flex flex-col justify-between w-6 h-5 transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}>
                  <div className={`bg-current h-[2px] w-full transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-90 translate-y-2.5 bg-black" : isScrolled ? "bg-black" : "bg-white"}`} />
                  <div className={`bg-current h-[2px] w-full transform transition-all duration-300 ${isMobileMenuOpen ? "hidden" : isScrolled ? "bg-black" : "bg-white"}`} />
                  <div className={`bg-current h-[2px] w-full transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-90 -translate-y-2.5 bg-black" : isScrolled ? "bg-black" : "bg-white"}`} />
                </div>
              </div>
            </button>

            <div className="hidden md:flex items-center justify-center flex-1 space-x-16">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative py-3 text-base font-medium ${isScrolled ? "text-black" : "text-white"} transition-colors group hover:text-accent`}
                  >
                    {item.name}
                    <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transform origin-left transition-transform duration-300 ease-out ${
                      activeSection === item.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative py-3 text-base font-medium ${isScrolled ? "text-black" : "text-white"} transition-colors group hover:text-accent`}
                    onClick={(e) => handleNavClick(e, item.href.substring(1))}
                  >
                    {item.name}
                    <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transform origin-left transition-transform duration-300 ease-out ${
                      activeSection === item.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </a>
                )
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
              >
                <Button variant="ghost" size="lg" className={`text-base ${isScrolled ? "text-black" : "text-white"} hover:text-accent`}>
                  <InstagramIcon className="h-5 w-5 mr-2" />
                  Instagram
                </Button>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
              >
                <Button variant="ghost" size="lg" className={`text-base ${isScrolled ? "text-black" : "text-white"} hover:text-accent`}>
                  <FacebookIcon className="h-5 w-5 mr-2" />
                  Facebook
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div 
        className={`fixed top-24 right-0 w-[80%] h-[calc(100vh-6rem)] bg-white shadow-lg md:hidden z-50 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 space-y-4 h-full overflow-y-auto">
          {navItems.map((item) => (
            item.isLink ? (
              <Link
                key={item.name}
                to={item.href}
                className="relative overflow-hidden group px-4 py-3 text-black hover:text-accent transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="relative overflow-hidden group px-4 py-3 text-black hover:text-accent transition-colors duration-300"
                onClick={(e) => handleNavClick(e, item.href.substring(1))}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            )
          ))}
          <div className="flex flex-col space-y-4 pt-4 border-t mt-auto">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-black hover:text-accent transition-all duration-300 transform hover:translate-x-2 px-4 py-3"
            >
              <InstagramIcon className="h-5 w-5 mr-2" />
              Instagram
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-black hover:text-accent transition-all duration-300 transform hover:translate-x-2 px-4 py-3"
            >
              <FacebookIcon className="h-5 w-5 mr-2" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;