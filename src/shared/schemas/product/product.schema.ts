import { z } from 'zod';

export const productSchema = z.object({
	code: z
		.string()
		.min(2, {
			message: 'Código es requerido',
		})
		.max(6, {
			message: 'Código máximo de 6 caracteres',
		}),
	description: z.string().min(2, {
		message: 'Debe ingresar una descripcion',
	}),
	brandId: z.string().min(2, { message: 'Debe seleccionar una Marca' }),
	categoryId: z.string().min(2, { message: 'Debe seleccionar un Rubro' }),
	cost: z.number().min(0, { message: 'El costo debe ser mayor a 0' }),
	profit: z
		.number()
		.min(0, { message: 'La ganancia debe ser mayor a 0' })
		.max(100, { message: 'La ganancia no puede ser mayor al 100%' }),
	iva: z.string({ message: 'Ingrese IVA' }).min(1, { message: 'El IVA es requerido' }),
	calculatedCost: z.number().min(0, { message: 'El costo calculado debe ser mayor a 0' }),
	calculatedPrice: z.number().min(0, { message: 'El precio calculado debe ser mayor a 0' }),
});

export type ProductFormValues = z.infer<typeof productSchema>;
