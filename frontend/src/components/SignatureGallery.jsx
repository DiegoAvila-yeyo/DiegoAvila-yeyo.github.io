import React from 'react';

// Simulamos datos traídos de DB para este ejemplo visual
const SIGNATURE_COFFEES = [
  { id: 1, name: "Ethiopian Yirgacheffe", notes: "Jazmín, Limón, Bergamota", price: "$65", img: "bg-amber-900" },
  { id: 2, name: "Sumatra Mandheling", notes: "Tierra, Chocolate Oscuro, Especias", price: "$70", img: "bg-stone-900" },
  { id: 3, name: "Colombia Geisha", notes: "Floral, Miel, Frutas Tropicales", price: "$90", img: "bg-orange-950" },
];

export const SignatureGallery = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif text-[var(--color-cafe-light)] mb-12 text-center">
        Signature <span className="text-[var(--color-gold-accent)] italic">Blends</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SIGNATURE_COFFEES.map((coffee, idx) => (
          <div 
            key={coffee.id}
            className="group relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-2xl transition-transform duration-500 hover:-translate-y-2"
            // Estilo inline para simular delay de animación scroll (puedes usar librería)
            style={{ animation: `fadeIn 0.8s ease-out ${idx * 0.2}s forwards`, opacity: 0 }} 
          >
            {/* Imagen de fondo (Placeholder de color por ahora) */}
            <div className={`absolute inset-0 ${coffee.img} transition-transform duration-700 group-hover:scale-110 opacity-80`}></div>
            
            {/* Overlay Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cafe-dark)] via-transparent to-transparent opacity-90"></div>

            {/* Contenido */}
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-serif text-white mb-2">{coffee.name}</h3>
              <p className="text-[var(--color-gold-accent)] font-bold">{coffee.price}</p>
              
              {/* Tasting Notes (Reveal on Hover) */}
              <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 mt-4">
                <p className="text-sm text-[var(--color-cafe-light)] border-l-2 border-[var(--color-gold-accent)] pl-3 italic">
                  {coffee.notes}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};