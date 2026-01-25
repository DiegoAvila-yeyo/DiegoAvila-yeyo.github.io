export const validateProductBody = (req, res, next) => {
  const { name, price, category } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ success: false, message: 'El nombre es obligatorio y debe ser texto.' });
  }
  if (!price || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ success: false, message: 'El precio debe ser un número positivo.' });
  }
  if (!category) {
    return res.status(400).json({ success: false, message: 'La categoría es obligatoria.' });
  }

  next(); // Si todo está bien, pasa al Controlador
};