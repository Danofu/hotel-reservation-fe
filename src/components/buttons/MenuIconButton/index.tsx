import IconButton from '@mui/material/IconButton';
import React, { Fragment, MouseEvent, useState } from 'react';
import { MenuProps } from '@mui/material/Menu';

import { Props } from 'components/buttons/MenuIconButton/types';
import { pop } from 'utils';

const MenuButton = <TMenu extends Partial<MenuProps>>({
  Icon,
  IconProps,
  Menu,
  MenuListProps = {},
  MenuProps,
  ...props
}: Props<TMenu>) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  const handleButtonClick = (event: MouseEvent<HTMLElement>) => setMenuAnchorEl(event.currentTarget);

  const handleMenuClose = () => setMenuAnchorEl(null);

  // TODO: provide possibility for closing/keeping menu after item clicking
  const handleMenuListClick = pop(MenuListProps, 'onClick');
  MenuListProps.onClick = (event: MouseEvent<HTMLUListElement>) => {
    handleMenuClose();
    handleMenuListClick?.(event);
  };

  return (
    <Fragment>
      <IconButton onClick={handleButtonClick} {...props}>
        <Icon {...IconProps} />
      </IconButton>
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
