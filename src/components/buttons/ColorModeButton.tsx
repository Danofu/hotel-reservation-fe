import AutoModeIcon from '@mui/icons-material/AutoMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import React, { MouseEvent, useContext } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { ColorMode } from 'providers/ThemeProvider/types';
import { ThemeContext } from 'providers/ThemeProvider/constants';

const ColorModeButton = () => {
  const { mode, setMode } = useContext(ThemeContext);

  const handleMode = (event: MouseEvent<HTMLElement>, newMode: ColorMode) => {
    setMode(newMode);
    localStorage.setItem('theme.mode', newMode);
  };

  return (
    <ToggleButtonGroup exclusive onChange={handleMode} value={mode}>
      <ToggleButton value="light">
        <LightModeIcon />
      </ToggleButton>
      <ToggleButton value="auto">
        <AutoModeIcon />
      </ToggleButton>
      <ToggleButton value="dark">
        <DarkModeIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ColorModeButton;
