"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/", product_controller_1.ProductController.AddProducts);
router.get("/", product_controller_1.ProductController.getProducts); // Correct method name
router.get("/:productId", product_controller_1.ProductController.getProductById); // Correct method name
router.put("/:productId", product_controller_1.ProductController.updateProductById);
router.delete("/:productId", product_controller_1.ProductController.deleteProductById);
exports.ProductRoute = router;
