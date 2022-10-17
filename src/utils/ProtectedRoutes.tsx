import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthorizationContext } from 'src/providers/AuthorizationProvider';

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const { isAuthorized } = useContext(AuthorizationContext);

  return isAuthorized ? <Outlet /> : <Navigate replace to={`/login?callback-pathname=${pathname}`} />;
};

export default ProtectedRoutes;
