// frontend/src/store/auth.store.ts
import api from "@/api/api";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  name: string;
  role: number;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Acciones
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  verifyAuth: () => Promise<void>;
  clearAuth: () => void;
  setLoading: (loading: boolean) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });

        try {
          // Usar la ruta correcta: /api/auth/login
          const response = await api.post("/api/v1/auth/login", { email, password });

          if (response.data.success) {
            set({
              user: response.data.user,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
            return { success: true, message: response.data.message };
          } else {
            set({ isLoading: false });
            return { success: false, message: response.data.message };
          }
        } catch (error: any) {
          const errorMessage =
            error.response?.data?.message || error.message || "Error de conexión con el servidor";

          set({
            isLoading: false,
            error: errorMessage,
          });

          return {
            success: false,
            message: errorMessage,
          };
        }
      },

      logout: async () => {
        try {
          await api.post("/api/v1/auth/logout");
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
        } finally {
          get().clearAuth();
        }
      },

      verifyAuth: async () => {
        set({ isLoading: true });

        try {
          const response = await api.get("/api/v1/auth/verify");

          if (response.data.success) {
            set({
              user: response.data.user,
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            get().clearAuth();
          }
        } catch (error) {
          get().clearAuth();
        } finally {
          set({ isLoading: false });
        }
      },

      clearAuth: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null,
        });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
