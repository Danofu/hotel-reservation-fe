import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthorizationContext, IAuthorizationContext } from 'src/providers/AuthorizationProvider';

const ProtectedRoutes = () => {
  const { isAuthorized } = useContext<IAuthorizationContext>(AuthorizationContext);
  const { pathname } = useLocation();

  return isAuthorized() ? <Outlet /> : <Navigate replace to={`/login?callbackUrl=${encodeURI(pathname)}`} />;
};

export default ProtectedRoutes;
