import React from 'react';

export const PhilosophySection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      
      {/* Fondo con Textura y Parallax */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2561&auto=format&fit=crop')] bg-fixed bg-cover bg-center opacity-10"></div>
      
      {/* Overlay Gradiente para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cafe-dark)] via-[var(--color-cafe-dark)]/90 to-[var(--color-cafe-dark)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-[var(--color-gold-accent)] uppercase tracking-[0.4em] text-xs font-bold mb-6 block animate-pulse">
          Nuestra Esencia
        </span>
        
        <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-cafe-light)] mb-10 leading-tight">
          No servimos café, <br/>
          <span className="italic text-white/90">honramos un ritual.</span>
        </h2>

        <div className="space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
          <p>
            Desde las tierras altas de Etiopía hasta tu taza, cada grano en Zenith ha sido seleccionado bajo un pacto de comercio justo. Creemos que el lujo real reside en la trazabilidad y en el respeto por la tierra.
          </p>
          <p>
            Nuestro proceso de tostado es una danza entre ciencia y arte, diseñada para despertar notas sensoriales que conectan con tu estado de ánimo. Aquí, el tiempo se detiene y solo existe el aroma.
          </p>
        </div>

        <div className="mt-12">
           <svg className="w-8 h-8 mx-auto text-[var(--color-gold-accent)] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
           </svg>
        </div>
      </div>
    </section>
  );
};