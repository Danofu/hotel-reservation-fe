import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { MouseEvent, useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import { AccountCircle } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';
import { AuthorizationContext } from 'src/providers/AuthorizationProvider';

const Header = () => {
  const { isAuthorized, logout } = useContext(AuthorizationContext);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  const handleAccountButtonClick = (event: MouseEvent<HTMLElement>) => setMenuAnchorEl(event.currentTarget);

  const handleMenuClose = () => setMenuAnchorEl(null);

  const handleMenuLogoutClick = () => {
    logout();
    handleMenuClose();
  };

  return (
    <AppBar
      position="static"
      sx={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', px: 6, py: 1 }}
    >
      <Typography component="h1" textTransform="capitalize" variant="h6">
        Hotel booking
      </Typography>
      {isAuthorized ? (
        <>
          <IconButton color="inherit" onClick={handleAccountButtonClick} size="large">
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            keepMounted
            onClose={handleMenuClose}
            open={!!menuAnchorEl}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem onClick={handleMenuLogoutClick}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Link color="inherit" component={RouterLink} textTransform="uppercase" to="/login" underline="none">
          Login
        </Link>
      )}
    </AppBar>
  );
};

export default Header;
