import { createTheme, PaletteMode } from '@mui/material';

import { darkThemeOptions, lightThemeOptions } from 'providers/ThemeProvider/constants';

export default (mode: PaletteMode) => createTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);
