import React, { createContext, FC, ReactNode, useMemo, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, useMediaQuery } from '@mui/material';

import createTheme from 'src/providers/ColorModeProvider/theme';

export const ThemeContext = createContext({
  toggleColorMode: () => {},
});

type Props = {
  children: ReactNode;
};

const ThemeProvider: FC<Props> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

  const value = useMemo(
    () => ({ toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')) }),
    []
  );

  const theme = useMemo(() => createTheme({ mode }), [mode]);

  return (
    <ThemeContext.Provider value={value}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
