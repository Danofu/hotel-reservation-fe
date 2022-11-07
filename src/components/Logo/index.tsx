import KingBedIcon from '@mui/icons-material/KingBed';
import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Link from 'components/utils/Link';
import { LOGO_TEXT_SHORT } from 'app-constants';
import { Props } from 'components/Logo/types';

const Logo: FC<Props> = ({ IconProps, TextProps, text = LOGO_TEXT_SHORT, ...props }) => (
  <Stack alignItems="center" component={Link} direction="row" gap={1} {...props}>
    <KingBedIcon {...IconProps} />
    <Typography {...TextProps}>{text}</Typography>
  </Stack>
);

export default Logo;

export type LogoProps = Props;
