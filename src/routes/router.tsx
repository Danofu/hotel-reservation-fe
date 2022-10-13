import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AppLayout from 'src/routes/AppLayout';
import ErrorPage from 'src/routes/ErrorPage';
import LoginPage from 'src/routes/LoginPage';

export default createBrowserRouter([
  { children: [{ element: <LoginPage />, path: 'login' }], element: <AppLayout />, errorElement: <ErrorPage />, path: '/' },
]);
