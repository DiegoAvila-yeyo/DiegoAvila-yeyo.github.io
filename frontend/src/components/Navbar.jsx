import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Para futuro menú móvil

  return (
    <header className="bg-cafe-light shadow-sm py-4 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl font-bold text-cafe-dark hover:text-cafe-primary transition-colors">
          Zenith Café & Co.
        </a>

        {/* Menú Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          {['Menú', 'Nuestra Historia', 'Eventos', 'Contacto'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-cafe-dark hover:text-cafe-primary font-normal relative group transition-colors"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-cafe-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#" className="bg-cafe-primary text-white px-5 py-2 rounded font-semibold uppercase tracking-wide hover:bg-cafe-secondary hover:-translate-y-0.5 transition-all duration-300">
            Tienda
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;