import express from 'express';
import { body } from 'express-validator';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(
  protect,
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('description').trim().notEmpty().withMessage('Description is required'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number')
  ],
  createProduct
);

router.route('/:id').get(getProductById).put(protect, updateProduct).delete(protect, deleteProduct);

export default router;
