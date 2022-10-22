import { ReactNode, SuspenseProps } from 'react';

export type Props = Omit<SuspenseProps, 'children'> & { component?: ReactNode };
