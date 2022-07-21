import React, { useEffect } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import { pathComponentArray } from './RouteComponentMap';
import { ProtectedRoute } from './ProtectedRoute';
import { LOGIN_PATH, NOT_FOUND_PATH } from './path-constants';
import { useAppSelector } from '../store/hooks';
import { isLogged } from '../feautures/auth/authSlice';
// eslint-disable-next-line import/no-named-as-default
import CustomAlert from '../components/CustomAlert/CustomAlert';
import { alertStatus } from '../components/CustomAlert/alertSlice';

const Routes = () => {
  const history = useHistory();
  const IsLogged = useAppSelector(isLogged);
  const AlertStatus = useAppSelector(alertStatus);

  useEffect(() => {
    const paths = pathComponentArray.map((x) => x.path);
    if (!IsLogged) {
      history.push(LOGIN_PATH);
    } else {
      history.push(NOT_FOUND_PATH);
    }
    if (!paths.includes(history.location.pathname)) {
      history.push(NOT_FOUND_PATH);
    }
  }, [history.location, isLogged]);

  return (
    <>
      <CustomAlert open={AlertStatus} />
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
