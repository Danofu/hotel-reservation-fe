import MuiLink from '@mui/material/Link';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Props } from 'components/Link/types';

const Link: FC<Props> = (props) => <MuiLink component={RouterLink} {...props} />;

export default Link;

export type LinkProps = Props;
