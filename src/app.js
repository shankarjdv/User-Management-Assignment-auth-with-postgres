 
import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './models/initModel.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await initDB();
  console.log(`Server running on port ${PORT}`);
});
