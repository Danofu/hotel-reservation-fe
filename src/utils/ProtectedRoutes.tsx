import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const storage = [localStorage, sessionStorage].find((storage) => !!storage.getItem('user.token'));
  const token = storage?.getItem('user.token');

  return token ? <Outlet /> : <Navigate replace to={`/login?callback-pathname=${pathname}`} />;
};

export default ProtectedRoutes;
