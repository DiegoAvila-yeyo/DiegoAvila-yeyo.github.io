import React from 'react';

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--color-cafe-dark)]">
      
      {/* Background Ambience (Radial Gradient Simulation) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-cafe-dark)]/50 to-[var(--color-cafe-dark)] z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-gold-accent)]/10 rounded-full blur-[100px] animate-pulse"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 animate-fade-in-up">
        <span className="block text-[var(--color-gold-accent)] text-sm tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          Est. 2026
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--color-cafe-light)] mb-6 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
          El Arte del <br/>
          <span className="italic text-[var(--color-gold-accent)]">Buen Café</span>
        </h1>

        <p className="max-w-xl mx-auto text-gray-400 text-lg font-light mb-10 opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
          Una experiencia sensorial diseñada para cada estado de ánimo. 
          Descubre tu sabor ideal impulsado por nuestra tecnología.
        </p>

        <a 
          href="#mood-selector"
          className="inline-block border border-[var(--color-gold-accent)] text-[var(--color-gold-accent)] px-8 py-3 rounded-full hover:bg-[var(--color-gold-accent)] hover:text-[#1a120b] transition-all duration-300 uppercase text-xs tracking-widest opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]"
        >
          Descubrir mi Café
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-[var(--color-cafe-light)]/50">
        ↓
      </div>
    </section>
  );
};