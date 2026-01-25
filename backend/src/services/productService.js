import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Obtiene todos los productos incluyendo sus etiquetas de mood.
 */
export const getAllProducts = async () => {
  return await prisma.product.findMany({
    include: { moods: true }, // Eager loading: Traemos los tags asociados
    orderBy: { createdAt: 'desc' }
  });
};

/**
 * Obtiene un producto por ID.
 */
export const getProductById = async (id) => {
  return await prisma.product.findUnique({
    where: { id: parseInt(id) },
    include: { moods: true }
  });
};

/**
 * Motor de Recomendación: Convierte una emoción humana en una query de base de datos.
 */
export const getProductsByMood = async (userMood) => {
  // Mapa de lógica: Emoción Usuario -> Beneficio Buscado
  const moodLogic = {
    'cansado': 'Energía',
    'estresado': 'Relax',
    'caluroso': 'Fresco',
    'triste': 'Dulce',
    'enfocado': 'Equilibrado'
  };

  // Si no reconocemos el mood, buscamos "Equilibrado" por defecto
  const targetTag = moodLogic[userMood.toLowerCase()] || 'Equilibrado';

  return await prisma.product.findMany({
    where: {
      moods: {
        some: {
          name: {
            contains: targetTag,
            mode: 'insensitive' // Ignora mayúsculas/minúsculas
          }
        }
      }
    },
    include: { moods: true }
  });
};

/**
 * Crea un nuevo producto (Para el futuro Panel Admin).
 */
export const createProduct = async (data) => {
  return await prisma.product.create({
    data
  });
};