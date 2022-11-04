import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CloseIcon from '@mui/icons-material/Close';
import ColorModeButtonGroup from '../ColorModeButtonGroup';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material/Popper';
import React, { MouseEvent, useContext, useState } from 'react';

import { ThemeContext } from 'providers/ThemeProvider/constants';
import { defaultArrowSx, defaultPopperSx, iconMapper } from 'components/buttons/ColorModeButton/constants';

// TODO: make customizable
const ColorModeButton = () => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLElement | null>(null);
  const { mode } = useContext(ThemeContext);

  const isArrowEnabled = true;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setPopperAnchorEl(event.currentTarget);
    setIsPopperOpen((prev) => !prev);
  };

  const handleClickAway = () => setIsPopperOpen(false);

  // TODO: split onto components
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box position="relative">
        <IconButton color="primary" onClick={handleClick} type="button" size="large">
          {isPopperOpen && <CloseIcon />}
          {!isPopperOpen && iconMapper[mode]}
        </IconButton>
        <Popper
          anchorEl={popperAnchorEl}
          keepMounted
          modifiers={[
            { enabled: isArrowEnabled, name: 'arrow' },
            { name: 'offset', options: { offset: [0, 4] } },
          ]}
          open={isPopperOpen}
          sx={{ ...defaultPopperSx }}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Box>
                {isArrowEnabled && <Box data-popper-arrow sx={{ ...defaultArrowSx }} />}
                <ColorModeButtonGroup color="primary" size="small" />
              </Box>
            </Fade>
          )}
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

export default ColorModeButton;
