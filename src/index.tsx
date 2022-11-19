// TODO: consider eslint-plugin-jsx-a11y
// TODO: add tooltip for all icon buttons

import CssBaseline from '@mui/material/CssBaseline';
import React, { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import 'i18n';
import Providers from 'providers/Providers';
import ToastContainer from 'components/ToastContainer';
import router from 'routes/router';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.min.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Providers>
      <CssBaseline />
      <RouterProvider router={router} />
      <ToastContainer />
    </Providers>
  </StrictMode>
);
