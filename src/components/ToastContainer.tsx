import React from 'react';
import { ToastContainer as ToastifyToastContainer } from 'react-toastify';
import { useTheme } from '@mui/material';

const ToastContainer = () => {
  const theme = useTheme();

  return <ToastifyToastContainer closeButton={false} draggable={false} newestOnTop theme={theme.palette.mode} />;
};

export default ToastContainer;
