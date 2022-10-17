import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import React from 'react';
import { colord } from 'colord';

const FallbackPage = () => (
  <Container
    maxWidth={false}
    sx={{
      alignItems: 'center',
      bgcolor: (theme) => colord(theme.palette.background.default).alpha(0.7).toHex(),
      display: 'flex',
      height: '100vh',
      inset: 0,
      justifyContent: 'center',
      position: 'absolute',
      py: 3,
      width: 1,
    }}
  >
    <CircularProgress />
  </Container>
);
export default FallbackPage;
