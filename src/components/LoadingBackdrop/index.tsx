import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Portal from '@mui/material/Portal';
import React, { FC, useEffect, useState } from 'react';

import { Props } from 'components/LoadingBackdrop/types';
import { loadingContainer } from 'components/LoadingBackdrop/constants';

const LoadingBackdrop: FC<Props> = ({ IconProps, PortalProps, delay = 1000, sx, ...props }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(setOpen, delay, true);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Portal container={loadingContainer} {...PortalProps}>
      <Backdrop open={open} sx={{ color: 'white', zIndex: ({ zIndex }) => zIndex.drawer + 1, ...sx }} {...props}>
        <CircularProgress color="inherit" {...IconProps} />
      </Backdrop>
    </Portal>
  );
};

export default LoadingBackdrop;

export type LoadingBackdropProps = Props;
