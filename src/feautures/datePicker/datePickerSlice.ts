import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface InitialState {
  mode: string[],
  selectedDates: any[],
  bestAndWorstDayMode: string[],
  bestAndWorstDaySelectedDates: any[]
}

const initialState: InitialState = {
  mode: ['DAY'],
  selectedDates: [],
  bestAndWorstDayMode: ['MONTH'],
  bestAndWorstDaySelectedDates: [],
};

const datePickerSlice = createSlice({
  name: 'datePicker',
  initialState,
  reducers: {
    setDatePickerMode: (state, action: PayloadAction<string[]>) => {
      state.mode = action.payload;
    },
    clearDatePickerMode: (state) => {
      state.mode = initialState.mode;
    },
    setPickedDate: (state, action: PayloadAction<string[]>) => {
      state.selectedDates = action.payload;
    },
    clearPickedDate: (state) => {
      state.selectedDates = [];
    },
    setBestAndWorstDayMode: (state, action: PayloadAction<string[]>) => {
      state.bestAndWorstDayMode = action.payload;
    },
    clearBestAndWorstDayMode: (state) => {
      state.bestAndWorstDayMode = initialState.bestAndWorstDayMode;
    },
    setBestAndWorstDaySelectedDates: (state, action: PayloadAction<string[]>) => {
      state.bestAndWorstDaySelectedDates = action.payload;
    },
    clearBestAndWorstDaySelectedDates: (state) => {
      state.bestAndWorstDaySelectedDates = [];
    },
  },
});

export const {
  setDatePickerMode,
  clearDatePickerMode,
  setPickedDate,
  clearPickedDate,
  setBestAndWorstDaySelectedDates,
  clearBestAndWorstDaySelectedDates,
  setBestAndWorstDayMode,
  clearBestAndWorstDayMode,
} = datePickerSlice.actions;

export const getDatePickerMode = (state: RootState) => state?.datePicker?.mode;
export const getSelectedDate = (state: RootState) => state?.datePicker?.selectedDates;
export const getBestAndWorstDayMode = (state: RootState) => state?.datePicker?.bestAndWorstDayMode;
// eslint-disable-next-line max-len
export const getBestAndWorstDaySelectedDates = (state: RootState) => state?.datePicker?.bestAndWorstDaySelectedDates;

export default datePickerSlice.reducer;
