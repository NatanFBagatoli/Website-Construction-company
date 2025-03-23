const About = () => {
  return (
    <section id="About" className="py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Sobre 'Nome' Construções</h2>
            <p className=" mb-4 text-black">
              Somos uma empresa familiar dedicada a superar expectativas na colocação de paver e em serviços de construção civil em geral.
            </p>
            <p className=" mb-4 text-black">
              Com décadas de experiência e um compromisso inabalável com a excelência, oferecemos soluções completas e personalizadas para atender às necessidades de nossos clientes.
            </p>
            <p className=" mb-4 text-black">
              Conte conosco para transformar seus projetos em realidade, com qualidade, confiança e um toque familiar.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-black">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">20+</div>
                <div className="text-sm text-black">Empreendimentos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-black">Famílias felizes</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
              alt="Sobre nós"
              className="rounded-lg shadow-xl"
            />
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;