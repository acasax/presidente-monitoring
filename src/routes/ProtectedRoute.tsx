import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { ComponentLazy } from '../utils/ComponentLazy/ComponentLazy';

interface ProtectedRouteProps {
  path: string;
  component: FC;
  exact?: boolean
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  path,
  exact,
  component: Component,
}) => (
  <Route
    exact={exact}
    path={path}
  >
    <ComponentLazy component={Component} />
  </Route>
);

ProtectedRoute.defaultProps = {
  exact: false,
};

export default ProtectedRoute;
