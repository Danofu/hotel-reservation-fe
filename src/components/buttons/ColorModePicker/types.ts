import { SvgIconProps } from '@mui/material/SvgIcon';
import { ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup';
import { ToggleButtonProps } from '@mui/material/ToggleButton';

export type Props = ToggleButtonGroupProps & { ButtonProps?: ToggleButtonProps; IconProps?: SvgIconProps };
