// frontend/src/components/login/login-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { loginSchema, type LoginFormType } from "../../shared/schemas";

import { useLogin } from "@/shared/hooks/query/auth/use-login";
import { useAuthStore } from "@/shared/hooks/stores/auth.store";
import { CustomButton } from "../form/button/custom-button";
import { CustomFormField } from "../form/form-field/custom-form-field";
import { Form } from "../ui/form";
import { Label } from "../ui/label";

export const LoginForm = () => {
  const { isLoading: isLoggingIn, handleLogin } = useLogin();
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Limpiar errores cuando el componente se monta
  useEffect(() => {
    clearError();
  }, [clearError]);

  const onSubmit = async (values: LoginFormType) => {
    await handleLogin(values.email, values.password);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-[#f4f4f4] w-lg p-4 rounded-2xl border border-[#ccc]"
      >
        <div className="flex justify-center">
          <Label className="text-2xl">Inicio de sesion</Label>
        </div>

        {/* Mostrar error si existe */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <div className="space-y-4">
          <CustomFormField
            name="email"
            label=""
            placeholder="Ingrese su email"
            type="email"
            disabled={isLoggingIn}
          />

          <CustomFormField
            name="password"
            label=""
            placeholder="Ingrese su contraseña"
            type="password"
            disabled={isLoggingIn}
          />
        </div>

        <div className="w-full flex justify-center">
          <CustomButton
            type="submit"
            isLoading={isLoggingIn}
            className="w-full max-w-xs"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Iniciando sesión..." : "Iniciar sesión"}
          </CustomButton>
        </div>
      </form>
    </Form>
  );
};
