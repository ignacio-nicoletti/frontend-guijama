import { z } from 'zod';

export const filterProductSchema = z.object({
	brandId: z.string().optional(),
	categoryId: z.string().optional(),
});
export type FilterProductFormType = z.infer<typeof filterProductSchema>;
