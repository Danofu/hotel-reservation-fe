import { StackProps } from '@mui/material/Stack';

import { NavigationLinkProps } from 'components/Navigation/NavigationLink';

export type Props = Omit<StackProps<'nav'>, 'component'> & { navLinks: NavigationLinkProps[] };
