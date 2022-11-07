import { MenuItemProps } from '@mui/material/MenuItem';
import { MenuProps } from '@mui/material/Menu';

export type Props = MenuProps & { MenuItemProps?: Omit<MenuItemProps, 'key' | 'selected'> };
