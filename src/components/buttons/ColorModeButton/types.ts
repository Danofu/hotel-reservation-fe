import { IconButtonProps } from '@mui/material/IconButton';
import { SvgIconProps } from '@mui/material/SvgIcon';

import { ClickAwayListenerProps } from 'components/utils/ClickAwayListener';
import { ColorModePickerProps } from 'components/buttons/ColorModePicker';
import { PopperProps } from 'components/Popper';

export type Props = IconButtonProps & {
  ClickAwayListenerProps?: ClickAwayListenerProps;
  ColorModePickerProps?: ColorModePickerProps;
  IconProps?: SvgIconProps;
  PopperProps?: Partial<PopperProps>;
  enableClickAwayListener?: boolean;
};
