import { z } from "zod";
const VariantsValidation = z.array(
  z.object({
    type: z.string().min(1, "Variant type is required"),
    value: z.string().min(1, "Variant value is required"),
  })
);

const InventoryValidation = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

export const productValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Description must be a string",
  }),
  price: z.number().min(-1, "Student price is required"),
  category: z.string().min(1, "Student category is required"),
  tags: z.array(z.string().min(1, "Student tags is required")),
  variants: VariantsValidation,
  inventory: InventoryValidation,
});
