import React, { FC, useCallback, useMemo, useState } from 'react';

import { AuthContext } from 'providers/AuthProvider/constants';
import { IContext } from 'providers/AuthProvider/interfaces';
import { Props } from 'providers/AuthProvider/types';
import { STORAGE_USER_TOKEN } from 'app-globals';
import { getStorageItem, removeStorageItem, sleep } from 'utils';

const AuthorizationProvider: FC<Props> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(!!getStorageItem(STORAGE_USER_TOKEN));

  const login = useCallback(async (email: string, password: string, remember: boolean) => {
    // NOTE: fake request
    await sleep(2 * 1000);

    if (email === 'danofu13@gmail.com' && password === '752984136') {
      const storage = remember ? localStorage : sessionStorage;

      storage.setItem(STORAGE_USER_TOKEN, 'mock-token');
      setIsAuthorized(true);

      return true;
    }

    return false;
  }, []);

  const logout = useCallback(() => {
    removeStorageItem(STORAGE_USER_TOKEN);
    setIsAuthorized(false);
  }, []);

  const value = useMemo<IContext>(() => ({ isAuthorized, login, logout }), [isAuthorized]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthorizationProvider;

export type AuthProps = Props;
export type IAuthContext = IContext;
