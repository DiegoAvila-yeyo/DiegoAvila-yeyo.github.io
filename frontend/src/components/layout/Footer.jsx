import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#120c07] border-t border-[var(--color-gold-accent)]/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-[var(--color-gold-accent)] font-serif text-xl mb-4">Zenith Café</h3>
          <p className="text-gray-500 text-sm">Ingeniería y pasión en cada taza.</p>
        </div>

        <div>
          <h4 className="text-[var(--color-cafe-light)] uppercase tracking-wider text-xs mb-4">Contacto</h4>
          <p className="text-gray-500 text-sm">hola@zenith.cafe</p>
          <p className="text-gray-500 text-sm">+52 (555) 000-0000</p>
        </div>

        <div>
          <h4 className="text-[var(--color-cafe-light)] uppercase tracking-wider text-xs mb-4">Horario</h4>
          <p className="text-gray-500 text-sm">Lun - Vie: 07:00 - 22:00</p>
          <p className="text-gray-500 text-sm">Sab - Dom: 09:00 - 23:00</p>
        </div>

      </div>
      <div className="text-center mt-12 pt-8 border-t border-white/5 text-gray-600 text-xs">
        &copy; 2026 Zenith Café Project. Desarrollado por Diego.
      </div>
    </footer>
  );
};