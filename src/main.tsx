import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppSideBar } from "./components/sidebar/app-sidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SidebarProvider>
        <AppSideBar />
        <App />
      </SidebarProvider>
    </BrowserRouter>
  </QueryClientProvider>,
);
