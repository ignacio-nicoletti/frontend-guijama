import { Route, Routes } from "react-router-dom";
import ConfigurationLayout from "./components/layout/configuration-layout";
import { ClientsPage, ConfigurationPage, ProductPage, SellsPage } from "./pages/admin";
import ClientCreatePage from "./pages/admin/clients/views/client-create-page";
import {
  ConfigurationBrandPage,
  ConfigurationCategoryPage,
  ConfigurationClientPage,
  ConfigurationSupplierPage,
} from "./pages/admin/configuration";
import LoginPage from "./pages/login-page/login-page";
import { AuthRedirect } from "./shared/utils/auth-redirect";
import PrivateRoute from "./shared/utils/privateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthRedirect />} />

      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/admin/product"
        element={
          <PrivateRoute>
            <ProductPage />
          </PrivateRoute>
        }
      />
      <Route path="/admin/client" element={<ConfigurationLayout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <ClientsPage />
            </PrivateRoute>
          }
        />
        <Route path="create" element={<ClientCreatePage />} />
      </Route>

      <Route
        path="/admin/sell"
        element={
          <PrivateRoute>
            <SellsPage />
          </PrivateRoute>
        }
      />

      <Route path="/admin/configuration" element={<ConfigurationLayout />}>
        <Route index element={<ConfigurationPage />} />
        <Route path="brand" element={<ConfigurationBrandPage />} />
        <Route path="branch" element={<ConfigurationBrandPage />} />
        <Route path="category" element={<ConfigurationCategoryPage />} />
        <Route path="supplier" element={<ConfigurationSupplierPage />} />
        <Route path="client" element={<ConfigurationClientPage />} />
      </Route>
    </Routes>
  );
}

export default App;
