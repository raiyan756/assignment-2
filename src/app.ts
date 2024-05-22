import express, { Request, Response } from "express";
import { ProductRoute } from "./modeules/product/product.route";
const app = express();

app.use("/api/products", ProductRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
