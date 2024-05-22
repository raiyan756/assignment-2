import mongoose from "mongoose";
import { IInventory, IProduct, IVariant } from "./product.interface";
// import { IInventory, IProduct, IVariant } from "./product.interface";

const variantsSchema = new mongoose.Schema<IVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new mongoose.Schema<IInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantsSchema],
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

export const ProductModel = mongoose.model("Product", productSchema);
