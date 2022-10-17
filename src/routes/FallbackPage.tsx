import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { colord } from 'colord';

const FallbackPage = () => (
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
);
export default FallbackPage;
