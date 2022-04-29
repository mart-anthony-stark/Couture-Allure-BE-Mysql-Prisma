import { Router } from "express";
import productsController from "../controller/products.controller";
const router = Router();

router.get("/", productsController.getProducts);
router.post("/", productsController.createProduct);

export default router;
