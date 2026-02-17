import { z } from 'zod';

export const clientSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
		.max(50, { message: 'El nombre no puede exceder 50 caracteres' }),
	lastName: z
		.string()
		.min(2, { message: 'El apellido debe tener al menos 2 caracteres' })
		.max(50, { message: 'El apellido no puede exceder 50 caracteres' }),
	dni: z
		.string()
		.min(7, { message: 'El DNI debe tener al menos 7 caracteres' })
		.max(15, { message: 'El DNI no puede exceder 15 caracteres' })
		.regex(/^[0-9]+$/, { message: 'El DNI debe contener solo números' }),
	phone: z
		.string()
		.min(8, { message: 'El teléfono debe tener al menos 8 caracteres' })
		.max(20, { message: 'El teléfono no puede exceder 20 caracteres' }),
	address: z
		.string()
		.max(200, { message: 'La dirección no puede exceder 200 caracteres' })
		.optional()
		.or(z.literal('')),
	email: z
		.string()
		.email({ message: 'Debe ingresar un email válido' })
		.max(100, { message: 'El email no puede exceder 100 caracteres' })
		.optional()
		.or(z.literal('')),
	birthDate: z.date().optional().nullable(),
	taxCondition: z.string(),
	notes: z.string().max(500, { message: 'Las notas no pueden exceder 500 caracteres' }).optional().or(z.literal('')),
	isView: z.boolean(),
});

export type ClientFormType = z.infer<typeof clientSchema>;
