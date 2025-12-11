import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page/login-page";
import { ClientsPage, ProductPage, SellsPage, SupplierPage } from "./pages/admin";
// import Home from './pages/Home';

// import LoginPage from './pages/Login';
// import CreateLink from './pages/CreateLink';

// import PrivateRoute from './shared/utils/privateRoute';

function App() {
  return (
    <Routes>
     
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/clients" element={<ClientsPage />} />
      <Route path="/admin/products" element={<ProductPage />} />
      <Route path="/admin/sells" element={<SellsPage />} />
      <Route path="/admin/suppliers" element={<SupplierPage />} />

      {/* <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/crear-link"
        element={
          <PrivateRoute>
            <CreateLink />
          </PrivateRoute>
        }
      />

      <Route
        path="/cliente/:id"
        element={<ClientePage />}
      />
       */}
    </Routes>
  );
}

export default App;
