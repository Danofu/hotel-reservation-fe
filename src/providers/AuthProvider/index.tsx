import React, { FC, useCallback, useMemo, useState } from 'react';

import { AuthContext } from 'providers/AuthProvider/constants';
import { IContext } from 'providers/AuthProvider/interfaces';
import { Props, UserData } from 'providers/AuthProvider/types';
import { STORAGE_USER_TOKEN } from 'app-globals';
import { authenticateUser, getStorageItem, removeStorageItem } from 'utils';
import { useAxios } from 'utils/hooks';

const AuthorizationProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useState(getStorageItem(STORAGE_USER_TOKEN));
  const userAxiosConfig = useMemo(() => ({ headers: { Authorization: `Bearer ${token}` } }), [token]);
  const { data: userData } = useAxios<UserData>(`/api/user/me`, userAxiosConfig);
  const user = useMemo(() => userData?.user, [userData]);

  const isAuthorized = useMemo(() => !!user, [user]);

  const login = useCallback(async (email: string, password: string, remember: boolean) => {
    const storage = remember ? localStorage : sessionStorage;

    try {
      const response = await authenticateUser(email, password);
      if (response.statusText !== 'OK') {
        return false;
      }

      const token = response.data.token;
      storage.setItem(STORAGE_USER_TOKEN, token);
      setToken(token);

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    removeStorageItem(STORAGE_USER_TOKEN);
    setToken(null);
  }, []);

  const value = useMemo<IContext>(() => ({ isAuthorized, login, logout, user }), [isAuthorized, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthorizationProvider;

export { AuthContext };

export type AuthProps = Props;
export type AuthUser = UserData['user'];
export type IAuthContext = IContext;
