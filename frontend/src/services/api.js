/**
 * API Service Module
 * Encargado de la comunicación HTTP con el backend de Zenith Café.
 * Sigue el patrón Singleton para la configuración base.
 */

// Usamos variables de entorno para la URL, con fallback a localhost para desarrollo
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Obtiene recomendaciones de productos basadas en el estado de ánimo.
 * @param {string} mood - El estado de ánimo (ej: 'cansado', 'estresado').
 * @returns {Promise<Array>} - Lista de productos recomendados.
 * @throws {Error} - Si la respuesta de red falla.
 */
export const fetchRecommendations = async (mood) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/recommend`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Aquí podríamos añadir headers de autorización en el futuro
      },
      body: JSON.stringify({ mood }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error del servidor: ${response.status}`);
    }

    const result = await response.json();
    
    // Normalizamos la respuesta: asumimos que el backend devuelve { data: [...] } o directamente el array
    return result.data || result; 

  } catch (error) {
    console.error('API Error [fetchRecommendations]:', error);
    throw error; // Relanzamos para que la capa de UI/Hook maneje el estado de error
  }
};