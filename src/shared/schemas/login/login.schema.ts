import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email({ message: 'Ingrese un correo electrónico válido' }),
	password: z.string().min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres',
    }),
});

export type LoginFormType = z.infer<typeof loginSchema>;
