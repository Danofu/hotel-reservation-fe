import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import ThemeProvider from 'src/providers/ColorModeProvider';
import router from 'src/routes/router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
