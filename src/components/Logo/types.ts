import { ReactNode } from 'react';
import { StackProps } from '@mui/material/Stack';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { TypographyProps } from '@mui/material/Typography';

import { LinkProps } from 'components/Link';

export type Props = Omit<StackProps<'a', LinkProps>, 'component'> & {
  icon?: SvgIconProps;
  text?: ReactNode;
  textProps?: Omit<TypographyProps, 'sx'>;
  textSx?: Pick<TypographyProps, 'sx'>;
};
