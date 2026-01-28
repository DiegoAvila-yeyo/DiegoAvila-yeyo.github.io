import React, { useState } from 'react';

export const ReservationForm = () => {
  // Estado inicial actualizado con email y type
  const [formData, setFormData] = useState({ name: '', email: '', date: '', people: '2', type: 'Mesa Privada' });
  const [status, setStatus] = useState('IDLE');
  const [dateError, setDateError] = useState('');

  // Validación de Fecha en tiempo real
  const validateDate = (dateString) => {
    const selectedDate = new Date(dateString);
    const now = new Date();
    if (selectedDate < now) {
      setDateError('La fecha no puede ser en el pasado.');
      return false;
    }
    setDateError('');
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date') validateDate(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dateError) return; // Bloquear envío si hay error
    
    setStatus('LOADING');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api'}/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Error');
      setStatus('SUCCESS');
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section id="reservas" className="py-24 bg-[#120c07] relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-gold-accent)] mb-4">Reserva tu Experiencia</h2>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--color-cafe-dark)]/50 p-8 rounded-2xl border border-[var(--color-cafe-light)]/10">
          
          <input required type="text" name="name" placeholder="Nombre Completo" onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-700 py-3 text-[var(--color-cafe-light)] outline-none focus:border-[var(--color-gold-accent)] transition-colors" />

          {/* Nuevo Campo Email */}
          <input required type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-700 py-3 text-[var(--color-cafe-light)] outline-none focus:border-[var(--color-gold-accent)] transition-colors" />

          <div className="relative">
            <input required type="datetime-local" name="date" onChange={handleChange}
              className={`w-full bg-transparent border-b py-3 text-[var(--color-cafe-light)] outline-none transition-colors dark-calendar ${dateError ? 'border-red-500' : 'border-gray-700 focus:border-[var(--color-gold-accent)]'}`} />
            {dateError && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{dateError}</span>}
          </div>

          <div className="flex gap-4">
             {/* Selectores */}
            <select name="people" onChange={handleChange} className="w-1/3 bg-[#1a120b] border-b border-gray-700 py-3 text-[var(--color-cafe-light)] outline-none">
              {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Pax</option>)}
            </select>
            <select name="type" onChange={handleChange} className="w-2/3 bg-[#1a120b] border-b border-gray-700 py-3 text-[var(--color-cafe-light)] outline-none">
              <option>Mesa Privada</option>
              <option>Cata Guiada</option>
              <option>Co-Working Spot</option>
            </select>
          </div>

          <button 
            disabled={status === 'LOADING' || !!dateError} 
            type="submit" 
            className="md:col-span-2 mt-6 bg-[var(--color-gold-accent)] text-[#1a120b] py-4 rounded-lg font-bold tracking-widest hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase text-sm"
          >
            {status === 'LOADING' ? 'Confirmando...' : 'Confirmar Reserva'}
          </button>
        </form>
        
        {/* Modal de éxito igual al anterior... */}
        {status === 'SUCCESS' && (
             <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                <div className="bg-[var(--color-cafe-dark)] p-8 rounded-2xl border border-[var(--color-gold-accent)] text-center max-w-sm w-full">
                    <h3 className="text-2xl font-serif text-[var(--color-gold-accent)] mb-2">¡Reservado!</h3>
                    <p className="text-gray-400 mb-6">Hemos enviado la confirmación a {formData.email}.</p>
                    <button onClick={() => setStatus('IDLE')} className="underline text-gray-500">Cerrar</button>
                </div>
             </div>
        )}
      </div>
    </section>
  );
};