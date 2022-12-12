import { MenuProps } from '@mui/material/Menu';

import { MenuItemLogoutProps } from 'components/menu-items/LogoutMenuItem';
import { UserNameMenuItemProps } from 'components/menu-items/UserNameMenuItem';

export type Props = MenuProps & { LogoutProps?: MenuItemLogoutProps; UserNameProps?: UserNameMenuItemProps };
