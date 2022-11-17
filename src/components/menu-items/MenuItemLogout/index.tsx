import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Logout from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import React, { FC, MouseEvent, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthorizationContext } from 'providers/AuthorizationProvider/constants';
import { Props } from 'components/menu-items/MenuItemLogout/types';
import { TPATH } from 'components/menu-items/MenuItemLogout/constants';

const MenuItemLogout: FC<Props> = ({
  IconProps,
  ListItemIconProps,
  ListItemTextProps,
  onClick = () => void {},
  ...props
}) => {
  const { logout } = useContext(AuthorizationContext);
  const { t } = useTranslation();

  const handleItemClick = (event: MouseEvent<HTMLLIElement>) => {
    logout();
    onClick(event);
  };

  return (
    <MenuItem onClick={handleItemClick} {...props}>
      <ListItemIcon {...ListItemIconProps}>
        <Logout {...IconProps} />
      </ListItemIcon>
      <ListItemText {...ListItemTextProps}>{t(`${TPATH}.title`)}</ListItemText>
    </MenuItem>
  );
};

export default MenuItemLogout;

export type MenuItemLogoutProps = Props;
