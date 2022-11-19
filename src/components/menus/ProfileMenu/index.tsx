import Menu from '@mui/material/Menu';
import React, { FC } from 'react';

import LogoutMenuItem from 'components/menu-items/LogoutMenuItem';
import { Props } from 'components/menus/ProfileMenu/types';

const ProfileMenu: FC<Props> = ({ LogoutProps, PaperProps, ...props }) => (
  <Menu PaperProps={{ sx: { minWidth: 200 }, ...PaperProps }} {...props}>
    <LogoutMenuItem {...LogoutProps} />
  </Menu>
);

export default ProfileMenu;

export type ProfileMenuProps = Props;
