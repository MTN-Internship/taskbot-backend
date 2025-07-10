
import express from 'express';
const router = express.Router();
import { getCurrentDate, getNextDayDate } from '../controllers/date.controller.js';


router.get('/', getCurrentDate);


router.get('/next-day', getNextDayDate);

export default router; 