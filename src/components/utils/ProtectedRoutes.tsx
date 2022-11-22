import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthContext } from 'providers/AuthProvider/constants';

const ProtectedRoutes = () => {
  const { isAuthorized } = useContext(AuthContext);
  const { pathname } = useLocation();

  return isAuthorized ? <Outlet /> : <Navigate replace to={`/login?callbackUrl=${encodeURI(pathname)}`} />;
};

export default ProtectedRoutes;
