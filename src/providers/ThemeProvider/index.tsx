import React, { FC, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, useMediaQuery } from '@mui/material';

import { IContext } from 'providers/ThemeProvider/interfaces';
import { Props } from 'providers/ThemeProvider/types';
import { createTheme, isColorMode } from 'providers/ThemeProvider/utils';
import { storedMode, ThemeContext } from 'providers/ThemeProvider/constants';

const ThemeProvider: FC<Props> = ({ children }) => {
  const [mode, setMode] = useState(isColorMode(storedMode) ? storedMode : 'auto');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () => (mode === 'auto' ? createTheme(prefersDarkMode ? 'dark' : 'light') : createTheme(mode)),
    [mode, prefersDarkMode]
  );

  const value = useMemo<IContext>(() => ({ mode, setMode }), [mode]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export type IThemeContext = IContext;
export type ThemeProviderProps = Props;
export type { ColorMode } from 'providers/ThemeProvider/types';
