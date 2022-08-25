import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILocationSelect } from '../location/locationModal';
import { IAverageAndSumByDateItem, IBestAndWorstDayOfAllTimeItem, ITransactionItem } from './AttendanceModal';
import { RootState } from '../../store/store';

interface InitialState {
  attendanceChartData: any,
  attendanceLocationTableData: any,
  attendanceTransactionTableDateFooter: any,
  attendanceBestDayAllTime: any,
  attendanceWorstDayAllTime: any,
  attendanceBestDayWeekAnalytics: any,
  attendanceBestDayWeekAnalyticsFooter: any,
  attendanceWorstDayWeekAnalytics: any,
  attendanceWorstDayWeekAnalyticsFooter: any,
  attendanceLocationData: ILocationSelect[],
  attendanceSelectedLocationData: any[],
  attendanceSelectedBestAndWorstLocationData: any,
  attendanceDatePickerMode: string[],
  attendanceSelectedDates: any[],
  attendanceBestAndWorstDayDatePickerMode: string[],
  attendanceBestAndWorstDaySelectedDates: any[],
  attendanceBestDayInChosenMounts: any,
  attendanceWorstDayInChosenMounts: any,
}

const initialState: InitialState = {
  attendanceChartData: [],
  attendanceLocationTableData: [],
  attendanceTransactionTableDateFooter: [],
  attendanceBestDayAllTime: {},
  attendanceWorstDayAllTime: {},
  attendanceBestDayWeekAnalytics: [],
  attendanceBestDayWeekAnalyticsFooter: [],
  attendanceWorstDayWeekAnalytics: [],
  attendanceWorstDayWeekAnalyticsFooter: [],
  attendanceLocationData: [],
  attendanceSelectedLocationData: [],
  attendanceSelectedBestAndWorstLocationData: '',
  attendanceDatePickerMode: ['DAY'],
  attendanceSelectedDates: [],
  attendanceBestAndWorstDayDatePickerMode: ['MONTH'],
  attendanceBestAndWorstDaySelectedDates: [],
  attendanceBestDayInChosenMounts: {},
  attendanceWorstDayInChosenMounts: {},
};

