import { BoxProps } from '@mui/material/Box';
import { FadeProps } from '@mui/material/Fade';
import { PopperProps } from '@mui/material/Popper';
import { ReactNode } from 'react';

export type Props = Omit<PopperProps, 'children'> & {
  arrowProps?: Omit<BoxProps, 'sx'>;
  arrowSize?: number;
  arrowSx?: Pick<BoxProps, 'sx'>;
  children?: ReactNode;
  enableArrow?: boolean;
  fade?: FadeProps;
};
