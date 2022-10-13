import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from 'src/routes/App';

export default createBrowserRouter([
  { element: <App />, path: '/home' },
  { element: <Navigate to="home" />, path: '/' },
]);
