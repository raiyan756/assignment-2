import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model"; // Ensure this path is correct

const createProduct = async (payload: IProduct) => {
  const result = await ProductModel.create(payload); // 'products' should be defined and imported correctly
  return result;
};
const getProductById = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};
const getProductService = async (searchTerm: string) => {
  const searchQuery: any = {};
  if (searchTerm) {
    searchQuery.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
      { tags: { $regex: searchTerm, $options: "i" } },
      { category: { $regex: searchTerm, $options: "i" } },
    ];
  }
  const result = await ProductModel.find(searchQuery);
  return result;
};
const updateProductById = async (id: string, product: IProduct) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, product);
  return result;
};
const deleteProductByIdService = async (id: string) => {
  const result = await ProductModel.findOneAndDelete({ _id: id });
  return result;
};

export const ProductServices = {
  createProduct,
  getProductById,
  getProductService,
  updateProductById,
  deleteProductByIdService,
};
