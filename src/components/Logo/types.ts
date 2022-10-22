import { ReactNode } from 'react';
import { StackProps } from '@mui/material/Stack';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { TypographyProps } from '@mui/material/Typography';

import { LinkProps } from 'src/components/Link';

export type Props = Omit<StackProps<'a', LinkProps>, 'component'> & {
  icon?: SvgIconProps;
  text?: Omit<TypographyProps, 'children' | 'sx'>;
  textChildren?: ReactNode;
  textSx?: Pick<TypographyProps, 'sx'>;
};
