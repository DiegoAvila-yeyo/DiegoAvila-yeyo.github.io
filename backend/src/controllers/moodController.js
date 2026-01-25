import * as recommendationService from '../services/recommendationService.js';

export const getRecommendations = async (req, res, next) => {
  try {
    const { mood } = req.body; // El frontend enviará { "mood": "cansado" }

    if (!mood) {
      return res.status(400).json({ success: false, message: "El mood es requerido" });
    }

    const result = await recommendationService.getRecommendationByMood(mood);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};