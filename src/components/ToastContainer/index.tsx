import Portal from '@mui/material/Portal';
import React from 'react';
import { toast, ToastContainer as ToastifyToastContainer } from 'react-toastify';
import { useTheme } from '@mui/material';

import { toastContainer } from 'components/ToastContainer/constants';

const ToastContainer = () => {
  const theme = useTheme();

  return (
    <Portal container={toastContainer}>
      <ToastifyToastContainer
        closeButton={false}
        draggable={false}
        newestOnTop
        position={toast.POSITION.TOP_CENTER}
        theme={theme.palette.mode}
      />
    </Portal>
  );
};

export default ToastContainer;
