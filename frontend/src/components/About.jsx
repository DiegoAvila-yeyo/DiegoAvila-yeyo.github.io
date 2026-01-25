import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-cafe-light">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div className="space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl text-cafe-dark mb-4">
            Nuestra Filosofía
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            En Zenith Café & Co., creemos que cada taza de café es una experiencia. Seleccionamos cuidadosamente los granos de especialidad de las mejores fincas, ofreciendo un sabor inigualable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Más allá de la bebida, hemos creado un espacio diseñado para inspirar: un oasis minimalista donde la creatividad fluye y la conexión humana se cultiva.
          </p>
          <a href="#" className="inline-block text-cafe-primary font-semibold border-b border-cafe-primary pb-1 hover:text-cafe-secondary hover:border-cafe-secondary transition-colors">
            Descubre más sobre nosotros →
          </a>
        </div>

        {/* Imagen */}
        <div className="relative group">
          <img 
            src="/assets/cafe-interior-1.jpg" 
            alt="Interior de Zenith Café" 
            className="rounded-lg shadow-xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;