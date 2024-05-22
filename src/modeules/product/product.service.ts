import { Product } from "./product.interface";
import { ProductModel } from "./product.model"; // Ensure this path is correct

const createProduct = async (payload: Product) => {
  const result = await ProductModel.create(payload); // 'products' should be defined and imported correctly
  return result;
};

export const ProductServices = {
  createProduct,
};