const attendanceSlice = createSlice({
  name: 'attendanceSlice',
  initialState,
  reducers: {
    setAttendanceChartData: (state, action: PayloadAction<any[]>) => {
      state.attendanceChartData = action.payload;
    },
    clearAttendanceChartData: (state) => {
      state.attendanceChartData = [];
    },
    setAttendanceLocationTableData: (state, action: PayloadAction<ITransactionItem[]>) => {
      state.attendanceLocationTableData = action.payload;
    },
    clearAttendanceLocationTableData: (state) => {
      state.attendanceLocationTableData = [];
    },
    // eslint-disable-next-line max-len
    setAttendanceTransactionTableDataFooter: (state, action: PayloadAction<IAverageAndSumByDateItem[]>) => {
      state.attendanceTransactionTableDateFooter = action.payload;
    },
    clearAttendanceTransactionTableDataFooter: (state) => {
      state.attendanceTransactionTableDateFooter = [];
    },
    // eslint-disable-next-line max-len
    setAttendanceBestDayOfAllTime: (state, action: PayloadAction<IBestAndWorstDayOfAllTimeItem>) => {
      state.attendanceBestDayAllTime = action.payload;
    },
    clearAttendanceBesDayOfAllTime: (state) => {
      state.attendanceBestDayAllTime = {};
    },
    // eslint-disable-next-line max-len
    setAttendanceWorstDayOfAllTime: (state, action: PayloadAction<IBestAndWorstDayOfAllTimeItem>) => {
      state.attendanceWorstDayAllTime = action.payload;
    },
    clearAttendanceWorstDayOfAllTime: (state) => {
      state.attendanceWorstDayAllTime = {};
    },
    setAttendanceBestDayWeekAnalytics: (state, action: PayloadAction<any[]>) => {
      state.attendanceBestDayWeekAnalytics = action.payload;
    },
    clearAttendanceBestDayWeekAnalytics: (state) => {
      state.attendanceBestDayWeekAnalytics = [];
    },
    setAttendanceBestDayWeekAnalyticsFooter: (state, action: PayloadAction<any[]>) => {
      state.attendanceBestDayWeekAnalyticsFooter = action.payload;
    },
    clearAttendanceBestDayWeekAnalyticsFooter: (state) => {
      state.attendanceBestDayWeekAnalyticsFooter = [];
    },
    setAttendanceWorstDayWeekAnalytics: (state, action: PayloadAction<any[]>) => {
      state.attendanceWorstDayWeekAnalytics = action.payload;
    },
    clearAttendanceWorstDayWeekAnalytics: (state) => {
      state.attendanceWorstDayWeekAnalytics = [];
    },
    setAttendanceWorstDayWeekAnalyticsFooter: (state, action: PayloadAction<any[]>) => {
      state.attendanceWorstDayWeekAnalyticsFooter = action.payload;
    },
    clearAttendanceWorstDayWeekAnalyticsFooter: (state) => {
      state.attendanceWorstDayWeekAnalyticsFooter = [];
    },
    setAttendanceSelectLocationData: (state, action: PayloadAction<ILocationSelect[]>) => {
      state.attendanceLocationData = action.payload;
    },
    clearAttendanceSelectLocationData: (state) => {
      state.attendanceLocationData = null;
    },
    setAttendanceSelectedLocation: (state, action: PayloadAction<String[]>) => {
      state.attendanceSelectedLocationData = action.payload;
    },
    clearAttendanceSelectedLocation: (state) => {
      state.attendanceSelectedLocationData = [];
    },
    setAttendanceSelectedBestAndWorstLocation: (state, action: PayloadAction<any>) => {
      state.attendanceSelectedBestAndWorstLocationData = action.payload;
    },
    clearAttendanceSelectedBestAndWorstLocation: (state) => {
      state.attendanceSelectedBestAndWorstLocationData = '';
    },
    setAttendanceDatePickerMode: (state, action: PayloadAction<string[]>) => {
      state.attendanceDatePickerMode = action.payload;
    },
    clearAttendanceDatePickerMode: (state) => {
      state.attendanceDatePickerMode = initialState.attendanceDatePickerMode;
    },
    setAttendancePickedDate: (state, action: PayloadAction<string[]>) => {
      state.attendanceSelectedDates = action.payload;
    },
    clearAttendancePickedDate: (state) => {
      state.attendanceSelectedDates = [];
    },
    setAttendanceBestAndWorstDayMode: (state, action: PayloadAction<string[]>) => {
      state.attendanceBestAndWorstDayDatePickerMode = action.payload;
    },
    clearAttendanceBestAndWorstDayMode: (state) => {
      // eslint-disable-next-line max-len
      state.attendanceBestAndWorstDayDatePickerMode = initialState.attendanceBestAndWorstDayDatePickerMode;
    },
    setAttendanceBestAndWorstDaySelectedDates: (state, action: PayloadAction<string[]>) => {
      state.attendanceBestAndWorstDaySelectedDates = action.payload;
    },
    clearAttendanceBestAndWorstDaySelectedDates: (state) => {
      state.attendanceBestAndWorstDaySelectedDates = [];
    },
    // eslint-disable-next-line max-len
    setAttendanceBestInChosenMounts: (state, action: PayloadAction<IBestAndWorstDayOfAllTimeItem>) => {
      state.attendanceBestDayInChosenMounts = action.payload;
    },
    clearAttendanceBestInChosenMounts: (state) => {
      state.attendanceBestDayInChosenMounts = {};
    },
    // eslint-disable-next-line max-len
    setAttendanceWorstInChosenMounts: (state, action: PayloadAction<IBestAndWorstDayOfAllTimeItem>) => {
      state.attendanceWorstDayInChosenMounts = action.payload;
    },
    clearAttendanceWorstInChosenMounts: (state) => {
      state.attendanceWorstDayInChosenMounts = {};
    },
  },
});

