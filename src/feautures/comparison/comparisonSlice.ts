import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComparisonAllTimeDataItem, IComparisonData } from './ComparisonModal';
import { RootState } from '../../store/store';

interface InitialState {
  comparisonAllTimeData: IComparisonAllTimeDataItem[],
  comparisonData: IComparisonData[],
  comparisonDatePickerMode: string[],
  comparisonSelectedDates: any[]
}

const initialState: InitialState = {
  comparisonAllTimeData: [],
  comparisonData: [],
  comparisonDatePickerMode: ['DAY'],
  comparisonSelectedDates: [],
};

const comparisonSlice = createSlice({
  name: 'comparisonSlice',
  initialState,
  reducers: {
    setComparisonAllTimeData: (state, action: PayloadAction<IComparisonAllTimeDataItem[]>) => {
      state.comparisonAllTimeData = action.payload;
    },
    clearComparisonAllTimeData: (state) => {
      state.comparisonAllTimeData = [];
    },
    setComparisonData: (state, action: PayloadAction<IComparisonData[]>) => {
      state.comparisonData = action.payload;
    },
    clearComparisonData: (state) => {
      state.comparisonData = [];
    },
    setComparisonDatePickerMode: (state, action: PayloadAction<string[]>) => {
      state.comparisonDatePickerMode = action.payload;
    },
    clearComparisonDatePickerMode: (state) => {
      state.comparisonDatePickerMode = [];
    },
    setComparisonSelectedDates: (state, action: PayloadAction<any[]>) => {
      state.comparisonSelectedDates = action.payload;
    },
    clearComparisonSelectedDates: (state) => {
      state.comparisonSelectedDates = [];
    },
  },
});

export const {
  setComparisonAllTimeData,
  clearComparisonAllTimeData,
  setComparisonData,
  clearComparisonData,
  setComparisonDatePickerMode,
  clearComparisonDatePickerMode,
  setComparisonSelectedDates,
  clearComparisonSelectedDates,
} = comparisonSlice.actions;

export const getComparisonAllTime = (state: RootState) => state?.comparison?.comparisonAllTimeData;
export const getComparison = (state: RootState) => state?.comparison?.comparisonData;
// eslint-disable-next-line max-len
export const getComparisonDatePickerMode = (state: RootState) => state?.comparison?.comparisonDatePickerMode;
// eslint-disable-next-line max-len
export const getComparisonSelectedDates = (state: RootState) => state?.comparison?.comparisonSelectedDates;

export default comparisonSlice.reducer;
