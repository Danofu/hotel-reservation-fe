import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Portal from '@mui/material/Portal';
import React from 'react';
import { grey } from '@mui/material/colors';

const loading = document.getElementById('loading') as HTMLElement;

const LoadingBackdrop = () => (
  <Portal container={loading}>
    <Backdrop open sx={{ color: grey[50], zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  </Portal>
);

export default LoadingBackdrop;
