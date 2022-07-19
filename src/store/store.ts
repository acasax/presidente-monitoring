import { configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import authReducer from '../feautures/auth/authSlice';
// eslint-disable-next-line import/no-cycle
import loadingReducer from '../components/SpinnerLoading/loadingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
