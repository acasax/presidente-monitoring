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
  mainChartData: any,
  mainLocationTableData: any,
  mainMachineTableData: any,
  mainTransactionTableDateFooter: any,
  mainBestDayAllTime: any,
  mainWorstDayAllTime: any,
  mainBestDayWeekAnalytics: any,
  mainBestDayWeekAnalyticsFooter: any,
  mainWorstDayWeekAnalytics: any,
  mainWorstDayWeekAnalyticsFooter: any,
  mainLocationData: ILocationSelect[],
  mainSelectedLocationData: any[],
  mainMachineLocationData: ILocationSelect[],
  mainSelectedMachineLocationData: any,
  mainSelectedBestAndWorstLocationData: any,
  mainDatePickerMode: string[],
  mainSelectedDates: any[],
  mainBestAndWorstDayDatePickerMode: string[],
  mainBestAndWorstDaySelectedDates: any[],
  mainBestDayInChosenMounts: any,
  mainWorstDayInChosenMounts: any,
}

const initialState: InitialState = {
  mainChartData: [],
  mainLocationTableData: [],
  mainMachineTableData: [],
  mainTransactionTableDateFooter: [],
  mainBestDayAllTime: {},
  mainWorstDayAllTime: {},
  mainBestDayWeekAnalytics: [],
  mainBestDayWeekAnalyticsFooter: [],
  mainWorstDayWeekAnalytics: [],
  mainWorstDayWeekAnalyticsFooter: [],
  mainLocationData: [],
  mainSelectedLocationData: [],
  mainMachineLocationData: [],
  mainSelectedMachineLocationData: '',
  mainSelectedBestAndWorstLocationData: '',
  mainDatePickerMode: ['DAY'],
  mainSelectedDates: [],
  mainBestAndWorstDayDatePickerMode: ['MONTH'],
  mainBestAndWorstDaySelectedDates: [],
  mainBestDayInChosenMounts: {},
  mainWorstDayInChosenMounts: {},
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setMainChartData: (state, action: PayloadAction<any[]>) => {
      state.mainChartData = action.payload;
    },
    clearMainChartData: (state) => {
      state.mainChartData = [];
    },
    setMainLocationTableData: (state, action: PayloadAction<ITransactionItem[]>) => {
      state.mainLocationTableData = action.payload;
    },
    clearMainLocationTableData: (state) => {
      state.mainLocationTableData = [];
    },
    setMainMachineTableData: (state, action: PayloadAction<IMachineTransactionItem[]>) => {
      state.mainMachineTableData = action.payload;
    },
    clearMainMachineTableData: (state) => {
      state.mainMachineTableData = [];
    },
    // eslint-disable-next-line max-len
    setMainTransactionTableDataFooter: (state, action: PayloadAction<IAverageAndSumByDateItem[]>) => {
      state.mainTransactionTableDateFooter = action.payload;
    },
    clearMainTransactionTableDataFooter: (state) => {
      state.mainTransactionTableDateFooter = [];
    },
    setMainBestDayOfAllTime: (state, action: PayloadAction<IBestAndWorstDayOfAllTimeItem>) => {
      state.mainBestDayAllTime = action.payload;
    },
    clearMainBesDayOfAllTime: (state) => {
      state.mainBestDayAllTime = {};
    },
    setMainWorstDayOfAllTime: (state, action: PayloadAction<IBestAndWorstDayOfAllTimeItem>) => {
      state.mainWorstDayAllTime = action.payload;
    },
    clearMainWorstDayOfAllTime: (state) => {
      state.mainWorstDayAllTime = {};
    },
    setMainBestDayWeekAnalytics: (state, action: PayloadAction<any[]>) => {
      state.mainBestDayWeekAnalytics = action.payload;
    },
    clearMainBestDayWeekAnalytics: (state) => {
      state.mainBestDayWeekAnalytics = [];
    },
    setMainBestDayWeekAnalyticsFooter: (state, action: PayloadAction<any[]>) => {
      state.mainBestDayWeekAnalyticsFooter = action.payload;
    },
    clearMainBestDayWeekAnalyticsFooter: (state) => {
      state.mainBestDayWeekAnalyticsFooter = [];
    },
    setMainWorstDayWeekAnalytics: (state, action: PayloadAction<any[]>) => {
      state.mainWorstDayWeekAnalytics = action.payload;
    },
    clearMainWorstDayWeekAnalytics: (state) => {
      state.mainWorstDayWeekAnalytics = [];
    },
    setMainWorstDayWeekAnalyticsFooter: (state, action: PayloadAction<any[]>) => {
      state.mainWorstDayWeekAnalyticsFooter = action.payload;
    },
    clearMainWorstDayWeekAnalyticsFooter: (state) => {
      state.mainWorstDayWeekAnalyticsFooter = [];
    },
    setMainSelectLocationData: (state, action: PayloadAction<ILocationSelect[]>) => {
      state.mainLocationData = action.payload;
    },
    clearMainSelectLocationData: (state) => {
      state.mainLocationData = null;
    },
    setMainSelectedLocation: (state, action: PayloadAction<String[]>) => {
      state.mainSelectedLocationData = action.payload;
    },
    clearMainSelectedLocation: (state) => {
      state.mainSelectedLocationData = [];
    },
    setMainSelectMachineLocationData: (state, action: PayloadAction<ILocationSelect[]>) => {
      state.mainMachineLocationData = action.payload;
    },
    clearMainSelectMachineLocationData: (state) => {
      state.mainMachineLocationData = [];
    },
    setMainSelectedMachineLocation: (state, action: PayloadAction<any>) => {
      state.mainSelectedMachineLocationData = action.payload;
    },
    clearMainSelectedMachineLocation: (state) => {
      state.mainSelectedMachineLocationData = '';
    },
    setMainSelectedBestAndWorstLocation: (state, action: PayloadAction<any>) => {
      state.mainSelectedBestAndWorstLocationData = action.payload;
    },
    clearMainSelectedBestAndWorstLocation: (state) => {
      state.mainSelectedBestAndWorstLocationData = '';
    },
    setMainDatePickerMode: (state, action: PayloadAction<string[]>) => {
      state.mainDatePickerMode = action.payload;
    },
    clearMainDatePickerMode: (state) => {
      state.mainDatePickerMode = initialState.mainDatePickerMode;
    },
    setMainPickedDate: (state, action: PayloadAction<string[]>) => {
      state.mainSelectedDates = action.payload;
    },
    clearMainPickedDate: (state) => {
      state.mainSelectedDates = [];
    },
    setMainBestAndWorstDayMode: (state, action: PayloadAction<string[]>) => {
      state.mainBestAndWorstDayDatePickerMode = action.payload;
    },
    clearMainBestAndWorstDayMode: (state) => {
      state.mainBestAndWorstDayDatePickerMode = initialState.mainBestAndWorstDayDatePickerMode;
    },
    setMainBestAndWorstDaySelectedDates: (state, action: PayloadAction<string[]>) => {
      state.mainBestAndWorstDaySelectedDates = action.payload;
    },
    clearMainBestAndWorstDaySelectedDates: (state) => {
      state.mainBestAndWorstDaySelectedDates = [];
    },
    setMainBestInChosenMounts: (state, action: PayloadAction<IBestAndWorstDayOfAllTimeItem>) => {
      state.mainBestDayInChosenMounts = action.payload;
    },
    clearMainBestInChosenMounts: (state) => {
      state.mainBestDayInChosenMounts = {};
    },
    setMainWorstInChosenMounts: (state, action: PayloadAction<IBestAndWorstDayOfAllTimeItem>) => {
      state.mainWorstDayInChosenMounts = action.payload;
    },
    clearMainWorstInChosenMounts: (state) => {
      state.mainWorstDayInChosenMounts = {};
    },
  },
});

