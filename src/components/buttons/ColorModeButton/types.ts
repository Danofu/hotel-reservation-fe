import { ClickAwayListenerProps } from '@mui/material/ClickAwayListener';
import { IconButtonProps } from '@mui/material/IconButton';
import { SvgIconProps } from '@mui/material/SvgIcon';

import { ColorModePickerProps } from 'components/buttons/ColorModePicker';
import { PopperProps } from 'components/Popper';

export type Props = Omit<IconButtonProps, 'onClick'> & {
  clickAwayListener?: Omit<ClickAwayListenerProps, 'onClickAway'>;
  colorModePicker?: ColorModePickerProps;
  enableClickAwayListener?: boolean;
  icon?: SvgIconProps;
  popper?: Omit<PopperProps, 'anchorEl' | 'modifiers' | 'open'>;
};
