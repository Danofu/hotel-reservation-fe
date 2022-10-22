import { SvgIconProps } from '@mui/material/SvgIcon';
import { TypographyProps } from '@mui/material/Typography';

import { LinkProps } from 'src/components/Link';

type ExclusiveTypographyProps = TypographyProps<'a', LinkProps>;

export type Props = Omit<ExclusiveTypographyProps, 'component'> & { icon?: SvgIconProps };
