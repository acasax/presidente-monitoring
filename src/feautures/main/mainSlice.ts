import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface InitialState {
  chartData: any
}

const initialState: InitialState = {
  chartData: [],
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setChartData: (state, action: PayloadAction<any[]>) => {
      state.chartData = action.payload;
    },
    clearChartData: (state) => {
      state.chartData = [];
    },
  },
});

export const {
  setChartData,
  clearChartData,
} = mainSlice.actions;

export const getChartData = (state: RootState) => state?.main;

export default mainSlice.reducer;
