import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import React, { FC, useContext } from 'react';

import { AuthContext } from 'providers/AuthProvider';
import { Props, Props as UserNameMenuItemProps } from 'components/menu-items/UserNameMenuItem/types';

const UserNameMenuItem: FC<Props> = ({ ListItemTextProps, ...props }) => {
  const { user } = useContext(AuthContext);

  const fullName = user ? `${user.first_name} ${user.last_name}` : 'No full name';

  return (
    <MenuItem {...props}>
      <ListItemText {...ListItemTextProps}>{fullName}</ListItemText>
    </MenuItem>
  );
};

export default UserNameMenuItem;

export type { UserNameMenuItemProps };
