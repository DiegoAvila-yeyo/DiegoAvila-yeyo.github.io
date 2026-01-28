const reservationService = require('../services/reservationService');

const createReservation = async (req, res) => {
  try {
    const { name, email, date, people, type } = req.body;

    // Validación de campos obligatorios (Controller level)
    if (!name || !date || !people || !type) {
      return res.status(400).json({ success: false, message: "Todos los campos son obligatorios." });
    }

    const reservation = await reservationService.createReservation({ name, email, date, people, type });

    return res.status(201).json({
      success: true,
      message: "Reserva creada con éxito.",
      data: reservation
    });

  } catch (error) {
    console.error("Error creando reserva:", error.message);
    return res.status(500).json({ success: false, message: error.message || "Error interno del servidor." });
  }
};

module.exports = { createReservation };