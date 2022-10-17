import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';

const AppLayout = () => (
  <Box sx={{ minHeight: '100vh', p: 1.5, width: 1 }}>
    <AppBar position="static" sx={{ justifyContent: 'center', px: 3, py: 2 }}>
      <Typography component="h1" textTransform="uppercase" variant="h6">
        Hotel
      </Typography>
    </AppBar>
    <Outlet />
  </Box>
);

export default AppLayout;
