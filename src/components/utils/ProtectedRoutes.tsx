import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthContext } from 'providers/AuthProvider/constants';
import { PATHNAME_LOGIN } from 'app-globals';

const ProtectedRoutes = () => {
  const { isAuthorized } = useContext(AuthContext);
  const { pathname } = useLocation();

  return isAuthorized ? <Outlet /> : <Navigate replace to={`${PATHNAME_LOGIN}?callbackUrl=${encodeURI(pathname)}`} />;
};

export default ProtectedRoutes;
