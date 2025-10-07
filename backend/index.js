import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// basic health check
app.get('/', (req, res) => res.send('Task API running'));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
})
.catch(err => {
  console.error('Mongo connection error', err);
  process.exit(1);
});
