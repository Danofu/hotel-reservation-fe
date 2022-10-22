import AppBar from '@mui/material/AppBar';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { MouseEvent, useContext, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { AccountCircle, Logout } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

import Logo from 'src/components/Logo';
import Navigation from 'src/components/Navigation';
import Spacer from 'src/components/Spacer';
import { AuthorizationContext, IAuthorizationContext } from 'src/providers/AuthorizationProvider';
import { PATH_HOME, PATH_LOGIN } from 'src/routes/constants';
import { navLinks } from 'src/components/Header/constants';

const Header = () => {
  const { isAuthorized, logout } = useContext<IAuthorizationContext>(AuthorizationContext);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  const handleAccountButtonClick = (event: MouseEvent<HTMLElement>) => setMenuAnchorEl(event.currentTarget);

  const handleMenuClose = () => setMenuAnchorEl(null);

  const handleMenuLogoutClick = () => {
    logout();
    handleMenuClose();
  };

  return (
    <AppBar color="default" position="static">
      <Toolbar disableGutters sx={{ px: 6 }}>
        <Logo to={PATH_HOME} />
        <Navigation ml={6} navLinks={navLinks} />
        <Spacer />
        {isAuthorized ? (
          <>
            <IconButton color="primary" onClick={handleAccountButtonClick} size="large">
              <AccountCircle />
            </IconButton>
            <Menu
              TransitionComponent={Fade}
              anchorEl={menuAnchorEl}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              keepMounted
              onClose={handleMenuClose}
              open={!!menuAnchorEl}
              sx={{ '& .MuiList-root': { minWidth: 180 } }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem onClick={handleMenuLogoutClick}>
                <Logout color="primary" sx={{ mr: 2 }} />
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Link color="inherit" component={RouterLink} textTransform="uppercase" to={PATH_LOGIN} underline="hover">
            Login
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
