import AppBar from '@mui/material/AppBar';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useContext } from 'react';

import Link from 'src/components/Link';
import Logo from 'src/components/Logo';
import Navigation from 'src/components/Navigation';
import ProfileButton from 'src/components/ProfileButton';
import Spacer from 'src/components/Spacer';
import { AuthorizationContext, IAuthorizationContext } from 'src/providers/AuthorizationProvider';
import { PATH_HOME, PATH_LOGIN } from 'src/routes/constants';
import { navLinks } from 'src/components/Header/constants';

const Header = () => {
  const { isAuthorized } = useContext<IAuthorizationContext>(AuthorizationContext);

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
