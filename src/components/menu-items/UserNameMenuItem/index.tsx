import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import React, { FC } from 'react';

import { Props, Props as UserNameMenuItemProps } from 'components/menu-items/UserNameMenuItem/types';

const UserNameMenuItem: FC<Props> = ({ ListItemTextProps, ...props }) => {
  // TODO: use full name from database

  return (
    <MenuItem {...props}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <ListItemText {...ListItemTextProps}>Daniil Borysov</ListItemText>
    </MenuItem>
  );
};

export default UserNameMenuItem;

export type { UserNameMenuItemProps };
