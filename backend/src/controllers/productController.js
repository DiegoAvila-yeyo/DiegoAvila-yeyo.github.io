import * as productService from '../services/productService.js';

export const getProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.json({ success: true, count: products.length, data: products });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      const error = new Error('Producto no encontrado');
      error.statusCode = 404;
      throw error;
    }
    res.json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

export const getRecommendation = async (req, res, next) => {
  try {
    const { mood } = req.body;
    if (!mood) {
      return res.status(400).json({ success: false, message: 'El campo "mood" es requerido.' });
    }
    
    const recommendations = await productService.getProductsByMood(mood);
    
    res.json({
      success: true,
      moodDetected: mood,
      data: recommendations
    });
  } catch (error) {
    next(error);
  }
};

export const createNewProduct = async (req, res, next) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json({ success: true, message: 'Producto creado', data: newProduct });
  } catch (error) {
    next(error);
  }
};