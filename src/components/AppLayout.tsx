import Container from '@mui/material/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const AppLayout = () => (
  <Container disableGutters maxWidth={false} sx={{ minHeight: '100vh', textAlign: 'center' }}>
    <Header />
    <Outlet />
  </Container>
);

export default AppLayout;
