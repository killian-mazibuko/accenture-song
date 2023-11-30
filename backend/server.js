import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import brandRouter from './routes/brandRoutes.js';

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
app.use('/api/seed', seedRouter);
app.use('/api/brands', brandRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(` Serve at http://localhost:${port}`);
});
