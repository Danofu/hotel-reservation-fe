import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Fade from '@mui/material/Fade';
import LanguageIcon from '@mui/icons-material/Language';
import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';

import ColorModeButton from 'components/buttons/ColorModeButton';
import LanguageMenu from 'components/menus/LanguageMenu';
import Link from 'components/utils/Link';
import Logo from 'components/Logo';
import MenuIconButton from 'components/buttons/MenuIconButton';
import Navigation from 'components/Navigation';
import ButtonNavLink from 'components/buttons/ButtonNavLink';
import ProfileMenu from 'components/menus/ProfileMenu';
import Spacer from 'components/utils/Spacer';
import { AuthorizationContext } from 'providers/AuthorizationProvider/constants';
import { PATHNAME_HOME, PATHNAME_LOGIN } from 'app-globals';
import { TPATH, translatableNavLinks } from 'components/Header/constants';

const Header = () => {
  const { isAuthorized } = useContext(AuthorizationContext);
  const { t } = useTranslation();

  return (
    <AppBar color="default" position="static">
      <Toolbar sx={{ gap: 4 }}>
        <Logo
          IconProps={{ color: 'primary', fontSize: 'large' }}
          TextProps={{ sx: { color: 'inherit' }, variant: 'h5' }}
          color="inherit"
          to={PATHNAME_HOME}
          underline="hover"
        />
        <Navigation spacing={2}>
          {translatableNavLinks(t).map(({ label, to }) => (
            <ButtonNavLink color="inherit" key={to} to={to}>
              {label}
            </ButtonNavLink>
          ))}
        </Navigation>
        <Spacer />
        <Stack alignItems="center" direction="row" spacing={2}>
          <ColorModeButton
            ColorModePickerProps={{ color: 'primary' }}
            PopperProps={{ arrowSize: 10, enableArrow: true, keepMounted: true }}
            color="primary"
            enableClickAwayListener
            keepPopperOpenAfterClick
            size="large"
          />
          <MenuIconButton
            Icon={LanguageIcon}
            Menu={LanguageMenu}
            MenuProps={{
              TransitionComponent: Fade,
              anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
              keepMounted: true,
              transformOrigin: { horizontal: 'right', vertical: 'top' },
            }}
            color="primary"
            keepMenuOpenAfterClick
            size="large"
          />
          {!isAuthorized && (
            <ButtonGroup color="inherit" size="small" variant="text">
              <Button component={Link} to={PATHNAME_LOGIN}>
                {t(`${TPATH}.links.sign-in`)}
              </Button>
              <Button component={Link} to="#">
                {t(`${TPATH}.links.sign-up`)}
              </Button>
            </ButtonGroup>
          )}
          {isAuthorized && (
            <MenuIconButton
              Icon={AccountCircleIcon}
              Menu={ProfileMenu}
              MenuProps={{
                LogoutProps: { IconProps: { color: 'primary' } },
                TransitionComponent: Fade,
                anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
                keepMounted: true,
                transformOrigin: { horizontal: 'right', vertical: 'top' },
              }}
              color="primary"
              size="large"
            />
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
