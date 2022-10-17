import React, { createContext, FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, useMediaQuery } from '@mui/material';

import createTheme from 'src/providers/ThemeProvider/theme';
import { ColorMode, IThemeContext, Props } from 'src/providers/ThemeProvider/types';

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: FC<Props> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<ColorMode>(prefersDarkMode ? 'dark' : 'light');

  const toggleColorMode = useCallback(() => setMode((prev) => (prev === 'light' ? 'dark' : 'light')), []);

  const theme = useMemo(() => createTheme({ mode }), [mode]);

  const value = useMemo<IThemeContext>(() => ({ toggleColorMode }), []);

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  return (
    <ThemeContext.Provider value={value}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
