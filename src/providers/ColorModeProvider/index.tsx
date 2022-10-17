import React, { createContext, FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, useMediaQuery } from '@mui/material';

import createTheme from 'src/providers/ColorModeProvider/theme';
import { ColorModeProviderProps } from 'src/providers/ColorModeProvider/types';

export const ThemeContext = createContext({
  toggleColorMode: () => {},
});

const ThemeProvider: FC<ColorModeProviderProps> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

  const toggleColorMode = useCallback(() => setMode((prev) => (prev === 'light' ? 'dark' : 'light')), []);

  const value = useMemo(() => ({ toggleColorMode }), []);

  const theme = useMemo(() => createTheme({ mode }), [mode]);

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
