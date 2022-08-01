import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../feautures/auth/authSlice';
import loadingReducer from '../components/SpinnerLoading/loadingSlice';
import alertReducer from '../components/CustomAlert/alertSlice';
import locationSelectReducer from '../feautures/locationSelect/locationSelectSlice';
import datePickerReducer from '../feautures/datePicker/datePickerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    alert: alertReducer,
    locationSelect: locationSelectReducer,
    datePicker: datePickerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
