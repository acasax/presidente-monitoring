import React, { FC } from 'react';
import { LOGIN_PATH, NOT_FOUND_PATH } from './path-constants';

interface IPathComponent {
  path: string;
  component: FC;
  exact?: boolean
}

const LoginView = React.lazy(() => import('../screens/AuthPage/AuthPage'));
const NotFoundView = React.lazy(() => import('../screens/NotFoundPage/NotFoundPage'));

const pathComponentArray: IPathComponent[] = [];

pathComponentArray.push({ path: LOGIN_PATH, component: LoginView });
pathComponentArray.push({ path: NOT_FOUND_PATH, component: NotFoundView });

export { pathComponentArray };
export default {};
