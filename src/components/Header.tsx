import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import ColorModeButton from 'components/buttons/ColorModeButton';
import LangButton from 'components/buttons/LangButton';
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
          <LangButton
            color="primary"
            size="large"
            LangMenuProps={{
              anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
              transformOrigin: { horizontal: 'center', vertical: 'top' },
            }}
          />
          <ColorModeButton
            color="primary"
            colorModePicker={{ color: 'primary' }}
            enableClickAwayListener
            size="large"
          />
          {isAuthorized && <ProfileButton color="primary" size="large" />}
          {!isAuthorized && (
            <ButtonGroup color="primary" size="small" variant="text">
              <Button color="inherit" component={Link} sx={{ px: 1 }} to={PATHNAME_LOGIN}>
                Sing in
              </Button>
              <Button color="inherit" component={Link} sx={{ px: 1 }} to="#">
                Sing up
              </Button>
            </ButtonGroup>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
