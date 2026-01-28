import { useState, useRef, useCallback } from 'react';
import { fetchRecommendations } from '../services/api';

// Tiempo de vida del caché en milisegundos (ej: 5 minutos)
const CACHE_TTL = 5 * 60 * 1000;

/**
 * Custom Hook: useMoodRecommendations
 * Maneja la lógica de petición, estados de carga y cacheo inteligente.
 */
export const useMoodRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Almacén de caché: { [mood]: { data: Array, timestamp: Number } }
  // Usamos useRef para mantener los datos entre renderizados sin disparar re-renders.
  const cache = useRef({});

  const getRecommendations = useCallback(async (mood) => {
    setLoading(true);
    setError(null);
    setRecommendations([]); // Limpiamos vista anterior para efecto visual limpio

    const now = Date.now();
    const cachedEntry = cache.current[mood];

    // 1. Estrategia de Caché: Verificar existencia y validez (TTL)
    if (cachedEntry && (now - cachedEntry.timestamp < CACHE_TTL)) {
      console.log(`[Cache Hit] Recuperando datos locales para: ${mood}`);
      setRecommendations(cachedEntry.data);
      setLoading(false);
      return;
    }

    // 2. Si no hay caché válido, consultamos a la API
    try {
      console.log(`[API Fetch] Consultando backend para: ${mood}`);
      const data = await fetchRecommendations(mood);

      // 3. Guardar en Caché
      cache.current[mood] = {
        data: data,
        timestamp: now
      };

      setRecommendations(data);
    } catch (err) {
      setError(err.message || 'No pudimos conectar con el barista digital.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Función para limpiar caché manualmente si fuera necesario
  const clearCache = () => {
    cache.current = {};
  };

  return {
    recommendations,
    loading,
    error,
    getRecommendations,
    clearCache
  };
};