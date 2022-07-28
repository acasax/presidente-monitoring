// @ts-ignore
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store/store';

interface AlertStatus {
  value: boolean,
  msg: string,
  status: string,
}

const initialState: AlertStatus = {
  value: false,
  msg: '',
  status: 'error',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertOpenStatus: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    setAlertMsg: (state, action: PayloadAction<string>) => {
      state.msg = action.payload;
    },
    clearAlertMsg: (state) => {
      state.msg = '';
    },
    setAlertStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    clearAlertStatus: (state) => {
      state.status = '';
    },
  },
});

export const {
  setAlertOpenStatus,
  setAlertMsg,
  clearAlertMsg,
  setAlertStatus,
  clearAlertStatus,
} = alertSlice.actions;

export const alertOpenStatus = (state: RootState) => state?.alert?.value;
export const alertMsg = (state: RootState) => state?.alert?.msg;
export const alertStatus = (state: RootState) => state?.alert?.status;

export default alertSlice.reducer;
