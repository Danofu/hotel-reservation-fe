import AppBar from '@mui/material/AppBar';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useContext } from 'react';

import Link from 'components/Link';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import ProfileButton from 'components/ProfileButton';
import Spacer from 'components/Spacer';
import { AuthorizationContext } from 'providers/AuthorizationProvider/constants';
import { PATH_HOME, PATH_LOGIN } from 'routes/constants';
import { navLinks } from 'components/Header/constants';

const Header = () => {
  const { isAuthorized } = useContext(AuthorizationContext);

  return (
    <AppBar color="default" position="static">
      <Toolbar disableGutters sx={{ gap: 6, px: 6 }}>
        <Logo to={PATH_HOME} />
        <Navigation navLinks={navLinks} />
        <Spacer />
        {isAuthorized && <ProfileButton />}
        {!isAuthorized && (
          <Link color="inherit" textTransform="uppercase" to={PATH_LOGIN} underline="hover">
            Login
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
