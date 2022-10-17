import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { MouseEvent, useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AccountCircle, Logout } from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { AuthorizationContext } from 'src/providers/AuthorizationProvider';
import { IAuthorizationContext } from 'src/providers/AuthorizationProvider/types';

const pages = [
  { key: Math.random(), label: 'Home', path: '/' },
  { key: Math.random(), label: 'Protected', path: '/protected' },
];

const Header = () => {
  const { isAuthorized, logout } = useContext<IAuthorizationContext>(AuthorizationContext);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  const handleAccountButtonClick = (event: MouseEvent<HTMLElement>) => setMenuAnchorEl(event.currentTarget);

  const handleMenuClose = () => setMenuAnchorEl(null);

  const handleMenuLogoutClick = () => {
    logout();
    handleMenuClose();
  };

  // TODO: split onto components
  return (
    <AppBar position="static" sx={{ alignItems: 'center', flexDirection: 'row', minHeight: 64, px: 6, py: 1 }}>
      <Typography component="h1" sx={{ color: (theme) => theme.palette.secondary.main }} variant="h6">
        Hotel booking
      </Typography>
      <Stack direction="row" ml={10} spacing={2}>
        {pages.map(({ key, label, path }) => {
          const { pathname } = useLocation();

          return (
            <Button color="secondary" component={RouterLink} disabled={pathname === path} key={key} to={path}>
              {label}
            </Button>
          );
        })}
      </Stack>
      <Box flexGrow={1} />
      {isAuthorized ? (
        <>
          <IconButton color="secondary" onClick={handleAccountButtonClick} size="large">
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
              <Logout sx={{ mr: 2 }} />
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Link color="secondary" component={RouterLink} textTransform="uppercase" to="/login" underline="none">
          Login
        </Link>
      )}
    </AppBar>
  );
};

export default Header;
