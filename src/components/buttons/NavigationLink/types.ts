import { ButtonProps } from '@mui/material/Button';
import { LinkProps } from 'react-router-dom';

export type Props = Omit<ButtonProps<'a', LinkProps>, 'component' | 'disabled'>;
