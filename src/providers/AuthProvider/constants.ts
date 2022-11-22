import { createContext } from 'react';

import { IAuthContext } from 'providers/AuthProvider';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
