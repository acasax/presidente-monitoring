import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../feautures/auth/authSlice';
import loadingReducer from '../components/SpinnerLoading/loadingSlice';
import alertReducer from '../components/CustomAlert/alertSlice';
import locationSelectReducer from '../feautures/locationSelect/locationSelectSlice';
import datePickerReducer from '../feautures/datePicker/datePickerSlice';
import mainReducer from '../feautures/main/mainSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    alert: alertReducer,
    locationSelect: locationSelectReducer,
    datePicker: datePickerReducer,
    main: mainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
