import React from 'react';

const REVIEWS = [
  { id: 1, name: "Sofia V.", role: "Crítico Gastronómico", text: "Nunca pensé que un algoritmo pudiera entender mi paladar mejor que yo. El Geisha que me recomendó fue una revelación.", highlight: true },
  { id: 2, name: "Carlos M.", role: "Arquitecto", text: "El espacio y el café comparten la misma filosofía: perfección estructural. Mi lugar favorito para trabajar.", highlight: false },
  { id: 3, name: "Elena R.", role: "Sommelier de Té", text: "Las notas de cata son precisas. Zenith ha elevado el estándar de lo que significa 'especialidad' en la ciudad.", highlight: false },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-[#0f0a06] border-t border-[var(--color-cafe-light)]/5">
      <div className="max-w-7xl mx-auto">
        <span className="block text-center text-[var(--color-gold-accent)] uppercase tracking-[0.3em] text-xs font-bold mb-16">
          Voces de la Comunidad
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className={`p-8 rounded-none border-l border-[var(--color-gold-accent)]/30 bg-gradient-to-br from-[var(--color-cafe-dark)] to-transparent hover:border-[var(--color-gold-accent)] transition-colors duration-500 ${review.highlight ? 'md:-mt-8' : ''}`}
            >
              <div className="text-4xl text-[var(--color-gold-accent)] font-serif opacity-30 mb-4">"</div>
              <p className="text-[var(--color-cafe-light)] text-lg font-light italic leading-relaxed mb-6">
                {review.text}
              </p>
              <div>
                <h4 className="font-serif text-white text-xl">{review.name}</h4>
                <span className="text-xs uppercase tracking-wider text-gray-500">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; // Default export for lazy loading