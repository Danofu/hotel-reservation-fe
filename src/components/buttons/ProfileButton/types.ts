import { SvgIconProps } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';

import { OptionalKeys } from 'global-types';
import { ProfileMenuProps } from 'components/menus/ProfileMenu';

export type Props = IconButtonProps & { icon?: SvgIconProps; menu?: OptionalKeys<ProfileMenuProps, 'open'> };
