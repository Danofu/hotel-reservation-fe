import { LinkProps } from '@mui/material/Link';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

export type Props = Omit<LinkProps<'a', RouterLinkProps>, 'component'>;
