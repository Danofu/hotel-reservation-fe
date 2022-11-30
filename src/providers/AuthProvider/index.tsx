import React, { FC, useCallback, useMemo, useState } from 'react';

import { AuthContext } from 'providers/AuthProvider/constants';
import { IContext } from 'providers/AuthProvider/interfaces';
import { Props } from 'providers/AuthProvider/types';
import { STORAGE_USER_TOKEN } from 'app-globals';
import { authenticateUser, getStorageItem, removeStorageItem } from 'utils';

const AuthorizationProvider: FC<Props> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(!!getStorageItem(STORAGE_USER_TOKEN));

  const login = useCallback(async (email: string, password: string, remember: boolean) => {
    const storage = remember ? localStorage : sessionStorage;

    try {
      const response = await authenticateUser(email, password);
      if (response.statusText !== 'OK') {
        return false;
      }

      const token = response.data.token;
      storage.setItem(STORAGE_USER_TOKEN, token);
      setIsAuthorized(true);

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
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
