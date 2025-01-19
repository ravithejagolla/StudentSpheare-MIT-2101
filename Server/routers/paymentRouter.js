
import {Router} from 'express';
import { getCheckout } from "../controllers/paymentController.js";
import { authMiddleware } from '../middlewares/authMiddleware.js';

const paymentRouter=Router()

paymentRouter.get('/checkout',authMiddleware, getCheckout);


export default paymentRouter;