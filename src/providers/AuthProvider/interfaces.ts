import { AuthUser } from 'providers/AuthProvider';

export interface IContext {
  isAuthorized: boolean;
  login: (email: string, password: string, remember: boolean) => Promise<boolean>;
  logout: () => void;
  user?: AuthUser;
}
