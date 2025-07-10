import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './src/routes/auth.js'; 
import taskRoutes from './src/routes/taskRoutes.js'; 

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);       // login/register routes
app.use('/api/tasks', taskRoutes);      // new task routes

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
