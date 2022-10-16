import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const auth = { token: null };

  return auth.token ? <Outlet /> : <Navigate replace to="/login" />;
};

export default ProtectedRoutes;
