import { ReactNode } from 'react';

export type ColorMode = 'light' | 'dark';

export type Props = {
  children?: ReactNode;
};

export type CreateThemeArgs = {
  mode: ColorMode;
};

export interface IThemeContext {
  toggleColorMode: () => void;
}
