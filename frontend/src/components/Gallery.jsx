import React from 'react';

const Gallery = () => {
  const images = [
    "/assets/gallery-1.jpg",
    "/assets/gallery-2.jpg",
    "/assets/gallery-3.jpg",
    "/assets/gallery-4.jpg"
  ];

  return (
    <section id="gallery" className="py-24 bg-cafe-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl mb-4">Galería de Experiencias</h2>
        <p className="text-xl text-gray-600 mb-12">Momentos capturados en nuestro espacio.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img 
                src={img} 
                alt={`Galería ${index + 1}`} 
                className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;