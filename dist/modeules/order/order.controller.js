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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const email = (_a = req.query) === null || _a === void 0 ? void 0 : _a.email;
        const result = yield order_service_1.OrderServices.getOrderService(email);
        res.status(200).send({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const value = order_validation_1.OrderValidationSchema.parse(order);
        const result = yield order_service_1.OrderServices.createOrderService(value);
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
});
exports.orderController = {
    getOrder,
    createOrder,
};
