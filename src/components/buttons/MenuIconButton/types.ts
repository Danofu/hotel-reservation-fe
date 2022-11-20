import { FC } from 'react';
import { MenuProps } from '@mui/material/Menu';
import { SvgIconProps } from '@mui/material/SvgIcon';

import { TooltipIconButtonProps } from 'components/buttons/TooltipIconButton';

export type Props<TMenu extends Partial<MenuProps>> = TooltipIconButtonProps & {
  Icon: FC<SvgIconProps>;
  IconProps?: SvgIconProps;
  Menu: FC<TMenu>;
  MenuListProps?: TMenu['MenuListProps'];
  MenuProps?: Omit<Partial<TMenu>, 'MenuListProps'>;
  keepMenuOpenAfterClick?: boolean;
};
