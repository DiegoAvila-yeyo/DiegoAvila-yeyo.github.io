import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import productRoutes from './routes/productRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// 1. Security Middlewares
app.use(helmet()); // Headers de seguridad HTTP
app.use(cors());   // Permite peticiones desde React
app.use(express.json()); // Body parser para JSON

// 2. Logging & Monitoring
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 3. Rate Limiting (Protección DDoS básica)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite de 100 peticiones por IP
  message: 'Demasiadas peticiones desde esta IP, intenta de nuevo más tarde.'
});
app.use('/api', limiter);

// 4. Rutas
app.use('/api/products', productRoutes);

// 5. Route Not Found (404)
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Ruta no encontrada' });
});

// 6. Global Error Handler (Siempre al final)
app.use(errorHandler);

export default app;