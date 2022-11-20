import Menu from '@mui/material/Menu';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageMenuItem from 'components/menu-items/LanguageMenuItem';
import { Props } from 'components/menus/LanguageMenu/types';
import { options } from 'components/menus/LanguageMenu/constants';

const LanguageMenu: FC<Props> = ({ LanguageMenuItemProps, PaperProps, sx, ...props }) => {
  const { i18n } = useTranslation();

  const handleItemClick = async (value: string) => {
    await i18n.changeLanguage(value);
  };

  return (
    <Menu PaperProps={{ sx: { maxHeight: 200 }, ...PaperProps }} sx={{ textAlign: 'start', ...sx }} {...props}>
      {options.map(({ title, value }) => (
        <LanguageMenuItem
          key={value}
          label={title}
          onClick={handleItemClick.bind(null, value)}
          selected={value === i18n.language}
          {...LanguageMenuItemProps}
        />
      ))}
    </Menu>
  );
};

export default LanguageMenu;

export type LangManuProps = Props;
