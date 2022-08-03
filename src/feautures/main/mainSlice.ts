import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { IAverageAndSumByDateItem, ITransactionItem } from './MainModal';

interface InitialState {
  chartData: any,
  locationTableData: any,
  locationTableDateFooter: any,
}

const initialState: InitialState = {
  chartData: [],
  locationTableData: [],
  locationTableDateFooter: [],
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
    setLocationTableData: (state, action: PayloadAction<ITransactionItem[]>) => {
      state.locationTableData = action.payload;
    },
    clearLocationTableData: (state) => {
      state.locationTableData = [];
    },
    setLocationTableDataFooter: (state, action: PayloadAction<IAverageAndSumByDateItem[]>) => {
      state.locationTableDateFooter = action.payload;
    },
    clearLocationTableDataFooter: (state) => {
      state.locationTableDateFooter = [];
    },
  },
});

export const {
  setChartData,
  clearChartData,
  setLocationTableData,
  clearLocationTableData,
  setLocationTableDataFooter,
  clearLocationTableDataFooter,
} = mainSlice.actions;

export const getChartData = (state: RootState) => state?.main?.chartData;
export const getLocationTableData = (state: RootState) => state?.main?.locationTableData;
export const getLocationTableDateFooter = (state: RootState) => state?.main.locationTableDateFooter;

export default mainSlice.reducer;
