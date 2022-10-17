import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const storage = [localStorage, sessionStorage].find((storage) => !!storage.getItem('user.token'));
  const token = storage?.getItem('user.token');

  return token ? <Outlet /> : <Navigate replace to="/login" />;
};

export default ProtectedRoutes;
