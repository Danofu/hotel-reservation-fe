// TODO: consider eslint-plugin-jsx-a11y
// TODO: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void#non-leaking_arrow_functions
// TODO: finish translation for Ukrainian and Polish

import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import 'i18n';
import Providers from 'providers/Providers';
import ToastContainer from 'components/ToastContainer';
import router from 'routes/router';

import 'react-toastify/dist/ReactToastify.min.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Providers>
    <CssBaseline />
    <RouterProvider router={router} />
    <ToastContainer />
  </Providers>
);
