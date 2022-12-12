import Menu from '@mui/material/Menu';
import React, { FC } from 'react';

import LogoutMenuItem from 'components/menu-items/LogoutMenuItem';
import { Props } from 'components/menus/ProfileMenu/types';
import UserNameMenuItem from '../../menu-items/UserNameMenuItem';

const ProfileMenu: FC<Props> = ({ LogoutProps, PaperProps, UserNameProps, sx, ...props }) => (
  <Menu PaperProps={{ sx: { minWidth: 200 }, ...PaperProps }} sx={{ textAlign: 'start', ...sx }} {...props}>
    <UserNameMenuItem ListItemTextProps={{ inset: true }} divider {...UserNameProps} />
    <LogoutMenuItem {...LogoutProps} />
  </Menu>
);

export default ProfileMenu;

export type ProfileMenuProps = Props;
