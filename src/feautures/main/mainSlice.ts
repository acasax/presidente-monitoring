import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface InitialState {
  chartData: any,
  locationTableData: any,
}

const initialState: InitialState = {
  chartData: [],
  locationTableData: [],
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
    setLocationTableData: (state, action: PayloadAction<any[]>) => {
      state.locationTableData = action.payload;
    },
    clearLocationTableData: (state) => {
      state.locationTableData = [];
    },
  },
});

export const {
  setChartData,
  clearChartData,
  setLocationTableData,
  clearLocationTableData,
} = mainSlice.actions;

export const getChartData = (state: RootState) => state?.main?.chartData;
export const getLocationTableData = (state: RootState) => state?.main?.locationTableData;

export default mainSlice.reducer;