export const {
  setAttendanceChartData,
  clearAttendanceChartData,
  setAttendanceLocationTableData,
  clearAttendanceLocationTableData,
  setAttendanceTransactionTableDataFooter,
  clearAttendanceTransactionTableDataFooter,
  setAttendanceBestDayOfAllTime,
  clearAttendanceBesDayOfAllTime,
  setAttendanceWorstDayOfAllTime,
  clearAttendanceWorstDayOfAllTime,
  setAttendanceBestDayWeekAnalytics,
  clearAttendanceBestDayWeekAnalytics,
  setAttendanceBestDayWeekAnalyticsFooter,
  clearAttendanceBestDayWeekAnalyticsFooter,
  setAttendanceWorstDayWeekAnalytics,
  clearAttendanceWorstDayWeekAnalytics,
  setAttendanceWorstDayWeekAnalyticsFooter,
  clearAttendanceWorstDayWeekAnalyticsFooter,
  setAttendanceSelectLocationData,
  clearAttendanceSelectLocationData,
  setAttendanceSelectedLocation,
  clearAttendanceSelectedLocation,
  setAttendanceSelectedBestAndWorstLocation,
  clearAttendanceSelectedBestAndWorstLocation,
  setAttendanceDatePickerMode,
  clearAttendanceDatePickerMode,
  setAttendancePickedDate,
  clearAttendancePickedDate,
  setAttendanceBestAndWorstDaySelectedDates,
  clearAttendanceBestAndWorstDaySelectedDates,
  setAttendanceBestAndWorstDayMode,
  clearAttendanceBestAndWorstDayMode,
  setAttendanceBestInChosenMounts,
  clearAttendanceBestInChosenMounts,
  setAttendanceWorstInChosenMounts,
  clearAttendanceWorstInChosenMounts,
} = attendanceSlice.actions;

export const getAttendanceChartData = (state: RootState) => state?.attendance?.attendanceChartData;
// eslint-disable-next-line max-len
export const getAttendanceLocationTableData = (state: RootState) => state?.attendance?.attendanceLocationTableData;
// eslint-disable-next-line max-len
export const getAttendanceTransactionTableDateFooter = (state: RootState) => state?.attendance?.attendanceTransactionTableDateFooter;
// eslint-disable-next-line max-len
export const getAttendanceBestDayOfAllTime = (state: RootState) => state?.attendance?.attendanceBestDayAllTime;
// eslint-disable-next-line max-len
export const getAttendanceWorstDayOfAllTime = (state: RootState) => state?.attendance?.attendanceWorstDayAllTime;
// eslint-disable-next-line max-len
export const getAttendanceBestDayWeekAnalytics = (state: RootState) => state?.attendance?.attendanceBestDayWeekAnalytics;
// eslint-disable-next-line max-len
export const getAttendanceBestDayWeekAnalyticsFooter = (state: RootState) => state?.attendance?.attendanceBestDayWeekAnalyticsFooter;
// eslint-disable-next-line max-len
export const getAttendanceWorstDayWeekAnalytics = (state: RootState) => state?.attendance?.attendanceWorstDayWeekAnalytics;
// eslint-disable-next-line max-len
export const getAttendanceWorstDayWeekAnalyticsFooter = (state: RootState) => state?.attendance?.attendanceWorstDayWeekAnalyticsFooter;
// eslint-disable-next-line max-len
export const getAttendanceSelectLocationData = (state: RootState) => state?.attendance?.attendanceLocationData;
// eslint-disable-next-line max-len
export const getAttendanceSelectedLocation = (state: RootState) => state?.attendance?.attendanceSelectedLocationData;
// eslint-disable-next-line max-len
export const getAttendanceSelectedBestAndWorstLocation = (state: RootState) => state?.attendance?.attendanceSelectedBestAndWorstLocationData;
// eslint-disable-next-line max-len
export const getAttendanceDatePickerMode = (state: RootState) => state?.attendance?.attendanceDatePickerMode;
// eslint-disable-next-line max-len
export const getAttendanceSelectedDate = (state: RootState) => state?.attendance?.attendanceSelectedDates;
// eslint-disable-next-line max-len
export const getAttendanceBestAndWorstDayDatePickerMode = (state: RootState) => state?.attendance?.attendanceBestAndWorstDayDatePickerMode;
// eslint-disable-next-line max-len
export const getAttendanceBestAndWorstDaySelectedDates = (state: RootState) => state?.attendance?.attendanceBestAndWorstDaySelectedDates;
// eslint-disable-next-line max-len
export const getAttendanceBestDayInChosenMounts = (state: RootState) => state?.attendance?.attendanceBestDayInChosenMounts;
// eslint-disable-next-line max-len
export const getAttendanceWorstDayInChosenMounts = (state: RootState) => state?.attendance?.attendanceWorstDayInChosenMounts;

export default attendanceSlice.reducer;
