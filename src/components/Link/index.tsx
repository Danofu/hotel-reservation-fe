import MuiLink from '@mui/material/Link';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Props } from 'src/components/Link/types';

const Link: FC<Props> = (props) => <MuiLink {...props} component={RouterLink} />;

export default Link;
