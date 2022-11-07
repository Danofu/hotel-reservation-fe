import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthorizationContext } from 'providers/AuthorizationProvider/constants';

const ProtectedRoutes = () => {
  const { isAuthorized } = useContext(AuthorizationContext);
  const { pathname } = useLocation();

  return isAuthorized ? <Outlet /> : <Navigate replace to={`/login?callbackUrl=${encodeURI(pathname)}`} />;
};

export default ProtectedRoutes;
