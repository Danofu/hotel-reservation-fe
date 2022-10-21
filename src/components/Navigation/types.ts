import { StackProps } from '@mui/material/Stack';

import { Props as NavigationLinkProps } from 'src/components/Navigation/NavigationLink/types';

export type Props = Omit<StackProps<'nav'>, 'component'> & { navLinks: NavigationLinkProps[] };
