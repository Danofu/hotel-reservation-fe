import IconButton from '@mui/material/IconButton';
import React, { FC } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { Props } from 'components/buttons/VisibilityButton/types';

const VisibilityButton: FC<Props> = ({ IconProps, visible = true, ...props }) => (
  <IconButton {...props}>
    {visible ? <VisibilityIcon {...IconProps} /> : <VisibilityOffIcon {...IconProps} />}
  </IconButton>
);

export default VisibilityButton;

export type VisibilityButtonProps = Props;
