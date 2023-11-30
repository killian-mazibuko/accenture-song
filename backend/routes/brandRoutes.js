import express from 'express';
import Brand from '../models/brandModel.js';
import expressAsyncHandler from 'express-async-handler';

const brandRouter = express.Router();

brandRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || '';
    const nameFilter = name ? { name: { $regex: `(?i)${name}(?-i)` } } : {};

    const asc = req.query.desc === 'on' ? -1 : 1;
    let sortOrder = { _id: asc };
    if (req.query.sortBy === 'date') {
      sortOrder = { createdAt: asc };
    } else if (req.query.sortBy === 'name') {
      sortOrder = { name: asc };
    }
    const brands = await Brand.find({
      ...nameFilter,
    }).sort(sortOrder);
    res.send(brands);
  })
);

export default brandRouter;
