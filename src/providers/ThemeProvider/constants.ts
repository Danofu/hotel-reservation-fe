import { ThemeOptions } from '@mui/material';
import { createContext } from 'react';
import { green } from '@mui/material/colors';

import { ColorMode, IThemeContext } from 'providers/ThemeProvider';

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: green[600] },
  },
};

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: { main: green[500] },
  },
};

export const colorModes = ['auto', 'light', 'dark'] as const;

export const storedMode = localStorage.getItem('theme.mode') as ColorMode;
