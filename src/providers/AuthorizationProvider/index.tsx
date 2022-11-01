import React, { createContext, FC, useCallback, useMemo, useState } from 'react';

import sleep from 'utils/sleep';
import { IContext, Props } from 'providers/AuthorizationProvider/types';
import { getStorageItem, removeStorageItem } from 'utils/storage';

export const AuthorizationContext = createContext<IContext>({} as IContext);

const AuthorizationProvider: FC<Props> = ({ children }) => {
  const [authorized, setAuthorized] = useState<boolean>(!!getStorageItem('user.token'));

  const login = useCallback(async (email: string, password: string, remember: boolean) => {
    // NOTE: fake request
    await sleep(2 * 1000);

    if (email === 'danofu13@gmail.com' && password === '752984136') {
      const storage = remember ? localStorage : sessionStorage;

      storage.setItem('user.token', 'mock-token');
      setAuthorized(true);

      return true;
    }

    return false;
  }, []);

  const logout = useCallback(() => {
    removeStorageItem('user.token');
    setAuthorized(false);
  }, []);

  const isAuthorized = useCallback(() => authorized, [authorized]);

  const value = useMemo<IContext>(() => ({ isAuthorized, login, logout }), [isAuthorized]);

  return <AuthorizationContext.Provider value={value}>{children}</AuthorizationContext.Provider>;
};

export default AuthorizationProvider;

export type AuthorizationProps = Props;
export type IAuthorizationContext = IContext;
