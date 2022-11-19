import IconButton from '@mui/material/IconButton';
import React, { FC } from 'react';
import Tooltip from '@mui/material/Tooltip';

import { Props as TooltipIconButtonProps } from 'components/buttons/TooltipIconButton/types';

const TooltipIconButton: FC<TooltipIconButtonProps> = ({ TooltipProps, children, ...props }) => (
  <Tooltip title="" {...TooltipProps}>
    <IconButton {...props}>{children}</IconButton>
  </Tooltip>
);

export default TooltipIconButton;

export type { TooltipIconButtonProps };
