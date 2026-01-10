// frontend/src/hooks/useLogin.ts
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "../../stores/auth.store";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        toast.success(result.message || "Inicio de sesión exitoso");

        // Redirigir después de login exitoso
        setTimeout(() => {
          navigate("/admin/products");
        }, 500);
      } else {
        toast.error(result.message || "Error en el inicio de sesión");
      }

      return result.success;
    } catch (error) {
      toast.error("Error de conexión con el servidor");
      console.error("Login error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleLogin,
  };
};
