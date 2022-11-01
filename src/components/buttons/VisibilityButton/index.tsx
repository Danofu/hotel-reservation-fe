import IconButton from '@mui/material/IconButton';
import React, { FC } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Props } from 'components/buttons/VisibilityButton/types';

const VisibilityButton: FC<Props> = ({ icon, visible = true, ...props }) => (
  <IconButton {...props}>{visible ? <Visibility {...icon} /> : <VisibilityOff {...icon} />}</IconButton>
);

export default VisibilityButton;

export type VisibilityButtonProps = Props;
