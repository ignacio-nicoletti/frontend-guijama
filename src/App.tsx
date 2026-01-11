import { Route, Routes } from "react-router-dom";
import ConfigurationLayout from "./components/layout/configuration-layout";
import {
  ClientsPage,
  ConfigurationPage,
  ProductPage,
  SellsPage,
  SupplierPage,
} from "./pages/admin";
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
      {/* 👇 decide a dónde ir */}
      <Route path="/" element={<AuthRedirect />} />

      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/admin/products"
        element={
          <PrivateRoute>
            <ProductPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/clients"
        element={
          <PrivateRoute>
            <ClientsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/sells"
        element={
          <PrivateRoute>
            <SellsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/suppliers"
        element={
          <PrivateRoute>
            <SupplierPage />
          </PrivateRoute>
        }
      />

      <Route path="/admin/configuration" element={<ConfigurationLayout />}>
        <Route index element={<ConfigurationPage />} />
        <Route path="brand" element={<ConfigurationBrandPage />} />
        <Route path="category" element={<ConfigurationCategoryPage />} />
        <Route path="supplier" element={<ConfigurationSupplierPage />} />
        <Route path="client" element={<ConfigurationClientPage />} />
      </Route>
    </Routes>
  );
}

export default App;
