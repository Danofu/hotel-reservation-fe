import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import React from 'react';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { SvgIconProps } from '@mui/material/SvgIcon';

export const iconMapper = (props?: SvgIconProps) => ({
  auto: <SettingsBrightnessIcon {...props} />,
  dark: <DarkModeIcon {...props} />,
  light: <LightModeIcon {...props} />,
});
