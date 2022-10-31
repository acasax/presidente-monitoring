import React, { FC, useContext, useEffect } from 'react';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Screen from '../Screen';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearUser, getToken } from '../../feautures/auth/authSlice';
import {
  getAttendanceBestAndWorstDayDatePickerMode,
  getAttendanceBestAndWorstDaySelectedDates,
  getAttendanceBestDayInChosenMounts,
  getAttendanceBestDayOfAllTime,
  getAttendanceBestDayWeekAnalytics,
  getAttendanceBestDayWeekAnalyticsFooter,
  getAttendanceChartData,
  getAttendanceDatePickerMode,
  getAttendanceLocationTableData,
  getAttendanceSelectedBestAndWorstLocation,
  getAttendanceSelectedDate,
  getAttendanceSelectedLocation,
  getAttendanceTableDateFooter,
  getAttendanceWorstDayInChosenMounts,
  getAttendanceWorstDayOfAllTime,
  getAttendanceWorstDayWeekAnalytics,
  getAttendanceWorstDayWeekAnalyticsFooter,
  setAttendanceBestDayOfAllTime,
  setAttendanceBestDayWeekAnalytics,
  setAttendanceBestDayWeekAnalyticsFooter,
  setAttendanceBestInChosenMounts,
  setAttendanceChartData,
  setAttendanceLocationTableData,
  setAttendanceTableDataFooter,
  setAttendanceWorstDayOfAllTime,
  setAttendanceWorstDayWeekAnalytics,
  setAttendanceWorstDayWeekAnalyticsFooter,
  setAttendanceWorstInChosenMounts,
} from '../../feautures/attendance/attendanceSlice';
import { useLoading } from '../../hooks/UseLoading';
import { AttendancePageContext } from '../../feautures/attendance/context';
import {
  getAttendanceForLocation,
  getAttendanceForWeekAnalytics,
  getAttendanceForWeekAnalyticsFooter,
  getAverageAndSumByAttendanceAndLocation,
  getBestAndWorstDayAllTimeForAttendance,
  getBestAndWorstInChosenMountsForAttendance,
} from '../../feautures/attendance/AttendanceService';
import { getMountsArray } from '../../utils/dateTime/functionsDateTime';
import Header1 from '../../components/Text/Header1';
import Header2 from '../../components/Text/Header2';
import CustomButton from '../../components/CustomButton/CustomButton';
import AttendanceLocationSelect from './component/selects/AttendanceLocationSelect';
import AttendanceDatePickerModeSelect from './component/selects/AttendanceDatePickerModeSelect';
import AttendanceDatePicker from './component/datePicker/AttendanceDatePicker';
import CustomChart from '../../components/CustomChart/CustomChart';
import LocationTable from '../../components/CustomTable/LocationTable';
import BestAndWorstDayOfAllTimeContainer
  from '../../components/BestAndWorstDayOfAllTimeContainer/BestAndWorstDayOfAllTimeContainer';
import WeekAnalyticsContainer from '../../components/WeekAnalyticsContainer/WeekAnalyticsContainer';
import CustomIconButtonSend from '../../components/CustomIconButton/CustomIconButtonSend';
import AttendanceBestAndWorstDayLocationSelect from './component/selects/AttendanceBestAndWorstDayLocationSelect';
import AttendanceBestAndWorstDayDatePickerModeSelect
  from './component/selects/AttendanceBestAndWorstDayDatePickerModeSelect';
import AttendanceBestAndWorstDayDatePicker from './component/datePicker/AttendanceBestAndWorstDayDatePicker';
import {
  AlertStatus,
  BestAndWorstDayStatus,
  BestAndWorstDayType,
  DataPickerModeStatus,
  DateTypes,
  RequestDataType,
  SortTypes,
} from '../../utils/Constants';
import { Texts } from '../../utils/Texts';
import { useAlert } from '../../hooks/UseAlert';
import { AppContext } from '../../context';

