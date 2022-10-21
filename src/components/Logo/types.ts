import { SvgIconProps } from '@mui/material/SvgIcon';
import { TypographyProps } from '@mui/material/Typography';

import { Props as LinkProps } from 'src/components/Link/types';

export type Props = Omit<TypographyProps<'a', LinkProps>, 'component'> & { icon?: SvgIconProps };
