import IconButton from '@mui/material/IconButton';
import React, { FC, MouseEvent, useState } from 'react';
import { AccountCircle } from '@mui/icons-material';

import ProfileMenu from 'src/components/ProfileButton/ProfileMenu';
import { Props } from 'src/components/ProfileButton/types';
import Fade from '@mui/material/Fade';

const ProfileButton: FC<Props> = ({ icon, menu, ...props }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  const handleAccountButtonClick = (event: MouseEvent<HTMLElement>) => setMenuAnchorEl(event.currentTarget);

  const handleMenuClose = () => setMenuAnchorEl(null);

  return (
    <>
      <IconButton color="primary" onClick={handleAccountButtonClick} size="large" {...props}>
        <AccountCircle {...icon} />
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
