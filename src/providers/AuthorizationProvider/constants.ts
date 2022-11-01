import { createContext } from 'react';

import { IContext } from 'providers/AuthorizationProvider/types';

export const AuthorizationContext = createContext<IContext>({} as IContext);
