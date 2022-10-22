import { MenuProps } from '@mui/material/Menu';

import { MenuItemLogoutProps } from 'src/components/menu-items/MenuItemLogout';

export type Props = MenuProps & { itemLogout?: MenuItemLogoutProps };
