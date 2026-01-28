const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ReservationService {
  async createReservation(data) {
    // Validación básica de negocio (ej. no permitir fechas pasadas)
    const reservationDate = new Date(data.date);
    if (reservationDate < new Date()) {
      throw new Error("La fecha de reserva no puede ser en el pasado.");
    }

    // Creación en DB
    const newReservation = await prisma.reservation.create({
      data: {
        name: data.name,
        email: data.email, // Asumiendo que añadimos email para contacto
        date: reservationDate,
        people: parseInt(data.people),
        type: data.type, // 'Cata', 'Mesa Privada', 'Trabajo'
        status: 'PENDING' 
      }
    });

    return newReservation;
  }
}

module.exports = new ReservationService();