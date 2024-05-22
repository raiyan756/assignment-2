"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Corrected typo
const cors_1 = __importDefault(require("cors"));
const order_route_1 = require("./modeules/order/order.route");
const product_route_1 = require("./modeules/product/product.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/products", product_route_1.ProductRoute);
app.use("/api/orders", order_route_1.OrderRoute);
app.get("/", (req, res) => {
    res.json({ success: true, server: "Server is On" });
});
app.use("*", (req, res, next) => {
    res.status(404).send({
        success: false,
        message: "Route not found",
    });
});
exports.default = app;