interface PageTestProps {
  test?: string
}

const AttendancePageView: FC<PageTestProps> = () => {
  const token = useAppSelector(getToken);
  const selectedLocations = useAppSelector(getAttendanceSelectedLocation);
  const dataPickerMode = useAppSelector(getAttendanceDatePickerMode);
  const pickedDate = useAppSelector(getAttendanceSelectedDate);
  const locationTableData = useAppSelector(getAttendanceLocationTableData);
  const locationTableFooter = useAppSelector(getAttendanceTableDateFooter);
  const bestDayOfAllTime = useAppSelector(getAttendanceBestDayOfAllTime);
  const worstDayOfAllTime = useAppSelector(getAttendanceWorstDayOfAllTime);
  // eslint-disable-next-line max-len
  const bestAndWorstWeekAnalyticsSelectedLocation = useAppSelector(getAttendanceSelectedBestAndWorstLocation);
  // eslint-disable-next-line max-len
  const bestAndWorstWeekAnalyticsSelectedDates = useAppSelector(getAttendanceBestAndWorstDaySelectedDates);
  const bestDayWeekAnalytics = useAppSelector(getAttendanceBestDayWeekAnalytics);
  const bestDayWeekAnalyticsFooter = useAppSelector(getAttendanceBestDayWeekAnalyticsFooter);
  const worstDayWeekAnalytics = useAppSelector(getAttendanceWorstDayWeekAnalytics);
  const worstDayWeekAnalyticsFooter = useAppSelector(getAttendanceWorstDayWeekAnalyticsFooter);
  const bestAndWorstDayDatePickerMode = useAppSelector(getAttendanceBestAndWorstDayDatePickerMode);
  const bestDayInChosenMounts = useAppSelector(getAttendanceBestDayInChosenMounts);
  const worstDayInChosenMounts = useAppSelector(getAttendanceWorstDayInChosenMounts);
  const attendanceChartData = useAppSelector(getAttendanceChartData);

  const {
    attendanceValues,
    handleChoseDateAttendance,
    bestAndWorstDayValuesAttendance,
    handleChoseBestAndWorstDayDateAttendance,
  } = useContext(AttendancePageContext);

  const {
    width,
  } = useContext(AppContext);

  const dispatch = useAppDispatch();

  const {
    setLoading,
    resetLoading,
  } = useLoading();

  const {
    openAlert,
    closeAlert,
    noChosenDateOrLocation,
    noChosenDateOrLocationForBestAndWorstPart,
  } = useAlert();

  const fetchLBestDayOfAllTime = async () => {
    setLoading();
    try {
      const res = await getBestAndWorstDayAllTimeForAttendance(token,
        { orderBy: BestAndWorstDayType.BEST });
      if (res?.message) {
        openAlert(res?.message, AlertStatus.Error);
      } else {
        dispatch(setAttendanceBestDayOfAllTime(res));
        closeAlert();
      }
    } catch (e) {
      console.log(e);
    } finally {
      resetLoading();
    }
  };

  const fetchLWorstDayOfAllTime = async () => {
    setLoading();
    try {
      const res = await getBestAndWorstDayAllTimeForAttendance(token,
        { orderBy: BestAndWorstDayType.WORST });
      if (res?.message) {
        openAlert(res?.message, AlertStatus.Error);
      } else {
        dispatch(setAttendanceWorstDayOfAllTime(res));
        closeAlert();
      }
    } catch (e) {
      console.log(e);
    } finally {
      resetLoading();
    }
  };

  useEffect(() => {
    fetchLWorstDayOfAllTime().catch(console.error);
    fetchLBestDayOfAllTime().catch(console.error);
  }, []);

  useEffect(() => {
    handleChoseDateAttendance();
  }, [attendanceValues]);

  useEffect(() => {
    handleChoseBestAndWorstDayDateAttendance();
  }, [bestAndWorstDayValuesAttendance]);

  const handleLocationsRequest = async () => {
    setLoading();
    try {
      if (!noChosenDateOrLocation(selectedLocations.length, pickedDate.length)) {
        return;
      }
      const res = await getAttendanceForLocation(token, {
        locations: selectedLocations,
        dates: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(pickedDate[0]) : pickedDate,
        dateQueryType: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? DataPickerModeStatus.MONTH : dataPickerMode,
        responseDataType: RequestDataType.TABLE,
      });
      const footer = await getAverageAndSumByAttendanceAndLocation(token, {
        locations: selectedLocations,
        dates: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(pickedDate[0]) : pickedDate,
        dateQueryType: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? DataPickerModeStatus.MONTH : dataPickerMode[0],
      });
      const chart = await getAttendanceForLocation(token, {
        locations: selectedLocations,
        dates: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(pickedDate[0]) : pickedDate,
        dateQueryType: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? DataPickerModeStatus.MONTH : dataPickerMode[0],
        responseDataType: RequestDataType.CHART,
      });
      if (res?.message) {
        openAlert(res?.message, AlertStatus.Error);
        return;
      }
      if (footer?.message) {
        openAlert(footer?.message, AlertStatus.Error);
        return;
      }
      if (chart?.message) {
        openAlert(chart?.message, AlertStatus.Error);
        return;
      }
      dispatch(setAttendanceLocationTableData(res));
      dispatch(setAttendanceTableDataFooter(footer));
      dispatch(setAttendanceChartData(chart));
      closeAlert();
    } catch (e) {
      openAlert(e?.message, AlertStatus.Error);
    } finally {
      resetLoading();
    }
  };

  const handleWeekAnalyticsRequest = async () => {
    setLoading();
    try {
      if (!noChosenDateOrLocationForBestAndWorstPart(
        bestAndWorstWeekAnalyticsSelectedLocation.length,
        bestAndWorstDayDatePickerMode.length,
      )) {
        return;
      }
      const best = await getAttendanceForWeekAnalytics(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.BEST,
      });

      const bestFooter = await getAttendanceForWeekAnalyticsFooter(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.BEST,
      });

      const worst = await getAttendanceForWeekAnalytics(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.WORST,
      });

      const worstFooter = await getAttendanceForWeekAnalyticsFooter(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.WORST,
      });

      const bestInChosenMounts = await getBestAndWorstInChosenMountsForAttendance(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.BEST,
      });

      const worstInChosenMounts = await getBestAndWorstInChosenMountsForAttendance(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.WORST,
      });

      if (best?.message) {
        openAlert(best?.message, AlertStatus.Error);
        return;
      }
      if (bestFooter?.message) {
        openAlert(bestFooter?.message, AlertStatus.Error);
        return;
      }
      if (worst?.message) {
        openAlert(worst?.message, AlertStatus.Error);
        return;
      }
      if (worstFooter?.message) {
        openAlert(worstFooter?.message, AlertStatus.Error);
        return;
      }
      if (bestInChosenMounts?.message) {
        openAlert(bestInChosenMounts?.message, AlertStatus.Error);
        return;
      }
      if (worstInChosenMounts?.message) {
        openAlert(worstInChosenMounts?.message, AlertStatus.Error);
        return;
      }
      dispatch(setAttendanceBestDayWeekAnalytics(best));
      dispatch(setAttendanceBestDayWeekAnalyticsFooter(bestFooter));
      dispatch(setAttendanceWorstDayWeekAnalytics(worst));
      dispatch(setAttendanceWorstDayWeekAnalyticsFooter(worstFooter));
      dispatch(setAttendanceBestInChosenMounts(bestInChosenMounts));
      dispatch(setAttendanceWorstInChosenMounts(worstInChosenMounts));
      closeAlert();
    } catch (e) {
      openAlert(e?.message, AlertStatus.Error);
    } finally {
      resetLoading();
    }
  };

  return (
    <Screen>
      <div className="_attendance-page">
        <Header1 text={Texts.attendancePageHeader} />
        <Header2 text={Texts.searchAttendanceByLocation} />
        <div className="_row-attendance">
          <AttendanceLocationSelect />
          <AttendanceDatePickerModeSelect />
          <AttendanceDatePicker />
          <div className="_search-button-container-attendance">
            <CustomButton
              text={Texts.search}
              handleFunction={handleLocationsRequest}
            />
          </div>
        </div>
        {attendanceChartData.length !== 0 && <Header2 text={Texts.attendanceByLocation} />}
        {attendanceChartData.length !== 0
                    && (
                    <div className="_row-attendance">
                      <CustomChart chartData={attendanceChartData} />
                    </div>
                    )}
        <div className="_table-row-attendance">
          <div className="_location-table-attendance">
            {/* eslint-disable-next-line max-len */}
            {(locationTableData.length !== 0 && locationTableFooter.length !== 0)
                            && <Header2 text={Texts.attendanceByLocation} />}
            {/* eslint-disable-next-line max-len */}
            {(locationTableData.length !== 0 && locationTableFooter.length !== 0)
                            && (
                            <LocationTable
                              data={locationTableData}
                              footer={locationTableFooter}
                              table={DateTypes.ATTENDANCE}
                            />
                            )}
          </div>
        </div>
        <div className="_best-and-worst-day-container-attendance">
          <Header1 text={Texts.bestAndWorstDayPartHeader} />
          <div className="_best-and-worst-day-header-container-attendance">
            <Header2 text={Texts.dataForAllTime} />
          </div>
          <div className="_best-and-worst-day-off-all-time-row-attendance">
            <BestAndWorstDayOfAllTimeContainer
              header={BestAndWorstDayStatus.BEST}
              data={bestDayOfAllTime}
            />
            <BestAndWorstDayOfAllTimeContainer
              header={BestAndWorstDayStatus.WORST}
              data={worstDayOfAllTime}
            />
          </div>
          <div className="_row-attendance">
            <AttendanceBestAndWorstDayLocationSelect />
            <AttendanceBestAndWorstDayDatePickerModeSelect />
            <AttendanceBestAndWorstDayDatePicker />
            <div className="_search-button-container-attendance">
              <CustomButton
                text={Texts.search}
                handleFunction={handleWeekAnalyticsRequest}
              />
            </div>
          </div>
          <WeekAnalyticsContainer
            bestData={bestDayWeekAnalytics}
            bestFooter={bestDayWeekAnalyticsFooter}
            worstData={worstDayWeekAnalytics}
            worstFooter={worstDayWeekAnalyticsFooter}
          />
          {
                        (bestDayInChosenMounts.month && worstDayInChosenMounts.month)
                        && (
                        <>
                          <div className="_best-and-worst-day-header-container-attendance">
                            <Header2 text={Texts.dataForChosenMount} />
                          </div>
                          <div className="_best-and-worst-day-off-all-time-row-attendance">
                            <BestAndWorstDayOfAllTimeContainer
                              header={BestAndWorstDayStatus.BEST}
                              data={bestDayInChosenMounts}
                            />
                            <BestAndWorstDayOfAllTimeContainer
                              header={BestAndWorstDayStatus.WORST}
                              data={worstDayInChosenMounts}
                            />
                          </div>
                        </>
                        )
                    }
        </div>
        <div className="_footer-attendance">
          <CustomIconButtonSend
            file={DateTypes.ATTENDANCE}
          />
          {
                        width < 600 && (
                        <div className="_logout-icon-button-attendance">
                          <IconButton onClick={() => dispatch(clearUser())}>
                            <LogoutIcon className="_icon-attendance" />
                          </IconButton>
                        </div>
                        )
                    }
        </div>
      </div>
    </Screen>
  );
};

export default AttendancePageView;
