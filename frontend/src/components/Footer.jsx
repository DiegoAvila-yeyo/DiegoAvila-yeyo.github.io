import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cafe-footer text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-serif text-3xl font-bold mb-6">Zenith Café & Co.</h2>
          
          {/* Redes Sociales */}
          <div className="flex gap-6 mb-8">
            {['instagram', 'facebook', 'tiktok'].map(social => (
              <a key={social} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cafe-primary transition-colors">
                <img src={`/assets/icons/${social}.svg`} alt={social} className="w-5 h-5 filter invert" /> 
                {/* Nota: Necesitarás iconos SVG o usar una librería como react-icons */}
              </a>
            ))}
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8 text-white/80">
            <a href="#menu" className="hover:text-cafe-secondary transition-colors">Menú</a>
            <a href="#about" className="hover:text-cafe-secondary transition-colors">Filosofía</a>
            <a href="#events" className="hover:text-cafe-secondary transition-colors">Eventos</a>
            <a href="#" className="hover:text-cafe-secondary transition-colors">Tienda</a>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© 2025 Zenith Café & Co. Todos los derechos reservados.</p>
          <p>Hecho con pasión en Xalapa, Veracruz.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;