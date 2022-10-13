import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import './index.css';

const AppLayout: FC = () => <Outlet />;

export default AppLayout;
