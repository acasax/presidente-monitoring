import React, { FC } from 'react';
import { LOGIN_PATH } from './path-constants';

interface IPathComponent {
  path: string;
  component: FC;
  exact?: boolean
}

const LoginView = React.lazy(() => import('../screens/AuthPage/AuthPage'));

const pathComponentArray: IPathComponent[] = [];

pathComponentArray.push({ path: LOGIN_PATH, component: LoginView });

export { pathComponentArray };
export default {};
