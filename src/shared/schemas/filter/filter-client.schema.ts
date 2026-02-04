import { z } from "zod";

export const filterClientSchema = z.object({
  firstName: z.string().optional(),
});
export type FilterClientFormType = z.infer<typeof filterClientSchema>;
