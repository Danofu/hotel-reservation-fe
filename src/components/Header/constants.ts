import { ButtonProps } from '@mui/material/Button';
import { LinkProps } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

import { PATH_PROTECTED } from 'src/routes/constants';
import { Props as NavigationLinkProps } from 'src/components/Navigation/NavigationLink/types';

const linkStyle = { color: 'inherit' } as ButtonProps<'a'>;

const linkProps = [{ children: 'Protected', to: PATH_PROTECTED }] as LinkProps[];

// NOTE: props and spreads order is important
export const navLinks = linkProps.map((props) => ({ ...linkStyle, ...props, key: uuidV4() })) as NavigationLinkProps[];
