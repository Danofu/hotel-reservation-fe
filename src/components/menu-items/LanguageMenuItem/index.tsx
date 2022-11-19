import CheckIcon from '@mui/icons-material/Check';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import React, { FC } from 'react';

import { Props as LanguageMenuItemProps } from 'components/menu-items/LanguageMenuItem/types';
import ListItemText from '@mui/material/ListItemText';

const LanguageMenuItem: FC<LanguageMenuItemProps> = ({
  IconProps,
  ListItemIconProps,
  ListItemTextProps,
  label,
  selected,
  ...props
}) => (
  <MenuItem {...props}>
    {selected && (
      <ListItemIcon {...ListItemIconProps}>
        <CheckIcon {...IconProps} />
      </ListItemIcon>
    )}
    <ListItemText inset={!selected} {...ListItemTextProps}>
      {label}
    </ListItemText>
  </MenuItem>
);

export default LanguageMenuItem;

export type { LanguageMenuItemProps };
