import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LoadingBackdrop from 'components/LoadingBackdrop';
import ProtectedRoutes from 'utils/ProtectedRoutes';
import Suspense from 'utils/Suspense';
import { PATH_HOME, PATH_LOGIN, PATH_PROTECTED } from 'routes/constants';

const AppLayout = lazy(() => import('components/AppLayout'));
const ErrorPage = lazy(() => import('routes/ErrorPage'));
const IndexPage = lazy(() => import('routes/IndexPage'));
const LoginPage = lazy(() => import('routes/LoginPage'));
const ProtectedPage = lazy(() => import('routes/ProtectedPage'));

export default createBrowserRouter([
  {
    children: [
      {
        children: [
          { element: <Suspense component={<ProtectedPage />} fallback={<LoadingBackdrop />} />, path: PATH_PROTECTED },
        ],
        element: <Suspense component={<AppLayout />} fallback={<LoadingBackdrop />} />,
      },
    ],
    element: <ProtectedRoutes />,
    errorElement: <Suspense component={<ErrorPage />} fallback={<LoadingBackdrop />} />,
    path: PATH_HOME,
  },
  {
    children: [{ element: <Suspense component={<IndexPage />} fallback={<LoadingBackdrop />} />, index: true }],
    element: <Suspense component={<AppLayout />} fallback={<LoadingBackdrop />} />,
    path: PATH_HOME,
  },
  {
    element: <Suspense component={<LoginPage />} fallback={<LoadingBackdrop />} />,
    path: PATH_LOGIN,
  },
]);
