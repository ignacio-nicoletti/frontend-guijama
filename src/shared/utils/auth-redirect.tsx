// src/shared/routes/auth-redirect.tsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/stores/auth.store";

export const AuthRedirect = () => {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return isAuthenticated ? (
    <Navigate to="/admin/products" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};
