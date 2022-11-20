import React, { Fragment, MouseEvent, useState } from 'react';
import { MenuProps } from '@mui/material/Menu';

import TooltipIconButton from 'components/buttons/TooltipIconButton';
import { Props } from 'components/buttons/MenuIconButton/types';
import { menuContainer } from 'components/buttons/MenuIconButton/constants';
import { popWithDefault } from 'utils';

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
        container={menuContainer}
        onClose={handleMenuClose}
        open={!!menuAnchorEl}
        {...(MenuProps as TMenu)}
      />
    </Fragment>
  );
};

export default MenuButton;

export type MenuButtonProps<TMenu extends Partial<MenuProps>> = Props<TMenu>;
