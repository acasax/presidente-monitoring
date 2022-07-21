// @ts-ignore
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store/store';

interface AlertStatus {
  value: boolean,
  msg: string,
}

const initialState: AlertStatus = {
  value: false,
  msg: '',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertStatus: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    setAlertMsg: (state, action: PayloadAction<string>) => {
      state.msg = action.payload;
    },
    clearAlertMsg: (state) => {
      state.msg = '';
    },
  },
});

export const { setAlertStatus, setAlertMsg, clearAlertMsg } = alertSlice.actions;

export const alertStatus = (state: RootState) => state.alert.value;
export const alertMsg = (state: RootState) => state.alert.msg;

export default alertSlice.reducer;
