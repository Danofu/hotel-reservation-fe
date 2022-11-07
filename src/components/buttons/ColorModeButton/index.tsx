import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React, { FC, MouseEvent, useContext, useState } from 'react';

import ColorModePicker from 'components/buttons/ColorModePicker';
import Popper from 'components/Popper';
import { Props } from 'components/buttons/ColorModeButton/types';
import { ThemeContext } from 'providers/ThemeProvider/constants';
import { iconMapper } from 'components/buttons/ColorModeButton/constants';

const ColorModeButton: FC<Props> = ({
  clickAwayListener,
  colorModePicker,
  enableClickAwayListener,
  icon,
  popper,
  ...props
}) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLElement | null>(null);
  const { mode } = useContext(ThemeContext);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setPopperAnchorEl(event.currentTarget);
    setIsPopperOpen((prev) => !prev);
  };

  const handleClickAway = () => setIsPopperOpen(false);

  let colorModeButton = (
    <>
      <IconButton onClick={handleClick} type="button" {...props}>
        {!isPopperOpen && iconMapper(icon)[mode]}
        {isPopperOpen && <CloseIcon {...icon} />}
      </IconButton>
      <Popper
        anchorEl={popperAnchorEl}
        arrowSize={10}
        enableArrow
        keepMounted
        open={isPopperOpen}
        transition
        {...popper}
      >
        <ColorModePicker size="small" {...colorModePicker} />
      </Popper>
    </>
  );

  if (enableClickAwayListener) {
    colorModeButton = (
      <ClickAwayListener onClickAway={handleClickAway} {...clickAwayListener}>
        <Box position="relative">{colorModeButton}</Box>
      </ClickAwayListener>
    );
  }

  return colorModeButton;
};

export default ColorModeButton;

export type ColorModeButtonProps = Props;
