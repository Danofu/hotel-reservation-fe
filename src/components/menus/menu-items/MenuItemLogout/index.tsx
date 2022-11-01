import Logout from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import React, { FC, useContext } from 'react';
import Stack from '@mui/material/Stack';

import { AuthorizationContext } from 'providers/AuthorizationProvider/constants';
import { Props } from 'components/menus/menu-items/MenuItemLogout/types';

const MenuItemLogout: FC<Props> = ({ icon, wrapper, ...props }) => {
  const { logout } = useContext(AuthorizationContext);

  return (
    <MenuItem onClick={logout} {...props}>
      <Stack direction="row" gap={1} {...wrapper}>
        <Logout {...icon} />
        Logout
      </Stack>
    </MenuItem>
  );
};

export default MenuItemLogout;

export type MenuItemLogoutProps = Props;
