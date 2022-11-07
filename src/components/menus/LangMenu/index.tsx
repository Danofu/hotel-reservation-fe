import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { FC } from 'react';

import { Props } from 'components/menus/LangMenu/types';
import { options } from 'components/menus/LangMenu/constants';

const LangMenu: FC<Props> = ({ MenuItemProps, PaperProps, ...props }) => (
  <Menu PaperProps={{ sx: { maxHeight: 200 }, ...PaperProps }} {...props}>
    {options.map(({ title, value }) => (
      <MenuItem key={value} selected={value === 'ua'} {...MenuItemProps}>
        {title}
      </MenuItem>
    ))}
  </Menu>
);

export default LangMenu;

export type LangManuProps = Props;
