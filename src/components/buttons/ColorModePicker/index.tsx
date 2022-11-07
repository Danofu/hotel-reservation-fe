import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import React, { FC, MouseEvent, useContext } from 'react';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { ColorMode } from 'providers/ThemeProvider/types';
import { Props } from 'components/buttons/ColorModePicker/types';
import { ThemeContext } from 'providers/ThemeProvider/constants';

const ColorModePicker: FC<Props> = ({ button, icon, sx, ...props }) => {
  const { mode, setMode } = useContext(ThemeContext);

  const handleMode = (event: MouseEvent<HTMLElement>, newMode: ColorMode) => {
    if (newMode !== null) {
      setMode(newMode);
      localStorage.setItem('theme.mode', newMode);
    }
  };

  return (
    <ToggleButtonGroup
      exclusive
      onChange={handleMode}
      sx={{ bgcolor: 'background.paper', boxShadow: 4, ...sx }}
      value={mode}
      {...props}
    >
      <ToggleButton value="light" {...button}>
        <LightModeIcon {...icon} />
        &nbsp;Light
      </ToggleButton>
      <ToggleButton value="auto" {...button}>
        <SettingsBrightnessIcon {...icon} />
        &nbsp;System
      </ToggleButton>
      <ToggleButton value="dark" {...button}>
        <DarkModeIcon {...icon} />
        &nbsp;Dark
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ColorModePicker;

export type ColorModePickerProps = Props;
