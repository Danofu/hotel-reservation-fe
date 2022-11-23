import React, { FC, useCallback, useMemo, useState } from 'react';
import axios from 'axios';
import { AuthContext } from 'providers/AuthProvider/constants';
import { IContext } from 'providers/AuthProvider/interfaces';
import { Props } from 'providers/AuthProvider/types';
import { STORAGE_USER_TOKEN } from 'app-globals';
import { getStorageItem, removeStorageItem, sleep } from 'utils';

const AuthorizationProvider: FC<Props> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(!!getStorageItem(STORAGE_USER_TOKEN));

  const login = useCallback(async (email: string, password: string, remember: boolean) => {
    // NOTE: fake request
    const body: {email: string, password: string} = {email, password};
    const url = "http://localhost:8081/api/auth/login";
    try {
      const response = await axios.post(url, body, {method: 'post', })

      if(response.statusText !== 'OK') {
        return false;
      }

      const token: string = response.data.token;
      localStorage.setItem(STORAGE_USER_TOKEN, token);
      setIsAuthorized(true);
      return true;
    } catch (e) {
      console.log(e);
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
