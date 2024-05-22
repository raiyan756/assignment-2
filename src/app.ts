import express, { NextFunction, Request, Response } from "express";
// Corrected typo
import cors from "cors";
import { OrderRoute } from "./modeules/order/order.route";
import { ProductRoute } from "./modeules/product/product.route";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoute);
app.use("/api/orders", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.json({ success: true, server: "Server is On" });
});

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({
    success: false,
    message: "Route not found",
  });
});

export default app;
