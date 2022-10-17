import React, { FC } from 'react';

import AuthorizationProvider from 'src/providers/AuthorizationProvider';
import ThemeProvider from 'src/providers/ThemeProvider';
import { Props } from 'src/providers/Providers/types';

const Providers: FC<Props> = ({ children }) => (
  <AuthorizationProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </AuthorizationProvider>
);

export default Providers;
