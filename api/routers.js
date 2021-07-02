import express from 'express';
import * as ProductController from './product.controller.js';
import * as CartController from './cart.controller.js';

const router = express.Router();

router.get('/products', ProductController.getAllProducts);
router.get('/product/:pid', ProductController.getProductById);
router.post('/product/add', ProductController.createProduct);

router.get('/carts', CartController.getAllCarts);
router.get('/cart/:uid', CartController.getUserCartItems);
router.post('/cart/add', CartController.addUserCartItem);
router.post('/cart/delete', CartController.removeUserCartItem);
router.post('/cart/delete/all', CartController.removeAllUserCartItems);

export default router;