export const {
  setMainChartData,
  clearMainChartData,
  setMainLocationTableData,
  clearMainLocationTableData,
  setMainTransactionTableDataFooter,
  clearMainTransactionTableDataFooter,
  setMainMachineTableData,
  clearMainMachineTableData,
  setMainBestDayOfAllTime,
  clearMainBesDayOfAllTime,
  setMainWorstDayOfAllTime,
  clearMainWorstDayOfAllTime,
  setMainBestDayWeekAnalytics,
  clearMainBestDayWeekAnalytics,
  setMainBestDayWeekAnalyticsFooter,
  clearMainBestDayWeekAnalyticsFooter,
  setMainWorstDayWeekAnalytics,
  clearMainWorstDayWeekAnalytics,
  setMainWorstDayWeekAnalyticsFooter,
  clearMainWorstDayWeekAnalyticsFooter,
  setMainSelectLocationData,
  clearMainSelectLocationData,
  setMainSelectedLocation,
  clearMainSelectedLocation,
  setMainSelectMachineLocationData,
  clearMainSelectMachineLocationData,
  setMainSelectedMachineLocation,
  clearMainSelectedMachineLocation,
  setMainSelectedBestAndWorstLocation,
  clearMainSelectedBestAndWorstLocation,
  setMainDatePickerMode,
  clearMainDatePickerMode,
  setMainPickedDate,
  clearMainPickedDate,
  setMainBestAndWorstDaySelectedDates,
  clearMainBestAndWorstDaySelectedDates,
  setMainBestAndWorstDayMode,
  clearMainBestAndWorstDayMode,
  setMainBestInChosenMounts,
  clearMainBestInChosenMounts,
  setMainWorstInChosenMounts,
  clearMainWorstInChosenMounts,
} = mainSlice.actions;

