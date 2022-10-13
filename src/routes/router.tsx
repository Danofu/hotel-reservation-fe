import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from 'src/routes/App';
import ErrorPage from 'src/routes/ErrorPage';
import Login from 'src/routes/Login';

export default createBrowserRouter([
  { children: [{ element: <Login />, path: 'login' }], element: <App />, errorElement: <ErrorPage />, path: '/' },
]);
