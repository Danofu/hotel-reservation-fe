import { StackProps } from '@mui/material/Stack';

import { NavigationLinkProps } from 'src/components/Navigation/NavigationLink';

export type Props = Omit<StackProps<'nav'>, 'component'> & { navLinks: NavigationLinkProps[] };
