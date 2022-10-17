import { createTheme, ThemeOptions } from '@mui/material';
import { green, lightGreen, teal } from '@mui/material/colors';

import { CreateThemeArgs } from 'src/providers/ThemeProvider/types';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: green[700] },
    secondary: { main: teal[50] },
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: { main: green[100] },
    secondary: { main: lightGreen[800] },
  },
};

export default ({ mode }: CreateThemeArgs) => createTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);
