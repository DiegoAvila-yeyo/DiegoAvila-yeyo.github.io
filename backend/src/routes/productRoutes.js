import express from 'express';
import { 
  getProducts, 
  getProduct, 
  createNewProduct, 
  getRecommendation 
} from '../controllers/productController.js';
import { validateProductBody } from '../middleware/validator.js';

const router = express.Router();

// Rutas Públicas
router.get('/', getProducts);
router.get('/:id', getProduct);

// Rutas Especiales (El Core de Zenith)
router.post('/recommend', getRecommendation);

// Rutas Protegidas (Futuro Admin Panel) - Validamos el body antes de llamar al controlador
router.post('/', validateProductBody, createNewProduct);

export default router;