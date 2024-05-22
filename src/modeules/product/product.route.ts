import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/", ProductController.AddProducts);
router.get("/", ProductController.getProducts); // Correct method name
router.get("/:productId", ProductController.getProductById); // Correct method name
router.put("/:productId", ProductController.updateProductById);
router.delete("/:productId", ProductController.deleteProductById);

export const ProductRoute = router;
