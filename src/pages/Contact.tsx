import ContactNavbar from "@/components/ContactNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ContactNavbar />
      
      <section className="flex-grow py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="md:hidden mb-4">
            <Link to="/">
              <Button variant="ghost" className="text-black hover:text-accent">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar ao Menu
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-black">Fale com um corretor!</h2>
              <div className="space-y-4 text-black">
                <p><span className="font-semibold">Endereço:</span> Nome da rua, 150, Bairro – Cidade, Estado</p>
                <p><span className="font-semibold">Telefone:</span> (00) 12345-6789</p>
                <p><span className="font-semibold">E-mail:</span> nomedaconstrutora@email.com</p>
                <p><span className="font-semibold">WhatsApp:</span> (00) 12345-6789</p>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a href="" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-8 text-black">Entre em contato!</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <Input type="text" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <Input type="tel" className="w-full" placeholder="DDD + número" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <Input type="email" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Sua mensagem <span className="text-red-500">*</span>
                  </label>
                  <Textarea className="w-full min-h-[150px]" />
                </div>

                <Button type="submit" className="w-full bg-black hover:bg-black/90">
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;