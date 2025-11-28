import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import LoginPage from './pages/login-page/login-page';
// import LoginPage from './pages/Login';
// import CreateLink from './pages/CreateLink';
// import ClientePage from './pages/Client';
// import PrivateRoute from './shared/utils/privateRoute';


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

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