import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex justify-center items-center text-center overflow-hidden">
      {/* Contenedor del Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover brightness-50"
        >
          {/* OJO: Verifica que la ruta del video sea correcta en tu carpeta public */}
          <source src="/assets/coffee-beans.mp4.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Contenido */}
      <div className="relative z-10 px-6 max-w-4xl bg-black/20 p-8 rounded-lg backdrop-blur-sm">
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
          Donde el Arte del Café Encuentra la Tranquilidad
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Tu santuario urbano en el corazón de Xalapa.
        </p>
        <a href="#menu" className="inline-block border-2 border-white text-white px-8 py-3 rounded font-semibold uppercase tracking-wide hover:bg-white hover:text-cafe-primary transition-all duration-300 transform hover:-translate-y-1">
          Explora Nuestro Menú
        </a>
      </div>
    </section>
  );
};

export default Hero;