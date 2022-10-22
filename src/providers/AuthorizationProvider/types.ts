import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode;
};

export interface IContext {
  isAuthorized: boolean;
  login: (email: string, password: string, remember: boolean) => Promise<boolean>;
  logout: () => void;
}
