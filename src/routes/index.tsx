import * as React from 'react';
import { AuthRoutes } from './AuthRoutes';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../contexts/auth';

export const Routers: React.FC = () => {
  const { signed } = React.useContext(AuthContext);
  return signed ? <DashboardRoutes /> : <AuthRoutes />;
};
