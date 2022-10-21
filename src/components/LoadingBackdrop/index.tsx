import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Portal from '@mui/material/Portal';
import React, { useEffect, useState } from 'react';
import { grey } from '@mui/material/colors';

import { loadingContainer } from 'src/components/LoadingBackdrop/constants';

const LoadingBackdrop = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(setOpen, 1000, true);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Portal container={loadingContainer}>
      <Backdrop open={open} sx={{ color: grey[50], zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Portal>
  );
};

export default LoadingBackdrop;
