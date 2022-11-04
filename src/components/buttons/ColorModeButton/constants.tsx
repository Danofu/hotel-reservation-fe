import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import React from 'react';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { SxProps, Theme } from '@mui/material';

export const iconMapper = { auto: <SettingsBrightnessIcon />, dark: <DarkModeIcon />, light: <LightModeIcon /> };

export const defaultPopperSx: SxProps<Theme> = {
  '&[data-popper-placement^="bottom"] .MuiBox-root[data-popper-arrow]': { top: -4 },
  '&[data-popper-placement^="left"] .MuiBox-root[data-popper-arrow]': { right: -4 },
  '&[data-popper-placement^="right"] .MuiBox-root[data-popper-arrow]': { left: -4 },
  '&[data-popper-placement^="top"] .MuiBox-root[data-popper-arrow]': { bottom: -4 },
  zIndex: ({ zIndex }) => zIndex.drawer + 1,
};

export const defaultArrowSx = {
  '&, ::before': { bgcolor: 'background.paper', height: 8, position: 'absolute', width: 8 },
  '::before': {
    border: '1px solid transparent',
    borderLeftColor: 'divider',
    borderTopColor: 'divider',
    boxShadow: 4,
    content: '""',
    rotate: '45deg',
    visibility: 'visible',
  },
  visibility: 'hidden',
  zIndex: -1,
};
