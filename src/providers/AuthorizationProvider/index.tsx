import React, { createContext, FC, useCallback, useMemo, useState } from 'react';

import sleep from 'src/utils/sleep';
import { IContext, Props } from 'src/providers/AuthorizationProvider/types';
import { getStorageItem, removeStorageItem } from 'src/utils/storage';

export const AuthorizationContext = createContext<IContext>({} as IContext);

const AuthorizationProvider: FC<Props> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(!!getStorageItem('user.token'));

  const login = useCallback(async (email: string, password: string, remember: boolean) => {
    // NOTE: fake request
    await sleep(2 * 1000);

    if (email === 'danofu13@gmail.com' && password === '752984136') {
      const storage = remember ? localStorage : sessionStorage;

      storage.setItem('user.token', 'mock-token');
      setIsAuthorized(true);

      return true;
    }

    return false;
  }, []);

  const logout = useCallback(() => {
    removeStorageItem('user.token');
    setIsAuthorized(false);
  }, []);

  const value = useMemo<IContext>(() => ({ isAuthorized, login, logout }), [isAuthorized]);

  return <AuthorizationContext.Provider value={value}>{children}</AuthorizationContext.Provider>;
};

export default AuthorizationProvider;

export type AuthorizationProps = Props;
export type IAuthorizationContext = IContext;
