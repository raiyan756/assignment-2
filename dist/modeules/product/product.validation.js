"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
const VariantsValidation = zod_1.z.array(zod_1.z.object({
    type: zod_1.z.string().min(1, "Variant type is required"),
    value: zod_1.z.string().min(1, "Variant value is required"),
}));
const InventoryValidation = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean(),
});
exports.productValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    description: zod_1.z.string({
        required_error: "Description is required",
        invalid_type_error: "Description must be a string",
    }),
    price: zod_1.z.number().min(-1, "Student price is required"),
    category: zod_1.z.string().min(1, "Student category is required"),
    tags: zod_1.z.array(zod_1.z.string().min(1, "Student tags is required")),
    variants: VariantsValidation,
    inventory: InventoryValidation,
});
