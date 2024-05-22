import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();
router.post("/", ProductController.AddProducts);
router.get("/", ProductController.getProductById);
router.get("/:productId", ProductController.getProduct);
router.put("/:productId", ProductController.updateProductById);
router.delete("/:productId", ProductController.deleteProductById);
export const ProductRoute = router;
