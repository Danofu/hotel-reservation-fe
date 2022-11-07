import Logout from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import React, { FC, MouseEvent, useContext } from 'react';
import Stack from '@mui/material/Stack';

import { AuthorizationContext } from 'providers/AuthorizationProvider/constants';
import { Props } from 'components/menu-items/MenuItemLogout/types';

const MenuItemLogout: FC<Props> = ({ IconProps, WrapperProps, onClick, ...props }) => {
  const { logout } = useContext(AuthorizationContext);

  const handleItemClick = (event: MouseEvent<HTMLLIElement>) => {
    logout();
    onClick?.(event);
  };

  return (
    <MenuItem onClick={handleItemClick} {...props}>
      <Stack direction="row" gap={1} {...WrapperProps}>
        <Logout {...IconProps} />
        Logout
      </Stack>
    </MenuItem>
  );
};

export default MenuItemLogout;

export type MenuItemLogoutProps = Props;
