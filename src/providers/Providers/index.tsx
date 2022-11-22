import React, { FC } from 'react';

import AuthorizationProvider from 'providers/AuthProvider';
import ThemeProvider from 'providers/ThemeProvider';
import { Props } from 'providers/Providers/types';

const Providers: FC<Props> = ({ children }) => (
  <AuthorizationProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </AuthorizationProvider>
);

export default Providers;

export type ProvidersProps = Props;
