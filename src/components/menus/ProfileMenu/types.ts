import { MenuProps } from '@mui/material/Menu';

import { MenuItemLogoutProps } from 'components/menus/menu-items/MenuItemLogout';

export type Props = MenuProps & { itemLogout?: MenuItemLogoutProps };
