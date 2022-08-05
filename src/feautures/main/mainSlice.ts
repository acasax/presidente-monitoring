import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { IAverageAndSumByDateItem, IMachineTransactionItem, ITransactionItem } from './MainModal';

interface InitialState {
  chartData: any,
  locationTableData: any,
  machineTableData: any,
  transactionTableDateFooter: any,
}

const initialState: InitialState = {
  chartData: [],
  locationTableData: [],
  machineTableData: [],
  transactionTableDateFooter: [],
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
} = mainSlice.actions;

export const getChartData = (state: RootState) => state?.main?.chartData;
export const getLocationTableData = (state: RootState) => state?.main?.locationTableData;
export const getMachineTableData = (state: RootState) => state?.main?.machineTableData;
// eslint-disable-next-line max-len
export const getTransactionTableDateFooter = (state: RootState) => state?.main.transactionTableDateFooter;

export default mainSlice.reducer;
