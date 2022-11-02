import { ThemeOptions } from '@mui/material';
import { createContext } from 'react';
import { green } from '@mui/material/colors';

import { ColorMode, IContext } from 'providers/ThemeProvider/types';

export const ThemeContext = createContext<IContext>({} as IContext);

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

export const storageMode = localStorage.getItem('theme.mode') as ColorMode;
