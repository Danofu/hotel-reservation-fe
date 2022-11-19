import { MenuProps } from '@mui/material/Menu';

import { MenuItemLogoutProps } from 'components/menu-items/LogoutMenuItem';

export type Props = MenuProps & { LogoutProps?: MenuItemLogoutProps };
