import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Portal from '@mui/material/Portal';
import React from 'react';
import { grey } from '@mui/material/colors';

import { loadingContainer } from 'src/components/LoadingBackdrop/constants';

const LoadingBackdrop = () => (
  <Portal container={loadingContainer}>
    <Backdrop open sx={{ color: grey[50], zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  </Portal>
);

export default LoadingBackdrop;
