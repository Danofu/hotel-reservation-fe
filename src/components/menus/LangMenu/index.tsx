import CheckIcon from '@mui/icons-material/Check';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { FC } from 'react';

import { Props } from 'components/menus/LangMenu/types';
import { options } from 'components/menus/LangMenu/constants';
import { useTranslation } from 'react-i18next';

// TODO: component not finished
const LangMenu: FC<Props> = ({ PaperProps, ...props }) => {
  const { i18n } = useTranslation();

  const handleItemClick = (value: string) => i18n.changeLanguage(value);

  return (
    <Menu PaperProps={{ sx: { maxHeight: 200 }, ...PaperProps }} {...props}>
      {options.map(({ title, value }) => {
        const selected = value === i18n.language;

        return (
          <MenuItem key={value} onClick={handleItemClick.bind(null, value)} selected={selected}>
            {selected && (
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
            )}
            <ListItemText inset={!selected}>{title}</ListItemText>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default LangMenu;

export type LangManuProps = Props;
