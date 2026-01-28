import React, { useState } from 'react';
import { useMoodRecommendations } from '../hooks/useMoodRecommendations';

const MOOD_OPTIONS = [
  { id: 'cansado', label: '😫 Cansado', desc: 'Necesito energía pura' },
  { id: 'estresado', label: '🤯 Estresado', desc: 'Busco algo relajante' },
  { id: 'caluroso', label: '🔥 Caluroso', desc: 'Algo refrescante' },
  { id: 'creativo', label: '🎨 Creativo', desc: 'Sorpréndeme' },
];

export const MoodSelector = () => {
  // Desestructuramos nuestro Custom Hook (SOLID: Dependency Inversion)
  const { recommendations, loading, error, getRecommendations } = useMoodRecommendations();
  const [activeMood, setActiveMood] = useState(null);

  const handleMoodSelect = (moodId) => {
    setActiveMood(moodId);
    getRecommendations(moodId);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      
      {/* --- Header Section --- */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-gold-accent)] tracking-wide">
          Mood Experience
        </h2>
        <p className="text-[var(--color-cafe-light)] text-lg font-light opacity-80">
          Dinos cómo te sientes, nosotros diseñamos tu momento.
        </p>
      </div>

      {/* --- Selector Controls --- */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {MOOD_OPTIONS.map((option) => (
          <button
            key={option.id}
            onClick={() => handleMoodSelect(option.id)}
            className={`
              group relative px-8 py-4 rounded-xl transition-all duration-300 ease-out
              border border-[var(--color-gold-accent)]/30 overflow-hidden
              ${activeMood === option.id 
                ? 'bg-[var(--color-gold-accent)] text-[var(--color-cafe-dark)] shadow-[0_0_20px_rgba(229,186,115,0.4)]' 
                : 'bg-[var(--color-cafe-medium)]/20 text-[var(--color-cafe-light)] hover:bg-[var(--color-cafe-medium)]'}
            `}
          >
            <span className="relative z-10 flex flex-col items-center gap-1">
              <span className="text-xl font-bold">{option.label}</span>
              <span className={`text-xs ${activeMood === option.id ? 'text-[var(--color-cafe-dark)]' : 'text-gray-400'}`}>
                {option.desc}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* --- Results Area (State Handling) --- */}
      <div className="min-h-[400px]">
        
        {/* State: LOADING (Skeleton UI) */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 rounded-2xl bg-[var(--color-cafe-medium)]/30 border border-[var(--color-cafe-light)]/10"></div>
            ))}
          </div>
        )}

        {/* State: ERROR */}
        {error && !loading && (
          <div className="text-center p-12 border border-red-900/50 rounded-2xl bg-red-900/10">
            <p className="text-red-300 text-xl mb-4">⚠️ Algo salió mal</p>
            <p className="text-gray-400">{error}</p>
            <button 
              onClick={() => handleMoodSelect(activeMood)}
              className="mt-6 text-[var(--color-gold-accent)] underline hover:text-white"
            >
              Intentar de nuevo
            </button>
          </div>
        )}

        {/* State: EMPTY (Success but no data) */}
        {!loading && !error && activeMood && recommendations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--color-cafe-light)] text-xl">
              No encontramos recetas específicas para este estado de ánimo hoy.
              <br/>¿Por qué no pruebas un clásico Espresso?
            </p>
          </div>
        )}

        {/* State: SUCCESS (Render Cards) */}
        {!loading && !error && recommendations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((product, index) => (
              <div 
                key={product.id}
                className="group relative bg-[#1a120b] border border-[var(--color-cafe-light)]/10 rounded-2xl p-6 hover:border-[var(--color-gold-accent)] transition-all duration-500 hover:-translate-y-2 shadow-xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }} // Staggered animation support
              >
                {/* Decorative Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold-accent)]/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif text-[var(--color-cafe-light)] group-hover:text-[var(--color-gold-accent)] transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-[var(--color-gold-accent)] font-bold text-lg">
                      ${product.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-6 h-20 overflow-hidden text-ellipsis">
                    {product.description}
                  </p>

                  <button className="w-full py-3 mt-auto rounded-lg bg-[var(--color-cafe-light)]/10 text-[var(--color-cafe-light)] hover:bg-[var(--color-gold-accent)] hover:text-[#1a120b] font-semibold tracking-wider transition-all uppercase text-sm">
                    Ordenar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};