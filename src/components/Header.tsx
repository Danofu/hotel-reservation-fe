import AppBar from '@mui/material/AppBar';
import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import ColorModeButton from 'components/buttons/ColorModeButton';
import Link from 'components/Link';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import NavigationLink from 'components/buttons/NavigationLink';
import ProfileButton from 'components/buttons/ProfileButton';
import Spacer from 'components/Spacer';
import { AuthorizationContext } from 'providers/AuthorizationProvider/constants';
import { PATH_HOME, PATH_LOGIN, PATH_PROTECTED } from 'routes/constants';

const Header = () => {
  const { isAuthorized } = useContext(AuthorizationContext);

  return (
    <AppBar color="default" position="static">
      <Toolbar disableGutters sx={{ gap: 6, px: 6 }}>
        <Logo to={PATH_HOME} />
        <Navigation spacing={2}>
          <NavigationLink color="inherit" to={PATH_PROTECTED}>
            Protected
          </NavigationLink>
        </Navigation>
        <Spacer />
        <Stack alignItems="center" direction="row" spacing={2}>
          {!isAuthorized && (
            <Link color="inherit" textTransform="uppercase" to={PATH_LOGIN} underline="hover">
              Login
            </Link>
          )}
          <ColorModeButton
            color="primary"
            colorModeButtonGroup={{ color: 'primary' }}
            enableClickAwayListener
            size="large"
          />
          {isAuthorized && <ProfileButton />}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
