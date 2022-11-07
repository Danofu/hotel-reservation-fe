import { BoxProps } from '@mui/material/Box';
import { FadeProps } from '@mui/material/Fade';
import { PopperProps } from '@mui/material/Popper';
import { PopperUnstyledOwnProps } from '@mui/base/PopperUnstyled/PopperUnstyled';
import { ReactNode } from 'react';

export type Props = Omit<PopperProps, 'children'> & {
  ArrowProps?: Omit<BoxProps, 'sx'>;
  ArrowSx?: BoxProps['sx'];
  FadeProps?: FadeProps;
  arrowSize?: number;
  children?: ReactNode;
  enableArrow?: boolean;
};

export type PopperFadeContentProps = Parameters<
  Extract<PopperUnstyledOwnProps['children'], (props: never) => ReactNode>
>[0];
