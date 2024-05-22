import { Request, Response } from "express";
import { createOrderService, getOrderService } from "./order.service";
import { OrderValidationSchema } from "./order.validation";

const getOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query?.email;
    const result = await getOrderService(email as string);
    res.status(200).send({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const value = OrderValidationSchema.parse(order);
    const result = await createOrderService(value);
    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: (error as Error).message,
    });
  }
};
export const orderController = {
  getOrder,
  createOrder,
};
