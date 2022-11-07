import { FC } from 'react';
import { IconButtonProps } from '@mui/material/IconButton';
import { MenuProps } from '@mui/material/Menu';
import { SvgIconProps } from '@mui/material/SvgIcon';

export type Props<TMenu extends Partial<MenuProps>> = IconButtonProps & {
  Icon: FC<SvgIconProps>;
  IconProps?: SvgIconProps;
  Menu: FC<TMenu>;
  MenuListProps?: TMenu['MenuListProps'];
  MenuProps?: Omit<Partial<TMenu>, 'MenuListProps'>;
};
