import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import FallbackPage from 'src/routes/FallbackPage';
import ProtectedRoutes from 'src/utils/ProtectedRoutes';

const AppLayout = lazy(() => import('src/routes/AppLayout'));
const ErrorPage = lazy(() => import('src/routes/ErrorPage'));
const IndexPage = lazy(() => import('src/routes/IndexPage'));
const LoginPage = lazy(() => import('src/routes/LoginPage'));

export default createBrowserRouter([
  {
    children: [
      {
        children: [
          {
            element: (
              <Suspense fallback={<FallbackPage />}>
                <IndexPage />
              </Suspense>
            ),
            index: true,
          },
        ],
        element: (
          <Suspense fallback={<FallbackPage />}>
            <AppLayout />
          </Suspense>
        ),
      },
    ],
    element: <ProtectedRoutes />,
    errorElement: (
      <Suspense fallback={<FallbackPage />}>
        <ErrorPage />
      </Suspense>
    ),
    path: '/',
  },
  {
    element: (
      <Suspense fallback={<FallbackPage />}>
        <LoginPage />
      </Suspense>
    ),
    path: '/login',
  },
]);
