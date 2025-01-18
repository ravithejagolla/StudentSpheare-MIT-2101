import {Router} from 'express'
import { createProduct,getProduct,products } from "../controllers/productController.js";
import { authMiddleware } from '../middlewares/authMiddleware.js';

const productRouter=Router();

productRouter.post('/create-product', createProduct);
productRouter.get('/products:id',authMiddleware,getProduct)
productRouter.get('/category', authMiddleware,products);


export {productRouter}