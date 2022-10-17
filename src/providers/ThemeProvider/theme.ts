import { createTheme, ThemeOptions } from '@mui/material';
import { grey, teal } from '@mui/material/colors';

import { CreateThemeArgs } from 'src/providers/ThemeProvider/types';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: teal[700] },
    secondary: { main: grey[700] },
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: { main: teal[300] },
    secondary: { main: grey[300] },
  },
};

export default ({ mode }: CreateThemeArgs) => createTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);
