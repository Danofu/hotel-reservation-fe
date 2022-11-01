import Box from '@mui/material/Box';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const AppLayout = () => (
  <Box sx={{ minHeight: '100vh', width: 1 }}>
    <Header />
    <Outlet />
  </Box>
);

export default AppLayout;
