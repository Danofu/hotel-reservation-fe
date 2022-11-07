import { createTheme as muiCreateTheme, PaletteMode } from '@mui/material';

import { colorModes, darkThemeOptions, lightThemeOptions } from 'providers/ThemeProvider/constants';

export const createTheme = (mode: PaletteMode) =>
  muiCreateTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);

export const isColorMode = (maybeMode?: string): boolean => !!colorModes.find((mode) => mode === maybeMode);
