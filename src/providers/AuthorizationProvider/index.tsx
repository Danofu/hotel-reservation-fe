import React, { FC, useCallback, useMemo, useState } from 'react';

import sleep from 'utils/sleep';
import { AuthorizationContext } from 'providers/AuthorizationProvider/constants';
import { IContext, Props } from 'providers/AuthorizationProvider/types';
import { getStorageItem, removeStorageItem } from 'utils/storage';

const AuthorizationProvider: FC<Props> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(!!getStorageItem('user.token'));

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
