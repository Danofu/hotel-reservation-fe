import IconButton from '@mui/material/IconButton';
import React, { FC } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { Props } from 'src/components/AuthenticationForm/VisibilityButton/types';

const VisibilityButton: FC<Props> = ({ icon, visible = true, ...props }) => (
  <IconButton {...props}>{visible ? <Visibility {...icon} /> : <VisibilityOff {...icon} />}</IconButton>
);

export default VisibilityButton;

export type VisibilityButtonProps = Props;
