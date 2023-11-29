import express from 'express';
import Brand from '../models/brandModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Brand.deleteMany({});
  const createdBrands = await Brand.insertMany(data.brands);
  res.send({ createdBrands });
});
export default seedRouter;
