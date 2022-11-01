import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RoomService } from '@mui/icons-material';

import Link from 'components/Link';
import { Props } from 'components/Logo/types';

const Logo: FC<Props> = ({ icon, text, textChildren = 'Hotel booking', textSx, ...props }) => (
  <Stack alignItems="center" color="inherit" component={Link} direction="row" gap={1} underline="hover" {...props}>
    <RoomService color="primary" fontSize="large" {...icon} />
    <Typography component="span" sx={{ color: 'inherit', ...textSx }} textTransform="capitalize" variant="h5" {...text}>
      {textChildren}
    </Typography>
  </Stack>
);

export default Logo;

export type LogoProps = Props;
