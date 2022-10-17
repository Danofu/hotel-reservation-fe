import { ReactNode } from 'react';

export type ColorModeProviderProps = {
  children: ReactNode;
};

export type CreateThemeArgs = {
  mode: 'light' | 'dark';
};
