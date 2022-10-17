import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import AuthorizationProvider from 'src/providers/AuthorizationProvider';
import ThemeProvider from 'src/providers/ColorModeProvider';
import ToastContainer from 'src/components/ToastContainer';
import router from 'src/routes/router';

import 'react-toastify/dist/ReactToastify.min.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
const toast = createRoot(document.getElementById('toast') as HTMLElement);

root.render(
  <AuthorizationProvider>
    <ThemeProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </AuthorizationProvider>
);

toast.render(<ToastContainer />);
