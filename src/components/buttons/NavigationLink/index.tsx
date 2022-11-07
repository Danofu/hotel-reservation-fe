import Button from '@mui/material/Button';
import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Props } from 'components/buttons/NavigationLink/types';

const NavigationLink: FC<Props> = ({ to, ...props }) => {
  const { pathname } = useLocation();

  return <Button component={Link} disabled={pathname === to} to={to} {...props} />;
};

export default NavigationLink;

export type NavigationLinkProps = Props;
