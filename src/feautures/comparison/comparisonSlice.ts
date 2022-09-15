import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComparisonAllTimeData } from './ComparisonModal';

interface InitialState {
  comparisonAllTimeData: IComparisonAllTimeData[]
}

const initialState: InitialState = {
  comparisonAllTimeData: [],
};

const comparisonSlice = createSlice({
  name: 'comparisonSlice',
  initialState,
  reducers: {
    setComparisonAllTimeData: (state, action: PayloadAction<IComparisonAllTimeData[]>) => {
      state.comparisonAllTimeData = action.payload;
    },
    clearComparisonAllTimeData: (state) => {
      state.comparisonAllTimeData = [];
    },
  },
});

export const {
  setComparisonAllTimeData,
  clearComparisonAllTimeData,
} = comparisonSlice.actions;

export default comparisonSlice.reducer;
