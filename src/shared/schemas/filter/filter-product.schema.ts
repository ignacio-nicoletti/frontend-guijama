import { z } from "zod";

export const filterProductSchema = z.object({
  code: z.string().optional(),
  title: z.string().optional(),
  brandId: z.string().optional(),
  categoryId: z.string().optional(),
});
export type FilterProductFormType = z.infer<typeof filterProductSchema>;
