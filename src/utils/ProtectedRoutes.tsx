import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthorizationContext } from 'src/providers/AuthorizationProvider';
import { IAuthorizationContext } from 'src/providers/AuthorizationProvider/types';

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const { isAuthorized } = useContext<IAuthorizationContext>(AuthorizationContext);

  return isAuthorized ? <Outlet /> : <Navigate replace to={`/login?callback-pathname=${pathname}`} />;
};

export default ProtectedRoutes;
