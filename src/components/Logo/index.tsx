import NightShelterIcon from '@mui/icons-material/NightShelter';
import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Link from 'components/utils/Link';
import { LOGO_TEXT_SHORT } from 'app-globals';
import { Props } from 'components/Logo/types';
import { pop } from 'utils';

const Logo: FC<Props> = ({ IconProps = {}, TextProps, text = LOGO_TEXT_SHORT, ...props }) => (
  <Stack alignItems="center" component={Link} direction="row" {...props}>
    <NightShelterIcon sx={{ mb: 0.5, ...pop(IconProps, 'sx') }} {...IconProps} />
    <Typography component="h1" {...TextProps}>
      {text}
    </Typography>
  </Stack>
);

export default Logo;

export type LogoProps = Props;
