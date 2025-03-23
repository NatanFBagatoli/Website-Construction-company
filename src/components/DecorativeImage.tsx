const DecorativeImage = () => {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full overflow-hidden z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-accent"
          />
        </svg>
      </div>
      <div className="w-full h-[700px] relative">
        <img
          src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f"
          alt="Tropical beach"
          className="w-full h-full object-cover"
        />
         <div className="absolute inset-0 bg-black/50 rounded-lg flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold mb-4 text-center">O seu sonho está aqui!</h2>
            <p className="text-xl text-center">Conquiste sua casa própria com parcelas que cabem no seu bolso.</p>
          </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180 z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-accent"
          />
        </svg>
      </div>
    </div>
  );
};

export default DecorativeImage;