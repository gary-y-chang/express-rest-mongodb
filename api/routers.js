import express from 'express';
import * as ProductController from './product.controller.js';

const router = express.Router();

router.get('/products', ProductController.getProducts);
router.get('/product', ProductController.getProductById);
router.post('/product/add', ProductController.createProduct);

export default router;


