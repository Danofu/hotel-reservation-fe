import NightShelterIcon from '@mui/icons-material/NightShelter';
import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Link from 'components/utils/Link';
import pop from 'utils/pop';
import { LOGO_TEXT_SHORT } from 'app-constants';
import { Props } from 'components/Logo/types';

const Logo: FC<Props> = ({ IconProps = {}, TextProps, text = LOGO_TEXT_SHORT, ...props }) => (
  <Stack alignItems="center" component={Link} direction="row" gap={1} {...props}>
    <NightShelterIcon sx={{ mt: -0.5, ...pop(IconProps, 'sx') }} {...IconProps} />
    <Typography {...TextProps}>{text}</Typography>
  </Stack>
);

export default Logo;

export type LogoProps = Props;
