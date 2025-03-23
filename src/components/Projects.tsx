import { Card, CardContent } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    title: "Pavimentação",
    location: "Cidade",
    status: "Em construção",
    details: [
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto"
    ],
    description: "Projeto de pavimentação em andamento na cidade de Blumenau. Utilizando materiais de alta qualidade e tecnologias modernas para garantir durabilidade e segurança."
  },
  {
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
    title: "Concretagem",
    location: "Cidade",
    status: "Entregue",
    details: [
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto"
    ],
    description: "Serviços de concretagem realizados com excelência, garantindo a qualidade e resistência necessária para cada tipo de construção."
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    title: "Reformas",
    location: "Cidade",
    status: "Lançamento",
    details: [
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto"
    ],
    description: "Serviços de reforma com foco em qualidade e prazo, transformando e modernizando espaços com expertise e profissionalismo."
  },
  {
    image: "https://images.unsplash.com/photo-1621873495914-1c921811e37b",
    title: "Pinturas de Faixas",
    location: "Cidade",
    status: "Em andamento",
    details: [
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto"
    ],
    description: "Serviço especializado em pintura de faixas, garantindo sinalização clara e durável para maior segurança no trânsito."
  },
  {
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
    title: "Contenção Meio Fio",
    location: "Cidade",
    status: "Disponível",
    details: [
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto"
    ],
    description: "Instalação e manutenção de meio-fio com foco em durabilidade e acabamento, contribuindo para a organização e segurança das vias."
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    title: "Rede Pluvial de Esgoto",
    location: "Cidade",
    status: "Em execução",
    details: [
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto",
      "Inserir Texto"
    ],
    description: "Implementação de sistema de rede pluvial e esgoto, garantindo infraestrutura adequada e sustentável para a cidade."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="Projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-32">
          <h2 className="text-4xl mb-4 text-black font-medium">Conheça nossos empreendimentos!</h2>
          <div className="w-64 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-black mb-4">{project.location}</p>
                <ul className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-black">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    setSelectedProject(project);
                    setIsDialogOpen(true);
                  }}
                  className="mt-6 text-accent font-medium hover:text-white h-12 w-56 border-2 border-orange-400 rounded-full bg-white hover:bg-orange-500 transition-colors duration-300"
                >
                  Ver empreendimento →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Localização:</span>
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Status:</span>
                    <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                      {selectedProject.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;