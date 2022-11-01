import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { PaletteMode, ThemeProvider as MuiThemeProvider, useMediaQuery } from '@mui/material';

import createTheme from 'providers/ThemeProvider/utils/createTheme';
import { IContext, Props } from 'providers/ThemeProvider/types';
import { ThemeContext } from 'providers/ThemeProvider/constants';

const ThemeProvider: FC<Props> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  const toggleColorMode = useCallback(() => setMode((prev) => (prev === 'light' ? 'dark' : 'light')), []);

  const theme = useMemo(() => createTheme(mode), [mode]);

  const value = useMemo<IContext>(() => ({ toggleColorMode }), []);

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export type IThemeContext = IContext;
export type ThemeProviderProps = Props;
