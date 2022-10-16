import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AppLayout from 'src/routes/AppLayout';
import ErrorPage from 'src/routes/ErrorPage';
import IndexPage from 'src/routes/IndexPage';
import LoginPage from 'src/routes/LoginPage';
import ProtectedRoutes from 'src/utils/ProtectedRoutes';

export default createBrowserRouter([
  {
    children: [{ children: [{ element: <IndexPage />, index: true }], element: <AppLayout /> }],
    element: <ProtectedRoutes />,
    errorElement: <ErrorPage />,
    path: '/',
  },
  {
    element: <LoginPage />,
    path: '/login',
  },
]);
