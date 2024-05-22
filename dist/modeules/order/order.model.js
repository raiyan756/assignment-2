"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const OrderSchema = new mongoose_1.default.Schema({
    email: { type: "string", required: true },
    productId: { type: "string", required: true },
    price: { type: "number", required: true },
    quantity: { type: "number", required: true },
});
exports.OrderModel = mongoose_1.default.model("Order", OrderSchema);
