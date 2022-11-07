import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
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
import { PATHNAME_HOME, PATHNAME_LOGIN, PATHNAME_PROTECTED } from 'app-constants';

// TODO: lang feature

const Header = () => {
  const { isAuthorized } = useContext(AuthorizationContext);

  return (
    <AppBar color="default" position="static">
      <Toolbar sx={{ gap: 4 }}>
        <Logo to={PATHNAME_HOME} />
        <Navigation spacing={2}>
          <NavigationLink color="inherit" to={PATHNAME_PROTECTED}>
            Protected
          </NavigationLink>
        </Navigation>
        <Spacer />
        <Stack alignItems="center" direction="row" spacing={2}>
          <ColorModeButton
            color="primary"
            colorModePicker={{ color: 'primary' }}
            enableClickAwayListener
            size="large"
          />
          {isAuthorized && <ProfileButton color="primary" size="large" />}
          {!isAuthorized && (
            <Button component={Link} size="small" to={PATHNAME_LOGIN} variant="contained">
              Login
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
