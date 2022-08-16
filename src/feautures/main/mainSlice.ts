import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import {
  IAverageAndSumByDateItem,
  IBestAndWorstDayOfAllTimeItem,
  IMachineTransactionItem,
  ITransactionItem,
} from './MainModal';
import { ILocationSelect } from '../location/locationModal';

interface InitialState {
  chartData: any,
  locationTableData: any,
  machineTableData: any,
  transactionTableDateFooter: any,
  bestDayAllTime: any,
  worstDayAllTime: any,
  bestDayWeekAnalytics: any,
  bestDayWeekAnalyticsFooter: any,
  worstDayWeekAnalytics: any,
  worstDayWeekAnalyticsFooter: any,
  locationData: ILocationSelect[],
  selectedLocationData: any[],
  machineLocationData: ILocationSelect[],
  selectedMachineLocationData: any,
  selectedBestAndWorstLocationData: any,
  mainDatePickerMode: string[],
  selectedDates: any[],
  bestAndWorstDayDatePickerMode: string[],
  bestAndWorstDaySelectedDates: any[]
}

const initialState: InitialState = {
  chartData: [],
  locationTableData: [],
  machineTableData: [],
  transactionTableDateFooter: [],
  bestDayAllTime: {},
  worstDayAllTime: {},
  bestDayWeekAnalytics: [],
  bestDayWeekAnalyticsFooter: [],
  worstDayWeekAnalytics: [],
  worstDayWeekAnalyticsFooter: [],
  locationData: [],
  selectedLocationData: [],
  machineLocationData: [],
  selectedMachineLocationData: '',
  selectedBestAndWorstLocationData: '',
  mainDatePickerMode: ['DAY'],
  selectedDates: [],
  bestAndWorstDayDatePickerMode: ['MONTH'],
  bestAndWorstDaySelectedDates: [],
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
    setBestDayWeekAnalytics: (state, action: PayloadAction<any[]>) => {
      state.bestDayWeekAnalytics = action.payload;
    },
    clearBestDayWeekAnalytics: (state) => {
      state.bestDayWeekAnalytics = [];
    },
    setBestDayWeekAnalyticsFooter: (state, action: PayloadAction<any[]>) => {
      state.bestDayWeekAnalyticsFooter = action.payload;
    },
    clearBestDayWeekAnalyticsFooter: (state) => {
      state.bestDayWeekAnalyticsFooter = [];
    },
    setWorstDayWeekAnalytics: (state, action: PayloadAction<any[]>) => {
      state.worstDayWeekAnalytics = action.payload;
    },
    clearWorstDayWeekAnalytics: (state) => {
      state.worstDayWeekAnalytics = [];
    },
    setWorstDayWeekAnalyticsFooter: (state, action: PayloadAction<any[]>) => {
      state.worstDayWeekAnalyticsFooter = action.payload;
    },
    clearWorstDayWeekAnalyticsFooter: (state) => {
      state.worstDayWeekAnalyticsFooter = [];
    },
    setSelectLocationData: (state, action: PayloadAction<ILocationSelect[]>) => {
      state.locationData = action.payload;
    },
    clearSelectLocationData: (state) => {
      state.locationData = null;
    },
    setSelectedLocation: (state, action: PayloadAction<String[]>) => {
      state.selectedLocationData = action.payload;
    },
    clearSelectedLocation: (state) => {
      state.selectedLocationData = [];
    },
    setSelectMachineLocationData: (state, action: PayloadAction<ILocationSelect[]>) => {
      state.machineLocationData = action.payload;
    },
    clearSelectMachineLocationData: (state) => {
      state.machineLocationData = [];
    },
    setSelectedMachineLocation: (state, action: PayloadAction<any>) => {
      state.selectedMachineLocationData = action.payload;
    },
    clearSelectedMachineLocation: (state) => {
      state.selectedMachineLocationData = '';
    },
    setSelectedBestAndWorstLocation: (state, action: PayloadAction<any>) => {
      state.selectedBestAndWorstLocationData = action.payload;
    },
    clearSelectedBestAndWorstLocation: (state) => {
      state.selectedBestAndWorstLocationData = '';
    },
    setDatePickerMode: (state, action: PayloadAction<string[]>) => {
      state.mainDatePickerMode = action.payload;
    },
    clearDatePickerMode: (state) => {
      state.mainDatePickerMode = initialState.mainDatePickerMode;
    },
    setPickedDate: (state, action: PayloadAction<string[]>) => {
      state.selectedDates = action.payload;
    },
    clearPickedDate: (state) => {
      state.selectedDates = [];
    },
    setBestAndWorstDayMode: (state, action: PayloadAction<string[]>) => {
      state.bestAndWorstDayDatePickerMode = action.payload;
    },
    clearBestAndWorstDayMode: (state) => {
      state.bestAndWorstDayDatePickerMode = initialState.bestAndWorstDayDatePickerMode;
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
  setBestDayWeekAnalytics,
  clearBestDayWeekAnalytics,
  setBestDayWeekAnalyticsFooter,
  clearBestDayWeekAnalyticsFooter,
  setWorstDayWeekAnalytics,
  clearWorstDayWeekAnalytics,
  setWorstDayWeekAnalyticsFooter,
  clearWorstDayWeekAnalyticsFooter,
  setSelectLocationData,
  clearSelectLocationData,
  setSelectedLocation,
  clearSelectedLocation,
  setSelectMachineLocationData,
  clearSelectMachineLocationData,
  setSelectedMachineLocation,
  clearSelectedMachineLocation,
  setSelectedBestAndWorstLocation,
  clearSelectedBestAndWorstLocation,
  setDatePickerMode,
  clearDatePickerMode,
  setPickedDate,
  clearPickedDate,
  setBestAndWorstDaySelectedDates,
  clearBestAndWorstDaySelectedDates,
  setBestAndWorstDayMode,
  clearBestAndWorstDayMode,
} = mainSlice.actions;

export const getChartData = (state: RootState) => state?.main?.chartData;
export const getLocationTableData = (state: RootState) => state?.main?.locationTableData;
export const getMachineTableData = (state: RootState) => state?.main?.machineTableData;
// eslint-disable-next-line max-len
export const getTransactionTableDateFooter = (state: RootState) => state?.main?.transactionTableDateFooter;
export const getBestDayOfAllTime = (state: RootState) => state?.main?.bestDayAllTime;
export const getWorstDayOfAllTime = (state: RootState) => state?.main?.worstDayAllTime;
export const getBestDayWeekAnalytics = (state: RootState) => state?.main?.bestDayWeekAnalytics;
// eslint-disable-next-line max-len
export const getBestDayWeekAnalyticsFooter = (state: RootState) => state?.main?.bestDayWeekAnalyticsFooter;
export const getWorstDayWeekAnalytics = (state: RootState) => state?.main?.worstDayWeekAnalytics;
// eslint-disable-next-line max-len
export const getWorstDayWeekAnalyticsFooter = (state: RootState) => state?.main?.worstDayWeekAnalyticsFooter;
export const getSelectLocationData = (state: RootState) => state?.main?.locationData;
// eslint-disable-next-line max-len
export const getSelectedLocation = (state: RootState) => state?.main?.selectedLocationData;
// eslint-disable-next-line max-len
export const getSelectMachineLocationData = (state: RootState) => state?.main?.machineLocationData;
// eslint-disable-next-line max-len
export const getSelectedMachineLocation = (state: RootState) => state?.main?.selectedMachineLocationData;
// eslint-disable-next-line max-len
export const getSelectedBestAndWorstLocation = (state: RootState) => state?.main?.selectedBestAndWorstLocationData;
export const getDatePickerMode = (state: RootState) => state?.main?.mainDatePickerMode;
export const getSelectedDate = (state: RootState) => state?.main?.selectedDates;
// eslint-disable-next-line max-len
export const getBestAndWorstDayDatePickerMode = (state: RootState) => state?.main?.bestAndWorstDayDatePickerMode;
// eslint-disable-next-line max-len
export const getBestAndWorstDaySelectedDates = (state: RootState) => state?.main?.bestAndWorstDaySelectedDates;

export default mainSlice.reducer;
