import express from 'express';
import {
  createTask,
  getTasksByStatus,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);             
router.get('/', getTasksByStatus);        
router.put('/:id', updateTask);           
router.delete('/:id', deleteTask);       

export default router;
