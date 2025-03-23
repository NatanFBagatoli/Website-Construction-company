import { Button } from "./ui/button";
import { MapPin, Clock, Phone, Wifi } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Informações sobre a Empresa</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2 text-black">WhatsApp</h3>
              <p className="text-black mb-4">(47) 98438-9325</p>
              <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Solicitar Orçamento
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2 text-black">Localização</h3>
              <p className="text-black">
                Nome da rua, 146
                <br />
                Bairro – Cidade, Estado
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2 text-black">Atendimento</h3>
              <p className="text-black">
                Segunda a Sexta:
                <br />
                07:00 às 18:00
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <Wifi className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2 text-black">Redes Sociais</h3>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-accent hover:text-accent/80">       
                </a> 
              </div>
              <p className="text-black">
                Acompanhe-nos
                <br />
                e fique por dentro!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
