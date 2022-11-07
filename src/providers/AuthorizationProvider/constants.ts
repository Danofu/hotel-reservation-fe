import { createContext } from 'react';

import { IAuthorizationContext } from 'providers/AuthorizationProvider';

export const AuthorizationContext = createContext<IAuthorizationContext>({} as IAuthorizationContext);
