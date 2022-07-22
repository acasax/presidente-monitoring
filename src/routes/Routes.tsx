import React, { useEffect } from 'react';
import { Router, Switch, useHistory } from 'react-router-dom';
import { pathComponentArray } from './RouteComponentMap';
import { ProtectedRoute } from './ProtectedRoute';
import { LOGIN_PATH, MAIN_PATH, NOT_FOUND_PATH } from './path-constants';
import { useAppSelector } from '../store/hooks';
import { isLogged } from '../feautures/auth/authSlice';
import NavBar from '../components/NavBar/NavBar';

const Routes = () => {
  const history = useHistory();
  const IsLogged = useAppSelector(isLogged);

  useEffect(() => {
    const paths = pathComponentArray.map((x) => x.path);
    if (!IsLogged) {
      history.push(LOGIN_PATH);
    } else {
      history.push(MAIN_PATH);
    }
    if (!paths.includes(history.location.pathname)) {
      history.push(NOT_FOUND_PATH);
    }
  }, [history.location, isLogged]);

  return (
    <Router history={history}>
      {
                IsLogged && <NavBar />
            }
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
    </Router>
  );
};

export default Routes;
