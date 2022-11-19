import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React, { FC, Fragment, MouseEvent, useContext, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';

import ClickAwayListener from 'components/utils/ClickAwayListener';
import ColorModePicker from 'components/buttons/ColorModePicker';
import Popper from 'components/Popper';
import { ColorMode } from 'providers/ThemeProvider';
import { Props } from 'components/buttons/ColorModeButton/types';
import { ThemeContext } from 'providers/ThemeProvider/constants';
import { iconMapper, TPATH } from 'components/buttons/ColorModeButton/constants';

const ColorModeButton: FC<Props> = ({
  ClickAwayListenerProps,
  ColorModePickerProps,
  IconProps,
  PopperProps,
  TooltipProps,
  enableClickAwayListener,
  keepPopperOpenAfterClick = false,
  ...props
}) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLElement | null>(null);
  const { mode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const handleButtonClick = (event: MouseEvent<HTMLElement>) => {
    setPopperAnchorEl(event.currentTarget);
    setIsPopperOpen((prev) => !prev);
  };

  const handleClickAway = () => setIsPopperOpen(false);

  const handleColorModeChange = (_event: MouseEvent<HTMLElement>, mode: ColorMode) => {
    !keepPopperOpenAfterClick && mode !== null && setIsPopperOpen(false);
  };

  const ButtonIcon = iconMapper[mode];
  const tooltipTitle = t(`${TPATH}.tooltip.${isPopperOpen ? 'opened' : 'closed'}`);

  const colorModeButton = (
    <Fragment>
      <Tooltip title={tooltipTitle} {...TooltipProps}>
        <IconButton onClick={handleButtonClick} type="button" {...props}>
          {isPopperOpen ? <CloseIcon {...IconProps} /> : <ButtonIcon {...IconProps} />}
        </IconButton>
      </Tooltip>
      <Popper anchorEl={popperAnchorEl} open={isPopperOpen} transition {...PopperProps}>
        <ColorModePicker onChange={handleColorModeChange} size="small" {...ColorModePickerProps} />
      </Popper>
    </Fragment>
  );

  const clickAwayColorModeButton = (
    <ClickAwayListener onClickAway={handleClickAway} {...ClickAwayListenerProps}>
      {colorModeButton}
    </ClickAwayListener>
  );

  return enableClickAwayListener ? clickAwayColorModeButton : colorModeButton;
};

export default ColorModeButton;

export type ColorModeButtonProps = Props;
