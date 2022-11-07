import { ReactNode } from 'react';

import { colorModes } from 'providers/ThemeProvider/constants';

export type Props = { children?: ReactNode };

export type ColorMode = typeof colorModes[number];
