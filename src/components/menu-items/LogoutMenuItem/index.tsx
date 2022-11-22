import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Logout from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import React, { FC, MouseEvent, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthContext } from 'providers/AuthProvider/constants';
import { Props } from 'components/menu-items/LogoutMenuItem/types';
import { TPATH } from 'components/menu-items/LogoutMenuItem/constants';

const LogoutMenuItem: FC<Props> = ({
  IconProps,
  ListItemIconProps,
  ListItemTextProps,
  onClick = () => undefined,
  ...props
}) => {
  const { logout } = useContext(AuthContext);
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

export default LogoutMenuItem;

export type MenuItemLogoutProps = Props;
