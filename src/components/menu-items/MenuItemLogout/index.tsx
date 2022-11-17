import Logout from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import React, { FC, MouseEvent, useContext } from 'react';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';

import { AuthorizationContext } from 'providers/AuthorizationProvider/constants';
import { Props } from 'components/menu-items/MenuItemLogout/types';
import { TPATH } from 'components/menu-items/MenuItemLogout/constants';

// TODO: use "() => void {}" for default onClick
const MenuItemLogout: FC<Props> = ({ IconProps, WrapperProps, onClick, ...props }) => {
  const { logout } = useContext(AuthorizationContext);
  const { t } = useTranslation();

  const handleItemClick = (event: MouseEvent<HTMLLIElement>) => {
    logout();
    onClick?.(event);
  };

  return (
    <MenuItem onClick={handleItemClick} {...props}>
      {/* TODO: use ListItemIcon and ListItemText instead of stack */}
      <Stack direction="row" gap={1} {...WrapperProps}>
        <Logout {...IconProps} />
        {t(`${TPATH}.title`)}
      </Stack>
    </MenuItem>
  );
};

export default MenuItemLogout;

export type MenuItemLogoutProps = Props;
