import express from 'express';
import { getRecommendations } from '../controllers/moodController.js';

const router = express.Router();

// POST /api/recommendations/match
router.post('/match', getRecommendations);

export default router;