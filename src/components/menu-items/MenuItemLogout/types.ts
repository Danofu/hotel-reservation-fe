import { MenuItemProps } from '@mui/material/MenuItem';
import { StackProps } from '@mui/material/Stack';
import { SvgIconProps } from '@mui/material/SvgIcon';

export type Props = Omit<MenuItemProps, 'onClick'> & { icon?: SvgIconProps; wrapper?: StackProps };
