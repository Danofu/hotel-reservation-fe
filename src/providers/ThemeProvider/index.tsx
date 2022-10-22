import React, { createContext, FC, useCallback, useEffect, useMemo, useState } from 'react';
import { PaletteMode, ThemeProvider as MuiThemeProvider, useMediaQuery } from '@mui/material';

import createTheme from 'src/providers/ThemeProvider/theme';
import { IContext, Props } from 'src/providers/ThemeProvider/types';

export const ThemeContext = createContext<IContext>({} as IContext);

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
