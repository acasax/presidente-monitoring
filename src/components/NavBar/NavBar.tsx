import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import { ATTENDANCE_PATH, COMPARISON_PATH, MAIN_PATH } from '../../routes/path-constants';
import { useAppDispatch } from '../../store/hooks';
import { clearUser } from '../../feautures/auth/authSlice';
import { Texts } from '../../utils/Texts';

const NavBar = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [width, setWidth] = useState(0);

  const updateDimension = () => {
    const widthScreen = window.innerWidth;
    setWidth(widthScreen);
  };

  useEffect(() => {
    updateDimension();
  }, [updateDimension]);

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
              {Texts.navBarEfficiency}
            </Link>
          </div>
          <div className="_item-container">
            <Link
              className={location.pathname === ATTENDANCE_PATH ? '_text _active' : '_text'}
              onClick={() => history.push(ATTENDANCE_PATH)}
              to={ATTENDANCE_PATH}
            >
              {Texts.navBarAttendance}
            </Link>
          </div>
          <div className="_item-container">
            <Link
              className={location.pathname === COMPARISON_PATH ? '_text _active' : '_text'}
              onClick={() => history.push(COMPARISON_PATH)}
              to={COMPARISON_PATH}
            >
              {Texts.navBarDifference}
            </Link>
          </div>

        </div>
        {
                    width > 600 && (
                    <div className="_icon-container">
                      <IconButton onClick={() => dispatch(clearUser())}>
                        <LogoutIcon className="_icon" />
                      </IconButton>
                    </div>
                    )
                }
      </div>

    </div>
  );
};

export default NavBar;
