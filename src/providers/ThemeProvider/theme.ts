import { createTheme, PaletteMode, ThemeOptions } from '@mui/material';
import { green } from '@mui/material/colors';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: green[600] },
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: { main: green[500] },
  },
};

export default (mode: PaletteMode) => createTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);
