import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import React, { FC, MouseEvent, useState } from 'react';

import LangMenu from 'components/menus/LangMenu';
import { Props } from 'components/buttons/LangButton/types';

const LangButton: FC<Props> = ({ IconProps, LangMenuProps, ...props }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleClick} {...props}>
        <LanguageIcon {...IconProps} />
      </IconButton>
      <LangMenu
        MenuItemProps={{ onClick: handleClose }}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={!!anchorEl}
        {...LangMenuProps}
      />
    </>
  );
};

export default LangButton;

export type LangButtonProps = Props;
