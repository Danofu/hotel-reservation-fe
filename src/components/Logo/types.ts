import { ReactNode } from 'react';
import { StackProps } from '@mui/material/Stack';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { TypographyProps } from '@mui/material/Typography';

import { LinkProps } from 'components/utils/Link';

export type Props = StackProps<'a', LinkProps> & {
  IconProps?: SvgIconProps;
  TextProps?: TypographyProps;
  text?: ReactNode;
};
