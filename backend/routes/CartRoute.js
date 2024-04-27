import express from "express"
import {addToCart, removeFromCart, getCart} from "../controllers/CartController.js"
import authMiddleware from "../middleware/auth.js";

const CartRouter = express.Router();

CartRouter.post("/add",authMiddleware, addToCart)
CartRouter.post("/remove",authMiddleware,removeFromCart)
CartRouter.post("/get",authMiddleware,getCart)

export default CartRouter;