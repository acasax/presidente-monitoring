import React, { useEffect } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import { pathComponentArray } from './RouteComponentMap';
import { ProtectedRoute } from './ProtectedRoute';
import { LOGIN_PATH, NOT_FOUND_PATH } from './path-constants';
import { useAppSelector } from '../store/hooks';
import { isLogged } from '../feautures/auth/authSlice';

const Routes = () => {
  const history = useHistory();
  const IsLogged = useAppSelector(isLogged);

  useEffect(() => {
    const paths = pathComponentArray.map((x) => x.path);
    if (!paths.includes(history.location.pathname)) {
      history.push(NOT_FOUND_PATH);
    }
    console.log(IsLogged);
    if (IsLogged) {
      history.push(LOGIN_PATH);
    }
  }, [history.location, isLogged]);

  return (
    <>
      <Switch>
        {pathComponentArray.map((pc) => (
          <ProtectedRoute
            key={pc.path}
            path={pc.path}
            exact={pc.exact}
            component={pc.component}
          />
        ))}
      </Switch>
    </>
  );
};

export default Routes;
