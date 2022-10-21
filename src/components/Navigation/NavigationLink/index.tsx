import Button from '@mui/material/Button';
import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Props } from 'src/components/Navigation/NavigationLink/types';

const NavigationLink: FC<Props> = (props) => {
  const { pathname } = useLocation();

  return <Button component={Link} disabled={pathname === props.to} {...props} />;
};

export default NavigationLink;
