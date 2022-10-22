import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthorizationContext, IAuthorizationContext } from 'src/providers/AuthorizationProvider';
import { getStorageItem } from 'src/utils/storage';

const ProtectedRoutes = () => {
  const { isAuthorized } = useContext<IAuthorizationContext>(AuthorizationContext);
  const { pathname } = useLocation();

  const token = getStorageItem('user.token');

  return isAuthorized || token ? <Outlet /> : <Navigate replace to={`/login?callbackUrl=${encodeURI(pathname)}`} />;
};

export default ProtectedRoutes;
