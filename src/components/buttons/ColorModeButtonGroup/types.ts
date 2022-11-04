import { SvgIconProps } from '@mui/material';
import { ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup';
import { ToggleButtonProps } from '@mui/material/ToggleButton';

export type Props = Omit<ToggleButtonGroupProps, 'exclusive' | 'onChange' | 'value'> & {
  button?: Omit<ToggleButtonProps, 'value'>;
  icon?: SvgIconProps;
};
