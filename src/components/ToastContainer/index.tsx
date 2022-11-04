import Portal from '@mui/material/Portal';
import React from 'react';
import { ToastContainer as ToastifyToastContainer } from 'react-toastify';
import { useTheme } from '@mui/material';

import { toastContainer } from 'components/ToastContainer/constants';

const ToastContainer = () => {
  const theme = useTheme();

  return (
    <Portal container={toastContainer}>
      <ToastifyToastContainer closeButton={false} draggable={false} newestOnTop theme={theme.palette.mode} />
    </Portal>
  );
};

export default ToastContainer;
