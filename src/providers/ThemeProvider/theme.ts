import { createTheme, ThemeOptions } from '@mui/material';
import { green } from '@mui/material/colors';

import { CreateThemeArgs } from 'src/providers/ThemeProvider/types';

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

export default ({ mode }: CreateThemeArgs) => createTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);
