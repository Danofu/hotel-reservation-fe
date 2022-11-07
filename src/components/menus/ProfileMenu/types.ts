import { MenuProps } from '@mui/material/Menu';

import { MenuItemLogoutProps } from 'components/menu-items/MenuItemLogout';

export type Props = MenuProps & { LogoutProps?: MenuItemLogoutProps };
