import React, { useState } from 'react';

const menuItems = [
  {
    id: 1,
    name: "Espresso Clásico",
    desc: "Intenso y aromático, la base de nuestra pasión.",
    price: "$45 MXN",
    image: "/assets/espresso.jpg",
    category: "Café"
  },
  {
    id: 2,
    name: "Latte Arte",
    desc: "Leche vaporizada y espresso, con arte en cada taza.",
    price: "$65 MXN",
    image: "/assets/latte.jpg",
    category: "Café"
  },
  {
    id: 3,
    name: "Cold Brew Infusión",
    desc: "Preparación lenta para un sabor suave y baja acidez.",
    price: "$70 MXN",
    image: "/assets/cold-brew.jpg",
    category: "Café"
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Café de Especialidad');

  return (
    <section id="menu" className="py-24 bg-white border-y border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-cafe-dark mb-4">Nuestro Menú</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Desde espressos clásicos hasta innovadoras bebidas de autor.
        </p>

        {/* Categorías (Botones) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Café de Especialidad', 'Repostería Fina', 'Opciones Ligeras'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cafe-primary text-white border-cafe-primary'
                  : 'bg-transparent text-cafe-primary border-cafe-primary hover:bg-cafe-primary hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-cafe-light rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-serif text-2xl mb-2 text-cafe-dark">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.desc}</p>
                <span className="block text-xl font-bold text-cafe-primary">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <a href="#" className="inline-block bg-cafe-primary text-white px-8 py-3 rounded font-semibold uppercase tracking-wide hover:bg-cafe-secondary transition-all hover:-translate-y-1">
          Ver Menú Completo
        </a>
      </div>
    </section>
  );
};

export default Menu;