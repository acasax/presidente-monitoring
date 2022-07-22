import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import { ATTENDANCE_PATH, COMPARISON_PATH, MAIN_PATH } from '../../routes/path-constants';
import { useAppDispatch } from '../../store/hooks';
import { clearUser } from '../../feautures/auth/authSlice';

const NavBar = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const location = useLocation();

  return (
    <div className="_nav-bar-container">
      <div className="_nav-bar-row">
        <div className="_items-container">
          <div className="_item-container">
            <Link
              className={location.pathname === MAIN_PATH ? '_text _active' : '_text'}
              onClick={() => history.push(MAIN_PATH)}
              to={MAIN_PATH}
            >
              efikasnost
            </Link>
          </div>
          <div className="_item-container">
            <Link
              className={location.pathname === COMPARISON_PATH ? '_text _active' : '_text'}
              onClick={() => history.push(COMPARISON_PATH)}
              to={COMPARISON_PATH}
            >
              razlika
              ka upravi
            </Link>
          </div>
          <div className="_item-container">
            <Link
              className={location.pathname === ATTENDANCE_PATH ? '_text _active' : '_text'}
              onClick={() => history.push(ATTENDANCE_PATH)}
              to={ATTENDANCE_PATH}
            >
              posecenost
            </Link>
          </div>

        </div>
        <div className="_icon-container">
          <IconButton onClick={() => dispatch(clearUser())}>
            <LogoutIcon className="_icon" />
          </IconButton>
        </div>
      </div>

    </div>
  );
};

export default NavBar;
