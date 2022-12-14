/**
 * The {@link default | ButtonNavLink} component.
 * @module ButtonNavLink
 */
import Button from '@mui/material/Button';
import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Props } from 'components/buttons/ButtonNavLink/types';

/**
 * Renders a navigation button link based on **Material UI** {@link https://mui.com/material-ui/react-button | Button} and **React Router Dom** {@link https://reactrouter.com/en/main/components/link | Link}.
 *
 * The link will be **disabled** if current URL and link's navigation pathname (`to` property) matches.
 *
 * The component declaration:
 * ```ts
 * const ButtonNavLink: FC<Props> = ({ to, ...props }) => {
 *   // ...
 * };
 * ```
 *
 * @example
 * ```tsx
 * <React.Fragment>
 *   <ButtonNavLink to="/home">Home</ButtonNavLink>
 *   <ButtonNavLink to="/about">About</ButtonNavLink>
 *   <ButtonNavLink to="/contacts">Contacts</ButtonNavLink>
 * <React.Fragment/>
 * ```
 *
 * @group Component
 */
const ButtonNavLink: FC<Props> = ({ to, ...props }) => {
  const { pathname } = useLocation();

  return <Button component={Link} disabled={pathname === to} to={to} {...props} />;
};

export default ButtonNavLink;

export type { Props as ButtonNavLinkProps } from 'components/buttons/ButtonNavLink/types';
