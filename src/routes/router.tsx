import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import LoadingBackdrop from 'components/LoadingBackdrop';
import ProtectedRoutes from 'components/utils/ProtectedRoutes';
import Suspense from 'components/utils/Suspense';
import { LazyAppLayout, LazyErrorPage, LazyHomePage, LazyLoginPage, LazyProtectedPage } from 'routes/constants';
import { PATHNAME_HOME, PATHNAME_LOGIN, PATHNAME_PROTECTED } from 'app-globals';

export default createBrowserRouter([
  {
    children: [
      { element: <Suspense Component={LazyHomePage} fallback={<LoadingBackdrop />} />, path: PATHNAME_HOME },
      {
        children: [
          {
            element: <Suspense Component={LazyProtectedPage} fallback={<LoadingBackdrop />} />,
            path: PATHNAME_PROTECTED,
          },
        ],
        element: <ProtectedRoutes />,
      },
    ],
    element: <Suspense Component={LazyAppLayout} fallback={<LoadingBackdrop />} />,
  },
  {
    element: <Navigate replace to={PATHNAME_HOME} />,
    errorElement: <Suspense Component={LazyErrorPage} fallback={<LoadingBackdrop />} />,
    path: '/',
  },
  { element: <Suspense Component={LazyLoginPage} fallback={<LoadingBackdrop />} />, path: PATHNAME_LOGIN },
]);
