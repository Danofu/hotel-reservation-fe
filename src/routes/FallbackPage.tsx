import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Portal from '@mui/material/Portal';
import React from 'react';
import { colord } from 'colord';

const loading = document.getElementById('loading') as HTMLElement;

const FallbackPage = () => (
  <Portal container={loading}>
    <Box
      sx={{
        alignItems: 'center',
        bgcolor: (theme) => colord(theme.palette.background.default).alpha(0.9).toHex(),
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
    </Box>
  </Portal>
);
export default FallbackPage;
