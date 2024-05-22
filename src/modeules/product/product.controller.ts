import { Request, Response } from "express";
import { ProductServices } from "./product.service";

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

export const ProductController = {
  AddProducts,
};
