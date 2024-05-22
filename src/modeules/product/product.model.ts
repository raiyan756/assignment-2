import { Schema, model } from "mongoose";
import { Inventory, Product, Variant, VariantType } from "./product.interface";

// Variant Schema
const VariantSchema = new Schema<Variant>({
  type: {
    type: String,
    enum: Object.values(VariantType),
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

// Inventory Schema
const InventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

// Product Schema
const ProductSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  tags: {
    type: [String],
    required: [true, "Tags are required"],
  },
  variants: {
    type: [VariantSchema],
    required: [true, "Variants are required"],
  },
  inventory: {
    type: InventorySchema,
    required: [true, "Inventory is required"],
  },
});

export const ProductModel = model<Product>("Product", ProductSchema);
