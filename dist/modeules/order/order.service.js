"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const getOrderService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // retrieve orders by email. if email is not provided, it will return all orders
    const emailQuery = email ? { email } : {};
    const result = yield order_model_1.OrderModel.find(emailQuery);
    if (result.length > 0) {
        return result;
    }
    throw new Error("Order not found");
});
const createOrderService = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const id = order.productId;
    const isExist = yield product_model_1.ProductModel.findById(id);
    if (!isExist) {
        throw new Error("Product not found!");
    }
    else {
        const updatedQuantity = isExist.inventory.quantity - order.quantity;
        if (isExist.inventory.inStock && updatedQuantity >= 0) {
            const result = yield order_model_1.OrderModel.create(order);
            yield product_model_1.ProductModel.updateOne({ _id: id }, {
                $set: {
                    "inventory.quantity": updatedQuantity,
                    "inventory.inStock": updatedQuantity > 0,
                },
            });
            return result;
        }
        else {
            throw new Error("Insufficient quantity available in inventory");
        }
    }
});
exports.OrderServices = {
    getOrderService,
    createOrderService,
};
