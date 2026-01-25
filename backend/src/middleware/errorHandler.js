export const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${err.message}`);

  // Errores conocidos de Prisma
  if (err.code === 'P2002') {
    return res.status(409).json({ success: false, message: 'El dato ya existe (conflicto de unicidad).' });
  }
  if (err.code === 'P2025') {
    return res.status(404).json({ success: false, message: 'Registro no encontrado en la base de datos.' });
  }

  // Error genérico del servidor
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Error interno del servidor',
    stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  });
};