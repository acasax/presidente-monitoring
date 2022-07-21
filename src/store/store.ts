import { configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import authReducer from '../feautures/auth/authSlice';
// eslint-disable-next-line import/no-cycle
import loadingReducer from '../components/SpinnerLoading/loadingSlice';
// eslint-disable-next-line import/no-cycle
import alertReducer from '../components/CustomAlert/alertSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    alert: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
