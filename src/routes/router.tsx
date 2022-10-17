import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LoadingBackdrop from 'src/components/LoadingBackdrop';
import ProtectedRoutes from 'src/utils/ProtectedRoutes';
import Suspense from 'src/utils/Suspense';

const AppLayout = lazy(() => import('src/routes/AppLayout'));
const ErrorPage = lazy(() => import('src/routes/ErrorPage'));
const IndexPage = lazy(() => import('src/routes/IndexPage'));
const LoginPage = lazy(() => import('src/routes/LoginPage'));
const ProtectedPage = lazy(() => import('src/routes/ProtectedPage'));

export default createBrowserRouter([
  {
    children: [
      {
        children: [
          {
            element: <Suspense component={<ProtectedPage />} fallback={<LoadingBackdrop />} />,
            path: 'protected',
          },
        ],
        element: <Suspense component={<AppLayout />} fallback={<LoadingBackdrop />} />,
      },
    ],
    element: <ProtectedRoutes />,
    errorElement: <Suspense component={<ErrorPage />} fallback={<LoadingBackdrop />} />,
    path: '/',
  },
  {
    children: [{ element: <Suspense component={<IndexPage />} fallback={<LoadingBackdrop />} />, index: true }],
    element: <Suspense component={<AppLayout />} fallback={<LoadingBackdrop />} />,
    path: '/',
  },
  {
    element: <Suspense component={<LoginPage />} fallback={<LoadingBackdrop />} />,
    path: '/login',
  },
]);
