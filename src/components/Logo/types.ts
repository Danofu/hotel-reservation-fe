import { SvgIconProps } from '@mui/material/SvgIcon';
import { TypographyProps } from '@mui/material/Typography';

import { LinkProps } from 'src/components/Link';

export type Props = Omit<TypographyProps<'a', LinkProps>, 'component'> & { icon?: SvgIconProps };