export const getMainChartData = (state: RootState) => state?.main?.mainChartData;
export const getMainLocationTableData = (state: RootState) => state?.main?.mainLocationTableData;
export const getMainMachineTableData = (state: RootState) => state?.main?.mainMachineTableData;
// eslint-disable-next-line max-len
export const getMainTransactionTableDateFooter = (state: RootState) => state?.main?.mainTransactionTableDateFooter;
export const getMainBestDayOfAllTime = (state: RootState) => state?.main?.mainBestDayAllTime;
export const getMainWorstDayOfAllTime = (state: RootState) => state?.main?.mainWorstDayAllTime;
// eslint-disable-next-line max-len
export const getMainBestDayWeekAnalytics = (state: RootState) => state?.main?.mainBestDayWeekAnalytics;
// eslint-disable-next-line max-len
export const getMainBestDayWeekAnalyticsFooter = (state: RootState) => state?.main?.mainBestDayWeekAnalyticsFooter;
// eslint-disable-next-line max-len
export const getMainWorstDayWeekAnalytics = (state: RootState) => state?.main?.mainWorstDayWeekAnalytics;
// eslint-disable-next-line max-len
export const getMainWorstDayWeekAnalyticsFooter = (state: RootState) => state?.main?.mainWorstDayWeekAnalyticsFooter;
export const getMainSelectLocationData = (state: RootState) => state?.main?.mainLocationData;
// eslint-disable-next-line max-len
export const getMainSelectedLocation = (state: RootState) => state?.main?.mainSelectedLocationData;
// eslint-disable-next-line max-len
export const getMainSelectMachineLocationData = (state: RootState) => state?.main?.mainMachineLocationData;
// eslint-disable-next-line max-len
export const getMainSelectedMachineLocation = (state: RootState) => state?.main?.mainSelectedMachineLocationData;
// eslint-disable-next-line max-len
export const getMainSelectedBestAndWorstLocation = (state: RootState) => state?.main?.mainSelectedBestAndWorstLocationData;
export const getMainDatePickerMode = (state: RootState) => state?.main?.mainDatePickerMode;
export const getMainSelectedDate = (state: RootState) => state?.main?.mainSelectedDates;
// eslint-disable-next-line max-len
export const getMainBestAndWorstDayDatePickerMode = (state: RootState) => state?.main?.mainBestAndWorstDayDatePickerMode;
// eslint-disable-next-line max-len
export const getMainBestAndWorstDaySelectedDates = (state: RootState) => state?.main?.mainBestAndWorstDaySelectedDates;
// eslint-disable-next-line max-len
export const getMainBestDayInChosenMounts = (state: RootState) => state?.main?.mainBestDayInChosenMounts;
// eslint-disable-next-line max-len
export const getMainWorstDayInChosenMounts = (state: RootState) => state?.main?.mainWorstDayInChosenMounts;

export default mainSlice.reducer;
