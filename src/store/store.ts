import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../feautures/auth/authSlice';
import loadingReducer from '../components/SpinnerLoading/loadingSlice';
import alertReducer from '../components/CustomAlert/alertSlice';
import mainReducer from '../feautures/main/mainSlice';
import attendanceReducer from '../feautures/attendance/attendanceSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    alert: alertReducer,
    main: mainReducer,
    attendance: attendanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
