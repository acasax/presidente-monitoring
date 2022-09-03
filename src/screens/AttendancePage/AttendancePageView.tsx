import React, { FC, useContext, useEffect, useState } from 'react';
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
import { clearAlertMsg, setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../../components/CustomAlert/alertSlice';
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
  const dispatch = useAppDispatch();

  const {
    setLoading,
    resetLoading,
  } = useLoading();

  const [width, setWidth] = useState(0);

  const updateDimension = () => {
    const widthScreen = window.innerWidth;
    setWidth(widthScreen);
  };

  useEffect(() => {
    updateDimension();
  }, [updateDimension]);

  const fetchLBestDayOfAllTime = async () => {
    setLoading();
    try {
      const res = await getBestAndWorstDayAllTimeForAttendance(token, { orderBy: 'DESC' });
      if (res?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
      } else {
        dispatch(setAttendanceBestDayOfAllTime(res));
        dispatch(setAlertOpenStatus(false));
        dispatch(clearAlertMsg());
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
      const res = await getBestAndWorstDayAllTimeForAttendance(token, { orderBy: 'ASC' });
      if (res?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
      } else {
        dispatch(setAttendanceWorstDayOfAllTime(res));
        dispatch(setAlertOpenStatus(false));
        dispatch(clearAlertMsg());
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
      if (selectedLocations.length === 0) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg('Niste izabralio nijednu lokaciju za pretragu po lokacijama.'));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      if (pickedDate.length === 0) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg('Niste izabralio nijedan datum za pretragu po lokacijama.'));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      const res = await getAttendanceForLocation(token, {
        locations: selectedLocations,
        dates: (pickedDate.length === 1 && dataPickerMode[0] === 'YEAR') ? getMountsArray(pickedDate[0]) : pickedDate,
        dateQueryType: (pickedDate.length === 1 && dataPickerMode[0] === 'YEAR') ? 'MONTH' : dataPickerMode,
        responseDataType: 'TABLE',
      });
      const footer = await getAverageAndSumByAttendanceAndLocation(token, {
        locations: selectedLocations,
        dates: (pickedDate.length === 1 && dataPickerMode[0] === 'YEAR') ? getMountsArray(pickedDate[0]) : pickedDate,
        dateQueryType: (pickedDate.length === 1 && dataPickerMode[0] === 'YEAR') ? 'MONTH' : dataPickerMode[0],
      });
      const chart = await getAttendanceForLocation(token, {
        locations: selectedLocations,
        dates: (pickedDate.length === 1 && dataPickerMode[0] === 'YEAR') ? getMountsArray(pickedDate[0]) : pickedDate,
        dateQueryType: (pickedDate.length === 1 && dataPickerMode[0] === 'YEAR') ? 'MONTH' : dataPickerMode[0],
        responseDataType: 'CHART',
      });
      if (res?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setAttendanceLocationTableData(res));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (footer?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(footer?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setAttendanceTableDataFooter(footer));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (chart?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(chart?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setAttendanceChartData(chart));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());
    } catch (e) {
      dispatch(setAlertStatus('error'));
      dispatch(setAlertMsg(e?.message));
      dispatch(setAlertOpenStatus(true));
    } finally {
      resetLoading();
    }
  };

  const handleWeekAnalyticsRequest = async () => {
    setLoading();
    try {
      if (bestAndWorstWeekAnalyticsSelectedLocation.length === 0) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg('Niste izabralio nijednu lokaciju za pretragu za najbolji i najgori dan.'));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      if (bestAndWorstDayDatePickerMode.length === 0) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg('Niste izabralio nijednu datum za pretragu za najbolji i najgori dan.'));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      const best = await getAttendanceForWeekAnalytics(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === 'YEAR') ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false) : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: 'BEST',
      });

      const bestFooter = await getAttendanceForWeekAnalyticsFooter(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === 'YEAR') ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false) : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: 'BEST',
      });

      const worst = await getAttendanceForWeekAnalytics(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === 'YEAR') ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false) : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: 'WORST',
      });

      const worstFooter = await getAttendanceForWeekAnalyticsFooter(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === 'YEAR') ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false) : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: 'WORST',
      });

      const bestInChosenMounts = await getBestAndWorstInChosenMountsForAttendance(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === 'YEAR') ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false) : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: 'BEST',
      });

      const worstInChosenMounts = await getBestAndWorstInChosenMountsForAttendance(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === 'YEAR') ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false) : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: 'WORST',
      });

      if (best?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(best?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setAttendanceBestDayWeekAnalytics(best));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (bestFooter?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(bestFooter?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setAttendanceBestDayWeekAnalyticsFooter(bestFooter));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (worst?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(worst?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setAttendanceWorstDayWeekAnalytics(worst));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (worstFooter?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(worstFooter?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setAttendanceWorstDayWeekAnalyticsFooter(worstFooter));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (bestInChosenMounts?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(bestInChosenMounts?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setAttendanceBestInChosenMounts(bestInChosenMounts));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (worstInChosenMounts?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(worstInChosenMounts?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setAttendanceWorstInChosenMounts(worstInChosenMounts));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());
    } catch (e) {
      dispatch(setAlertStatus('error'));
      dispatch(setAlertMsg(e?.message));
      dispatch(setAlertOpenStatus(true));
    } finally {
      resetLoading();
    }
  };

  return (
    <Screen>
      <div className="_attendance-page">
        <Header1 text="POSECENOST PO LOKACIJAMA" />
        <Header2 text="Pretraga za posecenost po lokacijama" />
        <div className="_row-attendance">
          <AttendanceLocationSelect />
          <AttendanceDatePickerModeSelect />
          <AttendanceDatePicker />
          <div className="_search-button-container-attendance">
            <CustomButton
              text="PRETRAZI"
              handleFunction={handleLocationsRequest}
            />
          </div>
        </div>
        {attendanceChartData.length !== 0 && <Header2 text="Posecenost po lokacijama" />}
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
                            && <Header2 text="Posecenost o lokacijama" />}
            {/* eslint-disable-next-line max-len */}
            {(locationTableData.length !== 0 && locationTableFooter.length !== 0)
                            && (
                            <LocationTable
                              data={locationTableData}
                              footer={locationTableFooter}
                              table="attendances"
                            />
                            )}
          </div>
        </div>
        <div className="_best-and-worst-day-container-attendance">
          <Header1 text="NAJBOLJI I NAJGORI DAN" />
          <div className="_best-and-worst-day-header-container-attendance">
            <Header2 text="Podaci oduvek" />
          </div>
          <div className="_best-and-worst-day-off-all-time-row-attendance">
            <BestAndWorstDayOfAllTimeContainer header="Najbolji" data={bestDayOfAllTime} />
            <BestAndWorstDayOfAllTimeContainer header="Najgori" data={worstDayOfAllTime} />
          </div>
          <div className="_row-attendance">
            <AttendanceBestAndWorstDayLocationSelect />
            <AttendanceBestAndWorstDayDatePickerModeSelect />
            <AttendanceBestAndWorstDayDatePicker />
            <div className="_search-button-container-attendance">
              <CustomButton
                text="PRETRAZI"
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
                            <Header2 text="Podaci u izabranim mesecima" />
                          </div>
                          <div className="_best-and-worst-day-off-all-time-row-attendance">
                            <BestAndWorstDayOfAllTimeContainer header="Najbolji" data={bestDayInChosenMounts} />
                            <BestAndWorstDayOfAllTimeContainer header="Najgori" data={worstDayInChosenMounts} />
                          </div>
                        </>
                        )
                    }
        </div>
        <div className="_footer-attendance">
          <CustomIconButtonSend />
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
