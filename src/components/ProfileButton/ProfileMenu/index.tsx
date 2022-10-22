import Menu from '@mui/material/Menu';
import React, { FC } from 'react';

import MenuItemLogout from 'src/components/menu-items/MenuItemLogout';
import { Props } from 'src/components/ProfileButton/ProfileMenu/types';

const ProfileMenu: FC<Props> = ({ itemLogout, sx, ...props }) => {
  return (
    <Menu sx={{ '& .MuiList-root': { minWidth: 180 }, ...sx }} {...props}>
      <MenuItemLogout icon={{ color: 'primary' }} wrapper={{ gap: 2 }} {...itemLogout} />
    </Menu>
  );
};

export default ProfileMenu;

export type ProfileMenuProps = Props;
