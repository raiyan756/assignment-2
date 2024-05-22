import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { productValidationSchema } from "./product.validation";

const AddProducts = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.createProduct(product);
    res.send({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await ProductServices.getProductById(id);
    res.status(200).send({
      success: true,
      message: "Single Product fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query?.searchTerm as string;
    const result = await ProductServices.getProductService(searchTerm);
    res.status(200).send({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const product = req.body;
    const value = productValidationSchema.parse(product);
    await ProductServices.updateProductById(id, value);
    res.send({
      success: true,
      message: "Product updated successfully!",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    await ProductServices.deleteProductByIdService(id);
    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

export const ProductController = {
  AddProducts,
  getProductById,
  getProducts, // Ensure this method name matches
  updateProductById,
  deleteProductById,
};
