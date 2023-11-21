import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import resultRoutes from './routes/resultRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

// Request logging middleware
app.use(morgan('dev'));

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Include routes
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/results', resultRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Express Server is running on port ${port}`);
});

export default app;
