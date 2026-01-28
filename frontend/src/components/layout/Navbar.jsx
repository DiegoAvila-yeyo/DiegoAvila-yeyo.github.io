import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <>
      {/* Navbar Container con soporte para Safe Area (iPhone Notch/Island) */}
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 border-b border-white/5 pt-[env(safe-area-inset-top)]
        ${scrolled ? 'bg-[#1a120b]/90 shadow-lg backdrop-blur-md pb-4' : 'bg-transparent pb-6 backdrop-blur-sm'}`}>
        
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center mt-4">
          
          {/* Logo - Z-Index alto para sobresalir */}
          <h1 className="text-2xl font-serif font-bold tracking-widest text-[var(--color-gold-accent)] z-[70] relative">
            ZENITH<span className="text-[var(--color-cafe-light)]">.CAFÉ</span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['Experiencia', 'Menú', 'Reservas'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[var(--color-cafe-light)] hover:text-[var(--color-gold-accent)] text-sm uppercase tracking-wider font-medium transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Z-Index 70 para estar siempre sobre el overlay */}
          <button onClick={toggleMenu} className="md:hidden text-[var(--color-gold-accent)] focus:outline-none z-[70] relative p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu - Full Screen */}
      <div className={`fixed inset-0 bg-[#120c07] z-[50] flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold-accent)]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

        {['Experiencia', 'Menú', 'Reservas'].map((item, idx) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            onClick={toggleMenu} 
            style={{ transitionDelay: `${150 + (idx * 100)}ms` }}
            className={`text-4xl font-serif text-[var(--color-cafe-light)] hover:text-[var(--color-gold-accent)] uppercase tracking-widest transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {item}
          </a>
        ))}
        
        <div className="absolute bottom-12 text-gray-500 text-xs tracking-widest uppercase">
          Est. 2026
        </div>
      </div>
    </>
  );
};