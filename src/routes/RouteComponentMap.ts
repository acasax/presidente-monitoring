import React, { FC } from 'react';
import { ATTENDANCE_PATH, COMPARISON_PATH, LOGIN_PATH, MAIN_PATH, NOT_FOUND_PATH } from './path-constants';

interface IPathComponent {
  path: string;
  component: FC;
  exact?: boolean
}

const LoginView = React.lazy(() => import('../screens/AuthPage/AuthPage'));
const NotFoundView = React.lazy(() => import('../screens/NotFoundPage/NotFoundPage'));
const MainView = React.lazy(() => import('../screens/MainPage/MainPage'));
const AttendanceView = React.lazy(() => import('../screens/AttendancePage/AttendancePage'));
const ComparisonView = React.lazy(() => import('../screens/ComparisonPage/ComparisonPage'));

const pathComponentArray: IPathComponent[] = [];

pathComponentArray.push({ path: LOGIN_PATH, component: LoginView });
pathComponentArray.push({ path: NOT_FOUND_PATH, component: NotFoundView });
pathComponentArray.push({ path: MAIN_PATH, component: MainView, exact: true });
pathComponentArray.push({ path: ATTENDANCE_PATH, component: AttendanceView });
pathComponentArray.push({ path: COMPARISON_PATH, component: ComparisonView });

export { pathComponentArray };
export default {};
