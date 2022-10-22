import MenuItem from '@mui/material/MenuItem';
import React, { FC, useContext } from 'react';
import Stack from '@mui/material/Stack';
import { Logout } from '@mui/icons-material';

import { AuthorizationContext, IAuthorizationContext } from 'src/providers/AuthorizationProvider';
import { Props } from 'src/components/menu-items/MenuItemLogout/types';

const MenuItemLogout: FC<Props> = ({ icon, wrapper, ...props }) => {
  const { logout } = useContext<IAuthorizationContext>(AuthorizationContext);

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
