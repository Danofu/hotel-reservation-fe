import React, { FC } from 'react';
import Stack from '@mui/material/Stack';

import NavigationLink from 'src/components/Navigation/NavigationLink';
import { Props } from 'src/components/Navigation/types';

const Navigation: FC<Props> = ({ navLinks, ...props }) => (
  <Stack component="nav" direction="row" spacing={1} {...props}>
    {navLinks.map((navLink) => (
      <NavigationLink key={navLink.key} {...navLink} />
    ))}
  </Stack>
);

export default Navigation;

export type NavigationProps = Props;
