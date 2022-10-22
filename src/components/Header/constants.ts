import { ButtonProps } from '@mui/material/Button';
import { LinkProps } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

import { NavigationLinkProps } from 'src/components/Navigation/NavigationLink';
import { PATH_PROTECTED } from 'src/routes/constants';

type TLinkProps = Omit<NavigationLinkProps, keyof Omit<ButtonProps<'a'>, 'children'>>;
type TLinkStyle = Omit<NavigationLinkProps, keyof LinkProps>;

const linkProps = [{ children: 'Protected', to: PATH_PROTECTED }] as TLinkProps[];

const linkStyle = { color: 'inherit' } as TLinkStyle;

// NOTE: props and spreads order is important
export const navLinks = linkProps.map((props) => ({ ...linkStyle, ...props, key: uuidV4() })) as NavigationLinkProps[];
