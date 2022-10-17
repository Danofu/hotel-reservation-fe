import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import ThemeProvider from 'src/providers/ColorModeProvider';
import ToastContainer from 'src/components/ToastContainer';
import router from 'src/routes/router';

import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider>
    <CssBaseline />
    <RouterProvider router={router} />
    <ToastContainer />
  </ThemeProvider>
);
