import MuiLink from '@mui/material/Link';
import React, { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Props } from 'components/utils/Link/types';

const Link = forwardRef<HTMLAnchorElement, Props>((props, ref) => (
  <MuiLink component={RouterLink} ref={ref} {...props} />
));

Link.displayName = 'Link';

export default Link;

export type LinkProps = Props;
