import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import brandRouter from './routes/brandRoutes.js';
import cors from 'cors';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log(err.message);
  });
const app = express();
app.use(cors());
app.use('/api/seed', seedRouter);
app.use('/api/brands', brandRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(` Serve at http://localhost:${port}`);
});
