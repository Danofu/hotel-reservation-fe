import { ReactNode } from 'react';

export type SuspenseProps = {
  component?: ReactNode;
  fallback?: ReactNode;
};
