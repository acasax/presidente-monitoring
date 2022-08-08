import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import {
  IAverageAndSumByDateItem,
  IBestAndWorstDayOfAllTimeItem,
  IMachineTransactionItem,
  ITransactionItem,
} from './MainModal';

interface InitialState {
  chartData: any,
  locationTableData: any,
  machineTableData: any,
  transactionTableDateFooter: any,
  bestDayAllTime: any,
  worstDayAllTime: any
}

const initialState: InitialState = {
  chartData: [],
  locationTableData: [],
  machineTableData: [],
  transactionTableDateFooter: [],
  bestDayAllTime: {},
  worstDayAllTime: {},
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
    setMachineTableData: (state, action: PayloadAction<IMachineTransactionItem[]>) => {
      state.machineTableData = action.payload;
    },
    clearMachineTableData: (state) => {
      state.machineTableData = [];
    },
    setTransactionTableDataFooter: (state, action: PayloadAction<IAverageAndSumByDateItem[]>) => {
      state.transactionTableDateFooter = action.payload;
    },
    clearTransactionTableDataFooter: (state) => {
      state.transactionTableDateFooter = [];
    },
    setBestDayOfAllTime: (state, action: PayloadAction<IBestAndWorstDayOfAllTimeItem>) => {
      state.bestDayAllTime = action.payload;
    },
    clearBesDayOfAllTime: (state) => {
      state.bestDayAllTime = {};
    },
    setWorstDayOfAllTime: (state, action: PayloadAction<IBestAndWorstDayOfAllTimeItem>) => {
      state.worstDayAllTime = action.payload;
    },
    clearWorstDayOfAllTime: (state) => {
      state.worstDayAllTime = {};
    },
  },
});

export const {
  setChartData,
  clearChartData,
  setLocationTableData,
  clearLocationTableData,
  setTransactionTableDataFooter,
  clearTransactionTableDataFooter,
  setMachineTableData,
  clearMachineTableData,
  setBestDayOfAllTime,
  clearBesDayOfAllTime,
  setWorstDayOfAllTime,
  clearWorstDayOfAllTime,
} = mainSlice.actions;

export const getChartData = (state: RootState) => state?.main?.chartData;
export const getLocationTableData = (state: RootState) => state?.main?.locationTableData;
export const getMachineTableData = (state: RootState) => state?.main?.machineTableData;
// eslint-disable-next-line max-len
export const getTransactionTableDateFooter = (state: RootState) => state?.main?.transactionTableDateFooter;
export const getBestDayOfAllTime = (state: RootState) => state?.main?.bestDayAllTime;
export const getWorstDayOfAllTime = (state: RootState) => state?.main?.worstDayAllTime;

export default mainSlice.reducer;
