import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode;
};

export interface IContext {
  toggleColorMode: () => void;
}
