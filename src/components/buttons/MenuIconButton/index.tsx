import React, { Fragment, MouseEvent, useState } from 'react';
import { MenuProps } from '@mui/material/Menu';

import { Props } from 'components/buttons/MenuIconButton/types';
import { popWithDefault } from 'utils';
import TooltipIconButton from '../TooltipIconButton';

const MenuButton = <TMenu extends Partial<MenuProps>>({
  Icon,
  IconProps,
  Menu,
  MenuListProps = {},
  MenuProps,
  keepMenuOpenAfterClick = false,
  ...props
}: Props<TMenu>) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  const handleButtonClick = (event: MouseEvent<HTMLElement>) => setMenuAnchorEl(event.currentTarget);

  const handleMenuClose = () => setMenuAnchorEl(null);

  const handleMenuListClick = popWithDefault(MenuListProps, 'onClick', () => undefined);
  MenuListProps.onClick = (event: MouseEvent<HTMLUListElement>) => {
    !keepMenuOpenAfterClick && handleMenuClose();
    handleMenuListClick(event);
  };

  return (
    <Fragment>
      <TooltipIconButton onClick={handleButtonClick} {...props}>
        <Icon {...IconProps} />
      </TooltipIconButton>
      <Menu
        MenuListProps={MenuListProps}
        anchorEl={menuAnchorEl}
        onClose={handleMenuClose}
        open={!!menuAnchorEl}
        {...(MenuProps as TMenu)}
      />
    </Fragment>
  );
};

export default MenuButton;

export type MenuButtonProps<TMenu extends Partial<MenuProps>> = Props<TMenu>;
