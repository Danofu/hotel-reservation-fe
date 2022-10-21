import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { RoomService } from '@mui/icons-material';

import Link from 'src/components/Link';
import { Props } from 'src/components/Logo/types';

const Logo: FC<Props> = ({ icon, ...props }) => (
  <Typography
    alignItems="center"
    component={Link}
    display="flex"
    gap={1}
    sx={{ color: 'inherit' }}
    textTransform="capitalize"
    underline="hover"
    variant="h5"
    {...props}
  >
    <RoomService color="primary" fontSize="large" {...icon} />
    Hotel booking
  </Typography>
);

export default Logo;
