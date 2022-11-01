import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import Providers from 'providers/Providers';
import ThemeProvider from 'providers/ThemeProvider';
import ToastContainer from 'components/ToastContainer';
import router from 'routes/router';

import 'react-toastify/dist/ReactToastify.min.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
const toastContainer = createRoot(document.getElementById('toast') as HTMLElement);

root.render(
  <Providers>
    <CssBaseline />
    <RouterProvider router={router} />
  </Providers>
);

toastContainer.render(
  <ThemeProvider>
    <ToastContainer />
  </ThemeProvider>
);
