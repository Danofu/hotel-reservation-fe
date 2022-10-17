import Box from '@mui/material/Box';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'src/components/Header';

const AppLayout = () => (
  <Box sx={{ minHeight: '100vh', p: 1.5, width: 1 }}>
    <Header />
    <Outlet />
  </Box>
);

export default AppLayout;
