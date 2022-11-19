import CheckIcon from '@mui/icons-material/Check';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Props } from 'components/menus/LanguageMenu/types';
import { options } from 'components/menus/LanguageMenu/constants';

// TODO: component not finished
const LanguageMenu: FC<Props> = ({ PaperProps, ...props }) => {
  const { i18n } = useTranslation();

  const handleItemClick = async (value: string) => {
    await i18n.changeLanguage(value);
  };

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

export default LanguageMenu;

export type LangManuProps = Props;
