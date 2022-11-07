import Menu from '@mui/material/Menu';
import React, { FC } from 'react';

import MenuItemLogout from 'components/menu-items/MenuItemLogout';
import { Props } from 'components/menus/ProfileMenu/types';

const ProfileMenu: FC<Props> = ({ LogoutProps, PaperProps, ...props }) => (
  <Menu PaperProps={{ sx: { minWidth: 200 }, ...PaperProps }} {...props}>
    <MenuItemLogout {...LogoutProps} />
  </Menu>
);

export default ProfileMenu;

export type ProfileMenuProps = Props;
