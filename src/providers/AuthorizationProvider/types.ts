import { ReactNode } from 'react';

export type AuthorizationProviderProps = {
  children: ReactNode;
};

export type AuthorizationContextType = {
  isAuthorized: boolean;
  login: (email: string, password: string, remember: boolean) => Promise<boolean>;
  logout: () => void;
};
