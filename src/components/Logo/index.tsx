import KingBedIcon from '@mui/icons-material/KingBed';
import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Link from 'components/Link';
import { LOGO_TEXT_SHORT } from 'app-constants';
import { Props } from 'components/Logo/types';

const Logo: FC<Props> = ({ icon, text = LOGO_TEXT_SHORT, textProps, textSx, ...props }) => (
  <Stack alignItems="center" color="inherit" component={Link} direction="row" gap={1} underline="hover" {...props}>
    <KingBedIcon color="primary" fontSize="large" {...icon} />
    <Typography
      component="span"
      sx={{ color: 'inherit', ...textSx }}
      textTransform="capitalize"
      variant="h5"
      {...textProps}
    >
      {text}
    </Typography>
  </Stack>
);

export default Logo;

export type LogoProps = Props;
