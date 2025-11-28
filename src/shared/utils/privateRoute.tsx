import { Navigate } from 'react-router-dom';
import React from 'react';
import useAuth from '../hooks/useAuth';



const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;