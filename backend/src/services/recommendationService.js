import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getRecommendationByMood = async (userMood) => {
  // Lógica: Buscar productos que tengan el tag que coincida con el mood del usuario
  // Ejemplo: Si el usuario dice "Cansado", buscamos tag "Energía".
  
  let targetTag = "";
  
  // Mapa de lógica simple (esto podría ser IA en el futuro)
  const moodLogic = {
    'cansado': 'Energía',      // Si estás cansado -> Café fuerte
    'estresado': 'Relax',      // Si estás estresado -> Infusión
    'caluroso': 'Fresco',      // Si hace calor -> Cold Brew
    'goloso': 'Dulce'          // Si tienes antojo -> Postre
  };

  targetTag = moodLogic[userMood.toLowerCase()] || 'Equilibrado';

  const recommendations = await prisma.product.findMany({
    where: {
      moods: {
        some: {
          name: targetTag
        }
      }
    },
    include: {
      moods: true // Incluimos los tags para mostrar por qué lo recomendamos
    }
  });

  return {
    moodDetected: userMood,
    targetBenefit: targetTag,
    products: recommendations
  };
};