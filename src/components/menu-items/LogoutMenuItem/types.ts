import { ListItemIconProps } from '@mui/material/ListItemIcon';
import { ListItemTextProps } from '@mui/material/ListItemText';
import { MenuItemProps } from '@mui/material/MenuItem';
import { SvgIconProps } from '@mui/material/SvgIcon';

export type Props = MenuItemProps & {
  IconProps?: SvgIconProps;
  ListItemIconProps?: ListItemIconProps;
  ListItemTextProps?: ListItemTextProps;
};
