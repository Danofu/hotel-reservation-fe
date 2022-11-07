import { IconButtonProps } from '@mui/material/IconButton';
import { SvgIconProps } from '@mui/material/SvgIcon';

export type Props = IconButtonProps & { IconProps?: SvgIconProps; visible?: boolean };
