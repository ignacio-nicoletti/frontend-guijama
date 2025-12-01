import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { loginSchema, type LoginFormType } from "../../shared/schemas";
import { CustomButton } from "../form/button/custom-button";
import { CustomFormField } from "../form/form-field/custom-form-field";
import { Form } from "../ui/form";
import { Label } from "../ui/label";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: FieldValues) {
    startTransition(async () => {
      try {
        // Lógica de inicio de sesión
        console.log("Login values:", values);
        // await apiRequest({
        //   endpoint: "/auth/login",
        //   method: "POST",
        //   body: {
        //     email: values.email,
        //     password: values.password,
        //   },
        //   successMessage: "Inicio de sesión exitoso!",
        //   errorMessage: "Credenciales incorrectas",
        // });
      } catch (error) {
        console.error("Failed to login:", error);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-[#f4f4f4] w-lg p-4 rounded-2xl border border-[#ccc]"
      >
        <div className="flex justify-center">
          <Label className="text-2xl">Inicio de sesion</Label>
        </div>
        <div className="space-y-4">
          <CustomFormField name="email" label="" placeholder="Ingrese su email" type="email" />

          <CustomFormField
            name="password"
            label=""
            placeholder="Ingrese su contraseña"
            type="password"
          />
        </div>

        <div className="w-full flex justify-center">
          <CustomButton type="submit" isLoading={isPending} className="w-full max-w-xs">
            Iniciar sesión
          </CustomButton>
        </div>
      </form>
    </Form>
  );
};
