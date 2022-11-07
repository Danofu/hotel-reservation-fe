import Box from '@mui/material/Box';
import MuiClickAwayListener from '@mui/material/ClickAwayListener';
import React, { FC } from 'react';

import { Props } from 'components/utils/ClickAwayListener/types';

const ClickAwayListener: FC<Props> = ({ children, ...props }) => (
  <MuiClickAwayListener {...props}>
    <Box position="relative">{children}</Box>
  </MuiClickAwayListener>
);

export default ClickAwayListener;

export type ClickAwayListenerProps = Props;
