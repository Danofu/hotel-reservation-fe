import React, { FC } from 'react';
import Stack from '@mui/material/Stack';

import { Props } from 'components/Navigation/types';

const Navigation: FC<Props> = ({ children, ...props }) => (
  <Stack component="nav" direction="row" {...props}>
    {children}
  </Stack>
);

export default Navigation;

export type NavigationProps = Props;
