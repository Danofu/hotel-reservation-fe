import { SvgIconProps } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';

import { Optional } from 'src/global';
import { ProfileMenuProps } from 'src/components/ProfileButton/ProfileMenu';

export type Props = IconButtonProps & { icon?: SvgIconProps; menu?: Optional<ProfileMenuProps, 'open'> };
