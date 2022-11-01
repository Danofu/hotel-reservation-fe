import AppBar from '@mui/material/AppBar';
import React, { useContext } from 'react';
import Toolbar from '@mui/material/Toolbar';

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
        <Navigation spacing={1}>
          <NavigationLink color="inherit" to={PATH_PROTECTED}>
            Protected
          </NavigationLink>
        </Navigation>
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
