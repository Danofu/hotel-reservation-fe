import { PropsWithChildren } from 'react';

import { colorModes } from 'providers/ThemeProvider/constants';

export type Props = PropsWithChildren;

export type ColorMode = typeof colorModes[number];
