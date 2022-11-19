import { SvgIconProps } from '@mui/material/SvgIcon';

import { ClickAwayListenerProps } from 'components/utils/ClickAwayListener';
import { ColorModePickerProps } from 'components/buttons/ColorModePicker';
import { PopperProps } from 'components/Popper';
import { TooltipIconButtonProps } from 'components/buttons/TooltipIconButton';

export type Props = TooltipIconButtonProps & {
  ClickAwayListenerProps?: ClickAwayListenerProps;
  ColorModePickerProps?: ColorModePickerProps;
  IconProps?: SvgIconProps;
  PopperProps?: Partial<PopperProps>;
  enableClickAwayListener?: boolean;
  keepPopperOpenAfterClick?: boolean;
};
