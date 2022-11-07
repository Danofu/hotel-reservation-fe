import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import React, { FC, MouseEvent, useState } from 'react';

import ProfileMenu from 'components/menus/ProfileMenu';
import { Props } from 'components/buttons/ProfileButton/types';

const ProfileButton: FC<Props> = ({ icon, menu, ...props }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  const handleAccountButtonClick = (event: MouseEvent<HTMLElement>) => setMenuAnchorEl(event.currentTarget);

  const handleMenuClose = () => setMenuAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleAccountButtonClick} {...props}>
        <AccountCircleIcon {...icon} />
      </IconButton>
      <ProfileMenu
        TransitionComponent={Fade}
        anchorEl={menuAnchorEl}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        keepMounted
        onClose={handleMenuClose}
        open={!!menuAnchorEl}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        {...menu}
      />
    </>
  );
};

export default ProfileButton;

export type ProfileButtonProps = Props;
